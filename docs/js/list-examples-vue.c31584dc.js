(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["list-examples-vue"],{a61e:function(e,t,l){"use strict";l("b0ad")},b0ad:function(e,t,l){},fd2e:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"lists-demo"},[e._m(0),l("w-list",{attrs:{items:4,icon:"wi-check"},scopedSlots:e._u([{key:"item.1",fn:function(){return[e._v("Simple list with or without icons")]},proxy:!0},{key:"item.2",fn:function(){return[e._v("Checklists")]},proxy:!0},{key:"item.3",fn:function(){return[e._v("Navigation menus")]},proxy:!0},{key:"item.4",fn:function(){return[e._v("List of selectable items")]},proxy:!0}])}),l("title-link",{attrs:{h2:""}},[e._v("Basic lists")]),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap> <div class="grow"> <div class="title3 mb6">Most basic</div> <w-list :items="items"></w-list> </div> <div class="grow"> <div class="title3 mb6">With icons</div> <w-list :items="items" icon="wi-check"></w-list> </div> </w-flex>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items: [ { label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }, { label: 'Item 4' }, { label: 'Item 5', disabled: true } ] }) ")]},proxy:!0}])},[l("div",{staticClass:"w-flex wrap"},[l("div",{staticClass:"grow"},[l("div",{staticClass:"title3"},[e._v("Most basic")]),l("w-list",{attrs:{items:e.listItems1}})],1),l("div",{staticClass:"grow"},[l("div",{staticClass:"title3"},[e._v("With icons")]),l("w-list",{attrs:{items:e.listItems1,icon:"wi-check"}})],1)])]),l("title-link",{attrs:{h2:""}},[e._v("Color & hoverable")]),e._m(1),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items1" color="pink" hover></w-list> <br /> <w-list :items="items1" bg-color="blue-light5" color="primary" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items1: [ { label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }, { label: 'Item 4' } ] }) ")]},proxy:!0}])},[l("w-list",{attrs:{items:e.listItems4,color:"pink",hover:""}}),l("br"),l("w-list",{attrs:{items:e.listItems4,"bg-color":"blue-light5",color:"primary",hover:""}})],1),l("title-link",{attrs:{h3:""}},[e._v("Different color per item")]),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items: [ { label: 'Item 1', color: 'amber' }, { label: 'Item 2', color: 'warning' }, { label: 'Item 3', color: 'error' }, { label: 'Item 4', color: 'pink' } ] }) ")]},proxy:!0}])},[l("w-list",{attrs:{items:e.listItems5,hover:""}})],1),l("title-link",{attrs:{h3:""}},[e._v("Selection-only color")]),e._m(2),e._m(3),e._m(4),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :model-value="[]" :items="listItems4" selection-color="pink" multiple></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items1: [ { label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }, { label: 'Item 4' } ] }) ")]},proxy:!0}])},[l("w-list",{attrs:{"model-value":[],items:e.listItems4,"selection-color":"pink",multiple:""}})],1),l("title-link",{attrs:{h2:""}},[e._v("Custom rendering")]),e._m(5),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="5" hover> <template #item="{ index }">'+e._s("{{ index }}")+"</template> <template #item.3> <strong>This is the great item #3</strong> </template> </w-list> ")]},proxy:!0}])},[l("w-list",{attrs:{items:5,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.index;return[e._v("Item "+e._s(l))]}},{key:"item.3",fn:function(){return[l("strong",[e._v("This is the great item #3")])]},proxy:!0}])})],1),e._m(6),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" hover> <template #item="{ item }"> <w-flex align-center justify-space-between> '+e._s("{{ item.label }}")+" <w-icon md>"+e._s("{{ item.icon }}")+"</w-icon> </w-flex> </template> </w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items: [ { label: 'Star', icon: 'mdi mdi-star' }, { label: 'Check', icon: 'mdi mdi-check' }, { label: 'Cross', icon: 'mdi mdi-close' }, { label: 'Info', icon: 'mdi mdi-information' }, { label: 'Warning', icon: 'mdi mdi-alert' }, { label: 'Disabled', icon: 'mdi mdi-minus-circle' } ] }) ")]},proxy:!0}])},[l("w-list",{attrs:{items:e.listItems2,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[l("div",{staticClass:"w-flex align-center justify-space-between"},[e._v(e._s(i.label)),l("w-icon",{attrs:{md:""}},[e._v(e._s(i.icon))])],1)]}}])})],1),l("title-link",{attrs:{h2:""}},[e._v("Selectable list items")]),e._m(7),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-radios v-model="multiple" :items="radios" inline></w-radios> <w-flex wrap align-center> <w-list v-model="selection" :items="items" color="deep-purple" :multiple="multiple" @item-click="itemClicked = $event" class="mt6 mr4 grow"> </w-list> <div v-if="itemClicked"> <div class="title3">Clicked item:</div> <span>'+e._s("{{ itemClicked }}")+'</span> </div> </w-flex> <div class="title3 mt2"> Selected item: <code v-if="!multiple || Array.isArray(selection)" class="ml2"> '+e._s("{{ selection || 'null' }}")+' </code> <code v-else-if="multiple" class="ml2"> '+e._s("{{ selection ? [selection] : '[]' }}")+" </code> </div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ radios: [ { label: 'Single selection', value: false }, { label: 'Multiple selections', value: true } ], multiple: false, items: [ { label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }, { label: 'Item 3', value: 3 }, { label: 'Item 4', value: 4 }, { label: 'Item 5', value: 5, disabled: true } ], selection: 2, itemClicked: null })")]},proxy:!0}])},[l("w-radios",{staticClass:"mb6",attrs:{items:e.radios,inline:""},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}}),l("w-flex",{attrs:{wrap:"","align-center":""}},[l("w-list",{staticClass:"grow mr4",attrs:{items:e.listItems1,color:"deep-purple",multiple:e.multiple},on:{itemClick:function(t){e.itemClicked=t}},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),e.itemClicked?l("div",[l("div",{staticClass:"title3"},[e._v("clicked item ("),l("span",{staticClass:"code"},[e._v("item-click")]),e._v(" event):")]),l("br"),l("span",{staticClass:"code"},[e._v(e._s(e.itemClicked))])]):e._e()],1),l("div",{staticClass:"title3 mt2"},[e._v("Selected item:"),!e.multiple||Array.isArray(e.selection1)?l("code",{staticClass:"ml2"},[e._v(e._s(e.selection1||"null"))]):e.multiple?l("code",{staticClass:"ml2"},[e._v(e._s(e.selection1?[e.selection1]:"[]"))]):e._e()])],1),e._m(8),l("title-link",{attrs:{h2:""}},[e._v("Checklists")]),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap basis-zero :gap="3"> <div class="grow"> <p class="title3 mb4">Default</p> <w-list v-model="selection1" :items="listItems1" checklist color="green"> </w-list> </div> <div class="grow"> <p class="title3 mb4">Round checkboxes</p> <w-list v-model="selection2" :items="listItems1" checklist round-checkboxes color="green"> </w-list> </div> </w-flex> <w-flex wrap basis-zero :gap="3" class="mt4"> <div class="grow"> <p class="title3 mb4">Custom rendering, default styles</p> <w-list :items="listItems2" item-value-key="id" checklist color="primary"> <template #item="{ item }"> <span>'+e._s("{{ item.label }}")+'</span> <div class="spacer"></div> <w-icon md>'+e._s("{{ item.icon }}")+'</w-icon> </template> </w-list> </div> <div class="grow"> <p class="title3 mb4">Custom rendering & styles</p> <w-list :items="listItems2" item-value-key="id" checklist color="primary" class="custom"> <template #item="{ item }"> <span>'+e._s("{{ item.label }}")+'</span> <div class="spacer"></div> <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon> </template> </w-list> </div> </w-flex>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ listItems1: [ { label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }, { label: 'Item 3', value: 3 }, { label: 'Item 4', value: 4 }, { label: 'Item 5', value: 5, disabled: true } ], listItems2: [ { label: 'Star', id: 'star', icon: 'mdi mdi-star' }, { label: 'Check', id: 'check', icon: 'mdi mdi-check' }, { label: 'Cross', id: 'cross', icon: 'mdi mdi-close' }, { label: 'Info', id: 'info', icon: 'mdi mdi-information' }, { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert' }, { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', disabled: true } ], selection1: [1, 3], selection2: 1 })")]},proxy:!0},{key:"css",fn:function(){return[e._v(".w-list.custom .w-list__item-label:before {display: none;} .w-list.custom .w-list__item-label label { position: relative; transition: 0.3s ease-in-out; } .w-list.custom .w-list__item-label--active label { opacity: 0.6; color: #999; } .w-list.custom .w-list__item-label label:before { content: ''; position: absolute; top: 50%; left: 0; width: 0; border-top: 1px solid #999; pointer-events: none; transition: 0.3s ease-in-out; } .w-list.custom .w-list__item-label--active label:before { width: 100%; } ")]},proxy:!0}])},[l("w-flex",{attrs:{wrap:"","basis-zero":"",gap:3}},[l("div",{staticClass:"grow"},[l("div",{staticClass:"title3 mb4"},[e._v("Default")]),l("w-list",{attrs:{items:e.listItems1,checklist:"",color:"green"},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}})],1),l("div",{staticClass:"grow"},[l("div",{staticClass:"title3 mb4"},[e._v("Round checkboxes")]),l("w-list",{attrs:{items:e.listItems1,checklist:"","round-checkboxes":"",color:"green"},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}})],1)]),l("w-flex",{staticClass:"mt4",attrs:{wrap:"","basis-zero":"",gap:3}},[l("div",{staticClass:"grow"},[l("div",{staticClass:"title3 mb4"},[e._v("Custom rendering, default styles")]),l("w-list",{attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[l("span",[e._v(e._s(i.label))]),l("div",{staticClass:"spacer"}),l("w-icon",{attrs:{md:""}},[e._v(e._s(i.icon))])]}}])})],1),l("div",{staticClass:"grow"},[l("div",{staticClass:"title3 mb4"},[e._v("Custom rendering & styles")]),l("w-list",{staticClass:"custom",attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[l("span",[e._v(e._s(i.label))]),l("div",{staticClass:"spacer"}),l("w-icon",{attrs:{md:""}},[e._v(e._s(i.icon))])]}}])})],1)])],1),l("title-link",{attrs:{h3:""}},[e._v("Checklist colors")]),l("p",[e._v("A checklist can have all the color options that the normal list can have, even a different color per item.")]),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list v-model="selection" :items="items" checklist></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items: [ { label: 'Item 1', value: 1, color: 'amber' }, { label: 'Item 2', value: 2, color: 'warning' }, { label: 'Item 3', value: 3, color: 'error' }, { label: 'Item 4', value: 4, color: 'pink' } ], selection: [1, 2, 3, 4] }) ")]},proxy:!0}])},[l("w-list",{attrs:{items:e.listItems5,checklist:""},model:{value:e.selection5,callback:function(t){e.selection5=t},expression:"selection5"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Navigation lists")]),e._m(9),e._m(10),l("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" nav color="primary"> <template #item="{ item }"> <span>'+e._s("{{ item.label }}")+'</span> <div class="spacer"></div> <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon> </template> </w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({ items: [ { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' }, { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' }, { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' }, { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' }, { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' }, { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true } ] })")]},proxy:!0}])},[l("w-list",{attrs:{items:e.listItems2,nav:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[l("span",[e._v(e._s(i.label))]),l("div",{staticClass:"spacer"}),l("w-icon",{attrs:{md:""}},[e._v(e._s(i.icon))])]}}])})],1),l("router-view")],1)},s=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("The "),l("span",{staticClass:"code"},[e._v("w-list")]),e._v(" component has multiple uses:")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("Like in most components, you can set a "),l("code",[e._v("color")]),e._v(" for the text and a "),l("code",[e._v("bg-color")]),e._v(" for the background.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",{staticClass:"grey-light1"},[e._v("In addition to the hover effect, the items may also be selectable (as per the "),l("a",{attrs:{href:"#selectable-list-items"}},[e._v("Selectable list items example")]),e._v("), but in this example we are only demonstrating the selection color.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("You may want a default color for all the items, but a different color for the selection only."),l("br"),e._v(" You can use the "),l("code",[e._v("selection-color")]),e._v(" option for this purpose.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If no "),l("code",[e._v("color")]),e._v(" and no "),l("code",[e._v("selection-color")]),e._v(" are set, the "),l("code",[e._v("selection-color")]),e._v(" will be set to primary by default."),l("br"),e._v(" In that case, if you don't want to default to the primary color, you can explicitly set "),l("code",[e._v("selection-color")]),e._v(" to a falsy value (false, null, or empty string), or another color.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("In this example, we don't use the component's data at all."),l("br"),e._v(" You can easily define items directly in the template and have a different custom layout for every list item just like in this example.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It's up to you to define your your list contents in the component's data or directly in the template."),l("br"),e._v(" In this example each item has a different icon stored in the data object.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If you provide a "),l("code",[e._v("v-model")]),e._v(" or "),l("code",[e._v("model-value")]),e._v(", the list items become selectable.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("Note: you can get the list selection from the v-model, or by listening to the "),l("span",{staticClass:"code"},[e._v("input")]),e._v(" event.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("The navigation list expects a "),l("code",[e._v("route")]),e._v(" attribute in the items that are links."),l("br"),e._v(" If you are using Vue Router, all the links will automatically be "),l("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s."),l("br")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is possible to disable a link with a "),l("code",[e._v("disabled: true")]),e._v(" attribute in the item.")])}],a={data:function(){return{radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:1,selection5:[1,2,3,4],itemClicked:null}}},o=a,n=(l("a61e"),l("2877")),r=Object(n["a"])(o,i,s,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=list-examples-vue.c31584dc.js.map