webpackJsonp([1],{"./node_modules/css-loader/index.js!./src/containers/Post/index.css":function(e,t,l){t=e.exports=l("./node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,".hljs-comment,.hljs-quote{color:#8e908c}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#c82829}.hljs-built_in,.hljs-builtin-name,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5871f}.hljs-attribute{color:#eab700}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#718c00}.hljs-section,.hljs-title{color:#4271ae}.hljs-keyword,.hljs-selector-tag{color:#8959a8}.hljs{display:block;overflow-x:auto;background:#fff;color:#4d4d4c;padding:.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.post-loading h1{height:60px;width:60%}.post-loading h1,.post-loading h2{background-color:hsla(0,0%,100%,.5);border-radius:4px}.post-loading h2{height:33px;width:45%}.post-loading span{height:22px;width:30%;background-color:hsla(0,0%,100%,.5);border-radius:4px}",""])},"./src/containers/Post/index.css":function(e,t,l){var n=l("./node_modules/css-loader/index.js!./src/containers/Post/index.css");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0};o.transform=void 0;l("./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./src/containers/Post/index.js":function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l("./node_modules/react/react.js"),i=n(c),d=l("./node_modules/prop-types/index.js"),u=n(d),h=l("./src/components/Loading.js"),f=n(h),p=l("./src/fetch/index.js"),m=n(p);l("./src/containers/Post/index.css");var j=function(e){function t(e){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={model:{author:null,content:null,title:null,date:null}},l}return s(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.params.id;m.default.get("api/article/"+t).then(function(t){e.setState({model:t})}).catch(function(e){throw e})}},{key:"render",value:function(){var e=this.state.model;return i.default.createElement("div",null,i.default.createElement("header",{className:"intro-header post-header-bg"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col align-self-center"},i.default.createElement("div",{className:e.content?"post-heading":"post-heading post-loading"},i.default.createElement("h1",null,e.title),i.default.createElement("h2",{className:"subheading"},e.abstract),i.default.createElement("span",{className:"meta"},e.content&&i.default.createElement("div",null,"Posted by ",i.default.createElement("a",null,e.author)," on"," ",e.date?e.date.substring(0,10):""))))))),i.default.createElement("article",null,i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},e.content?i.default.createElement("div",{className:"col align-self-center",dangerouslySetInnerHTML:{__html:e.content}}):i.default.createElement("div",{className:"col align-self-center"},i.default.createElement(f.default,null))))))}}]),t}(c.Component);j.propTypes={params:u.default.object},t.default=j}});