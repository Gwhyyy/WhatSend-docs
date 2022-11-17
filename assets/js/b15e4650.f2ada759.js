"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1732],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2754:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="App Store App Link",p={unversionedId:"installation/configuration/app-custom-config/app-store-app-link",id:"installation/configuration/app-custom-config/app-store-app-link",title:"App Store App Link",description:"Google Play Store link will work only in the Android release of the project.",source:"@site/docs/installation/configuration/app-custom-config/app-store-app-link.md",sourceDirName:"installation/configuration/app-custom-config",slug:"/installation/configuration/app-custom-config/app-store-app-link",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/app-store-app-link",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/configuration/app-custom-config/app-store-app-link.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Google Play App Link",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/google-play-app-link"},next:{title:"Contact Email",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/contact-email"}},l={},c=[],s={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-store-app-link"},"App Store App Link"),(0,o.kt)("admonition",{title:"Note",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Google Play Store link will work only in the Android release of the project.\nApp Store link will work only in the IOS release of the project.\n",(0,o.kt)("strong",{parentName:"p"},"It will be detected automatically based on the platform."))),(0,o.kt)("p",null,"If you have uploaded the app on App Store, you can get it's link and assign it here, so the rate app, will redirect to the app in App Store"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1- Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.dart")," file."),(0,o.kt)("li",{parentName:"ul"},"2- Search for this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{1} title="/config/config.dart"',"{1}":!0,title:'"/config/config.dart"'},'  static const String appStoreAppLink = "https://yourappstorelink.com";\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3- Change ",(0,o.kt)("inlineCode",{parentName:"li"},"https://yourplaystorelink.com")," with your app name like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="/config/config.dart"',title:'"/config/config.dart"'},'  static const String appStoreAppLink = "YOUR APP STORE APP LINK";\n\n')))}u.isMDXComponent=!0}}]);