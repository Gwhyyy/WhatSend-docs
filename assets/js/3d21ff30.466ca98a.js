"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},o="Share Text",c={unversionedId:"installation/configuration/app-custom-config/share-text",id:"installation/configuration/app-custom-config/share-text",title:"Share Text",description:"This is the text that will be shared when user click on the Share app Item in the navigation drawer.",source:"@site/docs/installation/configuration/app-custom-config/share-text.md",sourceDirName:"installation/configuration/app-custom-config",slug:"/installation/configuration/app-custom-config/share-text",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/share-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/configuration/app-custom-config/share-text.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Initial Country Code To Show",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/initial-country-code-to-show"},next:{title:"Get Started Description",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/get-started-description"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"share-text"},"Share Text"),(0,a.kt)("p",null,"This is the text that will be shared when user click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Share app")," Item in the navigation drawer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1- Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.dart")," file."),(0,a.kt)("li",{parentName:"ul"},"2- Search for this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{1-3} title="/config/config.dart"',"{1-3}":!0,title:'"/config/config.dart"'},'\n  static const String textToShare =\n      "Here the text you want to share when the share item in navigation drawer is clicked";\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3- Change ",(0,a.kt)("inlineCode",{parentName:"li"},"Here the text you want to share when the share item in navigation drawer is clicked")," with text you waa share.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="/config/config.dart"',title:'"/config/config.dart"'},'  static const String textToShare =\n      "appName, is an application that let you send messages easily without saving numbers in the phone";\n')))}u.isMDXComponent=!0}}]);