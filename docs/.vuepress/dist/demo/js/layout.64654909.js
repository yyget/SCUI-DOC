(window.webpackJsonp=window.webpackJsonp||[]).push([["layout"],{"5b61":function(e,t,c){},"5e37":function(e,t,c){"use strict";c("79f6")},"5f6d":function(e,t,c){},"79f6":function(e,t,c){},aa47:function(e,t,c){"use strict";c("5b61")},c1f7:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=c("cf05"),a=c.n(o),r={class:"adminui-header"},i={class:"adminui-header-left"},l={class:"logo-bar"},s={key:0,class:"nav"},u={class:"adminui-header-right"},d={class:"aminui-wrapper"},b={key:0,class:"adminui-side-top"},m={class:"adminui-side-scroll"},O={class:"aminui-body el-container"},j={class:"adminui-main",id:"adminui-main"},p={key:1,class:"aminui-wrapper"},f={key:0,class:"aminui-side-split"},h={class:"adminui-side-split-scroll"},v={key:0,class:"adminui-side-top"},V={class:"adminui-side-scroll"},N={class:"aminui-body el-container"},k={class:"adminui-main",id:"adminui-main"},g=Object(n.createVNode)("i",{class:"el-icon-brush"},null,-1);c("159b"),c("b0c0");var C=Object(n.withScopeId)("data-v-96837368");Object(n.pushScopeId)("data-v-96837368");var y=Object(n.createVNode)("i",{class:"el-icon-menu"},null,-1);Object(n.popScopeId)();var B=C((function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("NavMenu"),l=Object(n.resolveComponent)("el-menu"),s=Object(n.resolveComponent)("el-drawer"),u=Object(n.resolveDirective)("drag");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.withDirectives)(Object(n.createVNode)("div",{ref:"",class:"mobile-nav-button",onClick:t[1]||(t[1]=function(e){return r.showMobileNav(e)}),draggable:"false"},[y],512),[[u]]),Object(n.createVNode)(s,{ref:"mobileNavBox",title:"移动端菜单",size:240,modelValue:a.nav,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.nav=e}),direction:"ltr","with-header":!1,"destroy-on-close":""},{default:C((function(){return[Object(n.createVNode)(l,{"default-active":e.$route.meta.active||e.$route.fullPath,onSelect:r.select,router:""},{default:C((function(){return[Object(n.createVNode)(i,{navMenus:a.menu},null,8,["navMenus"])]})),_:1},8,["default-active","onSelect"])]})),_:1},8,["modelValue"])],64)})),x=(c("a434"),{key:0,style:{padding:"20px"}});var w={name:"NavMenu",props:["navMenus"],data:function(){return{}},methods:{a:function(){},hasChildren:function(e){var t=!0;return e.children?e.children.every((function(e){return e.meta.hidden}))&&(t=!1):t=!1,t}},render:function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("el-alert"),l=Object(n.resolveComponent)("el-menu-item"),s=Object(n.resolveComponent)("NavMenu",!0),u=Object(n.resolveComponent)("el-submenu");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[c.navMenus.length<=0?(Object(n.openBlock)(),Object(n.createBlock)("div",x,[Object(n.createVNode)(i,{title:"无子集菜单",center:"",type:"info",closable:!1})])):Object(n.createCommentVNode)("",!0),(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(c.navMenus,(function(e){return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:e},[r.hasChildren(e)?(Object(n.openBlock)(),Object(n.createBlock)(u,{key:1,index:e.path},{title:Object(n.withCtx)((function(){return[e.meta&&e.meta.icon?(Object(n.openBlock)(),Object(n.createBlock)("i",{key:0,class:e.meta.icon||"el-icon-menu"},null,2)):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.meta.title),1)]})),default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{navMenus:e.children},null,8,["navMenus"])]})),_:2},1032,["index"])):(Object(n.openBlock)(),Object(n.createBlock)(l,{key:0,index:e.path},{title:Object(n.withCtx)((function(){return[Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.meta.title),1)]})),default:Object(n.withCtx)((function(){return[e.meta&&"link"==e.meta.type?(Object(n.openBlock)(),Object(n.createBlock)("a",{key:0,href:e.path,target:"_blank",onClick:t[1]||(t[1]=Object(n.withModifiers)((function(){return r.a&&r.a.apply(r,arguments)}),["stop"]))},null,8,["href"])):Object(n.createCommentVNode)("",!0),e.meta&&e.meta.icon?(Object(n.openBlock)(),Object(n.createBlock)("i",{key:1,class:e.meta.icon||"el-icon-menu"},null,2)):Object(n.createCommentVNode)("",!0)]})),_:2},1032,["index"]))],64)})),128))],64)}},T=w,$={components:{NavMenu:T},data:function(){return{nav:!1,menu:[]}},computed:{},created:function(){var e=this.$TOOL.data.get("user").menuList,t=this.$router.options.routes[0].children[0];e.unshift(t),this.menu=this.filterUrl(e)},watch:{},methods:{showMobileNav:function(e){if("true"==e.currentTarget.getAttribute("drag-flag"))return!1;this.nav=!0},select:function(){this.$refs.mobileNavBox.handleClose()},filterUrl:function(e){var t=this;return e.forEach((function(c,n){c.meta=c.meta?c.meta:{},c.meta.hidden&&e.splice(n,1),"iframe"==c.meta.type&&(c.path="/i/".concat(c.name)),c.children&&c.children.length>0&&t.filterUrl(c.children)})),e}},directives:{drag:function(e){var t=e,c="";t.onmousedown=function(e){var n=e.clientX-t.offsetLeft,o=e.clientY-t.offsetTop;return document.onmousemove=function(e){t.setAttribute("drag-flag",!0),c=(new Date).getTime();var a=e.clientX-n,r=e.clientY-o;r>0&&r<document.body.clientHeight-50&&(t.style.top=r+"px"),a>0&&a<document.body.clientWidth-50&&(t.style.left=a+"px")},document.onmouseup=function(){(new Date).getTime()-c>200&&t.setAttribute("drag-flag",!1),document.onmousemove=null,document.onmouseup=null},!1}}}};c("fce3");$.render=B,$.__scopeId="data-v-96837368";var M=$,_=Object(n.withScopeId)("data-v-4da4e6bc");Object(n.pushScopeId)("data-v-4da4e6bc");var L={class:"adminui-topbar"},I={class:"left-panel"},S=Object(n.createVNode)("i",{class:"el-icon-s-fold"},null,-1),D=Object(n.createVNode)("div",{class:"center-panel"},null,-1),E={class:"right-panel"};Object(n.popScopeId)();var F=_((function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("el-breadcrumb-item"),l=Object(n.resolveComponent)("el-breadcrumb");return Object(n.openBlock)(),Object(n.createBlock)("div",L,[Object(n.createVNode)("div",I,[Object(n.createVNode)("div",{class:"menu-collapse hidden-sm-and-down",onClick:t[1]||(t[1]=function(t){return e.$store.commit("TOGGLE_menuIsCollapse")})},[S]),Object(n.createVNode)(l,{"separator-class":"el-icon-arrow-right",class:"hidden-sm-and-down"},{default:_((function(){return[Object(n.createVNode)(n.TransitionGroup,{name:"breadcrumb",mode:"out-in"},{default:_((function(){return[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(a.breadList,(function(e){return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:e.meta.title},["/"==e.path||e.meta.hiddenBreadcrumb?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)(i,{key:e.meta.title},{default:_((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.meta.title),1)]})),_:2},1024))],64)})),128))]})),_:1})]})),_:1})]),D,Object(n.createVNode)("div",E,[Object(n.renderSlot)(e.$slots,"default",{},void 0,!0)])])})),U={data:function(){return{breadList:[]}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var e=this.$route.matched;this.breadList=e}}};c("efff");U.render=F,U.__scopeId="data-v-4da4e6bc";var A=U,G={class:"adminui-tags"},z=Object(n.createVNode)("i",{class:"el-icon-refresh"},null,-1),R=Object(n.createTextVNode)("刷新"),P=Object(n.createVNode)("hr",null,null,-1),K=Object(n.createVNode)("i",{class:"el-icon-close"},null,-1),W=Object(n.createTextVNode)("关闭标签"),X=Object(n.createVNode)("i",{class:"el-icon-folder-delete"},null,-1),Y=Object(n.createTextVNode)("关闭其他标签"),J=Object(n.createVNode)("hr",null,null,-1),H=Object(n.createVNode)("i",{class:"el-icon-full-screen"},null,-1),q=Object(n.createTextVNode)("全屏当前标签"),Q=Object(n.createVNode)("i",{class:"el-icon-copy-document"},null,-1),Z=Object(n.createTextVNode)("在新的窗口中打开");var ee=c("2909"),te=(c("fb6a"),{name:"tags",data:function(){return{contextMenuVisible:!1,contextMenuItem:null,left:0,top:0,tagList:this.$store.state.viewTags.viewTags}},props:{},setup:function(){},watch:{$route:function(e){this.addViewTags(e)},contextMenuVisible:function(e){var t=this,c=function(e){var c=document.getElementById("contextmenu");c&&!c.contains(e.target)&&t.closeMenu()};e?document.body.addEventListener("click",(function(e){return c(e)})):document.body.removeEventListener("click",(function(e){return c(e)}))}},created:function(){this.addViewTags(this.$router.options.routes[0].children[0].children[0]),this.addViewTags(this.$route)},methods:{addViewTags:function(e){e.name&&(this.$store.commit("pushViewTags",e),this.$store.commit("pushKeepLive",e.name))},isActive:function(e){return e.path===this.$route.path},closeSelectedTag:function(e){if(this.$store.commit("removeViewTags",e),this.$store.commit("removeKeepLive",e.name),this.isActive(e)){var t=this.tagList.slice(-1)[0];t?this.$router.push(t):this.$router.push("/")}},openContextMenu:function(e,t){this.contextMenuItem=t,this.contextMenuVisible=!0,this.left=e.clientX+1,this.top=e.clientY+1},closeMenu:function(){this.contextMenuItem=null,this.contextMenuVisible=!1},refreshTab:function(){var e=this.contextMenuItem;this.contextMenuVisible=!1,this.$route.path!=e.path&&this.$router.push({path:e.path});var t=this;setTimeout((function(){t.$store.commit("removeKeepLive",e.name),t.$store.commit("setRouteShow",!1),t.$nextTick((function(){t.$store.commit("pushKeepLive",e.name),t.$store.commit("setRouteShow",!0)}))}),0)},closeTabs:function(){var e=this.contextMenuItem;e.meta.affix||(this.closeSelectedTag(e),this.contextMenuVisible=!1)},closeOtherTabs:function(){var e=this,t=this.contextMenuItem;Object(ee.a)(this.tagList).forEach((function(c){if(c.meta&&c.meta.affix||t.path==c.path)return!0;e.closeSelectedTag(c)})),this.contextMenuVisible=!1},screen:function(){var e=this.contextMenuItem;this.contextMenuVisible=!1,this.$route.path!=e.path&&this.$router.push({path:e.path});var t=document.getElementById("adminui-main");this.$TOOL.screen(t)},openWindow:function(){var e=this.contextMenuItem,t=e.href||"/";e.meta.affix||this.closeSelectedTag(e),window.open(t),this.contextMenuVisible=!1}}});c("aa47");te.render=function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("router-link");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.createVNode)("div",G,[Object(n.createVNode)("ul",null,[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(a.tagList,(function(e){return Object(n.openBlock)(),Object(n.createBlock)("li",{key:e,class:r.isActive(e)?"active":"",onContextmenu:Object(n.withModifiers)((function(t){return r.openContextMenu(t,e)}),["prevent"])},[Object(n.createVNode)(i,{to:e},{default:Object(n.withCtx)((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.meta.title)+" ",1),e.meta.affix?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("i",{key:0,class:"el-icon-close",onClick:Object(n.withModifiers)((function(t){return r.closeSelectedTag(e)}),["prevent","stop"])},null,8,["onClick"]))]})),_:2},1032,["to"])],42,["onContextmenu"])})),128))])]),Object(n.createVNode)(n.Transition,{name:"el-zoom-in-top"},{default:Object(n.withCtx)((function(){return[a.contextMenuVisible?(Object(n.openBlock)(),Object(n.createBlock)("ul",{key:0,style:{left:a.left+"px",top:a.top+"px"},class:"contextmenu",id:"contextmenu"},[Object(n.createVNode)("li",{onClick:t[1]||(t[1]=function(e){return r.refreshTab()})},[z,R]),P,Object(n.createVNode)("li",{onClick:t[2]||(t[2]=function(e){return r.closeTabs()}),class:a.contextMenuItem.meta.affix?"disabled":""},[K,W],2),Object(n.createVNode)("li",{onClick:t[3]||(t[3]=function(e){return r.closeOtherTabs()})},[X,Y]),J,Object(n.createVNode)("li",{onClick:t[4]||(t[4]=function(e){return r.screen()})},[H,q]),Object(n.createVNode)("li",{onClick:t[5]||(t[5]=function(e){return r.openWindow()})},[Q,Z])],4)):Object(n.createCommentVNode)("",!0)]})),_:1})],64)};var ce=te,ne=(c("9911"),Object(n.withScopeId)("data-v-79b82e94"));Object(n.pushScopeId)("data-v-79b82e94");var oe={class:"user-bar"},ae=Object(n.createVNode)("i",{class:"el-icon-full-screen"},null,-1),re={class:"msg panel-item"},ie=Object(n.createVNode)("i",{class:"el-icon-bell"},null,-1),le={key:1,class:"msgList"},se=Object(n.createVNode)("label",null,"通知",-1),ue=Object(n.createTextVNode)("全部标记已读"),de=Object(n.createTextVNode)("前往通知中心"),be={class:"user panel-item"},me=Object(n.createVNode)("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),Oe=Object(n.createTextVNode)("个人设置"),je=Object(n.createTextVNode)("CMD"),pe=Object(n.createTextVNode)("退出登录");Object(n.popScopeId)();var fe=ne((function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("el-badge"),l=Object(n.resolveComponent)("el-empty"),s=Object(n.resolveComponent)("el-link"),u=Object(n.resolveComponent)("el-scrollbar"),d=Object(n.resolveComponent)("el-popover"),b=Object(n.resolveComponent)("el-avatar"),m=Object(n.resolveComponent)("el-dropdown-item"),O=Object(n.resolveComponent)("el-dropdown-menu"),j=Object(n.resolveComponent)("el-dropdown");return Object(n.openBlock)(),Object(n.createBlock)("div",oe,[Object(n.createVNode)("div",{class:"screen panel-item hidden-sm-and-down",onClick:t[1]||(t[1]=function(){return r.screen&&r.screen.apply(r,arguments)})},[ae]),Object(n.createVNode)(d,{placement:"bottom",width:360,trigger:"click"},{reference:ne((function(){return[Object(n.createVNode)("div",re,[Object(n.createVNode)(i,{hidden:0==a.msgList.length,value:a.msgList.length,class:"badge",type:"danger"},{default:ne((function(){return[ie]})),_:1},8,["hidden","value"])])]})),default:ne((function(){return[Object(n.createVNode)("div",null,[0==a.msgList.length?(Object(n.openBlock)(),Object(n.createBlock)(l,{key:0,description:"暂无新消息"})):(Object(n.openBlock)(),Object(n.createBlock)("div",le,[Object(n.createVNode)("header",null,[se,Object(n.createVNode)(s,{underline:!1,href:"javascript:void(0);",onClick:r.markRead},{default:ne((function(){return[ue]})),_:1},8,["onClick"])]),Object(n.createVNode)("ul",null,[Object(n.createVNode)(u,null,{default:ne((function(){return[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(a.msgList,(function(e){return Object(n.openBlock)(),Object(n.createBlock)("li",{key:e.id},[Object(n.createVNode)("a",{href:e.link,target:"_blank"},[Object(n.createVNode)("h2",null,Object(n.toDisplayString)(e.title),1),Object(n.createVNode)("p",null,Object(n.toDisplayString)(e.describe),1)],8,["href"])])})),128))]})),_:1})]),Object(n.createVNode)("footer",null,[Object(n.createVNode)(s,{underline:!1,href:"https://gitee.com/lolicode/scui",target:"_blank"},{default:ne((function(){return[de]})),_:1})])]))])]})),_:1}),Object(n.createVNode)(j,{trigger:"click",onCommand:r.handleUser,style:{height:"100%"}},{dropdown:ne((function(){return[Object(n.createVNode)(O,null,{default:ne((function(){return[Object(n.createVNode)(m,{command:"uc"},{default:ne((function(){return[Oe]})),_:1}),Object(n.createVNode)(m,{command:"cmd"},{default:ne((function(){return[je]})),_:1}),Object(n.createVNode)(m,{divided:"",command:"outLogin"},{default:ne((function(){return[pe]})),_:1})]})),_:1})]})),default:ne((function(){return[Object(n.createVNode)("div",be,[Object(n.createVNode)(b,{size:30},{default:ne((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(a.userNameF),1)]})),_:1}),Object(n.createVNode)("label",null,[Object(n.createTextVNode)(Object(n.toDisplayString)(a.userName),1),me])])]})),_:1},8,["onCommand"])])})),he=(c("ac1f"),c("5319"),{data:function(){return{userName:"",userNameF:"",msgList:[{id:1,title:"关于版本发布的通知",describe:"点进去Gitee获取最新开源版本",link:"https://gitee.com/lolicode/scui"},{id:2,title:"感谢登录SCUI Admin",describe:"Vue 3.0 + Vue-Router 4.0 + ElementPlus + Axios 后台管理系统。",link:"https://gitee.com/lolicode/scui"}]}},created:function(){var e=this.$TOOL.data.get("user").userInfo;this.userName=e.userName,this.userNameF=this.userName.substring(0,1)},methods:{handleUser:function(e){"uc"==e&&this.$router.push({path:"/usercenter"}),"outLogin"==e&&this.$router.replace({path:"/login"}),"cmd"==e&&this.$router.push({path:"/cmd"})},screen:function(){var e=document.documentElement;this.$TOOL.screen(e)},markRead:function(){this.msgList=[]}}});c("5e37");he.render=fe,he.__scopeId="data-v-79b82e94";var ve={data:function(){return{layout:this.$store.state.global.layout,menuIsCollapse:this.$store.state.global.menuIsCollapse,layoutTags:this.$store.state.global.layoutTags}},watch:{layout:function(e){this.$store.commit("SET_layout",e)},menuIsCollapse:function(){this.$store.commit("TOGGLE_menuIsCollapse")},layoutTags:function(){this.$store.commit("TOGGLE_layoutTags")}},render:function(e,t,c,o,a,r){var i=Object(n.resolveComponent)("el-alert"),l=Object(n.resolveComponent)("el-divider"),s=Object(n.resolveComponent)("el-option"),u=Object(n.resolveComponent)("el-select"),d=Object(n.resolveComponent)("el-form-item"),b=Object(n.resolveComponent)("el-switch"),m=Object(n.resolveComponent)("el-form");return Object(n.openBlock)(),Object(n.createBlock)(m,{ref:"form","label-width":"120px","label-position":"left",style:{padding:"0 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{title:"以下配置可实时预览，开发者可在 config/index.js 中配置默认值，非常不建议在生产环境下开放布局设置",type:"error",closable:!1}),Object(n.createVNode)(l),Object(n.createVNode)(d,{label:"框架布局"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(u,{modelValue:a.layout,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.layout=e}),placeholder:"请选择"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{label:"默认",value:"default"}),Object(n.createVNode)(s,{label:"通栏",value:"header"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n.createVNode)(d,{label:"折叠菜单"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{modelValue:a.menuIsCollapse,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.menuIsCollapse=e})},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(d,{label:"标签栏"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{modelValue:a.layoutTags,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.layoutTags=e})},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(l)]})),_:1},512)}},Ve={name:"index",components:{SideM:M,Topbar:A,Tags:ce,NavMenu:T,userbar:he,setting:ve},data:function(){return{settingDialog:!1,menu:[],nextMenu:[],pmenu:{}}},computed:{ismobile:function(){return this.$store.state.global.ismobile},layout:function(){return this.$store.state.global.layout},layoutTags:function(){return this.$store.state.global.layoutTags},menuIsCollapse:function(){return this.$store.state.global.menuIsCollapse}},created:function(){this.onLayoutResize(),window.addEventListener("resize",this.onLayoutResize);var e=this.$TOOL.data.get("user").menuList,t=this.$router.options.routes[0].children[0];e.unshift(t),this.menu=this.filterUrl(e),this.showThis()},watch:{$route:function(){this.showThis()}},methods:{openSetting:function(){this.settingDialog=!0},onLayoutResize:function(){document.body.clientWidth<992?this.$store.commit("SET_ismobile",!0):this.$store.commit("SET_ismobile",!1)},showThis:function(){var e=this.$router.options.routes[0].children[0];this.pmenu=this.$route.matched[1]||e,this.nextMenu=this.filterUrl(this.pmenu.children)},showMenu:function(e){this.pmenu=e,this.nextMenu=this.filterUrl(e.children)},filterUrl:function(e){var t=this,c=[];return e&&e.forEach((function(e){if(e.meta=e.meta?e.meta:{},e.meta.hidden)return!1;"iframe"==e.meta.type&&(e.path="/i/".concat(e.name)),e.children&&e.children.length>0&&t.filterUrl(e.children),c.push(e)})),c}},render:function(e,t,c,o,C,y){var B=Object(n.resolveComponent)("userbar"),x=Object(n.resolveComponent)("NavMenu"),w=Object(n.resolveComponent)("el-menu"),T=Object(n.resolveComponent)("Side-m"),$=Object(n.resolveComponent)("Topbar"),M=Object(n.resolveComponent)("Tags"),_=Object(n.resolveComponent)("router-view"),L=Object(n.resolveComponent)("setting"),I=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,["header"==y.layout?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[Object(n.createVNode)("header",r,[Object(n.createVNode)("div",i,[Object(n.createVNode)("div",l,[Object(n.createVNode)("img",{class:"logo",alt:e.appName,src:a.a},null,8,["alt"]),Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.$CONFIG.APP_NAME),1)]),y.ismobile?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("ul",s,[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(C.menu,(function(e){return Object(n.openBlock)(),Object(n.createBlock)("li",{key:e,class:C.pmenu.path==e.path?"active":"",onClick:function(t){return y.showMenu(e)}},[Object(n.createVNode)("i",{class:e.meta.icon||"el-icon-menu"},null,2),Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.meta.title),1)],10,["onClick"])})),128))]))]),Object(n.createVNode)("div",u,[Object(n.createVNode)(B)])]),Object(n.createVNode)("section",d,[y.ismobile?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("div",{key:0,class:y.menuIsCollapse?"aminui-side isCollapse":"aminui-side"},[y.menuIsCollapse?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("div",b,[Object(n.createVNode)("h2",null,Object(n.toDisplayString)(C.pmenu.meta.title),1)])),Object(n.createVNode)("div",m,[Object(n.createVNode)(w,{"default-active":e.$route.meta.active||e.$route.fullPath,router:"",collapse:y.menuIsCollapse},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(x,{navMenus:C.nextMenu},null,8,["navMenus"])]})),_:1},8,["default-active","collapse"])])],2)),y.ismobile?(Object(n.openBlock)(),Object(n.createBlock)(T,{key:1})):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",O,[y.ismobile?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)($,{key:0})),!y.ismobile&&y.layoutTags?(Object(n.openBlock)(),Object(n.createBlock)(M,{key:1})):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",j,[Object(n.createVNode)(_)])])])],64)):(Object(n.openBlock)(),Object(n.createBlock)("section",p,[y.ismobile?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("div",f,[Object(n.createVNode)("div",h,[Object(n.createVNode)("ul",null,[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(C.menu,(function(e){return Object(n.openBlock)(),Object(n.createBlock)("li",{key:e,class:C.pmenu.path==e.path?"active":"",onClick:function(t){return y.showMenu(e)}},[Object(n.createVNode)("i",{class:e.meta.icon||"el-icon-menu"},null,2),Object(n.createVNode)("p",null,Object(n.toDisplayString)(e.meta.title),1)],10,["onClick"])})),128))])])])),y.ismobile?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("div",{key:1,class:y.menuIsCollapse?"aminui-side isCollapse":"aminui-side"},[y.menuIsCollapse?Object(n.createCommentVNode)("",!0):(Object(n.openBlock)(),Object(n.createBlock)("div",v,[Object(n.createVNode)("h2",null,Object(n.toDisplayString)(C.pmenu.meta.title),1)])),Object(n.createVNode)("div",V,[Object(n.createVNode)(w,{"default-active":e.$route.meta.active||e.$route.fullPath,router:"",collapse:y.menuIsCollapse},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(x,{navMenus:C.nextMenu},null,8,["navMenus"])]})),_:1},8,["default-active","collapse"])])],2)),y.ismobile?(Object(n.openBlock)(),Object(n.createBlock)(T,{key:2})):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",N,[Object(n.createVNode)($,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(B)]})),_:1}),!y.ismobile&&y.layoutTags?(Object(n.openBlock)(),Object(n.createBlock)(M,{key:0})):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",k,[Object(n.createVNode)(_)])])])),Object(n.createVNode)("div",{class:"layout-setting",onClick:t[1]||(t[1]=function(){return y.openSetting&&y.openSetting.apply(y,arguments)})},[g]),Object(n.createVNode)(I,{title:"布局实时演示",modelValue:C.settingDialog,"onUpdate:modelValue":t[2]||(t[2]=function(e){return C.settingDialog=e}),size:400,"append-to-body":"","destroy-on-close":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(L)]})),_:1},8,["modelValue"])],64)}};t.default=Ve},cf05:function(e,t,c){e.exports=c.p+"img/logo.9339fdae.png"},d159:function(e,t,c){},efff:function(e,t,c){"use strict";c("d159")},fce3:function(e,t,c){"use strict";c("5f6d")}}]);