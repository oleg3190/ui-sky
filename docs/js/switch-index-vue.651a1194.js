(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["switch-index-vue","switch-api-vue","switch-examples-vue"],{"16fb":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:"",slug:"on-off-and-disabled"}},[e._v("On, off & disabled")]),a("example",{attrs:{"content-class":"pt4"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-switch.ma2(:model-value="true" label="On") w-switch.ma2(:model-value="false" label="Off") w-switch.ma2(:model-value="true" disabled label="On disabled") w-switch.ma2(:model-value="false" disabled label="Off disabled") ')]},proxy:!0}])},[a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,label:"On"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!1,label:"Off"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,disabled:"",label:"On disabled"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!1,disabled:"",label:"Off disabled"}})],1),a("title-link",{attrs:{h2:""}},[e._v("V-model")]),a("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-switch.mr6(v-model="value") span.title3.mb0 | v-model value: code.ml2 '+e._s("{{ value }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ value: true }) ")]},proxy:!0}])},[a("w-switch",{staticClass:"mr6",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("span",{staticClass:"title3 mb0"},[e._v("v-model value:"),a("code",{staticClass:"ml2"},[e._v(e._s(e.value))])])],1),a("title-link",{attrs:{h2:""}},[e._v("Colors")]),a("example",{attrs:{"content-class":"pt4"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-switch.ma2(:model-value="true" color="pink") w-switch.ma2(:model-value="true" color="error") w-switch.ma2(:model-value="true" color="warning") w-switch.ma2(:model-value="true" color="success") w-switch.ma2(:model-value="true" color="info") ')]},proxy:!0}])},[a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,color:"pink"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,color:"error"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,color:"warning"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,color:"success"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,color:"info"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Thin version")]),a("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-switch.ma2(:model-value="true" thin label="On") w-switch.ma2(:model-value="false" thin label="Off") w-switch.ma2(:model-value="true" disabled thin label="On disabled") w-switch.ma2(:model-value="false" disabled thin label="Off disabled")')]},proxy:!0}])},[a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,thin:"",label:"On"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!1,thin:"",label:"Off"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!0,disabled:"",thin:"",label:"On disabled"}}),a("w-switch",{staticClass:"ma2",attrs:{"model-value":!1,disabled:"",thin:"",label:"Off disabled"}})],1)],1)},l=[],i={data:function(){return{value:!0}}},o=i,n=a("2877"),r=Object(n["a"])(o,s,l,!1,null,null,null);t["default"]=r.exports},a4c0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ui-component-title",[e._v("w-switch")]),a("examples"),a("api")],1)},l=[],i=a("16fb"),o=a("f252"),n={components:{Examples:i["default"],Api:o["default"]}},r=n,c=a("2877"),u=Object(c["a"])(r,s,l,!1,null,null,null);t["default"]=u.exports},f252:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:e.slots,title:"Slots"}}),a("component-api",{attrs:{items:e.events,title:"Events"}})],1)},l=[],i=(a("13d5"),a("5530")),o=a("c0bc"),n=a("35bd"),r={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},c={default:{description:"The switch label content, if the label prop is not flexible enough."}},u={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},d={data:function(){return{propsDescs:r,slots:c}},computed:{props:function(){return Object(i["a"])(Object(i["a"])({},n["a"].props),o["a"].props)},events:function(){return n["a"].emits.reduce((function(e,t){return(e[t]=u[t]||{})&&e}),{})}}},h=d,m=a("2877"),w=Object(m["a"])(h,s,l,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=switch-index-vue.651a1194.js.map