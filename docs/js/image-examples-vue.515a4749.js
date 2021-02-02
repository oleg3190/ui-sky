(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["image-examples-vue"],{b254:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Why using w-image and not a simple <img>")]),a("div",{staticClass:"title3"},[e._v("A simple <img>")]),e._m(0),a("div",{staticClass:"title3"},[e._v("The w-image")]),e._m(1),a("title-link",{attrs:{h2:""}},[e._v("Default")]),a("p",[e._v("With no given width, height or ratio, the image is loaded full-size.")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/favicon.png`")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/favicon.png"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Given dimensions")]),a("example",{attrs:{"content-class":"text-center w-flex justify-space-around"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{staticClass:"mr5",attrs:{src:e.baseUrl+"images/japanese-wave.png",width:150,height:150}}),a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",width:500,height:150}})],1),a("title-link",{attrs:{h2:""}},[e._v("Image ratio")]),e._m(2),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",ratio:.233}})],1),a("title-link",{attrs:{h2:"",slug:"using-the-img-tag"}},[e._v("Using the <img> tag")]),e._m(3),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="650" tag="img" style="max-width: 100%")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{staticStyle:{"max-width":"100%"},attrs:{src:e.baseUrl+"images/japanese-wave.png",width:650,tag:"img"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Loading spinner")]),a("p",[e._v("This image is very big, so that you have time to see the spinner while loading.\nRefresh the page if you haven't seen it!")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :width="500" :height="250")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png",width:500,height:250}})],1),a("alert",{attrs:{tip:""}},[a("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),a("br"),e._v("\nThe reason for it is that the image first loads in the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n")]),a("title-link",{attrs:{h2:""}},[e._v("Transitions")]),a("p",[e._v("Once the image is fully loaded, it will display in one piece with a fade transition by default.\nYou can customize the transition.")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.wrap.justify-center.align-center\n  div.mr4.my2\n    .title3.mb2 Transition names\n    w-radios(\n      v-model="img.transition"\n      :items="transitions"\n      item-value-key="label")\n      template(#label="{ item }")\n        code '+e._s("{{ item.label }}")+'\n    w-button.mt2(@click="reload") Reload image\n  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  img: {\n    src: `https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png`,\n    transition: 'fade'\n  },\n  transitions: [\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale' },\n    { label: 'scale-fade' },\n    { label: 'bounce' },\n    { label: 'twist' },\n    { label: 'none', value: '' }\n  ]\n}),\nmethods: {\n  reload () {\n    this.img.src = ''\n    setTimeout(() => this.img.src = this.img.initialSrc, 500)\n  }\n}")]},proxy:!0}])},[a("div",{staticClass:"w-flex wrap justify-center align-center"},[a("div",{staticClass:"mr4 my2"},[a("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),a("w-radios",{attrs:{items:e.transitions,"item-value-key":"label"},scopedSlots:e._u([{key:"label",fn:function(t){var i=t.item;return[a("code",[e._v(e._s(i.label))])]}}]),model:{value:e.img.transition,callback:function(t){e.$set(e.img,"transition",t)},expression:"img.transition"}}),a("w-button",{staticClass:"mt2",on:{click:e.reload}},[e._v("Reload image")])],1),a("w-image",{attrs:{src:e.img.src,width:500,height:250,transition:e.img.transition}})],1)]),a("alert",{attrs:{tip:""}},[a("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),a("br"),e._v("\nThe reason for it is that the image first loads in the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n")]),a("title-link",{attrs:{h2:""}},[e._v("Fallback")]),e._m(4),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/broken.png`" :fallback="`${baseUrl}images/not-found.jpg`")\nw-alert(v-if="showError" error) Oops. The image could not load!')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/',\n  showError: false\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/broken.png",fallback:e.baseUrl+"images/not-found.jpg"},on:{error:function(t){e.showError=!0}}}),e.showError?a("w-alert",{attrs:{error:""}},[e._v("Oops. The image could not load!")]):e._e()],1),a("title-link",{attrs:{h2:""}},[e._v("Lazy")]),e._m(5),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can use process.env.BASE_URL\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png?v1",lazy:"",ratio:2550/5098}})],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("will display when loaded, and will take the dimensions of the actual image."),a("br"),e._v("\nWhen the image has a large file size, it will be loaded in chunks, and the image will be displayed\ntruncated until completely loaded."),a("br"),a("br"),e._v("\nIf ever it fails to load a broken image icon will display instead (different on every browser)."),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("can show a spinner while the image is loading, and display the image all at once with a nice\nanimation (like fade-in) when the iamge is ready."),a("br"),e._v("\nIt also allows you to set a fallback image in case the provided image might be unfound (convenient with\ndynamic sources)."),a("br"),e._v("\nIf ever no image is found, "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" will handle the error gracefully and will emit a\n"),a("code",[e._v("@error")]),e._v(" event containing the error. A blank transparent image will be displayed in place of the\nimage itself. So that, nothing looks broken.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You may want to have a responsive image. By setting an image ratio (height / width) and a width\nto 100% the image will always keep the ratio while resizing."),a("br"),e._v("\nIf no "),a("code",[e._v("width")]),e._v(" or "),a("code",[e._v("height")]),e._v(" is set but a "),a("code",[e._v("ratio")]),e._v(" is given, the "),a("code",[e._v("width")]),e._v(" will\nbe set to 100%.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can choose which tag the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" should use."),a("br"),e._v("\nIf you use an "),a("code",[e._v("img")]),e._v(" tag, the image will behave exactly like a standard image.\nThe biggest benefit of that, is that you can set a "),a("code",[e._v("width")]),e._v(" or "),a("code",[e._v("height")]),e._v(" only, keep a ratio,\nand apply a "),a("code",[e._v("max-width")]),e._v(" or "),a("code",[e._v("max-height")]),e._v(" on top of that so if the image would be bigger\nthan the container it would still apply the ratio on the constrained image.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent\nbackground will be there instead preventing the browser's broken image logo."),a("br"),e._v("\nYou can also provide a custom fallback image to display if the image cannot load."),a("br"),e._v("\nFor instance, in a e-boutique you may try to load the image of an item without knowing if this item\nhas an available image or not."),a("br"),a("br"),e._v("\nThanks to the "),a("code",[e._v("error")]),e._v(" emitted event, you can trigger a specific action, such as displaying an\nerror message like in this example. But this is optional, and without the custom alert nothing would\nlook broken when you provide a valid fallback image!")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),a("br"),e._v("\nWave UI internally uses an IntersectionObserver and will only start loading the image when it is\nvisible.")])}],s={data:function(){return{baseUrl:"/wave-ui/",img:{initialSrc:"".concat("/wave-ui/","images/spirit-island--alberta.png"),src:"".concat("/wave-ui/","images/spirit-island--alberta.png"),transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}},methods:{reload:function(){var e=this;this.img.src="",setTimeout((function(){return e.img.src=e.img.initialSrc}),500)}}},r=s,l=a("2877"),o=Object(l["a"])(r,i,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=image-examples-vue.515a4749.js.map