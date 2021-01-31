(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["alert-examples-vue"],{d162:function(r,s,t){"use strict";t.r(s);var i=function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("div",{staticStyle:{"max-width":"1000px"}},[t("title-link",{attrs:{h2:"",slug:"show-and-hide-with-v-model"}},[r._v("Show / hide with v-model")]),r._m(0),t("example",{attrs:{"content-class":"pt5"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-button(@click="showAlert = !showAlert" color="primary" outline) '+r._s(r.showAlert?"Hide":"Show")+' alert\nw-transition-expand(y)\n  w-alert(v-if="showAlert" color="success") The alert is now visible.')]},proxy:!0},{key:"js",fn:function(){return[r._v("data: () => ({\n  showAlert: false\n})\n")]},proxy:!0}])},[t("w-button",{attrs:{color:"primary",outline:""},on:{click:function(s){r.showAlert=!r.showAlert}}},[r._v(r._s(r.showAlert?"Hide":"Show")+" alert")]),t("w-transition-expand",{attrs:{y:""}},[r.showAlert?t("w-alert",{attrs:{color:"success"}},[r._v("The alert is now visible.")]):r._e()],1)],1),t("title-link",{attrs:{h2:""}},[r._v("Colors")]),r._m(1),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(color="primary") This is an alert with a primary color.\nw-alert(bg-color="primary" color="white") This is an alert with a primary background color.\nw-alert(color="pink") This is an alert with a pink color.\nw-alert(bg-color="pink" color="white") This is an alert with a pink background color.\np You can even mix different colors and background colors.\nw-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.\nw-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.\n')]},proxy:!0}])},[t("w-alert",{attrs:{color:"primary"}},[r._v("This is an alert with a primary color.")]),t("w-alert",{attrs:{"bg-color":"primary",color:"white"}},[r._v("This is an alert with a primary background color.")]),t("w-alert",{attrs:{color:"pink"}},[r._v("This is an alert with a pink color.")]),t("w-alert",{attrs:{"bg-color":"pink",color:"white"}},[r._v("This is an alert with a pink background color.")]),t("p",[r._v("You can even mix different colors and background colors.")]),t("w-alert",{attrs:{"bg-color":"purple",color:"cyan-light4"}},[r._v("This is an alert with a purple background and cyan color.")]),t("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple"}},[r._v("This is an alert with a cyan background and purple color.")])],1),t("title-link",{attrs:{h2:"",slug:"types"}},[r._v("Types (adds an icon)")]),t("h3",[r._v("Normal")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v("w-alert(success) This is a success alert.\nw-alert(warning) This is a warning alert.\nw-alert(error) This is an error alert.\nw-alert(info) This is an info alert.\n")]},proxy:!0}])},[t("w-alert",{attrs:{success:""}},[r._v("This is a success alert.")]),t("w-alert",{attrs:{warning:""}},[r._v("This is a warning alert.")]),t("w-alert",{attrs:{error:""}},[r._v("This is an error alert.")]),t("w-alert",{attrs:{info:""}},[r._v("This is an info alert.")])],1),t("h3",[r._v("Plain")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v("w-alert(success plain) This is a success alert.\nw-alert(warning plain) This is a warning alert.\nw-alert(error plain) This is an error alert.\nw-alert(info plain) This is an info alert.\n")]},proxy:!0}])},[t("w-alert",{attrs:{success:"",plain:""}},[r._v("This is a success alert.")]),t("w-alert",{attrs:{warning:"",plain:""}},[r._v("This is a warning alert.")]),t("w-alert",{attrs:{error:"",plain:""}},[r._v("This is an error alert.")]),t("w-alert",{attrs:{info:"",plain:""}},[r._v("This is an info alert.")])],1),t("title-link",{attrs:{h2:""}},[r._v("Custom icon")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.\n')]},proxy:!0}])},[t("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"wi-star"}},[r._v("This is an alert with a custom icon.")])],1),t("title-link",{attrs:{h2:""}},[r._v("Icon outside")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(success icon-outside) This is a success alert.\nw-alert(warning icon-outside) This is a warning alert.\nw-alert(error icon-outside) This is an error alert.\nw-alert(info icon-outside) This is an info alert.\nw-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)\n  | This is an alert with a custom icon.\n')]},proxy:!0}])},[t("w-alert",{attrs:{success:"","icon-outside":""}},[r._v("This is a success alert.")]),t("w-alert",{attrs:{warning:"","icon-outside":""}},[r._v("This is a warning alert.")]),t("w-alert",{attrs:{error:"","icon-outside":""}},[r._v("This is an error alert.")]),t("w-alert",{attrs:{info:"","icon-outside":""}},[r._v("This is an info alert.")]),t("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""}},[r._v("This is an alert with a custom icon.")])],1),t("title-link",{attrs:{h2:""}},[r._v("Outline")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(color="primary" outline) This is a normal alert with a primary color.\nw-alert(success outline) This is a success alert.\nw-alert(warning outline) This is a warning alert.\nw-alert(error outline) This is an error alert.\nw-alert(info outline) This is an info alert.\n')]},proxy:!0}])},[t("w-alert",{attrs:{color:"primary",outline:""}},[r._v("This is a normal alert with a primary color.")]),t("w-alert",{attrs:{success:"",outline:""}},[r._v("This is a success alert.")]),t("w-alert",{attrs:{warning:"",outline:""}},[r._v("This is a warning alert.")]),t("w-alert",{attrs:{error:"",outline:""}},[r._v("This is an error alert.")]),t("w-alert",{attrs:{info:"",outline:""}},[r._v("This is an info alert.")])],1),t("title-link",{attrs:{h2:""}},[r._v("Borders")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(success light no-border) This is a success alert with no border.\nw-alert(color="primary" no-border) This is a normal alert with no border.\nw-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.\n.w-flex.wrap.ma-2\n  w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.\n  w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.\n.w-flex.wrap.mx-2.mt2\n  w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.\n  w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.\n')]},proxy:!0}])},[t("w-alert",{attrs:{success:"",light:"","no-border":""}},[r._v("This is a success alert with no border.")]),t("w-alert",{attrs:{color:"primary","no-border":""}},[r._v("This is a normal alert with no border.")]),t("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple","no-border":""}},[r._v("This is an alert with a cyan background, purple color and no border.")]),t("div",{staticClass:"w-flex wrap ma-2"},[t("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-left":""}},[r._v("This is a normal alert with a left border.")]),t("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-right":""}},[r._v("This is a normal alert with a right border.")])],1),t("div",{staticClass:"w-flex wrap mx-2 mt2"},[t("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-top":""}},[r._v("This is a normal alert with a top border.")]),t("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-bottom":""}},[r._v("This is a normal alert with a left border.")])],1)],1),t("title-link",{attrs:{h2:""}},[r._v("Tile, round & shadow")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(color="primary" tile) This is a tile alert.\nw-alert(color="primary" round) This is a round alert.\nw-alert(color="primary" shadow) This is a normal alert with a shadow.\n')]},proxy:!0}])},[t("w-alert",{attrs:{color:"primary",tile:""}},[r._v("This is a tile alert.")]),t("w-alert",{attrs:{color:"primary",round:""}},[r._v("This is a round alert.")]),t("w-alert",{attrs:{color:"primary",shadow:""}},[r._v("This is a normal alert with a shadow.")])],1),t("title-link",{attrs:{h2:""}},[r._v("Dismiss")]),t("example",{scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.\nw-alert(v-model="dismissible2" dismiss error) This is a dismissible error type alert.\nw-alert(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.\nw-button(\n  bg-color="primary"\n  @click="dismissible1 = dismissible2 = dismissible3 = true"\n  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts')]},proxy:!0},{key:"js",fn:function(){return[r._v("data: () => ({\n  dismissible1: true,\n  dismissible2: true,\n  dismissible3: true\n})\n")]},proxy:!0}])},[t("w-alert",{staticClass:"mt0 mb2",attrs:{color:"primary",dismiss:""},model:{value:r.dismissible1,callback:function(s){r.dismissible1=s},expression:"dismissible1"}},[r._v("This is a dismissible alert.")]),t("w-alert",{staticClass:"my2",attrs:{dismiss:"",error:""},model:{value:r.dismissible2,callback:function(s){r.dismissible2=s},expression:"dismissible2"}},[r._v("This is a dismissible error type alert.")]),t("w-alert",{staticClass:"my2",attrs:{color:"amber",dismiss:"",round:""},model:{value:r.dismissible3,callback:function(s){r.dismissible3=s},expression:"dismissible3"}},[r._v("This is a dismissible round alert.")]),t("w-button",{staticClass:"mt2",attrs:{"bg-color":"primary",disabled:r.dismissible1&&r.dismissible2&&r.dismissible3},on:{click:function(s){r.dismissible1=r.dismissible2=r.dismissible3=!0}}},[r._v("Reset alerts")])],1),t("title-link",{attrs:{h2:""}},[r._v("Sizes")]),t("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert.size--xs(color="info" success) This is an extra small alert.\nw-alert.size--sm(color="info" success) This is a small alert.\nw-alert.size--md(color="info" success) This is a medium alert.\nw-alert.size--lg(color="info" success) This is a large alert.\nw-alert.size--xl(color="info" success) This is an extra large alert.')]},proxy:!0}])},[t("w-alert",{staticClass:"size--xs",attrs:{color:"info",success:""}},[r._v("This is an extra small alert.")]),t("w-alert",{staticClass:"size--sm",attrs:{color:"info",success:""}},[r._v("This is a small alert.")]),t("w-alert",{staticClass:"size--md",attrs:{color:"info",success:""}},[r._v("This is a medium alert.")]),t("w-alert",{staticClass:"size--lg",attrs:{color:"info",success:""}},[r._v("This is a large alert.")]),t("w-alert",{staticClass:"size--xl",attrs:{color:"info",success:""}},[r._v("This is an extra large alert.")])],1)],1)},a=[function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("p",[r._v("By default alerts are visible, but if a value or v-model is provided,\nit will show or hide according to it."),t("br"),r._v("\nLike in this example you can add a transition to animate its apparition.")])},function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("p",[r._v("Like in most components, you can apply a color to the text with the "),t("code",[r._v("color")]),r._v(" attribute,\nand a color to the background with the "),t("code",[r._v("bg-color")]),r._v(" attribute.")])}],e={data:function(){return{showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0}}},l=e,o=t("2877"),n=Object(o["a"])(l,i,a,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=alert-examples-vue.510861e3.js.map