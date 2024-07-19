const __vite__fileDeps=["js/index74.js?v=1721298337096","js/index.js?v=1721298337096","js/vue.js?v=1721298337096","js/pinia.js?v=1721298337096","css/index34.css?v=1721298337096","js/index68.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang.js?v=1721298337096","js/useTableColumns.js?v=1721298337096","js/Progress.js?v=1721298337096","css/useTableColumns.css?v=1721298337096","js/useTableData.js?v=1721298337096","js/Skeleton.js?v=1721298337096","js/DataTable.js?v=1721298337096","js/Checkbox.js?v=1721298337096","js/Ellipsis.js?v=1721298337096","js/Select.js?v=1721298337096","js/Tag.js?v=1721298337096","js/Empty.js?v=1721298337096","js/omit.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang5.js?v=1721298337096","js/index65.js?v=1721298337096","js/form.vue_vue_type_script_setup_true_lang.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096","js/check.js?v=1721298337096","js/index146.js?v=1721298337096","js/useLoading.js?v=1721298337096","js/form.js?v=1721298337096","js/index75.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang7.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096","js/InputGroupLabel.js?v=1721298337096","js/InputGroup.js?v=1721298337096","js/index76.js?v=1721298337096","js/index77.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang2.js?v=1721298337096","js/index78.js?v=1721298337096","js/file2.js?v=1721298337096","js/file.js?v=1721298337096","js/index79.js?v=1721298337096","js/index80.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang14.js?v=1721298337096","js/Alert.js?v=1721298337096"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index64.js?v=1721298337096";import{u as t,H as a,I as s,e as o,J as i,v as n}from"./index.js?v=1721298337096";import{s as l}from"./pinia.js?v=1721298337096";import{l as r,S as m,U as d,V as u,W as _,Z as c,P as p,q as f,F as v,af as h,D as x,_ as g,ah as E,k as w,ai as D,a1 as j}from"./vue.js?v=1721298337096";import{s as b,g as T}from"./useTableColumns.js?v=1721298337096";import{_ as A}from"./Select.js?v=1721298337096";const R=g("span",{class:"mr-4px"},"The remote server is not configured, ",-1),I=g("span",{class:"mx-4px"},"|",-1),H=r({__name:"index",setup(i){const n=t(),{type:r,install:g}=l(n),E=()=>{"pgsql"===r.value?a():s(r.value)};return(t,a)=>{const s=o,i=e;return m(),d(i,{install:_(g)},{desc:u((()=>[R,"sqlserver"!==_(r)?(m(),c(v,{key:0},[p(s,{onClick:E},{default:u((()=>[f("Click install")])),_:1}),I],64)):h("",!0),p(s,{onClick:_(O)},{default:u((()=>[f("Add Remote DB")])),_:1},8,["onClick"])])),default:u((()=>[x(t.$slots,"default")])),_:3},8,["install"])}}}),L={class:"w-120px"},P=r({__name:"index",props:E({storeKey:{default:""},value:{},all:{type:Boolean,default:!0}},{value:{},valueModifiers:{}}),emits:E(["change"],["update:value"]),setup(e,{emit:a}){const s=e,o=a,i=w((()=>{const{storeKey:e}=s;return e?"".concat(e,"-select"):""})),n=D(e,"value"),r=t(),{remoteList:d}=l(r),u=w((()=>{const e=d.value.map((e=>({label:e.ps||e.db_host,value:e.id})));return s.all&&e.unshift({label:"All",value:-1}),e})),f=e=>{i.value&&b(i.value,String(e)),o("change",e)};return(()=>{if(i.value){const e=T(i.value);e&&(n.value=Number(e))}})(),(e,t)=>{const a=A;return m(),c("div",L,[p(a,{value:n.value,"onUpdate:value":[t[0]||(t[0]=e=>n.value=e),f],options:_(u)},null,8,["value","options"])])}}});function V(){i({title:"Remote DB list",width:860,minHeight:264,component:j((()=>n((()=>import("./index74.js?v=1721298337096")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))))})}function O(){i({title:"Add Remote DB",width:460,minHeight:388,footer:!0,data:{row:void 0,isEdit:!1},component:j((()=>n((()=>import("./form.js?v=1721298337096")),__vite__mapDeps([26,21,5,1,2,3,4,22,23,24]))))})}function k(){i({title:"Change database password",width:480,minHeight:84,footer:!0,component:j((()=>n((()=>import("./index75.js?v=1721298337096")),__vite__mapDeps([27,22,2,1,3,4,28,29,30,31,25]))))})}function C(){i({title:"Select database location",width:460,minHeight:85,footer:!0,component:j((()=>n((()=>import("./index76.js?v=1721298337096")),__vite__mapDeps([32,22,2,1,3,4,15,16,17]))))})}function y(e){i({title:"Database Backup Details [".concat(e.name,"]"),width:700,minHeight:196,data:{row:e},component:j((()=>n((()=>import("./index77.js?v=1721298337096")),__vite__mapDeps([33,6,7,1,2,3,4,8,9,34,12,13,14,15,16,17,18,10,11,25]))))})}function B(e){i({title:"Import to database from file [".concat(e.name,"]"),width:680,minHeight:234,data:{row:e},component:j((()=>n((()=>import("./index78.js?v=1721298337096")),__vite__mapDeps([35,5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,36,25,37]))))})}function S(e){i({title:"Change the database password [".concat(e.name,"]"),width:480,minHeight:140,footer:!0,data:{row:e},component:j((()=>n((()=>import("./index79.js?v=1721298337096")),__vite__mapDeps([38,22,2,1,3,4,28,29,30,31]))))})}function q(e){i({title:"Delete database",width:760,minHeight:226,footer:!0,confirmType:"error",confirmText:"Next",data:{ids:e.map((e=>e.id))},component:j((()=>n((()=>import("./index80.js?v=1721298337096")),__vite__mapDeps([39,10,2,1,3,4,11,12,13,14,15,16,17,18,36,25,40,8,41]))))})}export{P as _,y as a,B as b,q as c,C as d,H as e,k as f,V as g,S as u};