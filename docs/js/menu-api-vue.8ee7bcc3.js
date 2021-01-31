(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["menu-api-vue"],{decd:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.events,title:"Events"}})],1)},n=[],i=(o("13d5"),o("8e58")),a={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:'Applies a color to the menu\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the menu\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <span class="code">w-card</span>. To have more flexibility, you can set this option to true.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Applies a custom CSS class to the menu element.",titleClass:"Applies a custom CSS class to the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Applies a custom CSS class to the menu's content when using the default card layout (when not using the <code>custom</code> prop).",detachTo:"Moves the menu element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `.w-app` will be the target.<br>By default a wrapper is created around the activator element and the menu is appended inside it.",fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:"Displays a full screen overlay underneath the menu.",persistent:"When set to true, clicking outside of the menu will not close the menu."},r={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},l={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},c={data:function(){return{propsDescs:a,slots:r}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(e,t){return(e[t]={description:l[t]||""})&&e}),{})}}},h=c,d=o("2877"),u=Object(d["a"])(h,s,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=menu-api-vue.8ee7bcc3.js.map