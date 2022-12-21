"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4044],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),l=n(5924);const i="tabItem_De_A";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(4250),l=n(9496),i=n(5924),r=n(6704),o=n(8876),p=n(4138),u=n(2509);const s="tabList_V3hT",c="tabItem_B35_";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:d,groupId:k,className:b}=e,N=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),[C,w]=(0,l.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==C&&(T(t),w(a),null!=k&&v(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},h.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:I,onClick:O},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,l.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},7947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(4250),l=(n(9496),n(9613)),i=n(3408),r=n(6489);const o={title:"Input Dialog"},p=void 0,u={unversionedId:"ox_lib/Interface/Client/input",id:"ox_lib/Interface/Client/input",title:"Input Dialog",description:"The input dialog window allows you to take data from the user",source:"@site/docs/ox_lib/Interface/Client/input.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/input",permalink:"/docs/ox_lib/Interface/Client/input",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/input.md",tags:[],version:"current",lastUpdatedAt:167165e4,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{title:"Input Dialog"},sidebar:"ox_lib",previous:{title:"Context Menu",permalink:"/docs/ox_lib/Interface/Client/context"},next:{title:"Menu",permalink:"/docs/ox_lib/Interface/Client/menu"}},s={},c=[{value:"lib.inputDialog",id:"libinputdialog",level:3},{value:"lib.closeInputDialog",id:"libcloseinputdialog",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The input dialog window allows you to take data from the user\nby setting input fields."),(0,l.kt)("h3",{id:"libinputdialog"},"lib.inputDialog"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.inputDialog(heading, rows)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.inputDialog(heading, rows)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"heading: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"rows: ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type: ",(0,l.kt)("inlineCode",{parentName:"li"},"'input'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'number'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'checkbox'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'select'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'slider'")),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"description?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If set will show a ? near the label a user can hover over and the description."))),(0,l.kt)("li",{parentName:"ul"},"options?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[ Only used with ",(0,l.kt)("inlineCode",{parentName:"li"},"'select'")," type ]"),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")))),(0,l.kt)("li",{parentName:"ul"},"password?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Hides input characters with ability to toggle them on. Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'input'")," type."))),(0,l.kt)("li",{parentName:"ul"},"icon?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'input'")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"'number'")," types."))),(0,l.kt)("li",{parentName:"ul"},"placeholder?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'input'")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"'number'")," types."))),(0,l.kt)("li",{parentName:"ul"},"disabled?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Should the field be disabled from input."))),(0,l.kt)("li",{parentName:"ul"},"default?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default value for the field."))),(0,l.kt)("li",{parentName:"ul"},"checked?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Whether the checkbox should be checked by default. Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'checkbox'")," type."))),(0,l.kt)("li",{parentName:"ul"},"min?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'slider'")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"'number'")," types."))),(0,l.kt)("li",{parentName:"ul"},"max?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'slider'")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"'number'")," types."))),(0,l.kt)("li",{parentName:"ul"},"step?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Amount of change per slider step. Used only with ",(0,l.kt)("inlineCode",{parentName:"li"},"'slider'")," type.")))))),(0,l.kt)("p",null,"The callback data is promise based meaning that the thread will not continue executing until the user either sends the data or exits the popup."),(0,l.kt)("p",null,"The data returned will be a table (array), indexes represent the rows sent to the dialog, so if we want data from the first field that would be index ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," (",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"), if we want data from the third field, that would be index ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," (",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"), etc..."),(0,l.kt)("p",null,"The standard input rows will always return a string, if you want a row to be of number data type, you can use set the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,l.kt)("p",null,"If a user left an input field empty it will return ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("p",null,"You can also add checkboxes that will return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if checked and ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if unchecked.",(0,l.kt)("br",{parentName:"p"}),"\n","Look at the ",(0,l.kt)("em",{parentName:"p"},"Advanced")," example for it's usage."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"When using the advanced method you can define ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," with type ",(0,l.kt)("inlineCode",{parentName:"p"},"'input'")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"'number'")," and\nyou can define ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," with type ",(0,l.kt)("inlineCode",{parentName:"p"},"'select'"),"."),(0,l.kt)("p",{parentName:"admonition"},"Doing so otherwise ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"will"))," result in errors.")),(0,l.kt)("h3",{id:"libcloseinputdialog"},"lib.closeInputDialog"),(0,l.kt)("p",null,"Force closes the active input dialog and sets its return data as ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.closeInputDialog()\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.closeInputDialog()\n")))),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})\n\nif not input then return end\nlocal lockerNumber = tonumber(input[1])\nlocal lockerPasscode = input[2]\n\nprint(lockerNumber, lockerPasscode)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const input = await lib.inputDialog('Police locker', ['Locker number', 'Locker passcode'])\n\nif (!input) return\nconst lockerNumber = input[0] as number\nconst lockerPasscode = input[1] as number\n\nconsole.log(lockerNumber, lockerPasscode)\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RvFFZqv.png",alt:"Example image"})),(0,l.kt)("h3",{id:"advanced"},"Advanced"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local input = lib.inputDialog(\'Police locker\', {\n    { type = "input", label = "Locker number", placeholder = "123" },\n    { type = "checkbox", label = "Some checkbox" },\n    { type = "input", label = "Locker PIN", password = true, icon = \'lock\' },\n    { type = "checkbox", label = "Some other checkbox", checked = true },\n    { type = \'select\', label = \'Value select\', options = {\n        { value = \'option1\', label = \'Option 1\' },\n        { value = \'option2\', label = \'Option 2\' },\n        { value = \'option3\', label = \'Option 3\'},\n    }},\n    { type = "number", label = "Number counter", default = 12 }\n})\n\nprint(json.encode(input, {indent=true}))\n'))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const input = await lib.inputDialog('Police locker', [\n  { type: 'input', label: 'Locker number', placeholder: '123' },\n  { type: 'checkbox', label: 'Some checkbox' },\n  { type: 'input', label: 'Locker PIN', password: true, icon: 'lock' },\n  { type: 'checkbox', label: 'Some other checkbox', checked: true },\n  { type: 'select',   label: 'Value select', options: [\n    { value: 'option1', label: 'Option 1' },\n    { value: 'option2', label: 'Option 2' },\n    { value: 'option3', label: 'Option 3' },\n  ]},\n  { type: 'number', label: 'Number counter', default: 12 },\n]);\n\nconsole.log(JSON.stringify(input, null, 2));\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/9dBA2d2.png",alt:"Example image"})," ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ILdFeot.png",alt:"Select example"})))}d.isMDXComponent=!0}}]);