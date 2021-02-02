(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tooltip-index-vue","tooltip-api-vue","tooltip-examples-vue"],{2914:function(t,o,e){},"3f75":function(t,o,e){"use strict";e("2914")},"6d27":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},i=[],r=(e("13d5"),e("9d84")),n={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:'Applies a color to the tooltip\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the tooltip\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Applies a custom CSS class to the tooltip element.",detachTo:"Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `.w-app` will be the target.<br>By default a wrapper is created around the activator element and the tooltip is appended inside it.",fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip."},l={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},s={},c={data:function(){return{propsDescs:n,slots:l}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(t,o){return(t[o]={description:s[o]||""})&&t}),{})}}},p=c,d=e("2877"),m=Object(d["a"])(p,a,i,!1,null,null,null);o["default"]=m.exports},e565:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tooltips-demo"},[e("alert",{attrs:{tip:""}},[e("strong",[t._v("Important notes")]),e("br"),t._v(" By default when you use "),e("code",[t._v("<w-tooltip>")]),t._v(", it creates a wrapper around the activator element and the tooltip is added inside this wrapper."),e("br"),t._v(" In this case you can add classes to the wrapper to style it as desired."),e("br"),e("br"),t._v(" But in some cases, for instance if the activator element is placed in a container that has a hidden overflow, the tooltip needs to be placed outside of this container to be fully visible."),e("br"),t._v(" You can use the "),e("code",[t._v("detachTo")]),t._v(" prop to place it elsewhere in the DOM, like in the "),e("a",{attrs:{href:"#appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),t._v(" example."),e("br"),t._v(" In this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to the DOM node you provided. ")]),e("title-link",{attrs:{h2:""}},[t._v("Tooltip position")]),e("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center w-tooltip(left) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home | Home w-tooltip(top) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home | Home w-tooltip template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home | Home w-tooltip(right) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home | Home ')]},proxy:!0}])},[e("w-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1),e("title-link",{attrs:{h2:""}},[t._v("Toggle on click")]),e("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center w-tooltip(show-on-click left) template(#activator="{ on }") w-button.ma2(v-on="on" bg-color="info") w-icon.mr1 wi-star | Star | Star w-tooltip(show-on-click right) template(#activator="{ on }") w-button.ma2(v-on="on" bg-color="info-dark2" dark) w-icon.mr1 wi-star | Star | Star ')]},proxy:!0}])},[e("w-tooltip",{attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info"}},a),[e("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")]),e("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info-dark2",dark:""}},a),[e("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")])],1),e("title-link",{attrs:{h2:""}},[t._v("Toggle with v-model")]),e("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center w-button.my2.mx6( @click="showTooltip = !showTooltip" bg-color="primary" dark width="6em") | '+t._s("{{ showTooltip ? 'Hide' : 'Show' }}")+' tooltip div.d-iblock.my2.mx6 w-tooltip.ma2(v-model="showTooltip" show-on-click left) template(#activator="{ on }") span(v-on="on") Star | Star w-tooltip.ma2(v-model="showTooltip" show-on-click top) template(#activator="{ on }") span(v-on="on") Star | Star w-tooltip.ma2(v-model="showTooltip" show-on-click) template(#activator="{ on }") span(v-on="on") Star | Star w-tooltip.ma2(v-model="showTooltip" show-on-click right) template(#activator="{ on }") span(v-on="on") Star | Star ')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({ showTooltip: false }) ")]},proxy:!0}])},[e("w-button",{staticClass:"my2 mx6",attrs:{"bg-color":"primary",dark:"",width:"6em"},on:{click:function(o){t.showTooltip=!t.showTooltip}}},[t._v(t._s(t.showTooltip?"Hide":"Show")+" tooltip")]),e("div",{staticClass:"d-iblock my2 mx6"},[e("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({},a),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),e("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({},a),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),e("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({},a),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),e("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({},a),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),e("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center.pb8 w-tooltip(color="white" bg-color="blue") template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="blue") wi-star | Star w-tooltip(color="white" bg-color="purple") template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="purple") wi-star | Star w-tooltip(color="orange-dark1" bg-color="yellow-light3") template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="amber") wi-star | Star w-tooltip(color="orange") template(#activator="{ on }") w-icon.ma2(v-on="on" xl) wi-star | Star ')]},proxy:!0}])},[e("w-tooltip",{attrs:{color:"white","bg-color":"blue"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"blue"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),e("w-tooltip",{attrs:{color:"white","bg-color":"purple"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"purple"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),e("w-tooltip",{attrs:{color:"orange-dark1","bg-color":"yellow-light3"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),e("w-tooltip",{attrs:{color:"orange"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:""}},a),[t._v("wi-star")])]}}])},[t._v("Star")])],1),e("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),e("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center.pb8 w-tooltip(color="red-light2" tile) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square | Tile w-tooltip(color="amber-dark1" round) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle | Round w-tooltip(color="pink-light1" shadow) template(#activator="{ on }") w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart | Shadow ')]},proxy:!0}])},[e("w-tooltip",{attrs:{color:"red-light2",tile:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"red-light2"}},a),[t._v("mdi mdi-square")])]}}])},[t._v("Tile")]),e("w-tooltip",{attrs:{color:"amber-dark1",round:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},a),[t._v("mdi mdi-circle")])]}}])},[t._v("Round")]),e("w-tooltip",{attrs:{color:"pink-light1",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"pink-light1"}},a),[t._v("mdi mdi-heart")])]}}])},[t._v("Shadow")])],1),e("title-link",{attrs:{h2:""}},[t._v("Different contents")]),e("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center w-tooltip.ma3(color="primary") template(#activator="{ on }") span(v-on="on") Content with icon w-icon.mr1 wi-star | Star w-tooltip.ma3(color="primary") template(#activator="{ on }") span(v-on="on" ref="truc") Very long content | Lorem ipsum, dolor sit amet consectetur adipisicing elit. br | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia! br br | Recusandae distinctio perferendis expedita pariatur fuga. ')]},proxy:!0}])},[e("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({},a),[t._v("Content with icon")])]}}])},[e("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1),e("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("span",t._g({ref:"truc"},a),[t._v("Very long content")])]}}])},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),e("br"),t._v("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),e("br"),e("br"),t._v("Recusandae distinctio perferendis expedita pariatur fuga.")])],1),e("title-link",{attrs:{h2:""}},[t._v("Transitions")]),e("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center w-radios.my4(inline v-model="transition" :items="transitions") .text-center.py6 w-tooltip(:transition="transition" left) template(#activator="{ on }") w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home | Home w-tooltip(:transition="transition") template(#activator="{ on }") w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home | Home w-tooltip(:transition="transition" top) template(#activator="{ on }") w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home | Home w-tooltip(:transition="transition" right) template(#activator="{ on }") w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home | Home ')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({ transition: 'bounce', transitions: [ { label: 'Default', value: '' }, { label: 'Bounce', value: 'bounce' }, { label: 'Scale', value: 'scale' }, { label: 'Twist', value: 'twist' }, { label: 'Fade', value: 'fade' }, { label: 'Scale-fade', value: 'scale-fade' } ] }) ")]},proxy:!0}])},[e("w-radios",{staticClass:"my4",attrs:{inline:"",items:t.transitions},model:{value:t.transition,callback:function(o){t.transition=o},expression:"transition"}}),e("div",{staticClass:"text-center py6"},[e("w-tooltip",{attrs:{transition:t.transition,left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{attrs:{transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{attrs:{transition:t.transition,top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),e("w-tooltip",{attrs:{transition:t.transition,right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1)],1),e("title-link",{attrs:{h2:"",slug:"appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),e("p",[t._v("In this example, the yellow container of the pink activator has an overflow hidden, but we want the tooltip to be fully visible. So we detach it to the green container.")]),e("example",{staticClass:"mb12",attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.another-container.text-center.green-light5--bg.pa6 w-card(bg-color="yellow-light5") w-tooltip(detach-to=".another-container") template(#activator="{ on }") w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5") w-icon.mr1 mdi mdi-bomb | Hover me span This tooltip is appended to the green container!')]},proxy:!0},{key:"css",fn:function(){return[t._v(".w-card { overflow: hidden; display: inline-block; padding: 8px; } .w-card:before, .w-card:after { content: ''; position: absolute; background-color: #ffea62; width: 6em; height: 6em; border-radius: 100%; } .w-card:before {top: 0;left: 0;} .w-card:after {bottom: 0;right: 0;} .w-tag {z-index: 1;} ")]},proxy:!0}])},[e("div",{staticClass:"another-container text-center green-light5--bg pa6"},[e("w-card",{attrs:{"bg-color":"yellow-light5"}},[e("w-tooltip",{attrs:{"detach-to":".another-container"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("w-tag",t._g({attrs:{lg:"",color:"pink-light1","bg-color":"pink-light5"}},a),[e("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-bomb")]),t._v("Hover me")],1)]}}])},[e("span",[t._v("This tooltip is appended to the "),e("span",{staticClass:"green"},[t._v("green")]),t._v(" container!")])])],1)],1)]),e("alert",{attrs:{warning:""}},[t._v("The DOM element that the tooltip is detached to must have a position (fixed, absolute or relative).")])],1)},i=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(" for the background.")])}],r={data:function(){return{showTooltip:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}]}}},n=r,l=(e("3f75"),e("2877")),s=Object(l["a"])(n,a,i,!1,null,null,null);o["default"]=s.exports},ec09:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("main",[e("ui-component-title",[t._v("w-tooltip")]),e("examples"),e("api")],1)},i=[],r=e("e565"),n=e("6d27"),l={components:{Examples:r["default"],Api:n["default"]}},s=l,c=e("2877"),p=Object(c["a"])(s,a,i,!1,null,null,null);o["default"]=p.exports}}]);
//# sourceMappingURL=tooltip-index-vue.6ce71677.js.map