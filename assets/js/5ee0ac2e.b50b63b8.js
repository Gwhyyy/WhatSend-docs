"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="App Name",p={unversionedId:"installation/configuration/app-custom-config/app-name",id:"installation/configuration/app-custom-config/app-name",title:"App Name",description:"You may be asking",source:"@site/docs/installation/configuration/app-custom-config/app-name.md",sourceDirName:"installation/configuration/app-custom-config",slug:"/installation/configuration/app-custom-config/app-name",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/app-name",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/configuration/app-custom-config/app-name.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"App Custom Config",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/"},next:{title:"App name Abbreviation",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/app-name-abbreviation"}},c={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-name"},"App Name"),(0,r.kt)("p",null,"You may be asking"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Didn't I changed the app name ?")),(0,r.kt)("p",null,"And the Answer is ",(0,r.kt)("strong",{parentName:"p"},"yes"),"."),(0,r.kt)("p",null,"But you changed the name of the app that it will be shown across the device."),(0,r.kt)("p",null,"But this will be showed on the all the spots where you will see the app name inside the app such as the about dialog title..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1- Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.dart")," file."),(0,r.kt)("li",{parentName:"ul"},"2- Search for this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{1} title="/config/config.dart"',"{1}":!0,title:'"/config/config.dart"'},'   static const String appName = "WhatSend";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3- Change ",(0,r.kt)("inlineCode",{parentName:"li"},"WhatSend")," with your app name like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="/config/config.dart"',title:'"/config/config.dart"'},'  static const String appName = "Example name";\n')))}u.isMDXComponent=!0}}]);