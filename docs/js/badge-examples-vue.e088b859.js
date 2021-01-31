(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["badge-examples-vue"],{"0f68":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("title-link",{attrs:{h2:""}},[e._v("Default")]),o("p",[e._v("The default badge background color is primary.")]),o("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge>\n  <template #badge>3</template>\n  <w-button color="primary">\n    <w-icon class="mr1">mdi mdi-email</w-icon>\n    Emails\n  </w-button>\n</w-badge>\n')]},proxy:!0}])},[o("w-badge",{scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-button",{staticClass:"primary",attrs:{text:""}},[o("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-email")]),e._v("Emails")],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("V-model")]),o("p",[e._v("The badge appears if one of these conditions is fulfilled:")]),e._m(0),o("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(align-center)\n  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)\n\n  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)\n    w-icon(color="grey-light1" size="2.4em") mdi mdi-email\n\n  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: 0\n})\n")]},proxy:!0}])},[o("w-flex",{attrs:{"align-center":""}},[o("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge--}}}),o("w-badge",{staticClass:"mx6",attrs:{"bg-color":"error",overlap:""},model:{value:e.showBadge,callback:function(t){e.showBadge=t},expression:"showBadge"}},[o("w-icon",{attrs:{color:"grey-light1",size:"2.4em"}},[e._v("mdi mdi-email")])],1),o("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge++}}})],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Positions")]),o("p",[e._v("The default position is top right.")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Top\nw-badge.ml4.mr10(top left)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\nw-badge(top right)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n.title4.mt6.mb2 Bottom\nw-badge.ml4.mr10(bottom left)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\nw-badge(bottom right)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[o("div",{staticClass:"title4 mb2"},[e._v("Top")]),o("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("div",{staticClass:"title4 mt6 mb2"},[e._v("Bottom")]),o("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Color and background color")]),e._m(1),o("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge.mr10(bg-color="error")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\nw-badge.mr10(color="yellow")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\nw-badge(bg-color="lime-light1" color="green-dark2")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{color:"yellow"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{"bg-color":"lime-light1",color:"green-dark2"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Dot")]),o("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge.mr10(dot bg-color="red")\n  w-icon(size="2.5em") mdi mdi-account\nw-badge(dot bottom bg-color="red")\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red"}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{attrs:{dot:"",bottom:"","bg-color":"red"}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(2),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title3.mb2 Dots\nw-flex(wrap)\n  w-badge.mr10(dot bg-color="red" xs)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" sm)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" md)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" lg)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" xl)\n    w-icon(size="2.5em") mdi mdi-account\n\n.title3.mt6.mb2 Text content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n\n.title3.mt6.mb2 Numeric content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("div",{staticClass:"title3 mb2"},[e._v("Dots")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xs:""}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",sm:""}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",md:""}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",lg:""}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xl:""}},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("div",{staticClass:"title3 mt6 mb2"},[e._v("Text content")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("div",{staticClass:"title3 mt6 mb2"},[e._v("Numeric content")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Overlap")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb3 Top\n.w-flex.wrap.align-center\n  w-badge.ml4.mr10(top left)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(top right)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right\n\n  w-badge.mr10(top left overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(top right overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n.title4.mt8.mb3 Bottom\n.w-flex.wrap.align-center\n  w-badge.ml4.mr10(bottom left)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge0(bottom right)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right\n\n  w-badge.mr10(bottom left overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(bottom right overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[o("div",{staticClass:"title4 mb3"},[e._v("Top")]),o("div",{staticClass:"w-flex wrap align-center"},[o("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{staticClass:"mr10",attrs:{top:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{top:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),o("div",{staticClass:"title4 mt8 mb3"},[e._v("Bottom")]),o("div",{staticClass:"w-flex wrap align-center"},[o("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{staticClass:"mr10",attrs:{bottom:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{bottom:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)]),o("div",{staticClass:"title3 mt8 mb3"},[e._v("Overlaps with different sizes")]),o("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap align-center)\n  w-badge.mr10(overlap xs)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap sm)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap md)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap lg)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge(overlap xl)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[o("w-flex",{attrs:{wrap:"","align-center":""}},[o("w-badge",{staticClass:"mr10",attrs:{overlap:"",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{overlap:"",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{overlap:"",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{overlap:"",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{attrs:{overlap:"",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Force round badge")]),e._m(3),o("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge(bg-color="error")\n  template(#badge="")\n    span.size--sm 11\n  w-icon(size="2.5em") mdi mdi-account\n\nw-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\nw-badge(bg-color="error" round)\n  template(#badge="")\n    span.size--sm 11\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-badge",{attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[o("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{attrs:{"bg-color":"error",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[o("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Icons")]),o("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge.mr10(bg-color="success" overlap round)\n  template(#badge="")\n    w-icon mdi mdi-check\n  w-icon(size="2.5em") mdi mdi-account\n\nw-badge.mr10(bg-color="error" overlap round)\n  template(#badge="")\n    w-icon mdi mdi-close\n  w-icon(size="2.5em") mdi mdi-account\n\nw-badge(bg-color="transparent" overlap round)\n  template(#badge="")\n    w-icon(color="pink-light1" md) mdi mdi-heart\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"success",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[o("w-icon",[e._v("mdi mdi-check")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[o("w-icon",[e._v("mdi mdi-close")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{attrs:{"bg-color":"transparent",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[o("w-icon",{attrs:{color:"pink-light1",md:""}},[e._v("mdi mdi-heart")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Override badge padding")]),o("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge(bg-color="error" badge-class="px1")\n  template(#badge="") busy\n  w-icon(size="2.5em") mdi mdi-account\n\nw-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\nw-badge(bg-color="error" badge-class="px4")\n  template(#badge="") busy\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-badge",{attrs:{"bg-color":"error","badge-class":"px1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{attrs:{"bg-color":"error","badge-class":"px4"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Transitions")]),e._m(4),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center.wrap\n  w-flex(column no-grow align-end)\n    span.mb2 Toggle with this transition effect:\n    w-button.code.ma1(@click="transition = \'fade\';showBadge = !showBadge" bg-color="primary" xs) fade\n    w-button.code.ma1(@click="transition = \'bounce\';showBadge = !showBadge" bg-color="primary" xs) bounce\n    w-button.code.ma1(@click="transition = \'twist\';showBadge = !showBadge" bg-color="primary" xs) twist\n    w-button.code.ma1(@click="transition = \'scale\';showBadge = !showBadge" bg-color="primary" xs) scale\n    w-button.code.ma1(@click="transition = \'scale-fade\';showBadge = !showBadge" bg-color="primary" xs) scale-fade\n    w-button.code.ma1(@click="transition = \'slide-fade-left\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left\n    w-button.code.ma1(@click="transition = \'slide-fade-right\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right\n    w-button.code.ma1(@click="transition = \'slide-fade-up\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-up\n    w-button.code.ma1(@click="transition = \'slide-fade-down\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-down\n\n  .w-flex.grow\n    .xs2\n    .xs10\n      w-badge.ma4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)\n        template(#badge="") 5\n        w-icon(color="grey-light1" size="2.5em") mdi mdi-email')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: false,\n  transition: 'fade'\n})")]},proxy:!0}])},[o("div",{staticClass:"w-flex align-center wrap"},[o("w-flex",{attrs:{column:"","no-grow":"","align-end":""}},[o("span",{staticClass:"mb2"},[e._v("Toggle with this transition effect:")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="fade",e.showBadge2=!e.showBadge2}}},[e._v("fade")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="bounce",e.showBadge2=!e.showBadge2}}},[e._v("bounce")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="twist",e.showBadge2=!e.showBadge2}}},[e._v("twist")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale",e.showBadge2=!e.showBadge2}}},[e._v("scale")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale-fade",e.showBadge2=!e.showBadge2}}},[e._v("scale-fade")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-left",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-left")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-right",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-right")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-up",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-up")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-down",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-down")])],1),o("div",{staticClass:"w-flex grow"},[o("div",{staticClass:"xs2"}),o("div",{staticClass:"xs10"},[o("w-badge",{staticClass:"ma4",attrs:{transition:e.transition,"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.showBadge2,callback:function(t){e.showBadge2=t},expression:"showBadge2"}},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)])],1)])],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("No v-model or value is provided but a badge slot is.")]),o("li",[e._v("A v-model or a value is given and is not "),o("code",[e._v("null")]),e._v(", "),o("code",[e._v("false")]),e._v(" or "),o("code",[e._v("0")]),e._v("."),o("br"),e._v("\nIf you want to show one of these values, you can cast it to a string and it will show up.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Like in most components, you can set a "),o("code",[e._v("color")]),e._v(" for the text and a "),o("code",[e._v("bg-color")]),e._v(" for the\nbackground.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The badge size can be controlled via the preset sizes "),o("code",[e._v("xs")]),e._v(", "),o("code",[e._v("sm")]),e._v(", "),o("code",[e._v("md")]),e._v(",\n"),o("code",[e._v("lg")]),e._v(", "),o("code",[e._v("xl")]),e._v(" or via the "),o("code",[e._v("size")]),e._v(" prop (sets the font-size).")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("For instance, if you increase the font size of the badge like in this example, the natural behavior\nof the badge is to increase its width to adapt to its content."),o("br"),e._v("\nWith the option "),o("code",[e._v("round")]),e._v(" you can force it to be round.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The default transition is "),o("code",[e._v("fade")]),e._v(".")])}],s={data:function(){return{showBadge:0,showBadge2:!1,transition:"fade"}}},r=s,n=o("2877"),c=Object(n["a"])(r,i,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=badge-examples-vue.e088b859.js.map