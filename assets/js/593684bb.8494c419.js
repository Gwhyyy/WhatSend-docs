"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,b=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="App name Abbreviation",p={unversionedId:"installation/configuration/app-custom-config/app-name-abbreviation",id:"installation/configuration/app-custom-config/app-name-abbreviation",title:"App name Abbreviation",description:"This is the app abbreviation in the navigation drawer, (WS)",source:"@site/docs/installation/configuration/app-custom-config/app-name-abbreviation.md",sourceDirName:"installation/configuration/app-custom-config",slug:"/installation/configuration/app-custom-config/app-name-abbreviation",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/app-name-abbreviation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/configuration/app-custom-config/app-name-abbreviation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"App Name",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/app-name"},next:{title:"Google Play App Link",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/google-play-app-link"}},c={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-name-abbreviation"},"App name Abbreviation"),(0,r.kt)("p",null,"This is the app abbreviation in the navigation drawer, (WS)\nit's set that the first letter and the rest of it will have different colors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1- Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.dart")," file."),(0,r.kt)("li",{parentName:"ul"},"2- Search for this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{1} title="/config/config.dart"',"{1}":!0,title:'"/config/config.dart"'},'  static const String appNameAbbreviation = "WS";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3- Change ",(0,r.kt)("inlineCode",{parentName:"li"},"WhatSend")," with your app name like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="/config/config.dart"',title:'"/config/config.dart"'},'  static const String appNameAbbreviation = "EN";\n')))}u.isMDXComponent=!0}}]);