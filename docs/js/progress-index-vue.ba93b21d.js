(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["progress-index-vue","progress-api-vue","progress-examples-vue"],{"3cb9":function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("main",[s("ui-component-title",[e._v("w-progress")]),s("examples"),s("api")],1)},t=[],l=s("3d36"),a=s("c5a3"),i={components:{Examples:l["default"],Api:a["default"]}},c=i,n=s("2877"),u=Object(n["a"])(c,o,t,!1,null,null,null);r["default"]=u.exports},"3d36":function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("w-card",{attrs:{"bg-color":"blue-light5"}},[s("p",[e._v("First choose your progress style:")]),s("w-radios",{staticClass:"title3",attrs:{items:e.linearOrCircular,inline:""},model:{value:e.circular,callback:function(r){e.circular=r},expression:"circular"}})],1),e.circular?s("div",[s("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),e._m(0),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle) w-progress.ma1(circle color="blue") w-progress.ma1(circle color="green") .title3.my6 Mixing colors w-progress.ma1(circle color="yellow" bg-color="cyan") ')]},proxy:!0}],null,!1,443701632)},[s("w-progress",{staticClass:"ma1",attrs:{circle:""}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"green"}}),s("h3",[e._v("Mixing colors")]),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"yellow","bg-color":"cyan"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value")]),s("p",[e._v("The value can be given as a number or a string.")]),e._m(1),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle :model-value="undefined") w-progress.ma1.mr8(circle :model-value="-1") w-progress.ma1(circle model-value="0") w-progress.ma1(circle model-value="12.5") w-progress.ma1(circle model-value="25") w-progress.ma1(circle model-value="50") w-progress.ma1(circle model-value="75") w-progress.ma1(circle model-value="100") ')]},proxy:!0}],null,!1,907578217)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":void 0}}),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"","model-value":-1}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"0"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"12.5"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"25"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"50"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"75"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"100"}})],1),s("h3",[e._v("Updated value example")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(circle :model-value="progress")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ progress: 0 }), mounted () { // Emulating progress. setInterval(() => { this.progress += 10 if (this.progress === 100) this.progress = 0 }, 700) } ")]},proxy:!0}],null,!1,3546827251)},[s("w-progress",{attrs:{circle:"","model-value":e.progress}})],1),s("title-link",{attrs:{h2:""}},[e._v("Size & stroke thickness")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle model-value="38" color="blue") w-progress.ma1(circle model-value="38" size="4em" color="blue") w-progress.ma1.mr8(circle model-value="38" size="5em" color="blue") w-progress.ma1(circle model-value="38" size="6em" :stroke="2" color="blue") w-progress.ma1(circle model-value="38" size="6em" :stroke="15" color="blue") w-progress.ma1(circle model-value="38" size="6em" :stroke="40" color="blue") ')]},proxy:!0}],null,!1,532023408)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"4em",color:"blue"}}),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"","model-value":"38",size:"5em",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"6em",stroke:2,color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"6em",stroke:15,color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"6em",stroke:40,color:"blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),e._m(2),s("p",[e._v("You can customize the label to display the value as you wish.")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('p Default label - Custom label w-progress.ma1.mr8(circle v-model="progress" size="5em" label) w-progress.ma1(circle v-model="progress" size="5em") strong '+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ progress: 37.86 }) ")]},proxy:!0}],null,!1,3659566418)},[s("p",[e._v("Default label - Custom label")]),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",size:"5em",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",size:"5em"},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}},[s("strong",[e._v(e._s(e.progress1)+"%")])])],1),s("h3",[e._v("Providing a color for the custom label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1( circle model-value="38" size="3em" label label-color="indigo-light4") ')]},proxy:!0}],null,!1,1947815404)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"3em",label:"","label-color":"indigo-light4"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle model-value="38" size="6em" round-cap) w-progress.ma1(circle model-value="38" size="6em") ')]},proxy:!0}],null,!1,1740647202)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"6em","round-cap":""}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"","model-value":"38",size:"6em"}})],1)],1):s("div",[s("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),e._m(3),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress w-progress.mt4(color="blue") w-progress.mt4(color="green") .title3.my6 Mixing colors w-progress.mt4(color="yellow" bg-color="cyan") ')]},proxy:!0}])},[s("w-progress"),s("w-progress",{staticClass:"mt4",attrs:{color:"blue"}}),s("w-progress",{staticClass:"mt4",attrs:{color:"green"}}),s("h3",[e._v("Mixing colors")]),s("w-progress",{staticClass:"mt4",attrs:{color:"yellow","bg-color":"cyan"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Size")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(model-value="38" size="1em" color="blue") w-progress.mt4(model-value="38" size="2.5em" color="blue") ')]},proxy:!0}])},[s("w-progress",{attrs:{"model-value":"38",size:"1em",color:"blue"}}),s("w-progress",{staticClass:"mt4",attrs:{"model-value":"38",size:"2.5em",color:"blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(model-value="38" size="1.4em" tile color="light-blue") w-progress.mt4(model-value="38" size="1.4em" round color="light-blue") ')]},proxy:!0}])},[s("w-progress",{attrs:{"model-value":"38",size:"1.4em",tile:"",color:"light-blue"}}),s("w-progress",{staticClass:"mt4",attrs:{"model-value":"38",size:"1.4em",round:"",color:"light-blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Outline & shadow")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(model-value="38" size="1em" outline round color="light-blue") w-progress.mt4(model-value="38" size="1em" shadow color="light-blue") ')]},proxy:!0}])},[s("w-progress",{attrs:{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue"}}),s("w-progress",{staticClass:"mt4",attrs:{"model-value":"38",size:"1em",shadow:"",color:"light-blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Stripes (only if determinate)")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress( model-value="38" size="1em" outline round color="light-blue" stripes) w-progress.mt4( model-value="38" size="1.4em" outline round color="primary" stripes) ')]},proxy:!0}])},[s("w-progress",{attrs:{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}}),s("w-progress",{staticClass:"mt4",attrs:{"model-value":"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),s("h3",[e._v("Default label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(v-model="progress" size="1.3em" round color="primary" label) w-progress.mt4(v-model="progress" size="1.3em" outline round label)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ progress: 37.86 }) ")]},proxy:!0}])},[s("w-progress",{attrs:{size:"1.3em",round:"",color:"primary",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}}),s("w-progress",{staticClass:"mt4",attrs:{size:"1.3em",outline:"",round:"",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}})],1),s("h3",[e._v("Custom label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(v-model="progress" size="1.5em" outline round) strong '+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ progress: 37.86 }) ")]},proxy:!0}])},[s("w-progress",{staticClass:"mt3",attrs:{size:"1.5em",outline:"",round:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}},[s("strong",[e._v(e._s(e.progress1)+"%")])])],1),s("h3",[e._v("Providing a color for the custom label")]),e._m(4),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress( model-value="50.3" size="2em" outline round label label-color="indigo-light4") ')]},proxy:!0}])},[s("w-progress",{staticClass:"mt2",attrs:{"model-value":"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(model-value="38" size="2em" round round-cap) w-progress.mt4(model-value="38" size="2em" round)')]},proxy:!0}])},[s("w-progress",{attrs:{"model-value":"38",size:"2em",round:"","round-cap":""}}),s("w-progress",{staticClass:"mt4",attrs:{"model-value":"38",size:"2em",round:""}})],1)],1)],1)},t=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("Like in most components, you can set a "),s("code",[e._v("color")]),e._v(" for the text and a "),s("code",[e._v("bg-color")]),e._v(" for the background."),s("br"),e._v(" By default, the progress foreground color is "),s("code",[e._v("primary")]),e._v(".")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("When the value is "),s("code",[e._v("undefined")]),e._v(", "),s("code",[e._v("-1")]),e._v(" or not provided at all, it will be assumed indeterminate.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("The default label displays the rounded value without the "),s("code",[e._v("%")]),e._v(" sign, so it fits in smaller circles.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("Like in most components, you can set a "),s("code",[e._v("color")]),e._v(" for the text and a "),s("code",[e._v("bg-color")]),e._v(" for the background.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("The color of the label should be readable on both the progress and the background."),s("br"),e._v(" So you are free to decide what is the best color.")])}],l={data:function(){return{progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}},mounted:function(){var e=this;this.intervalId=setInterval((function(){e.progress+=10,100===e.progress&&(e.progress=0)}),700)},beforeUnmount:function(){clearInterval(this.intervalId)}},a=l,i=s("2877"),c=Object(i["a"])(a,o,t,!1,null,null,null);r["default"]=c.exports},c5a3:function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),s("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),s("component-api",{attrs:{items:e.slots,title:"Slots"}}),s("component-api",{attrs:{items:e.events,title:"Events"}})],1)},t=[],l=(s("13d5"),s("8469")),a={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the progress\' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:'Applies a color to the progress label\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},i={default:{description:"Provide a custom progress label."}},c={},n={data:function(){return{propsDescs:a,slots:i}},computed:{props:function(){return l["a"].props},events:function(){return l["a"].emits.reduce((function(e,r){return(e[r]={description:c[r]||""})&&e}),{})}}},u=n,p=s("2877"),m=Object(p["a"])(u,o,t,!1,null,null,null);r["default"]=m.exports}}]);
//# sourceMappingURL=progress-index-vue.ba93b21d.js.map