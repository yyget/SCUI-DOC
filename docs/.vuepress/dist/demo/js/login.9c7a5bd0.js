(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{"4edb":function(e,t,r){},e457:function(e,t,r){"use strict";r.r(t);var o=r("7a23");Object(o.pushScopeId)("data-v-5f1bc06b");var n={class:"login_bg"},c={class:"login_container"},a={class:"login_body"},l={class:"login-form"},s={class:"login-logo"},i=["alt"],u=Object(o.createElementVNode)("h2",null,"用户登录",-1),d=Object(o.createTextVNode)("忘记密码？"),m=Object(o.createTextVNode)("登 录"),b=Object(o.createTextVNode)("其他登录方式"),O={class:"login-oauth"},p=Object(o.createElementVNode)("div",{class:"login-sidebox"},[Object(o.createElementVNode)("div",{class:"login-sidebox__title"},[Object(o.createElementVNode)("h2",null,"SCUI"),Object(o.createElementVNode)("h4",null,"高性能 / 精致 / 优雅"),Object(o.createElementVNode)("p",null,"基于Vue3 + Element-Plus 的中后台前端解决方案。")]),Object(o.createElementVNode)("img",{src:"img/loginbg.svg"})],-1),j={class:"login-footer"};Object(o.popScopeId)();var g=r("1da1"),f=(r("96cf"),r("ac1f"),r("5319"),{data:function(){return{userType:"admin",ruleForm:{user:"admin",password:"admin",autologin:!1},rules:{user:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},islogin:!1}},watch:{userType:function(e){"admin"==e?(this.ruleForm.user="admin",this.ruleForm.password="admin"):"user"==e&&(this.ruleForm.user="user",this.ruleForm.password="user")}},created:function(){this.$TOOL.data.remove("TOKEN"),this.$TOOL.data.remove("USER_INFO"),this.$TOOL.data.remove("MENU"),this.$TOOL.data.remove("PERMISSIONS"),this.$TOOL.data.remove("grid"),this.$store.commit("clearViewTags"),this.$store.commit("clearKeepLive"),this.$store.commit("clearIframeList"),console.log("%c SCUI %c Gitee: https://gitee.com/lolicode/scui","background:#666;color:#fff;border-radius:3px;","")},methods:{login:function(){var e=this;return Object(g.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.islogin=!0,r={username:e.ruleForm.user,password:e.$TOOL.crypto.MD5(e.ruleForm.password)},t.next=4,e.$API.auth.token.post(r);case 4:if(200!=(o=t.sent).code){t.next=10;break}e.$TOOL.data.set("TOKEN",o.data.token),e.$TOOL.data.set("USER_INFO",o.data.userInfo),t.next=13;break;case 10:return e.islogin=!1,e.$message.warning(o.message),t.abrupt("return",!1);case 13:if(n=null,"admin"!=e.ruleForm.user){t.next=20;break}return t.next=17,e.$API.system.menu.myMenus.get();case 17:n=t.sent,t.next=23;break;case 20:return t.next=22,e.$API.demo.menu.get();case 22:n=t.sent;case 23:if(200!=n.code){t.next=28;break}e.$TOOL.data.set("MENU",n.data.menu),e.$TOOL.data.set("PERMISSIONS",n.data.permissions),t.next=31;break;case 28:return e.islogin=!1,e.$message.warning(n.message),t.abrupt("return",!1);case 31:e.$router.replace({path:"/"}),e.$message.success("Login Success 登录成功"),e.islogin=!1;case 34:case"end":return t.stop()}}),t)})))()}}});r("f3e5");f.render=function(e,t,r,g,f,V){var N=Object(o.resolveComponent)("el-option"),h=Object(o.resolveComponent)("el-select"),w=Object(o.resolveComponent)("el-input"),v=Object(o.resolveComponent)("el-form-item"),x=Object(o.resolveComponent)("el-checkbox"),C=Object(o.resolveComponent)("el-col"),E=Object(o.resolveComponent)("el-button"),_=Object(o.resolveComponent)("el-row"),$=Object(o.resolveComponent)("el-form"),y=Object(o.resolveComponent)("el-divider");return Object(o.openBlock)(),Object(o.createElementBlock)("div",n,[Object(o.createElementVNode)("div",c,[Object(o.createElementVNode)("div",a,[Object(o.createElementVNode)("div",l,[Object(o.createElementVNode)("div",s,[Object(o.createElementVNode)("img",{class:"logo",alt:e.$CONFIG.APP_NAME,src:"img/logo.png"},null,8,i),u]),Object(o.createVNode)($,{model:f.ruleForm,rules:f.rules,ref:"ruleForm","label-width":"0",size:"large"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,{prop:"user"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{modelValue:f.ruleForm.user,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.ruleForm.user=e}),"prefix-icon":"el-icon-user",clearable:"",placeholder:"用户名 / 手机 / 邮箱"},{append:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{modelValue:f.userType,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.userType=e}),placeholder:"请选择",style:{width:"130px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(N,{label:"管理员",value:"admin"}),Object(o.createVNode)(N,{label:"用户",value:"user"})]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"])]})),_:1}),Object(o.createVNode)(v,{prop:"password"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{modelValue:f.ruleForm.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.ruleForm.password=e}),"prefix-icon":"el-icon-lock",clearable:"","show-password":"",placeholder:"请输入密码"},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(v,{style:{"margin-bottom":"10px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(_,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(x,{label:"记住我",modelValue:f.ruleForm.autologin,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.ruleForm.autologin=e})},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(C,{span:12,style:{"text-align":"right"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(E,{type:"text"},{default:Object(o.withCtx)((function(){return[d]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(v,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(E,{type:"primary",style:{width:"100%"},loading:f.islogin,round:"",onClick:V.login},{default:Object(o.withCtx)((function(){return[m]})),_:1},8,["loading","onClick"])]})),_:1})]})),_:1},8,["model","rules"]),Object(o.createVNode)(y,null,{default:Object(o.withCtx)((function(){return[b]})),_:1}),Object(o.createElementVNode)("div",O,[Object(o.createVNode)(E,{size:"small",type:"primary",icon:"el-icon-platform-eleme",circle:""}),Object(o.createVNode)(E,{size:"small",type:"success",icon:"el-icon-s-goods",circle:""}),Object(o.createVNode)(E,{size:"small",type:"info",icon:"el-icon-s-promotion",circle:""}),Object(o.createVNode)(E,{size:"small",type:"warning",icon:"el-icon-menu",circle:""})])]),p]),Object(o.createElementVNode)("div",j,"© "+Object(o.toDisplayString)(e.$CONFIG.APP_NAME)+" "+Object(o.toDisplayString)(e.$CONFIG.APP_VER),1)])])},f.__scopeId="data-v-5f1bc06b";t.default=f},f3e5:function(e,t,r){"use strict";r("4edb")}}]);