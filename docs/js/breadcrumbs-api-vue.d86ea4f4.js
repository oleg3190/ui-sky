(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["breadcrumbs-api-vue"],{c000:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.events,title:"Events"}})],1)},s=[],r=(o("13d5"),o("0893")),i={color:'Applies a text color to the breadcrumb\'s links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',separatorColor:'Applies a text color (also applies to icons) to the breadcrumb\'s separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item.",itemRouteKey:"The property name (aka key) in each item object where to find the link of the item.",xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},n={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},l={},c={data:function(){return{propsDescs:i,slots:n}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]={description:l[t]||""})&&e}),{})}}},p=c,m=o("2877"),h=Object(m["a"])(p,a,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=breadcrumbs-api-vue.d86ea4f4.js.map