!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){n(8),e.exports=n(9)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(0),c=n.n(a),i=n(5),l=n(6),u=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=c.a.createContext(),h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),n=!o||"object"!==s(o)&&"function"!=typeof o?y(r):o,d(y(n),"state",{post:n.props.posts,activePage:1,categoryPage:!1}),d(y(n),"setSinglePost",function(){n.setState({activePage:1,categoryPage:!0})}),d(y(n),"setActivePage",function(e,t){("prev"===t&&e>=2&&n.setState({activePage:e-1}),"next"===t)&&(e<=n.state.post.length/10-1&&n.setState({activePage:e+1}));"normal"===t&&n.setState({activePage:e}),"home"===t&&n.setState({activePage:e})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement(g.Provider,{value:p({},this.state,{setSinglePost:this.setSinglePost,setActivePage:this.setActivePage})},this.props.children)}}])&&f(n.prototype,r),o&&f(n,o),t}(),v=g.Consumer,E=n(1),_=n(2);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,j(t).call(this,e))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(v,null,function(t){var n,r,o="";"category"==e.props.pageNmae?(n=e.props.category,r=t.activePage,o="/category/",console.log("in category")):(n=t.post,r=t.activePage,r=e.props.activePage?e.props.activePage:t.activePage,o="/",console.log("in post"));var a=Math.ceil(n.length/10),i="page-item",l="page-item";i=r<a?"page-item":"page-item disabled",l=r>1?"page-item":"page-item disabled";for(var u=[],s=1;s<=a;s++)u.push(s);return c.a.createElement("div",null,c.a.createElement("ul",{className:"pagination",style:{marginLeft:"40%"}},c.a.createElement("li",{className:l},c.a.createElement(E.Link,{to:o+"".concat(parseInt(r)-1),className:"page-link",id:"prev",onClick:function(){t.setActivePage(parseInt(r),"prev")}},"Prev")),u.map(function(e){return parseInt(r)===parseInt(e)?c.a.createElement("li",{className:"page-item active",key:e,id:e},c.a.createElement(E.Link,{to:o+"".concat(e),className:"page-link",onClick:function(){t.setActivePage(e,"normal")}},e)):c.a.createElement("li",{className:"page-item",key:e,id:e},c.a.createElement(E.Link,{to:o+"".concat(e),className:"page-link",onClick:function(){t.setActivePage(e,"normal")}},e))}),c.a.createElement("li",{className:i},c.a.createElement(E.Link,{to:o+"".concat(parseInt(r)+1),className:"page-link disabled",onClick:function(){t.setActivePage(parseInt(r),"next")}},"Next"))))}))}}])&&O(n.prototype,r),o&&O(n,o),t}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,T(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null,function(t){var n=t.post;console.log(n);var r=t.activePage;r=e.props.match.params.pageNumber?e.props.match.params.pageNumber:t.activePage;var o=1,a=1,i=n;return i.map(function(e){e.page_number=a;var t=e.excerpt.rendered.split("<div>");e.excerpt.rendered=t[0],o>=10?(o=1,a+=1):o+=1}),c.a.createElement(_.Container,null,c.a.createElement(_.Row,{className:"justify-content-md-center"},i.map(function(e){return parseInt(r)===parseInt(e.page_number)?c.a.createElement(_.Col,{key:e.id,md:"auto"},c.a.createElement(_.Card,{bg:"secondary",text:"white",style:{width:"18rem"}},c.a.createElement(_.Card.Header,{dangerouslySetInnerHTML:{__html:e.title.rendered}}),c.a.createElement(_.Card.Body,null,c.a.createElement(_.Card.Title,{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),c.a.createElement(_.Card.Text,null,c.a.createElement(E.Link,{to:"/fullPost/".concat(e.id)},"Full Post"))),c.a.createElement(_.Card.Footer,{className:"text-muted"},c.a.createElement("p",null,c.a.createElement("span",{style:{color:"white"}}," ","Category:-")," ",e._embedded["wp:term"].map(function(e){return e.map(function(e){return c.a.createElement(E.Link,{to:"/category/".concat(e.id),onClick:function(){t.setSinglePost()}},e.name)})}))," ")),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null)})),c.a.createElement(x,{activePage:r,pageNmae:"home"}))}))}}])&&C(n.prototype,r),o&&C(n,o),t}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,M(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null,function(t){var n=t.post.find(function(t){return t.id===parseInt(e.props.match.params.id)});return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.Container,null,c.a.createElement(_.Row,{className:"justify-content-md"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:n.title.rendered}}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.content.rendered}}))))}))}}])&&A(n.prototype,r),o&&A(n,o),t}(),D=function(){return c.a.createElement(v,null,function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("img",{src:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",className:"App-logo",height:"40",width:"40",alt:"logo"})),c.a.createElement("li",{className:"nav-item"},c.a.createElement(E.Link,{className:"nav-link",to:"/",onClick:function(){e.setActivePage(1,"home")}},"Home"))))})};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,G(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{class:"navbar navbar-expand-sm bg-dark navbar-dark bg-faded"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("img",{src:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",className:"App-logo",height:"40",width:"40",alt:"logo"})),c.a.createElement("li",{className:"nav-item"},c.a.createElement("h6",{style:{color:"rgba(255, 255, 255, 0.5)",paddingTop:"3%",paddingLeft:"1%"}},"Developed By Bhautik Gosai")))))}}])&&J(n.prototype,r),o&&J(n,o),t}(),K=n(3),U=n.n(K);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee=function(e){function t(e){var n,r,o,a,c,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=X(t).call(this,e),n=!o||"object"!==V(o)&&"function"!=typeof o?Z(r):o,a=Z(n),i=function(e){n.setState({isLoaded:!1}),U.a.get("https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories="+e+"&per_page=60&order=desc&orderby=date").then(function(e){console.log(e.data),n.setState({category:e.data,isLoaded:!0})}).catch(function(e){console.log(e)})},(c="changeCategory")in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,n.state={category:[],isLoaded:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories="+this.props.match.params.categoryId+"&per_page=60&order=desc&orderby=date").then(function(t){e.setState({category:t.data,isLoaded:!0})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null,function(t){var n=1,r=1,o=e.state.category,a=t.activePage;return a=e.props.match.params.pageNumber?e.props.match.params.pageNumber:t.activePage,o.map(function(e){e.page_number=r;var t=e.excerpt.rendered.split("<div>");return e.excerpt.rendered=t[0],n>=10?(n=1,r+=1):n+=1,0}),e.state.isLoaded?c.a.createElement("div",null,c.a.createElement(_.Row,{className:"justify-content-md"},o.map(function(t){return parseInt(a)===parseInt(t.page_number)?c.a.createElement(_.Col,{key:t.id,md:"auto"},c.a.createElement(_.Card,{bg:"secondary",text:"white",style:{width:"18rem"}},c.a.createElement(_.Card.Header,{dangerouslySetInnerHTML:{__html:t.title.rendered}}),c.a.createElement(_.Card.Body,null,c.a.createElement(_.Card.Title,{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}}),c.a.createElement(_.Card.Text,null,c.a.createElement(E.Link,{to:"/fullPost/".concat(t.id)},"Full Post"))),c.a.createElement(_.Card.Footer,{className:"text-muted"},c.a.createElement("p",null,c.a.createElement("span",{style:{color:"white"}}," ","Category:-")," ",t._embedded["wp:term"][0].map(function(t){return c.a.createElement(E.Link,{to:"/category/".concat(t.id),onClick:function(){e.changeCategory(t.id)}},t.name)}))," ")),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null)})),c.a.createElement(x,{category:e.state.category,pageNmae:"category"})):c.a.createElement("h3",null,"Loading.....")}))}}])&&W(n.prototype,r),o&&W(n,o),t}(),te=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("div",{style:{minHeight:"438px"}},c.a.createElement(E.Route,{exact:!0,path:"/:pageNumber",component:I}),c.a.createElement(E.Route,{exact:!0,path:"/fullPost/:id",component:H}),c.a.createElement(E.Route,{exact:!0,path:"/category/:categoryId",component:ee}),c.a.createElement(E.Route,{exact:!0,path:"/",component:I})),c.a.createElement(Y,null))},ne=o()();ne.use(o.a.static("public"));var re=process.env.PORT||3e3;ne.get("*",function(e,t){var n;(function(){try{return U.a.get("https://bhautikng143.000webhostapp.com/wp-json/wp/v2/posts/?_embed&per_page=60&order=desc&orderby=date")}catch(e){console.log(e)}})().then(function(r){n=r.data;var o=Object(i.renderToString)(c.a.createElement(E.StaticRouter,{location:e.url,context:{}},c.a.createElement(h,{posts:n},c.a.createElement(te,null)))),a='<!DOCTYPE html>\n  <html>\n      <head> \n      <base href="/"/>\n      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">\n\n\x3c!-- jQuery library --\x3e\n<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"><\/script>\n\n\x3c!-- Popper JS --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"><\/script>\n\n\x3c!-- Latest compiled JavaScript --\x3e\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"><\/script>\n      </head>\n      <body>\n          <div id="root">'.concat(o,"</div>\n          <script>window.__INITIAL_DATA__ = ").concat(u()(n),'<\/script>\n          <script src="bundle.js"><\/script>\n      </body>\n  </html>');t.send(a)}).catch(function(e){console.log(e)})}),ne.listen(re,function(){console.log("Server listening on port ".concat(re))})}]);