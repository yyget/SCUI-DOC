(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-task","setting-task-logs"],{"4a23":function(e,t,n){},"5a15":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=function(e){return Object(o.pushScopeId)("data-v-5b34ce3b"),e=e(),Object(o.popScopeId)(),e},r=c((function(){return Object(o.createElementVNode)("h4",null,"执行类",-1)})),l=c((function(){return Object(o.createElementVNode)("h4",null,"定时规则",-1)})),a={class:"bottom"},i={class:"state"},d=Object(o.createTextVNode)("准备就绪"),s=Object(o.createTextVNode)("停用"),u={class:"handler"},b=Object(o.createTextVNode)("编辑"),j=Object(o.createTextVNode)("日志"),O=Object(o.createTextVNode)("删除"),f=c((function(){return Object(o.createElementVNode)("p",null,"添加计划任务",-1)}));n("a434"),n("c740"),n("d3b7"),n("159b"),n("4de4");var m=n("4681"),h=n("d88c"),p={name:"task",components:{saveDialog:m.default,logs:h.default},provide:function(){return{list:this.list}},data:function(){return{dialog:{save:!1,logsVisible:!1},list:[{id:"1",title:"清理服务器缓存",handler:"cleanUpCacheHandler",cron:"59 59 23 * * ? *",state:"1"},{id:"2",title:"自动审核",handler:"automaticAuditHandler",cron:"0 0 * * * ? *",state:"1"},{id:"3",title:"清理未实名用户",handler:"deleteUserHandler",cron:"0 0 0 * * ? *",state:"-1"}]}},mounted:function(){},methods:{add:function(){var e=this;this.dialog.save=!0,this.$nextTick((function(){e.$refs.saveDialog.open()}))},edit:function(e){var t=this;this.dialog.save=!0,this.$nextTick((function(){t.$refs.saveDialog.open("edit").setData(e)}))},del:function(e){var t=this;this.$confirm("确认删除 ".concat(e.title," 计划任务吗？"),"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).then((function(){t.list.splice(t.list.findIndex((function(t){return t.id===e.id})),1)})).catch((function(){}))},logs:function(){this.dialog.logsVisible=!0},run:function(e){this.$message.success("已成功执行计划任务：".concat(e.title))},handleSuccess:function(e,t){"add"==t?(e.id=(new Date).getTime(),this.list.push(e)):"edit"==t&&this.list.filter((function(t){return t.id===e.id})).forEach((function(t){Object.assign(t,e)}))}}},C=(n("ea83"),n("6b0d"));const g=n.n(C)()(p,[["render",function(e,t,n,c,m,h){var p=Object(o.resolveComponent)("el-tag"),C=Object(o.resolveComponent)("el-button"),g=Object(o.resolveComponent)("el-popconfirm"),V=Object(o.resolveComponent)("el-dropdown-item"),x=Object(o.resolveComponent)("el-dropdown-menu"),v=Object(o.resolveComponent)("el-dropdown"),w=Object(o.resolveComponent)("el-card"),N=Object(o.resolveComponent)("el-col"),k=Object(o.resolveComponent)("el-icon-plus"),_=Object(o.resolveComponent)("el-icon"),y=Object(o.resolveComponent)("el-row"),T=Object(o.resolveComponent)("el-main"),B=Object(o.resolveComponent)("save-dialog"),E=Object(o.resolveComponent)("logs"),S=Object(o.resolveComponent)("el-drawer");return Object(o.openBlock)(),Object(o.createElementBlock)(o.Fragment,null,[Object(o.createVNode)(T,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(y,{gutter:15},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createElementBlock)(o.Fragment,null,Object(o.renderList)(m.list,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(N,{xl:6,lg:6,md:8,sm:12,xs:24,key:e.id},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{class:"task task-item",shadow:"hover"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("h2",null,Object(o.toDisplayString)(e.title),1),Object(o.createElementVNode)("ul",null,[Object(o.createElementVNode)("li",null,[r,Object(o.createElementVNode)("p",null,Object(o.toDisplayString)(e.handler),1)]),Object(o.createElementVNode)("li",null,[l,Object(o.createElementVNode)("p",null,Object(o.toDisplayString)(e.cron),1)])]),Object(o.createElementVNode)("div",a,[Object(o.createElementVNode)("div",i,["1"==e.state?(Object(o.openBlock)(),Object(o.createBlock)(p,{key:0,size:"mini"},{default:Object(o.withCtx)((function(){return[d]})),_:1})):Object(o.createCommentVNode)("",!0),"-1"==e.state?(Object(o.openBlock)(),Object(o.createBlock)(p,{key:1,size:"mini",type:"info"},{default:Object(o.withCtx)((function(){return[s]})),_:1})):Object(o.createCommentVNode)("",!0)]),Object(o.createElementVNode)("div",u,[Object(o.createVNode)(g,{title:"确定立即执行吗？",onConfirm:function(t){return h.run(e)}},{reference:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{type:"primary",icon:"el-icon-caret-right",size:"mini",circle:""})]})),_:2},1032,["onConfirm"]),Object(o.createVNode)(v,{trigger:"click"},{dropdown:Object(o.withCtx)((function(){return[Object(o.createVNode)(x,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(V,{onClick:function(t){return h.edit(e)}},{default:Object(o.withCtx)((function(){return[b]})),_:2},1032,["onClick"]),Object(o.createVNode)(V,{onClick:function(t){return h.logs(e)}},{default:Object(o.withCtx)((function(){return[j]})),_:2},1032,["onClick"]),Object(o.createVNode)(V,{onClick:function(t){return h.del(e)},divided:""},{default:Object(o.withCtx)((function(){return[O]})),_:2},1032,["onClick"])]})),_:2},1024)]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{type:"primary",icon:"el-icon-more",size:"mini",circle:"",plain:""})]})),_:2},1024)])])]})),_:2},1024)]})),_:2},1024)})),128)),Object(o.createVNode)(N,{xl:6,lg:6,md:8,sm:12,xs:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{class:"task task-add",shadow:"none",onClick:h.add},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(_,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(k)]})),_:1}),f]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),m.dialog.save?(Object(o.openBlock)(),Object(o.createBlock)(B,{key:0,ref:"saveDialog",onSuccess:h.handleSuccess,onClosed:t[0]||(t[0]=function(e){return m.dialog.save=!1})},null,8,["onSuccess"])):Object(o.createCommentVNode)("",!0),Object(o.createVNode)(S,{title:"计划任务日志",modelValue:m.dialog.logsVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.dialog.logsVisible=e}),size:600,direction:"rtl","destroy-on-close":""},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(E)]})),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-5b34ce3b"]]);t.default=g},d88c:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={key:0,style:{color:"#67C23A"}},r={key:1,style:{color:"#F56C6C"}},l=Object(o.createTextVNode)("日志"),a={style:{"font-size":"12px",color:"#999",padding:"20px",background:"#333","font-family":"consolas","line-height":"1.5",overflow:"auto"}};var i={data:function(){return{logsVisible:!1,demoLog:"2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[124]-[Thread-308]\n----------- xxl-job job execute start -----------\n----------- Param:\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[31]-[Thread-308] aqshMasterDataSendHandler start\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[42]-[Thread-308] send 45\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[45]-[Thread-308] webapi http://127.0.0.1:48080\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[33]-[Thread-308] aqshMasterDataSendHandler vehicle end\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[35]-[Thread-308] aqshMasterDataSendHandler stop\n2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[158]-[Thread-308]\n----------- xxl-job job execute end(finish) -----------\n----------- ReturnT:ReturnT [code=200, msg=null, content=null]\n2021-07-07 12:35:00 [com.xxl.job.core.thread.TriggerCallbackThread#callbackLog]-[176]-[Thread-10]\n----------- xxl-job job callback finish.\n\n[Load Log Finish]",data:[{time:"2021-07-07 00:00:00",state:"500",logs:""},{time:"2021-07-06 00:00:00",state:"200",logs:""},{time:"2021-07-05 00:00:00",state:"200",logs:""},{time:"2021-07-04 00:00:00",state:"200",logs:""},{time:"2021-07-03 00:00:00",state:"200",logs:""},{time:"2021-07-02 00:00:00",state:"200",logs:""},{time:"2021-07-01 00:00:00",state:"200",logs:""}]}},mounted:function(){},methods:{show:function(){this.logsVisible=!0}}},d=n("6b0d");const s=n.n(d)()(i,[["render",function(e,t,n,i,d,s){var u=Object(o.resolveComponent)("el-table-column"),b=Object(o.resolveComponent)("el-icon-success-filled"),j=Object(o.resolveComponent)("el-icon"),O=Object(o.resolveComponent)("el-icon-circle-close-filled"),f=Object(o.resolveComponent)("el-button"),m=Object(o.resolveComponent)("scTable"),h=Object(o.resolveComponent)("el-main"),p=Object(o.resolveComponent)("el-container"),C=Object(o.resolveComponent)("el-drawer");return Object(o.openBlock)(),Object(o.createElementBlock)(o.Fragment,null,[Object(o.createVNode)(p,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{style:{padding:"0 20px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{ref:"table",data:d.data,stripe:""},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u,{label:"执行时间",prop:"time",width:"200"}),Object(o.createVNode)(u,{label:"执行结果",prop:"state",width:"100"},{default:Object(o.withCtx)((function(e){return[200==e.row.state?(Object(o.openBlock)(),Object(o.createElementBlock)("span",c,[Object(o.createVNode)(j,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b)]})),_:1})])):(Object(o.openBlock)(),Object(o.createElementBlock)("span",r,[Object(o.createVNode)(j,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(O)]})),_:1})]))]})),_:1}),Object(o.createVNode)(u,{label:"执行日志",prop:"logs",width:"100",fixed:"right"},{default:Object(o.withCtx)((function(e){return[Object(o.createVNode)(f,{size:"mini",onClick:function(t){return s.show(e.row)},type:"text"},{default:Object(o.withCtx)((function(){return[l]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1}),Object(o.createVNode)(C,{title:"日志",modelValue:d.logsVisible,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.logsVisible=e}),size:500,direction:"rtl","destroy-on-close":""},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{style:{padding:"0 20px 20px 20px"}},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("pre",a,Object(o.toDisplayString)(d.demoLog),1)]})),_:1})]})),_:1},8,["modelValue"])],64)}]]);t.default=s},ea83:function(e,t,n){"use strict";n("4a23")}}]);