(window.webpackJsonp=window.webpackJsonp||[]).push([["other-directive"],{"847b":function(e,t,r){"use strict";r.r(t);var c=r("7a23"),i=Object(c.createTextVNode)("v-auth=\"'user.add'\""),n=Object(c.createTextVNode)("v-auth=\"['user.no','user.add']\""),a=Object(c.createTextVNode)("v-role=\"'admin'\""),o=Object(c.createTextVNode)("v-role=\"['SA','admin']\""),l={style:{"margin-top":"15px"}},d={style:{"margin-top":"15px"}},u={style:{"margin-top":"15px"}};var b={name:"directive",data:function(){return{time1:new Date,time2:(new Date).setMinutes((new Date).getMinutes()-1),time3:(new Date).setMinutes((new Date).getMinutes()-120)}},created:function(){},render:function(e,t,r,b,O,j){var s=Object(c.resolveComponent)("el-button"),p=Object(c.resolveComponent)("el-alert"),v=Object(c.resolveComponent)("el-card"),m=Object(c.resolveComponent)("el-tag"),h=Object(c.resolveComponent)("el-main"),w=Object(c.resolveDirective)("auth"),f=Object(c.resolveDirective)("role"),N=Object(c.resolveDirective)("time");return Object(c.openBlock)(),Object(c.createBlock)(h,null,{default:Object(c.withCtx)((function(){return[Object(c.createVNode)(v,{shadow:"never",header:"v-auth 高精度权限控制"},{default:Object(c.withCtx)((function(){return[Object(c.withDirectives)(Object(c.createVNode)(s,{type:"primary"},{default:Object(c.withCtx)((function(){return[i]})),_:1},512),[[w,"user.add"]]),Object(c.withDirectives)(Object(c.createVNode)(s,{type:"primary"},{default:Object(c.withCtx)((function(){return[n]})),_:1},512),[[w,["user.no","user.add"]]]),Object(c.createVNode)(p,{title:"v-auth指令 是$AUTH的语法糖, 原先需要使用v-if来判断是否有权限, 使用指令将减少代码冗余. 并且支持传入数组,有一项满足就判断有权限",style:{"margin-top":"20px"}})]})),_:1}),Object(c.createVNode)(v,{shadow:"never",header:"v-role 角色权限控制",style:{"margin-top":"15px"}},{default:Object(c.withCtx)((function(){return[Object(c.withDirectives)(Object(c.createVNode)(s,{type:"primary"},{default:Object(c.withCtx)((function(){return[a]})),_:1},512),[[f,"admin"]]),Object(c.withDirectives)(Object(c.createVNode)(s,{type:"primary"},{default:Object(c.withCtx)((function(){return[o]})),_:1},512),[[f,["SA","admin"]]]),Object(c.createVNode)(p,{title:"v-role指令 是$ROLE的语法糖, 原理是判断是否含有用户所在的角色别名",style:{"margin-top":"20px"}})]})),_:1}),Object(c.createVNode)(v,{shadow:"never",header:"v-time 时间转换",style:{"margin-top":"15px"}},{default:Object(c.withCtx)((function(){return[Object(c.createElementVNode)("p",null,[Object(c.withDirectives)(Object(c.createVNode)(m,{format:"yyyy-MM-dd hh:mm:ss"},null,512),[[N,1630117968295]])]),Object(c.createElementVNode)("p",l,[Object(c.withDirectives)(Object(c.createVNode)(m,null,null,512),[[N,O.time1,void 0,{tip:!0}]])]),Object(c.createElementVNode)("p",d,[Object(c.withDirectives)(Object(c.createVNode)(m,null,null,512),[[N,O.time2,void 0,{tip:!0}]])]),Object(c.createElementVNode)("p",u,[Object(c.withDirectives)(Object(c.createVNode)(m,null,null,512),[[N,O.time3,void 0,{tip:!0}]])]),Object(c.createVNode)(p,{title:"指令方式日期时间转换,如设置'tip'修饰符将会转换成相对时间,并且每60秒自动更新",style:{"margin-top":"20px"}})]})),_:1})]})),_:1})}};t.default=b}}]);