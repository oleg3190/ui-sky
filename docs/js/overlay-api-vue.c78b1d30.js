(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["overlay-api-vue"],{d5ed:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.events,title:"Events"}})],1)},r=[],n=(o("13d5"),o("bc92")),a={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',opacity:"Sets a custom opacity on the overlay.",bgColor:'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},i={default:{description:"The overlay content, if any."}},l={input:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},c={data:function(){return{propsDescs:a,slots:i}},computed:{props:function(){return n["a"].props},events:function(){return n["a"].emits.reduce((function(e,t){return(e[t]=l[t]||{})&&e}),{})}}},p=c,d=o("2877"),v=Object(d["a"])(p,s,r,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=overlay-api-vue.c78b1d30.js.map