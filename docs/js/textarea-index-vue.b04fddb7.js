(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["textarea-index-vue","textarea-api-vue","textarea-examples-vue"],{"1b47":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("w-textarea Label\n")]},proxy:!0}])},[a("w-textarea",[e._v("Label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea Label\nw-textarea.mt4(placeholder="Placeholder")\nw-textarea.mt4(label="Label" placeholder="Placeholder")\n')]},proxy:!0}])},[a("w-textarea",[e._v("Label")]),a("w-textarea",{staticClass:"mt4",attrs:{placeholder:"Placeholder"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Label",placeholder:"Placeholder"}})],1),a("title-link",{attrs:{h2:""}},[e._v("No autogrow & resizable")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea(no-autogrow rows="6") Textarea label\nw-textarea.mt4(no-autogrow resizable rows="6") Textarea label\n')]},proxy:!0}])},[a("w-textarea",{attrs:{"no-autogrow":"",rows:"6"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{"no-autogrow":"",resizable:"",rows:"6"}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Outline")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("w-textarea(outline) Textarea label\n")]},proxy:!0}])},[a("w-textarea",{attrs:{outline:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Shadow")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("w-textarea(shadow) Textarea label\nw-textarea.mt4(outline shadow) Textarea label\n")]},proxy:!0}])},[a("w-textarea",{attrs:{shadow:""}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",shadow:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Tile")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("w-textarea(tile) Textarea label\nw-textarea.mt4(outline tile) Textarea label\n")]},proxy:!0}])},[a("w-textarea",{attrs:{tile:""}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",tile:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(1),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea(color="blue") Textarea label\nw-textarea.mt4(outline color="blue") Textarea label\nw-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label\nw-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label\n')]},proxy:!0}])},[a("w-textarea",{attrs:{color:"blue"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",color:"blue"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Label position")]),a("p",[e._v("By default the label is positioned inside, you can also place it on the left or right outside of\nthe textarea.")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea(outline) Label inside\nw-textarea.mt4(outline label-position="left") Label left\nw-textarea.mt4(outline label-position="right") Label right\n')]},proxy:!0}])},[a("w-textarea",{attrs:{outline:""}},[e._v("Label inside")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","label-position":"left"}},[e._v("Label left")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","label-position":"right"}},[e._v("Label right")])],1),a("title-link",{attrs:{h2:""}},[e._v("Custom label via default slot")]),e._m(2),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea(label-position="inside" outline)\n  w-icon.orange mdi mdi-arrow-right\n  span.purple.mx1 Inside\n  w-icon.orange mdi mdi-arrow-left\nw-textarea.mt4(label-position="left" outline)\n  span.green.mr1 Left\n  w-icon.orange mdi mdi-arrow-right\nw-textarea.mt4(label-position="right" outline)\n  w-icon.orange mdi mdi-arrow-left\n  span.red.ml1 Right\n')]},proxy:!0}])},[a("w-textarea",{attrs:{"label-position":"inside",outline:""}},[a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),a("span",{staticClass:"purple mx1"},[e._v("Inside")]),a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),a("w-textarea",{staticClass:"mt4",attrs:{"label-position":"left",outline:""}},[a("span",{staticClass:"green mr1"},[e._v("Left")]),a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),a("w-textarea",{staticClass:"mt4",attrs:{"label-position":"right",outline:""}},[a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),a("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),a("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Label outside\nw-textarea(label="Left" label-position="left" outline inner-icon-left="mdi mdi-email")\nw-textarea.mt4(label="Right" label-position="right" outline inner-icon-right="mdi mdi-email")\n\n.title4.mt6.mb2 Label inside\nw-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")\nw-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")\n')]},proxy:!0}])},[a("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),a("w-textarea",{attrs:{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}}),a("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),a("w-textarea",{attrs:{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-textarea.mb4(\n  label="Disabled & empty"\n  outline\n  disabled)\nw-textarea.mb4(\n  value="Some content"\n  label="Disabled & filled"\n  outline\n  disabled)\nw-textarea.mb4(\n  label="Readonly & empty"\n  outline\n  readonly)\nw-textarea(\n  value="Some content"\n  label="Readonly & filled"\n  outline\n  readonly)')]},proxy:!0}])},[a("w-textarea",{staticClass:"mb4",attrs:{label:"Disabled & empty",outline:"",disabled:""}}),a("w-textarea",{staticClass:"mb4",attrs:{value:"Some content",label:"Disabled & filled",outline:"",disabled:""}}),a("w-textarea",{staticClass:"mb4",attrs:{label:"Readonly & empty",outline:"",readonly:""}}),a("w-textarea",{attrs:{value:"Some content",label:"Readonly & filled",outline:"",readonly:""}})],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default the "),a("span",{staticClass:"code"},[e._v("w-textarea")]),e._v(" component has a label inside the textarea that moves up above\nthe textarea on focus or when the textarea is filled by some content or a placeholder."),a("br"),e._v("\nThe default number of rows is 3, and when adding lines the textarea will adjust its size.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),a("code",[e._v("color")]),e._v(" for the text and a "),a("code",[e._v("bg-color")]),e._v(" for the\nbackground."),a("br"),e._v('\nBy default, the text has the "'),a("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("It is convenient to have the label inside the "),a("span",{staticClass:"code"},[e._v("w-textarea")]),e._v(" component to let it handle\nthe field focus event on label click."),a("br"),e._v("\nThe "),a("span",{staticClass:"code"},[e._v("label")]),e._v(" prop accepts any HTML, but because passing complex html via a prop is not fun,\nthere is also a prop for setting the label wish will grant more freedom.\n")])}],i=a("2877"),n={},r=Object(i["a"])(n,l,o,!1,null,null,null);t["default"]=r.exports},c8d0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ui-component-title",[e._v("w-textarea")]),a("examples"),a("api")],1)},o=[],i=a("1b47"),n=a("f9bc"),r={components:{Examples:i["default"],Api:n["default"]}},s=r,c=a("2877"),d=Object(c["a"])(s,l,o,!1,null,null,null);t["default"]=d.exports},f9bc:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:e.slots,title:"Slots"}}),a("component-api",{attrs:{items:e.events,title:"Events"}})],1)},o=[],i=(a("13d5"),a("5530")),n=a("c0bc"),r=a("2d9f"),s={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:'Applies a color to the textarea\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the textarea\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},c={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},d={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},u={data:function(){return{propsDescs:s,slots:c}},computed:{props:function(){return Object(i["a"])(Object(i["a"])({},r["a"].props),n["a"].props)},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]=d[t]||{})&&e}),{})}}},p=u,b=a("2877"),h=Object(b["a"])(p,l,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=textarea-index-vue.b04fddb7.js.map