(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-role","setting-role-permission","setting-role-save"],{"027d":function(e,t,n){"use strict";n("8e33")},2083:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var o=n("7a23"),r={class:"left-panel"},a=Object(o.createTextVNode)("权限设置"),c={class:"right-panel"},i={class:"right-panel-search"},l=Object(o.createTextVNode)("查看"),s=Object(o.createTextVNode)("编辑"),u=Object(o.createTextVNode)("删除"),d=Object(o.createTextVNode)("取 消"),b=Object(o.createTextVNode)("保 存"),p=Object(o.createTextVNode)("取 消"),f=Object(o.createTextVNode)("保 存");var m=n("1da1"),h=(n("96cf"),n("a434"),n("159b"),n("2a626")),j=n("73f2"),O={name:"role",components:{saveDialog:h.default,permissionDialog:j.default},data:function(){return{apiObj:this.$API.role.list,selection:[],search:{keyword:null},saveDialogVisible:!1,saveMode:"add",titleMap:{add:"新增",edit:"编辑",show:"查看"},isSaveing:!1,permissionDialogVisible:!1,isPermissionSaveing:!1}},methods:{add:function(){this.saveMode="add",this.saveDialogVisible=!0},table_edit:function(e){var t=this;this.saveMode="edit",this.saveDialogVisible=!0,this.$nextTick((function(){t.$refs.saveDialog.setData(e)}))},table_show:function(e){var t=this;this.saveMode="show",this.saveDialogVisible=!0,this.$nextTick((function(){t.$refs.saveDialog.setData(e)}))},table_del:function(e,t){var n=this;return Object(m.a)(regeneratorRuntime.mark((function o(){var r,a;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r={id:e.id},o.next=3,n.$API.user.del.post(r);case 3:200==(a=o.sent).code?(n.$refs.table.tableData.splice(t,1),n.$message.success("删除成功")):n.$alert(a.message,"提示",{type:"error"});case 5:case"end":return o.stop()}}),o)})))()},batch_del:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$confirm("确定删除选中的 ".concat(e.selection.length," 项吗？如果删除项中含有子集将会被一并删除"),"提示",{type:"warning"}).then((function(){var t=e.$loading();e.selection.forEach((function(t){e.$refs.table.tableData.forEach((function(n,o){t.id===n.id&&e.$refs.table.tableData.splice(o,1)}))})),t.close(),e.$message.success("操作成功")})).catch((function(){}));case 1:case"end":return t.stop()}}),t)})))()},saveForm:function(){var e=this;this.$refs.saveDialog.submit(function(){var t=Object(m.a)(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isSaveing=!0,t.next=3,e.$API.user.save.post(n);case 3:o=t.sent,e.isSaveing=!1,200==o.code?(e.saveDialogVisible=!1,e.$message.success("操作成功")):e.$alert(o.message,"提示",{type:"error"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},selectionChange:function(e){this.selection=e},permission:function(){this.permissionDialogVisible=!0},savePermission:function(){this.$message.success("操作成功"),this.permissionDialogVisible=!1},upsearch:function(){}},render:function(e,t,n,m,h,j){var O=Object(o.resolveComponent)("el-button"),g=Object(o.resolveComponent)("el-input"),v=Object(o.resolveComponent)("el-header"),V=Object(o.resolveComponent)("el-table-column"),w=Object(o.resolveComponent)("el-popconfirm"),C=Object(o.resolveComponent)("scTable"),k=Object(o.resolveComponent)("el-main"),N=Object(o.resolveComponent)("el-container"),x=Object(o.resolveComponent)("save-dialog"),y=Object(o.resolveComponent)("el-dialog"),_=Object(o.resolveComponent)("permission-dialog");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[Object(o.createVNode)(N,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)("div",r,[Object(o.createVNode)(O,{type:"primary",icon:"el-icon-plus",onClick:j.add},null,8,["onClick"]),Object(o.createVNode)(O,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==h.selection.length,onClick:j.batch_del},null,8,["disabled","onClick"]),Object(o.createVNode)(O,{type:"primary",plain:"",disabled:1!=h.selection.length,onClick:j.permission},{default:Object(o.withCtx)((function(){return[a]})),_:1},8,["disabled","onClick"])]),Object(o.createVNode)("div",c,[Object(o.createVNode)("div",i,[Object(o.createVNode)(g,{modelValue:h.search.keyword,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.search.keyword=e}),placeholder:"角色名称",clearable:""},null,8,["modelValue"]),Object(o.createVNode)(O,{type:"primary",icon:"el-icon-search",onClick:j.upsearch},null,8,["onClick"])])])]})),_:1}),Object(o.createVNode)(k,{class:"nopadding"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{ref:"table",apiObj:h.apiObj,"row-key":"id",onSelectionChange:j.selectionChange},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(V,{type:"selection",width:"50"}),Object(o.createVNode)(V,{label:"角色名称",prop:"label",width:"250"}),Object(o.createVNode)(V,{label:"别名",prop:"alias",width:"150"}),Object(o.createVNode)(V,{label:"排序",prop:"progress",width:"150"}),Object(o.createVNode)(V,{label:"操作",fixed:"right",align:"right",width:"140"},{default:Object(o.withCtx)((function(e){return[Object(o.createVNode)(O,{type:"text",size:"small",onClick:function(t){return j.table_show(e.row,e.$index)}},{default:Object(o.withCtx)((function(){return[l]})),_:2},1032,["onClick"]),Object(o.createVNode)(O,{type:"text",size:"small",onClick:function(t){return j.table_edit(e.row,e.$index)}},{default:Object(o.withCtx)((function(){return[s]})),_:2},1032,["onClick"]),Object(o.createVNode)(w,{title:"确定删除吗？",onConfirm:function(t){return j.table_del(e.row,e.$index)}},{reference:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{type:"text",size:"small"},{default:Object(o.withCtx)((function(){return[u]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["apiObj","onSelectionChange"])]})),_:1})]})),_:1}),Object(o.createVNode)(y,{title:h.titleMap[h.saveMode],modelValue:h.saveDialogVisible,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.saveDialogVisible=e}),width:500,"destroy-on-close":""},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{onClick:t[2]||(t[2]=function(e){return h.saveDialogVisible=!1})},{default:Object(o.withCtx)((function(){return[d]})),_:1}),"show"!=h.saveMode?(Object(o.openBlock)(),Object(o.createBlock)(O,{key:0,type:"primary",onClick:t[3]||(t[3]=function(e){return j.saveForm()}),loading:h.isSaveing},{default:Object(o.withCtx)((function(){return[b]})),_:1},8,["loading"])):Object(o.createCommentVNode)("",!0)]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(x,{ref:"saveDialog",mode:h.saveMode},null,8,["mode"])]})),_:1},8,["title","modelValue"]),Object(o.createVNode)(y,{title:"角色权限设置",modelValue:h.permissionDialogVisible,"onUpdate:modelValue":t[7]||(t[7]=function(e){return h.permissionDialogVisible=e}),width:500,"destroy-on-close":""},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{onClick:t[5]||(t[5]=function(e){return h.permissionDialogVisible=!1})},{default:Object(o.withCtx)((function(){return[p]})),_:1}),Object(o.createVNode)(O,{type:"primary",onClick:t[6]||(t[6]=function(e){return j.savePermission()}),loading:h.isPermissionSaveing},{default:Object(o.withCtx)((function(){return[f]})),_:1},8,["loading"])]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(_,{ref:"permissionDialog"},null,512)]})),_:1},8,["modelValue"])],64)}};t.default=O},"2a626":function(e,t,n){"use strict";n.r(t);var o=n("7a23");var r=n("1da1"),a=(n("96cf"),{props:{mode:{type:String,default:"add"}},data:function(){return{form:{id:"",label:"",alias:"",parentId:""},rules:{sort:[{required:!0,message:"请输入排序"}],label:[{required:!0,message:"请输入角色名称"}],alias:[{required:!0,message:"请输入角色别名"}]},groups:[],groupsProps:{value:"id",checkStrictly:!0}}},mounted:function(){this.getGroup()},methods:{getGroup:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.role.select.get();case 2:n=t.sent,e.groups=n.data;case 4:case"end":return t.stop()}}),t)})))()},submit:function(e){var t=this;this.$refs.dialogForm.validate((function(n){if(!n)return!1;e(t.form)}))},setData:function(e){this.form.id=e.id,this.form.label=e.label,this.form.alias=e.alias,this.form.parentId=e.parentId}},render:function(e,t,n,r,a,c){var i=Object(o.resolveComponent)("el-cascader"),l=Object(o.resolveComponent)("el-form-item"),s=Object(o.resolveComponent)("el-col"),u=Object(o.resolveComponent)("el-input-number"),d=Object(o.resolveComponent)("el-row"),b=Object(o.resolveComponent)("el-input"),p=Object(o.resolveComponent)("el-form");return Object(o.openBlock)(),Object(o.createBlock)(p,{model:a.form,rules:a.rules,disabled:"show"==n.mode,ref:"dialogForm","label-width":"80px","label-position":"top"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{label:"上级角色",prop:"parentId"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{modelValue:a.form.parentId,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.parentId=e}),options:a.groups,props:a.groupsProps,"show-all-levels":!1,clearable:""},null,8,["modelValue","options","props"])]})),_:1})]})),_:1}),Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{label:"排序",prop:"sort"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u,{modelValue:a.form.sort,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.sort=e}),"controls-position":"right",min:1,style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(d,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{label:"角色名称",prop:"label"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{modelValue:a.form.label,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.label=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o.createVNode)(s,{span:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{label:"角色别名",prop:"alias"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{modelValue:a.form.alias,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.form.alias=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules","disabled"])}});t.default=a},"73f2":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o.withScopeId)("data-v-eb9a1a98");Object(o.pushScopeId)("data-v-eb9a1a98");var a={class:"treeMain"},c={class:"treeMain"},i={class:"treeMain"};Object(o.popScopeId)();var l=r((function(e,t,n,l,s,u){var d=Object(o.resolveComponent)("el-tree"),b=Object(o.resolveComponent)("el-tab-pane"),p=Object(o.resolveComponent)("el-tabs");return Object(o.openBlock)(),Object(o.createBlock)(p,{"tab-position":"top"},{default:r((function(){return[Object(o.createVNode)(b,{label:"菜单权限"},{default:r((function(){return[Object(o.createVNode)("div",a,[Object(o.createVNode)(d,{ref:"menu","node-key":"name",data:s.menu.list,"default-checked-keys":s.menu.checked,props:s.menu.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(o.createVNode)(b,{label:"部门权限"},{default:r((function(){return[Object(o.createVNode)("div",c,[Object(o.createVNode)(d,{ref:"group","node-key":"name",data:s.group.list,"default-checked-keys":s.group.checked,props:s.group.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(o.createVNode)(b,{label:"类型权限"},{default:r((function(){return[Object(o.createVNode)("div",i,[Object(o.createVNode)(d,{ref:"type","node-key":"name",data:s.type.list,"default-checked-keys":s.type.checked,props:s.type.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1})]})),_:1})})),s=n("1da1"),u=(n("96cf"),{data:function(){return{menu:{list:[],checked:["test","system","user","role"],props:{label:function(e){return e.meta.title}}},group:{list:[],checked:[],props:{}},type:{list:[],checked:[],props:{}}}},mounted:function(){this.getMenu(),this.getGroup(),this.getType()},methods:{getMenu:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.menu.list.get();case 2:n=t.sent,e.menu.list=n.data;case 4:case"end":return t.stop()}}),t)})))()},getGroup:function(){this.group.list=[{label:"JL00"},{label:"LP01"},{label:"LP07"},{label:"SL01"},{label:"TL06"},{label:"TL09"},{label:"YP07"}]},getType:function(){this.type.list=[{label:"原料采购"},{label:"厂内互供"},{label:"炼销订单"},{label:"化工统销订单"},{label:"移库单"},{label:"自销订单"}]}}});n("027d");u.render=l,u.__scopeId="data-v-eb9a1a98";t.default=u},"8e33":function(e,t,n){}}]);