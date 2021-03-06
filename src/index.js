import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";

import { PostProvider } from "./client/context";
import { StaticRouter } from "react-router-dom";
import Routes from "./client/Routes";
import axios from "axios";
import template from "./template";

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/fullPost/:id", (req, res) => {
  const getPosts = () => {
    try {
      return axios.get(
        "https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts/" +
          req.params.id
      );
    } catch (error) {
      console.log(error);
    }
  };

  getPosts()
    .then(postData => {
      let initialState = {
        postArray: postData.data,
        totalPage: postData["headers"]["x-wp-totalpages"],
        activePage: req.params.id,
        categoryId: 1
      };
      const app = renderToString(
        <StaticRouter location={req.url} context={{}}>
          <PostProvider posts={initialState}>
            <Routes />
          </PostProvider>
        </StaticRouter>
      );

      res.send(
        template({
          body: app,

          initialState: initialState
        })
      );
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/category/:categoryId/:pageId", (req, res) => {
  console.log(req.params.categoryId);
  console.log(req.params.pageId);
  const getPosts = () => {
    try {
      return axios.get(
        "https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories=" +
          req.params.categoryId +
          "&per_page=10&page=" +
          req.params.pageId +
          "&order=desc&orderby=date"
      );
    } catch (error) {
      console.log(error);
    }
  };

  getPosts()
    .then(postData => {
      let initialState = {
        postArray: postData.data,
        totalPage: postData["headers"]["x-wp-totalpages"],
        activePage: req.params.pageId,
        categoryId: req.params.categoryId
      };
      const app = renderToString(
        <StaticRouter location={req.url} context={{}}>
          <PostProvider posts={initialState}>
            <Routes />
          </PostProvider>
        </StaticRouter>
      );

      res.send(
        template({
          body: app,

          initialState: initialState
        })
      );
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/:pageNumber", (req, res) => {
  const getPosts = () => {
    try {
      return axios.get(
        "https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts/?_embed&per_page=10&page=" +
          req.params.pageNumber +
          "&order=desc&orderby=date"
      );
    } catch (error) {
      console.log(error);
    }
  };

  getPosts()
    .then(postData => {
      let initialState = {
        postArray: postData.data,
        totalPage: postData["headers"]["x-wp-totalpages"],
        activePage: req.params.pageNumber,
        categoryId: 1
      };
      const app = renderToString(
        <StaticRouter location={req.url} context={{}}>
          <PostProvider posts={initialState}>
            <Routes />
          </PostProvider>
        </StaticRouter>
      );

      res.send(
        template({
          body: app,

          initialState: initialState
        })
      );
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  let post;
  const getPosts = () => {
    try {
      return axios.get(
        "https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts/?_embed&per_page=10&page=1&order=desc&orderby=date"
      );
    } catch (error) {
      console.log(error);
    }
  };

  getPosts()
    .then(postData => {
      let initialState = {
        postArray: postData.data,
        totalPage: postData["headers"]["x-wp-totalpages"],
        activePage: 1,
        categoryId: 1
      };
      const app = renderToString(
        <StaticRouter location={req.url} context={{}}>
          <PostProvider posts={initialState}>
            <Routes />
          </PostProvider>
        </StaticRouter>
      );

      res.send(
        template({
          body: app,
          initialState: initialState
        })
      );
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
