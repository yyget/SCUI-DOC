(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0ced70"],{"60bb":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i={class:"sceditor"};n("a9e3"),n("d3b7");var l=n("365c"),o=n("ca72"),c=n("e562"),r=n.n(c),d=(n("0d68"),n("ec27"),n("b080"),n("64d8"),n("4ea8"),n("3aea"),n("4237"),n("0a9d"),n("0335"),n("07d1"),n("ebac"),n("84ec"),n("0902"),n("90e7"),{components:{Editor:o.a},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},height:{type:Number,default:300},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"code image media link preview table quickbars template pagebreak lists advlist"},toolbar:{type:[String,Array],default:"undo redo |  forecolor backcolor bold italic underline strikethrough link | blocks fontfamily fontsize | \t\t\t\t\talignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | pagebreak | \t\t\t\t\timage media table template preview | code selectall"},templates:{type:Array,default:function(){return[]}}},data:function(){return{init:{language_url:"tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"tinymce/skins/ui/oxide",content_css:"tinymce/skins/content/default/content.css",menubar:!1,statusbar:!0,plugins:this.plugins,toolbar:this.toolbar,font_size_formats:"12px 14px 16px 18px 22px 24px 36px 72px",height:this.height,placeholder:this.placeholder,branding:!1,resize:!0,elementpath:!0,content_style:"",templates:this.templates,quickbars_selection_toolbar:"forecolor backcolor bold italic underline strikethrough link",quickbars_image_toolbar:"alignleft aligncenter alignright",quickbars_insert_toolbar:!1,image_caption:!0,image_advtab:!0,images_upload_handler:function(e){return new Promise((function(t,n){var a=new FormData;a.append("file",e.blob(),e.filename()),l.a.common.upload.post(a).then((function(e){t(e.data.src)})).catch((function(){n("Image upload failed")}))}))},setup:function(e){e.on("init",(function(){this.getBody().style.fontSize="14px"}))}},contentValue:this.modelValue}},watch:{modelValue:function(e){this.contentValue=e},contentValue:function(e){this.$emit("update:modelValue",e)}},mounted:function(){r.a.init({})},methods:{onClick:function(e){this.$emit("onClick",e,r.a)}}}),u=n("6b0d");const s=n.n(u)()(d,[["render",function(e,t,n,l,o,c){var r=Object(a.resolveComponent)("Editor");return Object(a.openBlock)(),Object(a.createElementBlock)("div",i,[Object(a.createVNode)(r,{modelValue:o.contentValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.contentValue=e}),init:o.init,disabled:n.disabled,placeholder:n.placeholder,onOnClick:c.onClick},null,8,["modelValue","init","disabled","placeholder","onOnClick"])])}]]);t.default=s}}]);