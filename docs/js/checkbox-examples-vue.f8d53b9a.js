(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["checkbox-examples-vue"],{"494d":function(e,t,c){"use strict";c.r(t);var o=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("w-card",{attrs:{"bg-color":"blue-light5"}},[c("p",{staticClass:"mb3"},[e._v("What it looks like:")]),c("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}}),c("div",{staticClass:"title4 mt4"},[e._v("States")]),c("div",{staticClass:"w-flex wrap"},[c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!0,label:"Checked"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!1,label:"Unchecked"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!0,indeterminate:"",label:"Indeterminate"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!0,disabled:"",label:"Checked &amp; disabled"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{"model-value":!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"}})],1)],1),e._m(0),e._m(1),c("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkbox"}},[e._v("<w-checkbox>")]),c("div",{staticClass:"w-divider"}),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Basic use w-checkbox Single option .title4.mt8.mb2 Using v-model on a single checkbox w-flex.align-center w-checkbox(v-model="selection1") Single option span.ml6 | v-model: code.ml1 '+e._s("{{ selection1 }}")+' .title4.mt8.mb2 Using an array of v-model for multiple checkboxes w-flex.align-center w-checkbox.mr2(v-model="selection2[0]") Option 1 w-checkbox.mr2(v-model="selection2[1]") Option 2 w-checkbox(v-model="selection2[2]") Option 3 span.ml6 | v-model: code.ml1 '+e._s("{{ selection2 }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection1: false, selection2: [false, false, false] }) ")]},proxy:!0}])},[c("div",{staticClass:"title4 mb2"},[e._v("Basic use")]),c("w-checkbox",[e._v("Single option")]),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Using v-model on a single checkbox")]),c("w-flex",{staticClass:"align-center"},[c("w-checkbox",{model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}},[e._v("Single option")]),c("span",{staticClass:"ml6"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection1))])])],1),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Using an array of v-model for multiple checkboxes")]),c("w-flex",{staticClass:"align-center"},[c("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[0],callback:function(t){e.$set(e.selection2,0,t)},expression:"selection2[0]"}},[e._v("Option 1")]),c("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[1],callback:function(t){e.$set(e.selection2,1,t)},expression:"selection2[1]"}},[e._v("Option 2")]),c("w-checkbox",{model:{value:e.selection2[2],callback:function(t){e.$set(e.selection2,2,t)},expression:"selection2[2]"}},[e._v("Option 3")]),c("span",{staticClass:"ml6"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection2))])])],1)],1),c("alert",{attrs:{info:""}},[e._v("Unlike the radio buttons, checkboxes don't need the "),c("code",[e._v("name")]),e._v(" prop in addition to the "),c("code",[e._v("v-model")]),e._v(" to work together and control with arrow keys since the default HTML behavior does not include control from the keyboard arrows (you can navigate with "),c("kbd",[e._v("tab")]),e._v(" and toggle with "),c("kbd",[e._v("space")]),e._v(" or "),c("kbd",[e._v("enter")]),e._v(")."),c("br"),e._v(" When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you. ")]),c("alert",{attrs:{tip:""}},[c("strong",{staticClass:"title5"},[e._v("Form validation")]),c("p",[e._v("When a validation is needed on checkboxes, each individual checkbox ("),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(") has a separate validation message."),c("br"),e._v(" If you want only one validation for a group of checkboxes you must use the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component. ")])]),c("title-link",{attrs:{h2:""}},[e._v("Custom label in w-checkbox")]),e._m(2),c("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkbox.mr5(name="checkbox1") span.pr1 Choice 1 has an icon w-icon(md) mdi mdi-star w-checkbox(name="checkbox1") w-tag(bg-color="green-light5" color="green-dark2") | Choice 2 is a tag w-icon.ml1 mdi mdi-heart ')]},proxy:!0}])},[c("w-checkbox",{staticClass:"mr5",attrs:{name:"checkbox4"}},[c("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),c("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),c("w-checkbox",{attrs:{name:"checkbox4"}},[c("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),c("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),c("alert",{staticClass:"mt8",attrs:{tip:""}},[e._v("As seen in this example, the "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" component allows you to have complete freedom regarding your checkboxes content, style and layout."),c("br"),e._v(" But because in most cases you won't need that, the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component will make you go much faster. ")]),c("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkboxes"}},[e._v("<w-checkboxes>")]),c("div",{staticClass:"w-divider"}),e._m(3),c("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),c("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),c("br"),e._v(" If no value is set, the choice's label will be returned instead.")]),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center w-checkboxes(v-model="selection" :items="checkboxes") .title3.ml8 v-model: '+e._s("{{ selection || '[]' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection: [], checkboxes: [ { label: 'Choice 1', value: 1 }, { label: 'Choice 2', value: 2 }, { label: 'Choice 3', value: 3 } ] }) ")]},proxy:!0}])},[c("div",{staticClass:"w-flex align-center"},[c("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection1b,callback:function(t){e.selection1b=t},expression:"selection1b"}}),c("div",{staticClass:"title3 ml8"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection1b||"[]"))])])],1)]),c("p",[e._v("The v-model can also be preset, or updated externally.")]),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center div w-checkboxes(v-model="selection" :items="checkboxes") w-button.mt2(@click="selection = selection.length ? [] : [2]") | Toggle checkbox 2 div.title3.ml8 | v-model: code.ml1 '+e._s("{{ selection || '[]' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection: [], checkboxes: [ { label: 'Choice 1', value: 1 }, { label: 'Choice 2', value: 2 }, { label: 'Choice 3', value: 3 } ] }) ")]},proxy:!0}])},[c("div",{staticClass:"w-flex align-center"},[c("div",[c("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}}),c("w-button",{staticClass:"mt2",on:{click:function(t){e.selection3=e.selection3.length?[]:[2]}}},[e._v("Toggle checkbox 2")])],1),c("div",{staticClass:"title3 ml8"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection3||"[]"))])])])]),c("title-link",{attrs:{h2:""}},[e._v("Layout")]),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Default column layout w-checkboxes(:items="checkboxes") .title4.mt6.mb2 Inline layout w-checkboxes(:items="checkboxes" inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ checkboxes: [ { label: 'Choice 1', value: 1 }, { label: 'Choice 2', value: 2 }, { label: 'Choice 3', value: 3 } ] }) ")]},proxy:!0}])},[c("div",{staticClass:"title4 mb2"},[e._v("Default column layout")]),c("w-checkboxes",{attrs:{items:e.checkboxes1}}),c("div",{staticClass:"title4 mt6 mb2"},[e._v("Inline layout")]),c("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}})],1),c("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(:items="checkboxes" color="green") template(#item="{ item }") span.pr2 '+e._s("{{ item.label }}")+" w-icon.deep-purple "+e._s("{{ item.icon }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ checkboxes: [ { label: 'Square', icon: 'mdi mdi-square' }, { label: 'Circle', icon: 'mdi mdi-circle' }, { label: 'Triangle', icon: 'mdi mdi-triangle' } ] }) ")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[c("span",{staticClass:"pr2"},[e._v(e._s(o.label))]),c("w-icon",{staticClass:"deep-purple"},[e._v(e._s(o.icon))])]}}])})],1),c("div",{staticClass:"w-divider grey-light5 my12"}),c("title-link",{attrs:{h2:""}},[e._v("Round checkboxes")]),c("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(v-model="selection" :items="checkboxes" round inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection: [1], checkboxes: [ { label: 'Choice 1', value: 1 }, { label: 'Choice 2', value: 2 }, { label: 'Choice 3', value: 3 } ] }) ")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes1,round:"",inline:""},model:{value:e.selection8,callback:function(t){e.selection8=t},expression:"selection8"}})],1),c("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),c("title-link",{attrs:{h3:"",slug:"w-checkboxes--colors"}},[c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" colors")]),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(v-model="selection1" :items="checkboxes1" color="purple") .title4.mt8.mb2 Different color per item w-checkboxes(v-model="selection2" :items="checkboxes2")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection1: [1, 2, 3], checkboxes1: [ { label: 'Choice 1', value: 1 }, { label: 'Choice 2', value: 2 }, { label: 'Choice 3', value: 3 } ], selection2: [1, 2, 3], checkboxes2: [ { label: 'Choice 1', value: 1, color: 'amber' }, { label: 'Choice 2', value: 2, color: 'warning' }, { label: 'Choice 3', value: 3, color: 'error' } ] })")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes1,color:"purple"},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}}),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),c("w-checkboxes",{attrs:{items:e.checkboxes4},model:{value:e.selection7,callback:function(t){e.selection7=t},expression:"selection7"}})],1),c("title-link",{attrs:{h3:"",slug:"w-checkbox--colors"}},[c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" colors")]),c("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkbox.mr2(v-model="selection1[0]" color="teal-light1") Option 1 w-checkbox(v-model="selection1[1]" color="teal-light1") Option 2 .title4.mt8.mb2 Different color per item w-checkbox.mr2(v-model="selection2[0]" color="pink-light3") Option 1 w-checkbox(v-model="selection2[1]" color="blue-light1") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ selection1: [true, true], selection2: [true, true], checkboxes: [ { label: 'Choice 1' }, { label: 'Choice 2' }, { label: 'Choice 3' } ] })")]},proxy:!0}])},[c("w-checkbox",{staticClass:"mr2",attrs:{color:"teal-light1"},model:{value:e.selection5[0],callback:function(t){e.$set(e.selection5,0,t)},expression:"selection5[0]"}},[e._v("Option 1")]),c("w-checkbox",{attrs:{color:"teal-light1"},model:{value:e.selection5[1],callback:function(t){e.$set(e.selection5,1,t)},expression:"selection5[1]"}},[e._v("Option 2")]),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),c("w-checkbox",{staticClass:"mr2",attrs:{color:"pink-light3"},model:{value:e.selection6[0],callback:function(t){e.$set(e.selection6,0,t)},expression:"selection6[0]"}},[e._v("Option 1")]),c("w-checkbox",{attrs:{color:"blue-light1"},model:{value:e.selection6[1],callback:function(t){e.$set(e.selection6,1,t)},expression:"selection6[1]"}},[e._v("Option 2")])],1)],1)},l=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticClass:"mt12"},[e._v("There are 2 components: "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(". The later is a group of checkboxes for convenience. ")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[e._v("In most cases what you need is the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component bellow, but let's start with the basic component as it might be useful in single checkboxes and edge cases. ")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[c("code",[e._v("w-checkbox")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticClass:"my5"},[e._v("The "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component allows a fast and easy rendering of multiple checkboxes by passing the items through a prop."),c("br"),e._v(" It accepts an inline parameter to display the checkboxes inline, and allows you to customize the label of each checkbox through slot. ")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" provides a "),c("code",[e._v("label")]),e._v(" slot to customize the label of each checkbox button.")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[e._v("By default the "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" components will use the primary color."),c("br"),e._v(" You can provide a different color with the "),c("code",[e._v("color")]),e._v(" option, or you can even set a different color per item by providing a "),c("code",[e._v("color")]),e._v(" attribute in each of the item objects. ")])}],s={data:function(){return{selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]}}},i=s,a=c("2877"),n=Object(a["a"])(i,o,l,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=checkbox-examples-vue.f8d53b9a.js.map