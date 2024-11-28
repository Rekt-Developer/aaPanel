import{I as e}from"./page_layout.js?v=1732601582185";import{c as a,o as t}from"./alarm.js?v=1732601582185";import{b as l}from"./public.js?v=1732601582185";import{d as i,ap as n,W as s,aq as o,r,O as p,X as m,R as d,M as u,F as f,c}from"./vue.js?v=1732601582185";import{bL as h}from"./naive.js?v=1732601582185";const g=i({__name:"index",props:n({multiple:{type:Boolean,default:!0}},{value:{},valueModifiers:{}}),emits:["update:value"],setup(i){const{t:n}=s(),{loading:g,setLoading:v}=l(),w=o(i,"value"),b=r([]),_=r([{name:"mail",title:n("Config.Alarm.index_3"),ps:n("Config.Alarm.index_36"),help:"https://www.bt.cn/bbs/thread-66183-1-1.html",list:[]},{name:"dingding",title:n("Config.Alarm.index_5"),ps:n("Config.Alarm.index_37"),help:"https://www.bt.cn/bbs/thread-108081-1-1.html",list:[]},{name:"weixin",title:n("Config.Alarm.index_6"),ps:n("Config.Alarm.index_38"),help:"https://www.bt.cn/bbs/thread-108116-1-1.html",list:[]},{name:"feishu",title:n("Config.Alarm.index_4"),ps:n("Config.Alarm.index_39"),help:"https://www.aapanel.com/forum/d/16942-aapanel-how-does-set-lark-or-feishu-notification",list:[]},{name:"tg",title:"Telegram",ps:"Use Telegram to send and receive panel notifications",help:"https://www.aapanel.com/forum/d/5115-how-to-add-telegram-to-panel-notifications",list:[]}]),x=async()=>{try{v(!0);const{message:l}=await a({refresh:0});b.value=[],e(l)&&(_.value.forEach((e=>{e.list=l.filter((a=>a.sender_type===e.name))})),_.value.forEach((e=>{const a=l.filter((a=>a.used&&a.sender_type===e.name));a.length>0?a.forEach((a=>{b.value.push({label:"".concat(a.data.title," (").concat(e.title,")"),value:a.id})})):b.value.push({label:()=>u(f,null,[e.title,c("["),u("a",{class:"bt-link",onClick:()=>{t({row:e,onRefresh:x})}},[n("Public.Btn.Conf")]),c("]")]),value:e.name,disabled:!0})})))}finally{v(!1)}};return x(),(e,a)=>{const t=h;return p(),m(t,{value:w.value,"onUpdate:value":a[0]||(a[0]=e=>w.value=e),loading:d(g),options:d(b),multiple:e.multiple,"max-tag-count":"responsive",placeholder:e.$t("Config.Alarm.index_86")},null,8,["value","loading","options","multiple","placeholder"])}}});export{g as _};