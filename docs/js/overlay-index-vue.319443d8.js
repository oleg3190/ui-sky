(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["overlay-index-vue","overlay-api-vue","overlay-examples-vue"],{"607f":function(e,t,o){"use strict";o("6e36")},"6e36":function(e,t,o){},7588:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("title-link",{attrs:{h2:""}},[e._v("Overlay with custom opacity and control on "),o("span",{staticClass:"code"},[e._v("persistent")])]),o("p",[e._v("When the overlay is persistent, it will not close on click and on escape key.")]),o("p",[e._v("When persistent is set to false and by default, the escape key will also close the overlay.")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap)\n  w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay\n\n  w-divider.mx6(vertical color="grey-light4")\n  div\n    .title4 Options\n    w-button.mr2(\n      bg-color="primary-light1"\n      :class="persistent ? \'pr4\' : \'\'"\n      @click="persistent = !persistent"\n      sm\n      dark)\n      .code.white :persistent="'+e._s(e.persistent)+'"\n    w-button(\n      bg-color="primary-light1"\n      @click="persistentNoAnimation = !persistentNoAnimation"\n      :disabled="!persistent"\n      sm\n      dark)\n      .code.white :persistent-no-animation="'+e._s(e.persistentNoAnimation)+'"\n    w-input.mt2.d-block(\n      v-model="opacity"\n      outline\n      type="number"\n      label="Overlay opacity"\n      label-position="left"\n      step="0.1"\n      min="0"\n      max="1")\nw-overlay(\n  v-model="showOverlay"\n  :persistent="persistent"\n  :persistent-no-animation="persistentNoAnimation"\n  :opacity="opacity")\n  w-button(bg-color="primary" lg dark @click="showOverlay = false")\n    w-icon.mr2 wi-cross\n    | Hide overlay')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showOverlay: false,\n  opacity: 0.3,\n  persistent: false,\n  persistentNoAnimation: false\n})\n")]},proxy:!0}])},[o("w-flex",{attrs:{wrap:""}},[o("w-button",{staticClass:"my2",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){e.showOverlay=!0}}},[e._v("Show overlay")]),o("w-divider",{staticClass:"mx6",attrs:{vertical:"",color:"grey-light4"}}),o("div",[o("div",{staticClass:"title4"},[e._v("Options")]),o("w-button",{staticClass:"d-block mr2",class:e.persistent?"pr4":"",attrs:{"bg-color":"primary-light1",sm:"",dark:""},on:{click:function(t){e.persistent=!e.persistent}}},[o("div",{staticClass:"code white"},[e._v(':persistent="'+e._s(e.persistent)+'"')])]),o("w-button",{staticClass:"d-block mt2",attrs:{"bg-color":"primary-light1",disabled:!e.persistent,sm:"",dark:""},on:{click:function(t){e.persistentNoAnimation=!e.persistentNoAnimation}}},[o("div",{staticClass:"code white"},[e._v(':persistent-no-animation="'+e._s(e.persistentNoAnimation)+'"')])]),o("w-input",{staticClass:"mt2 d-block",attrs:{outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},model:{value:e.opacity,callback:function(t){e.opacity=t},expression:"opacity"}})],1)],1),o("w-overlay",{attrs:{persistent:e.persistent,"persistent-no-animation":e.persistentNoAnimation,opacity:e.opacity},model:{value:e.showOverlay,callback:function(t){e.showOverlay=t},expression:"showOverlay"}},[o("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(t){e.showOverlay=!1}}},[o("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Overlay with custom background color")]),o("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay\n\nw-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")\n  w-button(bg-color="primary" lg dark @click="showOverlay = false")\n    w-icon.mr2 wi-cross\n    | Hide overlay')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showOverlay: false\n})\n")]},proxy:!0}])},[o("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(t){e.showBlueOverlay=!0}}},[e._v("Show a blue overlay")]),o("w-overlay",{attrs:{"bg-color":"rgba(35, 71, 129, 0.4)"},model:{value:e.showBlueOverlay,callback:function(t){e.showBlueOverlay=t},expression:"showBlueOverlay"}},[o("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(t){e.showBlueOverlay=!1}}},[o("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("CSS backdrop filter")]),e._m(1),o("ssh-pre",{attrs:{language:"css"}},[e._v(".w-overlay {backdrop-filter: blur(10px);}")]),o("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(t){e.showBlurBackdropOverlay=!0}}},[e._v("Show a blur backdrop")]),o("w-overlay",{staticClass:"blur-backdrop",model:{value:e.showBlurBackdropOverlay,callback:function(t){e.showBlurBackdropOverlay=t},expression:"showBlurBackdropOverlay"}},[o("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(t){e.showBlurBackdropOverlay=!1}}},[o("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("By default the overlay has a "),o("span",{staticClass:"code"},[e._v("0.3")]),e._v(" opacity with a black color and a z-index\nof "),o("span",{staticClass:"code"},[e._v("500")]),e._v("."),o("br"),e._v("\nIt is very easy to overrides these defaults via CSS, but you can also pass them as\nparameters to the "),o("span",{staticClass:"code"},[e._v("w-overlay")]),e._v(".\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The backdrop filter is\n"),o("a",{attrs:{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"}},[e._v("not supported on all the browsers")]),e._v("\nyet but very nice.")])}],a={data:function(){return{showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1}}},n=a,i=(o("607f"),o("2877")),l=Object(i["a"])(n,s,r,!1,null,null,null);t["default"]=l.exports},d5ed:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.events,title:"Events"}})],1)},r=[],a=(o("13d5"),o("bc92")),n={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',opacity:"Sets a custom opacity on the overlay.",bgColor:'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},i={default:{description:"The overlay content, if any."}},l={input:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},c={data:function(){return{propsDescs:n,slots:i}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(e,t){return(e[t]=l[t]||{})&&e}),{})}}},p=c,v=o("2877"),u=Object(v["a"])(p,s,r,!1,null,null,null);t["default"]=u.exports},e670:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("ui-component-title",[e._v("w-overlay")]),o("examples"),o("api")],1)},r=[],a=o("7588"),n=o("d5ed"),i={components:{Examples:a["default"],Api:n["default"]}},l=i,c=o("2877"),p=Object(c["a"])(l,s,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=overlay-index-vue.319443d8.js.map