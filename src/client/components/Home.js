import React, { Component } from "react";
import { PostConsumer } from "../context";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <PostConsumer>
          {value => {
            let pp = value.post;

            let actpg = value.activePage;

            if (this.props.match.params.pageNumber) {
              actpg = this.props.match.params.pageNumber;
            } else {
              actpg = value.activePage;
            }

            let count = 1;
            let page = 1;
            const temp = pp;
            let link;

            temp.map(posts => {
              posts["page_number"] = page;
              link = posts.excerpt.rendered;

              let linkArray = link.split("<div>");
              //console.log(linkArray[0]);
              posts["excerpt"]["rendered"] = linkArray[0];
              if (count >= 10) {
                count = 1;
                page = page + 1;
              } else {
                count = count + 1;
              }
              return 0;
            });

            return (
              <div>
                <Row className="justify-content-md">
                  {temp.map(posts => {
                    return parseInt(actpg) === parseInt(posts.page_number) ? (
                      <Col key={posts.id} md="auto">
                        <Card
                          bg="secondary"
                          text="white"
                          style={{ width: "18rem" }}
                        >
                          <Card.Header
                            dangerouslySetInnerHTML={{
                              __html: posts.title.rendered
                            }}
                          />
                          <Card.Body>
                            {/* {console.log(posts.excerpt.rendered)} */}
                            <Card.Title
                              dangerouslySetInnerHTML={{
                                __html: posts.excerpt.rendered
                              }}
                            />
                            <Card.Text>
                              <Link to={`/fullPost/${posts.id}`}>
                                Full Post
                              </Link>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer className="text-muted">
                            <p>
                              <span style={{ color: "white" }}>
                                {" "}
                                Category:-
                              </span>{" "}
                              {posts.cat_name.map(name => {
                                return (
                                  <Link
                                    to={`/category/${name.id}`}
                                    onClick={() => {
                                      value.setSinglePost();
                                    }}
                                  >
                                    {name.name}
                                  </Link>
                                );
                              })}
                            </p>{" "}
                          </Card.Footer>
                        </Card>
                        <br />
                      </Col>
                    ) : (
                      <></>
                    );
                  })}
                </Row>
                <Pagination activePage={actpg} pageNmae="home" />
              </div>
            );
          }}
        </PostConsumer>
      </React.Fragment>
    );
  }
}
export default Home;