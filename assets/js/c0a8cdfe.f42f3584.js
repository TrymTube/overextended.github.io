"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3133],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(4250),a=(n(9496),n(9613));const i={title:"Creating shops"},l=void 0,o={unversionedId:"ox_inventory/Guides/shops",id:"ox_inventory/Guides/shops",title:"Creating shops",description:"Builtin shops are defined in data/shops.lua, and more can be added here to benefit from the built-in markers or zones support.",source:"@site/docs/ox_inventory/Guides/shops.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/shops",permalink:"/docs/ox_inventory/Guides/shops",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/shops.md",tags:[],version:"current",lastUpdatedAt:1669891283,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{title:"Creating shops"},sidebar:"ox_inventory",previous:{title:"Building inventory UI",permalink:"/docs/ox_inventory/Guides/inventory_ui"},next:{title:"Creating custom stashes",permalink:"/docs/ox_inventory/Guides/stashes"}},p={},s=[{value:"Shop definition",id:"shop-definition",level:2},{value:"Register during runtime",id:"register-during-runtime",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Builtin shops are defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/shops.lua"},"data/shops.lua"),", and more can be added here to benefit from the built-in markers or zones support."),(0,a.kt)("h2",{id:"shop-definition"},"Shop definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    General = {\n        name = 'Shop',\n        blip = {\n          id = 59,\n          colour = 69,\n          scale = 0.8\n        },\n        inventory = {\n            { name = 'burger', price = 10 },\n            { name = 'water', price = 10 },\n            { name = 'cola', price = 10 },\n        },\n        locations = {\n            vec3(25.7, -1347.3, 29.49),\n        },\n        targets = {\n            {\n                loc = vec3(25.06, -1347.32, 29.5),\n                length = 0.7,\n                width = 0.5,\n                heading = 0.0,\n                minZ = 29.5,\n                maxZ = 29.9,\n                distance = 1.5\n            },\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The label to display when the shop is open."))),(0,a.kt)("li",{parentName:"ul"},"blip?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Creates a blip with the given settings. Leave it undefined for no blip to be created."),(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"colour: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"scale: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},"groups?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Key-value pairs of job name and minimum grade to access the shop.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'{["police"] = 0, ["ambulance"] = 2}')))))),(0,a.kt)("li",{parentName:"ul"},"inventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"price: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"currency?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Item to be used as currency."))),(0,a.kt)("li",{parentName:"ul"},"count?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Amount of the item in the stock."))),(0,a.kt)("li",{parentName:"ul"},"license?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"License required to purchase the item."))),(0,a.kt)("li",{parentName:"ul"},"metadata?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"grade?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Grade required to purchase the item."))))),(0,a.kt)("li",{parentName:"ul"},"locations?: ",(0,a.kt)("inlineCode",{parentName:"li"},"vector3[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An array of coordinates to create unique instances of the shop archetype at, using markers."))),(0,a.kt)("li",{parentName:"ul"},"targets?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An array of BoxZone settings to create unique instances of the shop archetype at."))),(0,a.kt)("li",{parentName:"ul"},"model?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An array of models that can be targetted to open a shop. Used for vending machines.")))),(0,a.kt)("p",null,"Targets and model are only available when using a targeting resource like ox_target."),(0,a.kt)("h2",{id:"register-during-runtime"},"Register during runtime"),(0,a.kt)("p",null,"Shops can be added using ",(0,a.kt)("inlineCode",{parentName:"p"},"exports.ox_inventory:RegisterShop")," on the server, however they cannot utilise any client-only features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blips, markers, and zones will not be created."),(0,a.kt)("li",{parentName:"ul"},'Must use "locations" and not "targets" to define each shop using the archetype.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:RegisterShop('TestShop', {\n    name = 'Test shop',\n    inventory = {\n        { name = 'burger', price = 10 },\n        { name = 'water', price = 10 },\n        { name = 'cola', price = 10 },\n    },\n    locations = {\n        vec3(223.832962, -792.619751, 30.695190),\n    },\n    groups = {\n        police = 0\n    },\n})\n")))}m.isMDXComponent=!0}}]);