(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-cropper"],{2601:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r=Object(o.createVNode)("div",{class:"el-form-item-msg"},"固定选区或者不固定",-1),a=Object(o.createVNode)("div",{class:"el-form-item-msg"},"图像压缩率，值为：0.1-1",-1),l=Object(o.createTextVNode)("Base64"),n=Object(o.createTextVNode)("Blob"),u=Object(o.createTextVNode)("File");c("d3b7"),c("3ca3"),c("ddb0"),c("2b3d"),c("b0c0");var i={name:"cropper",components:{scCropper:c("37da").a},data:function(){return{cropperImg:"img/avatar.jpg",compress:.5,aspectRatio:0,uploadImg:"",imgData:""}},methods:{getBase64:function(){var e=this;this.$refs.cropper.getCropData((function(t){e.imgData=t}))},getBlob:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){e.imgData=URL.createObjectURL(t)}))},getFile:function(){this.$refs.cropper.getCropFile((function(e){var t=document.createElement("a");t.download=e.name,t.href=URL.createObjectURL(e),t.click()}),"fileName.jpg","image/jpeg")}},render:function(e,t,c,i,d,p){var b=Object(o.resolveComponent)("sc-cropper"),s=Object(o.resolveComponent)("el-card"),j=Object(o.resolveComponent)("el-option"),m=Object(o.resolveComponent)("el-select"),O=Object(o.resolveComponent)("el-form-item"),f=Object(o.resolveComponent)("el-form"),V=Object(o.resolveComponent)("el-button"),C=Object(o.resolveComponent)("el-col"),v=Object(o.resolveComponent)("el-alert"),h=Object(o.resolveComponent)("sc-upload"),N=Object(o.resolveComponent)("el-row"),g=Object(o.resolveComponent)("el-main");return Object(o.openBlock)(),Object(o.createBlock)(g,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(N,{gutter:15},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{lg:14},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{shadow:"never"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{src:d.cropperImg,compress:d.compress,aspectRatio:d.aspectRatio,ref:"cropper"},null,8,["src","compress","aspectRatio"])]})),_:1}),Object(o.createVNode)(s,{shadow:"never",header:"参数和方法"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(f,{"label-width":"100px"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{label:"aspectRatio"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:d.aspectRatio,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.aspectRatio=e}),placeholder:"请选择"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{label:"自由",value:0}),Object(o.createVNode)(j,{label:"1:1",value:1}),Object(o.createVNode)(j,{label:"4:3",value:4/3}),Object(o.createVNode)(j,{label:"16:9",value:16/9})]})),_:1},8,["modelValue"]),r]})),_:1}),Object(o.createVNode)(O,{label:"compress"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:d.compress,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.compress=e}),placeholder:"请选择"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{label:"0.1",value:.1},null,8,["value"]),Object(o.createVNode)(j,{label:"0.5",value:.5},null,8,["value"]),Object(o.createVNode)(j,{label:"1",value:1})]})),_:1},8,["modelValue"]),a]})),_:1})]})),_:1}),Object(o.createVNode)(V,{type:"primary",plain:"",onClick:p.getBase64},{default:Object(o.withCtx)((function(){return[l]})),_:1},8,["onClick"]),Object(o.createVNode)(V,{type:"primary",plain:"",onClick:p.getBlob},{default:Object(o.withCtx)((function(){return[n]})),_:1},8,["onClick"]),Object(o.createVNode)(V,{type:"primary",plain:"",onClick:p.getFile},{default:Object(o.withCtx)((function(){return[u]})),_:1},8,["onClick"])]})),_:1}),Object(o.createVNode)(s,{shadow:"never",header:"方法结果"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)("img",{src:d.imgData},null,8,["src"])]})),_:1})]})),_:1}),Object(o.createVNode)(C,{lg:10},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{shadow:"never",header:"已内置剪裁的上传组件"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,{title:"设置cropper就可以开启上传前剪裁, 并已封装compress和aspectRatio, 打开F12查看网络请求",type:"success",style:{"margin-bottom":"20px"}}),Object(o.createVNode)(h,{modelValue:d.uploadImg,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.uploadImg=e}),title:"开启剪裁",cropper:!0,compress:1,aspectRatio:1},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}};t.default=i}}]);