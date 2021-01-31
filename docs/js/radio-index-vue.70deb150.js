(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["radio-index-vue","radio-api-vue","radio-examples-vue"],{"410a":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("w-card",{attrs:{"bg-color":"blue-light5"}},[o("p",{staticClass:"mb3"},[e._v("What it looks like:")]),o("w-radios",{attrs:{items:e.radios1,inline:""},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),o("div",{staticClass:"title4 mt4"},[e._v("States")]),o("div",{staticClass:"w-flex wrap"},[o("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),o("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),o("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),o("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}})],1)],1),e._m(0),o("p",[e._v("Let's start with the basic component.")]),o("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radio"}},[e._v("<w-radio>")]),o("div",{staticClass:"w-divider"}),o("alert",{attrs:{tip:""}},[o("div",{staticClass:"title3"},[e._v("Important notes")]),o("strong",{staticClass:"title5"},[e._v("Name attribute")]),o("p",{staticClass:"mb4"},[e._v("With individual radio buttons (using "),o("span",{staticClass:"code"},[e._v("<w-radio>")]),e._v("), the "),o("code",[e._v("name")]),e._v(" prop is\nneeded for the radios to work together. This is how HTML knows they are part of the same group\nof choices."),o("br"),e._v("\nBut when you use a group of radio buttons via "),o("span",{staticClass:"code"},[e._v("<w-radios>")]),e._v(", Wave UI will add the\nname attributes for you.")]),o("strong",{staticClass:"title5"},[e._v("Form validation")]),o("p",[e._v("When a validation is needed on radio buttons, each individual radio button ("),o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(")\nhas a separate validation message."),o("br"),e._v("\nIf you want only one validation for a group of radio buttons, you must use the "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v("\ncomponent.\n")])]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 1. Here is a single radio button\nw-radio I am single - not very useful\n\n.title4.mt8.mb2 2. Here is a duo\nw-radio.mr2(name="radio1") Option 1\nw-radio(name="radio1") Option 2\n\n.title4.mt8.mb2 3. A trio using v-model\nw-radio.mr2(v-model="radio2" return-value="option 1") Option 1\nw-radio.mr2(v-model="radio2" return-value="option 2") Option 2\nw-radio(v-model="radio2" return-value="option 3") Option 3\n\n.title4.mt8.mb2 4. A trio using v-model and a set name\nw-radio.mr2(v-model="radio3" name="radio3" return-value="option 1") Option 1\nw-radio.mr2(v-model="radio3" name="radio3" return-value="option 2") Option 2\nw-radio(v-model="radio3" name="radio3" return-value="option 3") Option 3')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radio2: false,\n  radio3: false\n})\n")]},proxy:!0}])},[o("div",{staticClass:"title4 mb2"},[e._v("1. Here is a single radio button")]),o("w-radio",[e._v("I am single - not very useful")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("2. Here is a duo")]),o("w-radio",{staticClass:"mr2",attrs:{name:"radio1"}},[e._v("Option 1")]),o("w-radio",{attrs:{name:"radio1"}},[e._v("Option 2")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("3. A trio using v-model")]),o("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 1"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 1")]),o("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 2"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 2")]),o("w-radio",{attrs:{"return-value":"option 3"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 3")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("4. A trio using v-model and a set name")]),o("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 1"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 1")]),o("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 2"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 2")]),o("w-radio",{attrs:{name:"radio3","return-value":"option 3"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 3")])],1),e._m(1),o("title-link",{attrs:{h2:""}},[e._v("Custom label in w-radio")]),e._m(2),o("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radio.mr5(name="radio1")\n  span.pr1 Choice 1 has an icon\n  w-icon(md) mdi mdi-star\nw-radio(name="radio1")\n  w-tag(bg-color="green-light5" color="green-dark2")\n    | Choice 2 is a tag\n    w-icon.ml1 mdi mdi-heart')]},proxy:!0}])},[o("w-radio",{staticClass:"mr5",attrs:{name:"radio4"}},[o("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),o("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),o("w-radio",{attrs:{name:"radio4"}},[o("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),o("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),o("alert",{attrs:{tip:""}},[e._v("As seen in this example, the "),o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" component allows you to have complete freedom\nin your radio buttons."),o("br"),e._v("\nBut because in most cases you won't need that, the "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component will make you go\nmuch faster.\n")]),o("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radios"}},[e._v("<w-radios>")]),o("div",{staticClass:"w-divider"}),e._m(3),o("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),o("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),o("br"),e._v("\nIf no value is set, the choice's label will be returned instead.")]),o("p",[e._v("The v-model can also be preset, or updated externally.")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center\n  w-radios(v-model="selection" :items="radioItems")\n  div.title3.ml10 v-model: '+e._s("{{ selection || 'null' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: 1,\n  radioItems: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[o("div",{staticClass:"w-flex align-center"},[o("w-radios",{attrs:{items:e.radios1},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),o("div",{staticClass:"title3 ml10"},[e._v("v-model: "),o("code",[e._v(e._s(e.selection1||"null"))])])],1)]),o("title-link",{attrs:{h2:""}},[e._v("Inline layout")]),o("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios(:items="radioItems" inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radioItems: [\n    { label: 'Choice 1' },\n    { label: 'Choice 2' },\n    { label: 'Choice 3' }\n  ]\n})\n")]},proxy:!0}])},[o("w-radios",{attrs:{items:e.radios2,inline:""}})],1),o("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),o("p",[e._v("The great thing is that you can access any custom data from this slot!")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios(v-model="selection" :items="radioItems" color="green")\n  template(#item="{ item }")\n    span.pr2 '+e._s("{{ item.label }}")+"\n    w-icon.success "+e._s("{{ item.icon }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: 'Square',\n  radioItems: [\n    { label: 'Square', icon: 'mdi mdi-square' },\n    { label: 'Circle', icon: 'mdi mdi-circle' },\n    { label: 'Triangle', icon: 'mdi mdi-triangle' }\n  ],\n})\n")]},proxy:!0}])},[o("w-radios",{attrs:{items:e.radios3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[o("span",{staticClass:"pr2"},[e._v(e._s(a.label))]),o("w-icon",{staticClass:"success"},[e._v(e._s(a.icon))])]}}]),model:{value:e.selection5,callback:function(t){e.selection5=t},expression:"selection5"}})],1),o("div",{staticClass:"w-divider grey-light5 my12"}),o("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),o("title-link",{attrs:{h3:"",slug:"w-radios--colors"}},[o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" colors")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios.mr2(v-model="selection1" :items="radios1" color="purple") Option 1\n\n.title4.mt8.mb2 Different color per item\nw-radios(v-model="selection2" :items="radios2") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: 1,\n  radios1: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ],\n  selection2: 1,\n  radios2: [\n    { label: 'Choice 1', value: 1, color: 'amber' },\n    { label: 'Choice 2', value: 2, color: 'warning' },\n    { label: 'Choice 3', value: 3, color: 'error' }\n  ]\n})\n")]},proxy:!0}])},[o("w-radios",{staticClass:"mr2",attrs:{items:e.radios1,color:"purple"},model:{value:e.selection6,callback:function(t){e.selection6=t},expression:"selection6"}},[e._v("Option 1")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),o("w-radios",{attrs:{items:e.radios4},model:{value:e.selection7,callback:function(t){e.selection7=t},expression:"selection7"}},[e._v("Option 2")])],1),o("title-link",{attrs:{h3:"",slug:"w-radio--colors"}},[o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" colors")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radio.mr2(v-model="selection1" name="radio1" color="teal-light1" :return-value="1") Option 1\nw-radio(v-model="selection1" name="radio1" color="teal-light1" :return-value="2") Option 2\n\n.title4.mt8.mb2 Different color per item\nw-radio.mr2(v-model="selection2" name="radio2" color="pink-light3" :return-value="1") Option 1\nw-radio(v-model="selection2" name="radio2" color="blue-light1" :return-value="2") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: 1,\n  selection2: 1\n})")]},proxy:!0}])},[o("w-radio",{staticClass:"mr2",attrs:{name:"radio5",color:"teal-light1","return-value":1},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}},[e._v("Option 1")]),o("w-radio",{attrs:{name:"radio5",color:"teal-light1","return-value":2},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}},[e._v("Option 2")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),o("w-radio",{staticClass:"mr2",attrs:{name:"radio6",color:"pink-light3","return-value":1},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}},[e._v("Option 1")]),o("w-radio",{attrs:{name:"radio6",color:"blue-light1","return-value":2},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}},[e._v("Option 2")])],1)],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mt12"},[e._v("There are 2 components: "),o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(".\nThe later is a group of radio buttons for convenience.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The above example (case 3 & 4) shows that the radio buttons work without the name attribute,\nusing a v-model, but the navigation using the keyboard arrows will not work as the names are not\nprovided."),o("br"),e._v("\nCase 4 is fully operational. "),o("span",{staticClass:"code"},[e._v(":tada:")]),e._v("\n(Keyboard arrows navigation is a browser choice, Safari doesn't have it)"),o("br"),o("strong",[e._v("Note that when you use the "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component, a unique name is set by default so you don't\nhave to worry about it if you don't need it.\n")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"my5"},[e._v("The "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component allows a fast and easy rendering of\nmultiple radio buttons by passing the items through a prop."),o("br"),e._v("\nIt accepts an inline parameter to display the radio buttons inline,\nand allows you to customize the label of each radio button through slot.\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" also provides a slot to customize the label of each radio button: "),o("code",[e._v("item")]),e._v(".")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("By default the "),o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" components will use the\nprimary color."),o("br"),e._v("\nYou can provide a different color with the "),o("code",[e._v("color")]),e._v(" option, or you can even set a different\ncolor per item by providing a "),o("code",[e._v("color")]),e._v(" attribute in each of the item objects.\n")])}],n={data:function(){return{selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]}}},r=n,s=o("2877"),l=Object(s["a"])(r,a,i,!1,null,null,null);t["default"]=l.exports},5075:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radios-api"}},[e._v("<w-radios> API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.radiosProps,descriptions:e.radios.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.radios.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.radiosEvents,title:"Events"}}),o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radio-api"}},[e._v("<w-radio> API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.radioProps,descriptions:e.radio.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.radio.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.radioEvents,title:"Events"}})],1)},i=[],n=(o("13d5"),o("5530")),r=o("c0bc"),s=o("e101"),l=o("13aa"),d={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item (if any).",itemValueKey:"The property name (aka key) in each item object where to find the value of the item (if any).",itemColorKey:"The property name (aka key) in each item object where to find the color of the item (if any).",inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label."}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},c={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},u={data:function(){return{radios:d,radio:c}},computed:{radiosProps:function(){return Object(n["a"])(Object(n["a"])({},s["a"].props),r["a"].props)},radioProps:function(){return Object(n["a"])(Object(n["a"])({},l["a"].props),r["a"].props)},radiosEvents:function(){return s["a"].emits.reduce((function(e,t){return(e[t]=d.events[t]||{})&&e}),{})},radioEvents:function(){return l["a"].emits.reduce((function(e,t){return(e[t]=c.events[t]||{})&&e}),{})}}},m=u,v=o("2877"),p=Object(v["a"])(m,a,i,!1,null,null,null);t["default"]=p.exports},db7c:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("ui-component-title",{attrs:{slug:"w-radio-and-w-radios",code:!1}},[o("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-radios")])]),o("examples"),o("api")],1)},i=[],n=o("410a"),r=o("5075"),s={components:{Examples:n["default"],Api:r["default"]}},l=s,d=o("2877"),c=Object(d["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=radio-index-vue.70deb150.js.map