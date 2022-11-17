"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="App Colors Config",l={unversionedId:"installation/configuration/change-app-colors",id:"installation/configuration/change-app-colors",title:"App Colors Config",description:"If you have uploaded the app on App Store, you can get it's link and assign it here, so the rate app, will redirect to the app in App Store",source:"@site/docs/installation/configuration/change-app-colors.md",sourceDirName:"installation/configuration",slug:"/installation/configuration/change-app-colors",permalink:"/WhatSend-docs/installation/configuration/change-app-colors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/configuration/change-app-colors.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Privacy Content",permalink:"/WhatSend-docs/installation/configuration/app-custom-config/privacy-content"},next:{title:"Change Android Banner",permalink:"/WhatSend-docs/installation/Monetisation - admob/change-android-banner"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-colors-config"},"App Colors Config"),(0,o.kt)("p",null,"If you have uploaded the app on App Store, you can get it's link and assign it here, so the rate app, will redirect to the app in App Store"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1- Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"config/colors/colors.dart")," file in the project folder"),(0,o.kt)("li",{parentName:"ul"},"2- you will find this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{2-5} title="/config/config.dart"',"{2-5}":!0,title:'"/config/config.dart"'},'class AppColors {\n  static Color lightGreen = hex("#48df95");\n  static Color green = hex("#29b595");\n  static Color grey = hex("#4f4f4f");\n  static Color white = hex("#fff");\n}\n')),(0,o.kt)("p",null,"w\nAs you see, the colors are just a usual Hex colors, you can change colors by searching for a specific hex color code then replace it in the code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example :"),"\nlet's say I want to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"#48df95")," color, to blue with it's hex color ",(0,o.kt)("inlineCode",{parentName:"p"},"#2980b9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'{2} title="/config/config.dart"',"{2}":!0,title:'"/config/config.dart"'},'class AppColors {\n  static Color lightGreen = hex("#2980b9");\n  static Color green = hex("#29b595");\n  static Color grey = hex("#4f4f4f");\n  static Color white = hex("#fff");\n}\n')))}u.isMDXComponent=!0}}]);