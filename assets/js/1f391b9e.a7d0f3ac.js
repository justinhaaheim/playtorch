"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{6159:function(e,n,t){t.d(n,{N:function(){return m},Z:function(){return f}});var r=t(3366),a=t(7462),l=t(7294),i=t(6010),c=t(4973),o=t(9732),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],m=function(e){var n=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},n,{id:void 0,className:u}),n.children))},f=function(e){return"h1"===e?m:(n=e,function(e){var t,a=e.id,u=(0,r.Z)(e,d),m=(0,o.LU)().navbar.hideOnScroll;return a?l.createElement(n,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(t={},t[s]=!m,t)),id:a}),u.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(n,u)});var n}},3491:function(e,n,t){t.r(n);var r=t(7294),a=t(6742),l=t(625),i=t.n(l),c=t(6159),o={code:function(e){var n=e.children;return(0,r.isValidElement)(n)?n:n.includes("\n")?r.createElement(i(),e):r.createElement("code",e)},a:function(e){return r.createElement(a.Z,e)},pre:function(e){var n,t=e.children;return(0,r.isValidElement)(null==t||null==(n=t.props)?void 0:n.children)?null==t?void 0:t.props.children:r.createElement(i(),(0,r.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")};n.default=o},7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7294),a=t(6010),l=t(1237),i=t(3905),c=t(5854),o=t.n(c),s=t(571),u=t(9732),d="mdxPageWrapper_3qD3";var m=function(e){var n=e.content,t=n.frontMatter,c=n.metadata,m=t.title,f=t.description,h=t.wrapperClassName,v=t.hide_table_of_contents,E=c.permalink;return r.createElement(l.Z,{title:m,description:f,permalink:E,wrapperClassName:null!=h?h:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",d)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(i.Zo,{components:o()},r.createElement(n,null))),!v&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7294),a=t(6010);var l=function(e,n,t){var a=(0,r.useState)(void 0),l=a[0],i=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var r=e[e.indexOf(n)-1];return null!=r?r:n}return n}return e[e.length-1]}();if(r)for(var a=0,c=!1,o=document.getElementsByClassName(e);a<o.length&&!c;){var s=o[a],u=s.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===d&&(l&&l.classList.remove(n),s.classList.add(n),i(s),c=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},i="tableOfContents_35-E",c="table-of-contents__link";function o(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var n=e.toc;return l(c,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement(o,{toc:n}))}},5854:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=r(t(3491)),l=t(4256),i=Object.assign(Object.assign({},a.default),{FbInternalOnly:l.FbInternalOnly,FBInternalOnly:l.FbInternalOnly,OssOnly:l.OssOnly,OSSOnly:l.OssOnly});n.default=i}}]);