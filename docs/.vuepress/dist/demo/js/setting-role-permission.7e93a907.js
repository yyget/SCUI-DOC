(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-role-permission"],{"73f2":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),a=Object(n.withScopeId)("data-v-65410130");Object(n.pushScopeId)("data-v-65410130");var c={class:"treeMain"},l={class:"treeMain"},r={class:"treeMain"},s={style:{float:"left"}},u={style:{float:"right",color:"#8492a6","font-size":"12px"}},i=Object(n.createVNode)("div",{class:"el-form-item-msg"},"用于控制角色登录后控制台的视图",-1),d=Object(n.createTextVNode)("取 消"),b=Object(n.createTextVNode)("保 存");Object(n.popScopeId)();var p=a((function(e,t,o,p,f,m){var O=Object(n.resolveComponent)("el-tree"),j=Object(n.resolveComponent)("el-tab-pane"),v=Object(n.resolveComponent)("el-option"),h=Object(n.resolveComponent)("el-select"),k=Object(n.resolveComponent)("el-form-item"),g=Object(n.resolveComponent)("el-form"),V=Object(n.resolveComponent)("el-tabs"),y=Object(n.resolveComponent)("el-button"),N=Object(n.resolveComponent)("el-dialog");return Object(n.openBlock)(),Object(n.createBlock)(N,{title:"角色权限设置",modelValue:f.visible,"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.visible=e}),width:500,"destroy-on-close":"",onClosed:t[5]||(t[5]=function(t){return e.$emit("closed")})},{footer:a((function(){return[Object(n.createVNode)(y,{onClick:t[2]||(t[2]=function(e){return f.visible=!1})},{default:a((function(){return[d]})),_:1}),Object(n.createVNode)(y,{type:"primary",loading:f.isSaveing,onClick:t[3]||(t[3]=function(e){return m.submit()})},{default:a((function(){return[b]})),_:1},8,["loading"])]})),default:a((function(){return[Object(n.createVNode)(V,{"tab-position":"top"},{default:a((function(){return[Object(n.createVNode)(j,{label:"菜单权限"},{default:a((function(){return[Object(n.createVNode)("div",c,[Object(n.createVNode)(O,{ref:"menu","node-key":"name",data:f.menu.list,"default-checked-keys":f.menu.checked,props:f.menu.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(j,{label:"部门权限"},{default:a((function(){return[Object(n.createVNode)("div",l,[Object(n.createVNode)(O,{ref:"group","node-key":"name",data:f.group.list,"default-checked-keys":f.group.checked,props:f.group.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(j,{label:"类型权限"},{default:a((function(){return[Object(n.createVNode)("div",r,[Object(n.createVNode)(O,{ref:"type","node-key":"name",data:f.type.list,"default-checked-keys":f.type.checked,props:f.type.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(j,{label:"控制台"},{default:a((function(){return[Object(n.createVNode)(g,{"label-width":"100px","label-position":"left"},{default:a((function(){return[Object(n.createVNode)(k,{label:"控制台视图"},{default:a((function(){return[Object(n.createVNode)(h,{modelValue:f.dashboard,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.dashboard=e}),placeholder:"请选择"},{default:a((function(){return[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(f.dashboardOptions,(function(e){return Object(n.openBlock)(),Object(n.createBlock)(v,{key:e.value,label:e.label,value:e.value},{default:a((function(){return[Object(n.createVNode)("span",s,Object(n.toDisplayString)(e.label),1),Object(n.createVNode)("span",u,Object(n.toDisplayString)(e.views),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"]),i]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])})),f=o("1da1"),m=(o("96cf"),{emits:["success","closed"],data:function(){return{visible:!1,isSaveing:!1,menu:{list:[],checked:["test","system","user","role"],props:{label:function(e){return e.meta.title}}},group:{list:[],checked:[],props:{}},type:{list:[],checked:[],props:{}},dashboard:"0",dashboardOptions:[{value:"0",label:"数据统计",views:"stats"},{value:"1",label:"工作台",views:"work"}]}},mounted:function(){this.getMenu(),this.getGroup(),this.getType()},methods:{open:function(){this.visible=!0},submit:function(){var e=this;this.isSaveing=!0,setTimeout((function(){e.isSaveing=!1,e.visible=!1,e.$message.success("操作成功"),e.$emit("success")}),1e3)},getMenu:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.menu.list.get();case 2:o=t.sent,e.menu.list=o.data;case 4:case"end":return t.stop()}}),t)})))()},getGroup:function(){this.group.list=[{label:"JL00"},{label:"LP01"},{label:"LP07"},{label:"SL01"},{label:"TL06"},{label:"TL09"},{label:"YP07"}]},getType:function(){this.type.list=[{label:"原料采购"},{label:"厂内互供"},{label:"炼销订单"},{label:"化工统销订单"},{label:"移库单"},{label:"自销订单"}]}}});o("dd99");m.render=p,m.__scopeId="data-v-65410130";t.default=m},dd99:function(e,t,o){"use strict";o("e967")},e967:function(e,t,o){}}]);