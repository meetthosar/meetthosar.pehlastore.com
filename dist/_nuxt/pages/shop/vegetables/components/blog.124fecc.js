(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{688:function(t,e,l){"use strict";l.r(e);var r=l(37),c={data:function(){return{title:"from the blog",subtitle:"recent story",swiperOption:{slidesPerView:3,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20}}}}},computed:Object(r.c)({bloglist:function(t){return t.blog.bloglist}}),methods:{getImgUrl:function(path){return l(363)("./"+path)}}},n=l(36),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"title1 section-t-space"},[l("h4",[t._v(t._s(t.subtitle))]),t._v(" "),l("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))])])])])]),t._v(" "),l("section",{staticClass:"blog p-t-0 ratio2_3 section-b-space"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[l("div",{staticClass:"swiper-wrapper"},t._l(t.bloglist,(function(e,r){return l("div",{key:r,staticClass:"swiper-slide"},[l("a",{attrs:{href:"#"}},[l("div",{staticClass:"classic-effect"},[l("div",[l("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0]),alt:""}})]),t._v(" "),l("span")])]),t._v(" "),l("div",{staticClass:"blog-details"},[l("h4",[t._v(t._s(e.date))]),t._v(" "),l("a",{attrs:{href:"#"}},[l("p",[t._v(t._s(e.title))])]),t._v(" "),l("hr",{staticClass:"style1"}),t._v(" "),l("h6",[t._v("by: "+t._s(e.author)+" , 2 Comment")])])])})),0)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);