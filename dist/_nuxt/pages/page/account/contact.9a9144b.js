(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1046:function(e,t,r){"use strict";r.r(t);var l=r(365),o=r(364),n=r(366),m={components:{Header:l.a,Footer:o.a,Breadcrumbs:n.a},data:function(){return{phoneimage:r(575),emailimage:r(571),phone1:"+91 123 - 456 - 7890",phone2:"+86 163 - 451 - 7894",address:"ABC Complex,Near xyz, New York <br /> USA 123456",email1:"Support@Shopcart.com",email2:"info@shopcart.com",errors:[],fname:null,lname:null,email:null,phone:null,message:null}},methods:{checkForm:function(e){if(this.errors=[],this.fname||this.errors.push("First name required."),this.lname||this.errors.push("Last name required."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.phone||this.errors.push("Phone Number required."),this.message||this.errors.push("Message required."),!this.errors.length)return!0;e.preventDefault()},validEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}}},c=r(36),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),e._v(" "),r("Breadcrumbs",{attrs:{title:"Contact"}}),e._v(" "),r("section",{staticClass:"contact-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row section-b-space"},[e._m(0),e._v(" "),r("div",{staticClass:"col-lg-5"},[r("div",{staticClass:"contact-right"},[r("ul",[r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:e.phoneimage,alt:"Generic placeholder image"}}),e._v(" "),r("h6",[e._v("Contact Us")])]),e._v(" "),r("div",{staticClass:"media-body"},[r("p",[e._v(e._s(e.phone1))]),e._v(" "),r("p",[e._v(e._s(e.phone2))])])]),e._v(" "),r("li",[e._m(1),e._v(" "),r("div",{staticClass:"media-body"},[r("p",{domProps:{innerHTML:e._s(e.address)}})])]),e._v(" "),r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:e.emailimage,alt:"Generic placeholder image"}}),e._v(" "),r("h6",[e._v("Email")])]),e._v(" "),r("div",{staticClass:"media-body"},[r("p",[e._v(e._s(e.email1))]),e._v(" "),r("p",[e._v(e._s(e.email2))])])]),e._v(" "),r("li",[e._m(2),e._v(" "),r("div",{staticClass:"media-body"},[r("p",[e._v(e._s(e.email1))]),e._v(" "),r("p",[e._v(e._s(e.email2))])])])])])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:e.checkForm}},[e.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},e._l(e.errors,(function(t,l){return r("li",{key:l},[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"fname"}},[e._v("First Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],staticClass:"form-control",attrs:{type:"text",id:"fname",placeholder:"First Name",name:"fname",required:""},domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"lname"}},[e._v("Last Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],staticClass:"form-control",attrs:{type:"text",id:"lname",placeholder:"Last Name",name:"lname",required:""},domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"phone"}},[e._v("Phone number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",id:"phone",placeholder:"Enter your number",name:"phone",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"message"}},[e._v("Write Your Message")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{placeholder:"Write Your Message",id:"message",name:"message",rows:"6"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),e._m(3)])])])])])]),e._v(" "),r("Footer")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-lg-7 map"},[t("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321",allowfullscreen:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-icon"},[t("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),this._v(" "),t("h6",[this._v("Address")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-icon"},[t("i",{staticClass:"fa fa-fax",attrs:{"aria-hidden":"true"}}),this._v(" "),t("h6",[this._v("Fax")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-md-12"},[t("input",{staticClass:"btn btn-solid",attrs:{type:"submit",value:"Send Your Message"}})])}],!1,null,null,null);t.default=component.exports}}]);