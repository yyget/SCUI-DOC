(window.webpackJsonp=window.webpackJsonp||[]).push([["other-viewTags"],{"470b":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o.createTextVNode)("打开个人信息"),r=Object(o.createTextVNode)("打开后执行"),a=Object(o.createTextVNode)("刷新当前"),i=Object(o.createTextVNode)("关闭当前"),u=Object(o.createTextVNode)("关闭其他"),l=Object(o.createTextVNode)("关闭后执行"),s=Object(o.createTextVNode)("设置标题"),p=Object(o.createTextVNode)("fullpage");var f=n("2909"),d=(n("b0c0"),n("fb6a"),n("159b"),n("323e")),m=n.n(d),b=(n("a5d8"),n("a18c")),h=n("4360"),O={refresh:function(){m.a.start();var e=b.a.currentRoute.value;h.a.commit("removeKeepLive",e.name),h.a.commit("setRouteShow",!1),Object(o.nextTick)((function(){h.a.commit("pushKeepLive",e.name),h.a.commit("setRouteShow",!0),m.a.done()}))},close:function(e){var t=e||b.a.currentRoute.value;h.a.commit("removeViewTags",t),h.a.commit("removeIframeList",t),h.a.commit("removeKeepLive",t.name);var n=h.a.state.viewTags.viewTags.slice(-1)[0];n?b.a.push(n):b.a.push("/")},closeNext:function(e){var t=b.a.currentRoute.value;(h.a.commit("removeViewTags",t),h.a.commit("removeIframeList",t),h.a.commit("removeKeepLive",t.name),e)&&e(h.a.state.viewTags.viewTags)},closeOther:function(){var e=this,t=b.a.currentRoute.value;Object(f.a)(h.a.state.viewTags.viewTags).forEach((function(n){if(n.meta&&n.meta.affix||t.fullPath==n.fullPath)return!0;e.close(n)}))},setTitle:function(e){h.a.commit("updateViewTagsTitle",e)}},j={name:"viewTags",data:function(){return{input:"newTabName"}},mounted:function(){},methods:{open1:function(){this.$router.push("/usercenter")},open2:function(){this.$router.push("/usercenter"),this.$route.is=!0},refresh1:function(){O.refresh()},close1:function(){O.close()},close2:function(){O.closeOther()},close3:function(){var e=this;O.closeNext((function(t){console.log(t),e.$router.push("/usercenter"),e.$route.is=!0}))},set1:function(){O.setTitle(this.input)},fullpage:function(){this.$router.push("/other/fullpage")}}},v=n("6b0d");const w=n.n(v)()(j,[["render",function(e,t,n,f,d,m){var b=Object(o.resolveComponent)("el-button"),h=Object(o.resolveComponent)("el-alert"),O=Object(o.resolveComponent)("el-card"),j=Object(o.resolveComponent)("el-input"),v=Object(o.resolveComponent)("el-form-item"),w=Object(o.resolveComponent)("el-form"),C=Object(o.resolveComponent)("el-main");return Object(o.openBlock)(),Object(o.createBlock)(C,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{shadow:"never",header:"打开"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.open1},{default:Object(o.withCtx)((function(){return[c]})),_:1},8,["onClick"]),Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.open2},{default:Object(o.withCtx)((function(){return[r]})),_:1},8,["onClick"]),Object(o.createVNode)(h,{title:"打开后执行原理: 路由push时,在当前路由对象中插入一个特殊标识, 在目标视图中beforeRouteEnter获取判断是否需要执行特殊方法",style:{"margin-top":"20px"}})]})),_:1}),Object(o.createVNode)(O,{shadow:"never",header:"刷新",style:{"margin-top":"15px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.refresh1},{default:Object(o.withCtx)((function(){return[a]})),_:1},8,["onClick"])]})),_:1}),Object(o.createVNode)(O,{shadow:"never",header:"关闭",style:{"margin-top":"15px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.close1},{default:Object(o.withCtx)((function(){return[i]})),_:1},8,["onClick"]),Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.close2},{default:Object(o.withCtx)((function(){return[u]})),_:1},8,["onClick"]),Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.close3},{default:Object(o.withCtx)((function(){return[l]})),_:1},8,["onClick"])]})),_:1}),Object(o.createVNode)(O,{shadow:"never",header:"设置",style:{"margin-top":"15px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{inline:!0},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{modelValue:d.input,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.input=e}),placeholder:"请输入内容"},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(v,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.set1},{default:Object(o.withCtx)((function(){return[s]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(O,{shadow:"never",header:"整页路由",style:{"margin-top":"15px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{type:"primary",plain:"",onClick:m.fullpage},{default:Object(o.withCtx)((function(){return[p]})),_:1},8,["onClick"]),Object(o.createVNode)(h,{title:"变更路由的层级关系,向上推至顶级达到在layout视图中显示. 只需要在路由中设置 meta.fullpage 即可",style:{"margin-top":"20px"}})]})),_:1})]})),_:1})}]]);t.default=w}}]);