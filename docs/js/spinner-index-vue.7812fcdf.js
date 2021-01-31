(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["spinner-index-vue","spinner-api-vue","spinner-examples-vue"],{"042b":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("title-link",{attrs:{h2:""}},[e._v("Three dots (default)")]),n("example",{attrs:{"content-class":"w-flex justify-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-spinner />\n")]},proxy:!0}])},[n("w-spinner")],1),n("title-link",{attrs:{h2:""}},[e._v("Fade")]),n("example",{attrs:{"content-class":"w-flex justify-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-spinner fade />\n")]},proxy:!0}])},[n("w-spinner",{attrs:{fade:""}})],1),n("title-link",{attrs:{h2:""}},[e._v("Bounce")]),n("example",{attrs:{"content-class":"w-flex justify-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-spinner bounce />\n")]},proxy:!0}])},[n("w-spinner",{attrs:{bounce:""}})],1),n("title-link",{attrs:{h2:""}},[e._v("Value or v-model")]),e._m(1),n("example",{attrs:{"content-class":"w-flex"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>\n<w-spinner :value="showSpinner" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showSpinner: false\n})\n")]},proxy:!0}])},[n("w-button",{staticClass:"mr2",on:{click:function(t){e.showSpinner=!e.showSpinner}}},[e._v("Toggle spinner")]),n("w-spinner",{attrs:{value:e.showSpinner}})],1),n("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(2),n("example",{attrs:{"content-class":"w-flex justify-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-spinner fade xs />\n<w-spinner fade sm />\n<w-spinner fade md />\n<w-spinner fade lg />\n<w-spinner fade xl />\n<w-spinner fade size="5em" />\n')]},proxy:!0}])},[n("w-spinner",{staticClass:"ma1",attrs:{fade:"",xs:""}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",sm:""}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",md:""}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",lg:""}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",xl:""}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",size:"5em"}})],1),n("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(3),n("example",{attrs:{"content-class":"w-flex justify-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-spinner fade color="green" />\n<w-spinner fade color="amber" />\n<w-spinner fade color="orange" />\n<w-spinner fade color="error" />\n<w-spinner fade color="pink" />')]},proxy:!0}])},[n("w-spinner",{staticClass:"ma1",attrs:{fade:"",color:"green"}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",color:"amber"}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",color:"orange"}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",color:"error"}}),n("w-spinner",{staticClass:"ma1",attrs:{fade:"",color:"pink"}})],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you want a different style than the "),n("span",{staticClass:"code"},[e._v("w-progress")]),e._v(" component, the spinner is a light\nalternative that you can easily use anywhere.\n")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Both the "),n("code",[e._v("value")]),e._v(" and "),n("code",[e._v("v-model")]),e._v(" will control the spinner visibility, but there is not\nmuch point in using a "),n("code",[e._v("v-model")]),e._v(" here as the spinner will never emit a value update.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The spinner size can be controlled via the preset sizes "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("sm")]),e._v(", "),n("code",[e._v("md")]),e._v(",\n"),n("code",[e._v("lg")]),e._v(", "),n("code",[e._v("xl")]),e._v(", or explicit "),n("code",[e._v("size")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Like in most components, you can set a "),n("code",[e._v("color")]),e._v(" for the spinner.")])}],o={data:function(){return{showSpinner:!1}}},a=o,i=n("2877"),l=Object(i["a"])(a,s,r,!1,null,null,null);t["default"]=l.exports},"4fec":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:e.slots,title:"Slots"}}),n("component-api",{attrs:{items:e.events,title:"Events"}})],1)},r=[],o=(n("13d5"),n("fc7c")),a={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',color:'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the spinner.",sm:"Sets the size of the spinner.",md:"Sets the size of the spinner.",lg:"Sets the size of the spinner.",xl:"Sets the size of the spinner.",size:"Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",bounce:"Sets the style of the spinner.",fade:"Sets the style of the spinner."},i={},l={},c={data:function(){return{propsDescs:a,slots:i}},computed:{props:function(){return o["a"].props},events:function(){return o["a"].emits.reduce((function(e,t){return(e[t]={description:l[t]||""})&&e}),{})}}},p=c,u=n("2877"),f=Object(u["a"])(p,s,r,!1,null,null,null);t["default"]=f.exports},cced:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("ui-component-title",[e._v("w-spinner")]),n("examples"),n("api")],1)},r=[],o=n("042b"),a=n("4fec"),i={components:{Examples:o["default"],Api:a["default"]}},l=i,c=n("2877"),p=Object(c["a"])(l,s,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=spinner-index-vue.7812fcdf.js.map