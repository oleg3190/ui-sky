(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-examples-vue"],{"063c":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),l("example",{attrs:{"content-class":"mt5 px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider(:value="50")\n')]},proxy:!0}])},[l("w-slider",{attrs:{value:50}})],1),l("title-link",{attrs:{h2:""}},[e._v("V-model & external controls")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(align-center)\n  w-button(@click="sliderValue -= 5" icon="wi-minus" bg-color="success" sm)\n  w-slider.mx3.grow(v-model="sliderValue" color="green")\n  w-button(@click="sliderValue += 5" icon="wi-plus" bg-color="success" sm)\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ sliderValue }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50\n})\n")]},proxy:!0}])},[l("w-flex",{attrs:{"align-center":""}},[l("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue-=5}}}),l("w-slider",{staticClass:"mx3 grow",attrs:{color:"green"},model:{value:e.sliderValue,callback:function(t){e.sliderValue=t},expression:"sliderValue"}}),l("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue+=5}}})],1),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderValue))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Min & max")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb4 From 4 to 5\nw-slider(v-model="sliderValue" :min="4" :max="5")\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ sliderValue }}")+'\n\n.title4.mt8.mb4 From -10 to 10\nw-slider(v-model="slider2Value" :min="-10" :max="10")\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ slider2Value }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 4.5,\n  slider2Value: 0\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("From 4 to 5")]),l("w-slider",{attrs:{min:4,max:5},model:{value:e.minMaxValue,callback:function(t){e.minMaxValue=t},expression:"minMaxValue"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue))])]),l("div",{staticClass:"title4 mt8 mb4"},[e._v("From -10 to 10")]),l("w-slider",{attrs:{min:-10,max:10},model:{value:e.minMaxValue2,callback:function(t){e.minMaxValue2=t},expression:"minMaxValue2"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue2))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider.mt2(:value="50" disabled)\nw-slider.mt8(:value="50" readonly)\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mt2",attrs:{value:50,disabled:""}}),l("w-slider",{staticClass:"mt8",attrs:{value:50,readonly:""}})],1),l("title-link",{attrs:{h2:""}},[e._v("Labels on the left & right")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider.mt2(:value="50" label-left="0" label-right="100")\nw-slider.mt6(:value="50" label-left="Left")\nw-slider.mt6(:value="50" label-right="Right")\nw-slider.mt12(:value="50")\n  template(#label-left="")\n    span Weight\n    w-icon.ml2.green mdi mdi-feather\n  template(#label-right="")\n    w-icon.red mdi mdi-weight\n    w-icon.red mdi mdi-weight\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mt2",attrs:{value:50,"label-left":"0","label-right":"100"}}),l("w-slider",{staticClass:"mt6",attrs:{value:50,"label-left":"Left"}}),l("w-slider",{staticClass:"mt6",attrs:{value:50,"label-right":"Right"}}),l("w-slider",{staticClass:"mt12",attrs:{value:50},scopedSlots:e._u([{key:"label-left",fn:function(){return[l("span",[e._v("Weight")]),l("w-icon",{staticClass:"ml2 green"},[e._v("mdi mdi-feather")])]},proxy:!0},{key:"label-right",fn:function(){return[l("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")]),l("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")])]},proxy:!0}])})],1),l("title-link",{attrs:{h2:""}},[e._v("Thumb label")]),l("example",{attrs:{"content-class":"pt12 px8"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider.mt12(:value="24" thumb-label color="primary-light3")\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mb4",attrs:{value:24,"thumb-label":"",color:"primary-light3"}})],1),l("title-link",{attrs:{h3:"",slug:"custom-label-with-label-slot"}},[e._v("Customize the label with the "),l("span",{staticClass:"code"},[e._v("label")]),e._v(" slot")]),l("example",{attrs:{"content-class":"pt12 pb8 px8"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider.ma12(:value="46.3" thumb-label color="primary-light3")\n  template(#label="{ value }") '+e._s("{{ parseInt(value * 10) / 10 }}")+"%\n")]},proxy:!0}])},[l("w-slider",{attrs:{value:46.3,"thumb-label":"",color:"primary-light3"},scopedSlots:e._u([{key:"label",fn:function(t){var l=t.value;return[e._v(e._s(~~(10*l)/10)+"%")]}}])})],1),l("title-link",{attrs:{h3:""}},[e._v("Droplet style label")]),l("p",[e._v("With this option you can have a more modern look, but the drawback is that it can't contain long texts.")]),e._m(1),e._m(2),e._m(3),l("example",{attrs:{"content-class":"pt12 pl10 pr12"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider.ma12(:value="30" thumb-label="droplet")\nw-slider.big-label.ma12(:value="60" thumb-label="droplet" thumb-label-class="info--bg")')]},proxy:!0},{key:"css",fn:function(){return[e._v(".big-label {font-size: 1.4em;}\n")]},proxy:!0}])},[l("w-slider",{staticClass:"mt2 mb12",attrs:{value:30,"thumb-label":"droplet"}}),l("w-slider",{staticClass:"big-label mt12 mb4",attrs:{value:60,"thumb-label":"droplet","thumb-label-class":"info--bg"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Steps")]),e._m(4),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb4 Step = 1\nw-slider(v-model="sliderValue" :step="1")\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ sliderValue }}")+'\n\n.title4.mt8.mb4 Step = 10\nw-slider(v-model="slider2Value" :step="10")\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ slider2Value }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50,\n  slider2Value: 50\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("Step = 1")]),l("w-slider",{attrs:{step:1},model:{value:e.sliderStepsValue1,callback:function(t){e.sliderStepsValue1=t},expression:"sliderStepsValue1"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue1))])]),l("div",{staticClass:"title4 mt8 mb4"},[e._v("Step = 10")]),l("w-slider",{attrs:{step:10},model:{value:e.sliderStepsValue2,callback:function(t){e.sliderStepsValue2=t},expression:"sliderStepsValue2"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue2))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Step labels")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb4 Default step labels\nw-slider(v-model="sliderValue" color="primary-light2" :step="20" step-labels)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 40\n})")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("Default step labels")]),l("w-slider",{attrs:{color:"primary-light2",step:20,"step-labels":""},model:{value:e.sliderStepsValue3,callback:function(t){e.sliderStepsValue3=t},expression:"sliderStepsValue3"}})],1)],1)},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("By default the range will have the "),l("code",[e._v("primary")]),e._v(" color.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is a breeze to override the droplet label size via CSS, this will suffice:"),l("code",[e._v(".w-slider {font-size: 1.4em}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If you need you can also adjust the content font-size with:"),l("code",[e._v(".w-slider__thumb-label div {font-size: 2em;}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is also possible to add classes to the thumb label through the "),l("code",[e._v("thumb-label-class")]),e._v(" option\nto add a color for instance.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("There is no step by default to ensure a very smooth movement while dragging. This also means that\nthe v-model will contain decimals."),l("br"),e._v("\nIf you don't want to deal with decimals you can use the "),l("code",[e._v("step")]),e._v(" option to make the slider only\nstop on integer values.")])}],i={data:function(){return{sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40}}},n=i,r=(l("9d40"),l("2877")),o=Object(r["a"])(n,s,a,!1,null,null,null);t["default"]=o.exports},"1cd1":function(e,t,l){},"9d40":function(e,t,l){"use strict";l("1cd1")}}]);
//# sourceMappingURL=slider-examples-vue.8e219b57.js.map