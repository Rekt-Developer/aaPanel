System.register(["./index-legacy100.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./index-legacy101.js?v=1732601582185","./public-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(e,s){"use strict";var n,l,t,a,g,r,c;return{setters:[e=>{n=e._},e=>{l=e.aa},e=>{t=e.d,a=e.o,g=e.O,r=e.X,c=e.U},null,null,null,null,null],execute:function(){e("default",t({__name:"index",setup(e){const s=c(),t=l(),o=new Map([["MySQL","mysql"],["SQLServer","sqlserver"],["MongoDB","mongodb"],["Redis","redis"],["PgSQL","pgsql"]]),u=e=>{t.resetPage(),t.setType(o.get(e.name)||"mysql")};return(()=>{const e=`${s.meta.title}`;t.setType(o.get(e)||"mysql")})(),t.getConfig(),a((()=>{t.resetPage()})),(e,s)=>{const l=n;return g(),r(l,{onChange:u})}}}))}}}));