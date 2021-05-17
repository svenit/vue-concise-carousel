import{r as a,o as n,c as t,a as e,w as s,F as o,b as l,d as p,e as i,f as u,g as c,h as r,v as g,i as d,t as v,p as k,j as m,k as f,l as b,m as h,n as y,q as C,s as P,u as w,x}from"./vendor.e49d05b8.js";!function(a=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const e=new URL(a,location),s=a=>{URL.revokeObjectURL(a.src),a.remove()};self[n]=a=>new Promise(((t,o)=>{const l=new URL(a,e);if(self[n].moduleMap[l])return t(self[n].moduleMap[l]);const p=new Blob([`import * as m from '${l}';`,`${n}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){o(new Error(`Failed to import: ${a}`)),s(i)},onload(){t(self[n].moduleMap[l]),s(i)}});document.head.appendChild(i)})),self[n].moduleMap={}}}("/assets/");const S={name:"ExampleBasic"},M={class:"content"},E=e("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 1. Basic ",-1),L=e("p",null,"No options configured, 10 slides added to the carousel.",-1),T={class:"example-basic",style:{"margin-bottom":"50px"}},N={class:"preview"},$=e("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),D=p('<div class="template"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);S.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",M,[E,L,e("div",T,[e("div",N,[e(v,null,{default:s((()=>[(n(),t(o,null,l(10,(a=>e(d,{key:a},{default:s((()=>[$])),_:2},1024))),64))])),_:1})]),D])])};const j={name:"ExampleResponsive"},B={class:"content"},A=e("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 2. Responsive ",-1),H=e("p",null," Configured breakpoints: 2 slides on mobile (<= 480px), 3 slides on tablet (<= 768). ",-1),z={class:"example-responsive",style:{"margin-bottom":"50px"}},V={class:"preview"},O=e("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),q=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:per-page-custom</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>[[480, 2], [768, 3]]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);j.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",B,[A,H,e("div",z,[e("div",V,[e(v,{"per-page-custom":[[480,2],[768,3]]},{default:s((()=>[(n(),t(o,null,l(10,(a=>e(d,{key:a},{default:s((()=>[O])),_:2},1024))),64))])),_:1})]),q])])};const R={name:"ExampleScrollPerPage"},_={class:"content"},F=e("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 3. Scroll per page false ",-1),W=e("p",null," Instead of scrolling per page, the carousel will scroll on a per item basis or perPageCustom with each movement. ",-1),X={class:"example-scroll-per-page",style:{"margin-bottom":"50px"}},I={class:"preview"},U=e("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),Y=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:scroll-per-page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);R.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",_,[F,W,e("div",X,[e("div",I,[e(v,{"scroll-per-page":!1},{default:s((()=>[(n(),t(o,null,l(10,(a=>e(d,{key:a},{default:s((()=>[U])),_:2},1024))),64))])),_:1})]),Y])])};const G={name:"App",components:{ExampleBasic:S,ExampleResponsive:j,ExampleScrollPerPage:R},setup:()=>({slideCount:6})},K={id:"hero",style:{"margin-top":"50px","margin-bottom":"50px"}},Q=e("h1",{style:{"text-align":"center"}}," Vue Concise Carousel is SSR and CSR friendly. ",-1),J=e("p",{class:"action",style:{"text-align":"center"}},[e("a",{class:"button",href:"#install"},"GET STARTED"),e("a",{class:"button white",href:"https://github.com/jambonn/vue-concise-carousel#readme"}," GITHUB ")],-1),Z={id:"example"},aa=e("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),na=p('<div id="install" class="container"><h2 id="installation" style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Installation </h2><h3>yarn/npm</h3><pre class="language-bash"><code class="language-bash"><span class="token comment"># npm</span>\n<span class="token function">npm</span> i @jambonn/vue-concise-carousel\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> @jambonn/vue-concise-carousel</code></pre></div><div id="quick-start" class="container"><h2 style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Quick Start </h2><p> See <a href="https://github.com/jambonn/vue-concise-carousel#configuration"> Configuration </a> to learn advanced usage. </p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:center-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:navigation-enabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> { Carousel, Slide } <span class="token keyword">from</span> <span class="token string">&#39;@jambonn/vue-concise-carousel&#39;</span>\n  <span class="token keyword">import</span> <span class="token string">&#39;@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">&#39;ConciseCarouselComponent&#39;</span><span class="token punctuation">,</span>\n    components<span class="token punctuation">:</span> <span class="token punctuation">{</span> Carousel, Slide <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre></div>',2),ta={id:"example-full",class:"container"},ea=e("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," Examples ",-1),sa=e("div",{id:"license",class:"container"},[e("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," License "),e("p",null,[i(" This software is licensed under the "),e("a",{href:"https://github.com/jambonn/vue-concise-carousel/blob/next/LICENSE.md"}," MIT "),i(" . ")])],-1);G.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel"),k=a("example-basic"),m=a("example-responsive"),f=a("example-scroll-per-page");return n(),t("div",K,[Q,J,e("div",Z,[e(v,{"per-page-custom":[[480,1],[768,4]],"center-mode":!0,"navigation-enabled":!1},{default:s((()=>[(n(!0),t(o,null,l(c.slideCount,(a=>(n(),t(d,{key:a},{default:s((()=>[aa])),_:2},1024)))),128))])),_:1})]),na,e("div",ta,[ea,e(k),e(m),e(f)]),sa])};const oa="undefined"==typeof window,la={name:"Navigation",emits:["navigation-click"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"},canAdvanceForward:{type:Boolean,default:!1},canAdvanceBackward:{type:Boolean,default:!1}}},pa={class:"VueCarousel-navigation"};la.render=function(a,s,o,l,p,i){return n(),t("div",pa,[e("button",{type:"button","aria-label":"Previous page",tabindex:o.canAdvanceBackward?0:-1,class:["VueCarousel-navigation-button VueCarousel-navigation-prev",{"VueCarousel-navigation--disabled":!o.canAdvanceBackward}],style:`padding: ${o.clickTargetSize}px; margin-right: -${o.clickTargetSize}px;`,onClick:s[1]||(s[1]=u((n=>a.$emit("navigation-click","backward")),["prevent"])),innerHTML:o.prevLabel},null,14,["tabindex","innerHTML"]),e("button",{type:"button","aria-label":"Next page",tabindex:o.canAdvanceForward?0:-1,onClick:s[2]||(s[2]=u((n=>a.$emit("navigation-click","forward")),["prevent"])),class:["VueCarousel-navigation-button VueCarousel-navigation-next",{"VueCarousel-navigation--disabled":!o.canAdvanceForward}],style:`padding: ${o.clickTargetSize}px; margin-left: -${o.clickTargetSize}px;`,innerHTML:o.nextLabel},null,14,["tabindex","innerHTML"])])};const ia={name:"Pagination",emits:["pagination-click"],props:{paginationPosition:{type:String,default:"bottom"},scrollPerPage:{type:Boolean,default:!0},maxPaginationDotCount:{type:Number,default:-1},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},speed:{type:Number,default:500},pageCount:{type:Number,default:0},slideCount:{type:Number,default:0},currentPage:{type:Number,default:0}},setup(a,n){const t=c((()=>{const n=a.paginationPosition;return n.indexOf("overlay")<0?"":n})),e=c((()=>a.paginationPosition.indexOf("top")>=0?"bottom":"top")),s=c((()=>a.scrollPerPage?a.pageCount:a.slideCount||0)),o=c((()=>{if(-1===a.maxPaginationDotCount)return{"margin-top":2*a.paginationPadding+"px"};const n=2*a.paginationPadding,t=a.maxPaginationDotCount*(a.paginationSize+n);return{"margin-top":2*a.paginationPadding+"px",overflow:"hidden",width:`${t}px`,margin:"0 auto","white-space":"nowrap"}})),l=n=>n===a.currentPage;return{paginationPositionModifierName:t,paginationCount:s,dotContainerStyle:o,goToPage:a=>{n.emit("pagination-click",a)},isCurrentDot:l,dotStyle:n=>{const t={};if(t[`margin-${e.value}`]=2*a.paginationPadding+"px",Object.assign(t,{padding:`${a.paginationPadding}px`,width:`${a.paginationSize}px`,height:`${a.paginationSize}px`,"background-color":`${l(n)?a.paginationActiveColor:a.paginationColor}`}),-1===a.maxPaginationDotCount)return t;const s=a.paginationSize+2*a.paginationPadding,o=a.pageCount-a.maxPaginationDotCount,p=0-s*(a.currentPage>o?o:a.currentPage<=a.maxPaginationDotCount/2?0:a.currentPage-Math.ceil(a.maxPaginationDotCount/2)+1);return Object.assign(t,{"-webkit-transform":`translate3d(${p}px,0,0)`,transform:`translate3d(${p}px,0,0)`,"-webkit-transition":`-webkit-transform ${a.speed/1e3}s`,transition:`transform ${a.speed/1e3}s`})}}}};ia.render=function(a,s,p,i,c,d){return r((n(),t("div",{class:["VueCarousel-pagination",{[`VueCarousel-pagination--${i.paginationPositionModifierName}`]:i.paginationPositionModifierName}]},[e("div",{class:"VueCarousel-dot-container",role:"tablist",style:i.dotContainerStyle},[(n(!0),t(o,null,l(i.paginationCount,((a,e)=>(n(),t("button",{key:`${a}_${e}`,"aria-hidden":"false",role:"tab","aria-selected":i.isCurrentDot(e)?"true":"false",class:["VueCarousel-dot",{"VueCarousel-dot--active":i.isCurrentDot(e)}],onClick:u((a=>i.goToPage(e)),["prevent"]),style:i.dotStyle(e)},null,14,["aria-selected","onClick"])))),128))],4)],2)),[[g,p.pageCount>1]])};const ua={onwebkittransitionstart:"webkitTransitionStart",onmoztransitionstart:"transitionstart",onotransitionstart:"oTransitionStart otransitionstart",ontransitionstart:"transitionstart"},ca={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},ra={name:"Carousel",components:{Navigation:la,Pagination:ia},emits:["mounted","input","page-change","pagination","navigation-click","pagination-click","transition-start","transition-end"],props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(a){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(a)||a.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"},keyboard:{type:Boolean,default:!1}},setup(a,n){const t=d(null),e=d(0),s=d(0),o=d(!1),l=d(0),p=d(0),i=d(0),u=d(0),r=!oa&&"ontouchstart"in window,g=d(0),C=d(16),P=d(0),w=d("transitionstart"),x=d("transitionend"),S=d("auto"),M=d(null),E=d(null),L=d(null),T=d([]),N=d(null),$=d(null),D=d(null),j=v(a,"autoplay"),B=v(a,"value"),A=v(a,"navigateTo"),H=c((()=>{if(!a.perPageCustom)return a.perPage;const n=a.perPageCustom,e=t.value,s=n.sort(((a,n)=>a[0]>n[0]?-1:1)).filter((a=>e>=a[0]));return s[0]&&s[0][1]||a.perPage})),z=c((()=>a.loop||g.value<R.value)),V=c((()=>a.loop||s.value>0)),O=c((()=>!a.perPageCustom||oa?a.perPage:H.value)),q=c((()=>X.value?0:a.rtl?g.value-p.value:-1*(g.value+p.value))),R=c((()=>Math.max(F.value*(P.value-O.value)-a.spacePadding*a.spacePaddingMaxOffsetFactor,0))),_=c((()=>a.scrollPerPage?Math.ceil(P.value/O.value):P.value-O.value+1)),F=c((()=>(e.value-2*a.spacePadding)/O.value)),W=c((()=>P.value>O.value)),X=c((()=>a.centerMode&&!W.value)),I=c((()=>{const n=a.speed/1e3+"s",t=`${n} ${a.easing} transform`;return a.adjustableHeight?`${t}, height ${n} ${a.adjustableHeightEasing||a.easing}`:t})),U=c((()=>{const n=a.spacePadding;return n>0&&n})),Y=()=>{L.value&&(L.value=clearInterval(L.value))},G=()=>{j.value&&(L.value=setInterval(Q,a.autoplayTimeout))},K=()=>{Y(),G()},Q=()=>{J(a.autoplayDirection)},J=n=>{n&&"backward"===n&&V.value?ta(s.value>0?s.value-1:a.loop?_.value-1:s.value,"navigation"):(!n||n&&"backward"!==n)&&z.value&&ta(s.value<_.value-1?+s.value+1:a.loop?0:s.value,"navigation")},Z=()=>(t.value=window.innerWidth,t.value),aa=()=>{if(!a.adjustableHeight)return"auto";const n=O.value*(+s.value+1)-1,t=[...Array(O.value)].map(((a,t)=>na(n+t))).reduce(((a,n)=>Math.max(a,n&&n.clientHeight||0)),0);return S.value=0===t?"auto":`${t}px`,S.value},na=a=>T.value[a],ta=(t,e)=>{t>=0&&t<=_.value&&(g.value=a.scrollPerPage?Math.min(F.value*O.value*t,R.value):F.value*t,j.value&&!a.autoplayHoverPause&&K(),s.value=t,l.value=0,"pagination"===e&&(Y(),n.emit("pagination-click",t)))},ea=a=>{2!==a.button&&(document.addEventListener(r?"touchend":"mouseup",sa,{passive:!0}),document.addEventListener(r?"touchmove":"mousemove",la,{passive:!0}),E.value=a.timeStamp,o.value=!0,u.value=r?a.touches[0].clientX:a.clientX,i.value=r?a.touches[0].clientY:a.clientY)},sa=n=>{j.value&&!a.autoplayHoverPause&&K(),Y();const t=r?n.changedTouches[0].clientX:n.clientX,e=u.value-t;if(l.value=e/(n.timeStamp-E.value),0!==a.minSwipeDistance&&Math.abs(e)>=a.minSwipeDistance){const n=a.scrollPerPage?F.value*O.value:F.value;p.value=p.value+Math.sign(e)*(n/2)}a.rtl?g.value-=p.value:g.value+=p.value,p.value=0,o.value=!1,ia(),document.removeEventListener(r?"touchend":"mouseup",sa,!0),document.removeEventListener(r?"touchmove":"mousemove",la,!0)},la=n=>{const t=r?n.touches[0].clientX:n.clientX,e=r?n.touches[0].clientY:n.clientY,s=u.value-t,o=i.value-e;if(r&&Math.abs(s)<Math.abs(o))return;p.value=s;const l=g.value+p.value;a.rtl?0===g.value&&p.value>0?p.value=Math.sqrt(a.resistanceCoef*p.value):g.value===R.value&&p.value<0&&(p.value=-Math.sqrt(-a.resistanceCoef*p.value)):l<0?p.value=-Math.sqrt(-a.resistanceCoef*p.value):l>R.value&&(p.value=Math.sqrt(a.resistanceCoef*p.value))},pa=()=>{ra(),ga(),o.value=!0,ia(),setTimeout((()=>{o.value=!1}),C.value)},ia=()=>{a.rtl?g.value-=Math.max(1-O.value,Math.min(Math.round(l.value),O.value-1))*F.value:g.value+=Math.max(1-O.value,Math.min(Math.round(l.value),O.value-1))*F.value;const n=a.scrollPerPage?F.value*O.value:F.value,t=n*Math.floor(P.value/(O.value-1)),e=t+F.value*(P.value%O.value);g.value>(t+e)/2?g.value=e:g.value=n*Math.round(g.value/n),g.value=Math.max(0,Math.min(g.value,R.value)),s.value=a.scrollPerPage?Math.round(g.value/F.value/O.value):Math.round(g.value/F.value)},ra=()=>{(()=>{if(N.value){const a=N.value.getElementsByClassName("VueCarousel-slide");T.value=a,P.value=a.length}})(),Z(),(()=>{if(N.value){const a=N.value.getElementsByClassName("VueCarousel-inner");for(let n=0;n<a.length;n++)a[n].clientWidth>0&&(e.value=a[n].clientWidth||0)}e.value})(),da()},ga=()=>{aa()},da=()=>{if(!z.value&&a.scrollPerPage){const a=_.value-1;s.value=a>=0?a:0,g.value=Math.max(0,Math.min(g.value,R.value))}},va=()=>{n.emit("transition-start")},ka=()=>{n.emit("transition-end")},ma=({keyCode:a})=>{const n=37===a,t=39===a;V.value&&n&&J("backward"),z.value&&t&&J("forward")};return k("carousel",{isTouch:r,dragStartX:u,minSwipeDistance:a.minSwipeDistance,adjustableHeight:a.adjustableHeight}),m(B,(a=>{a!==s.value&&(ta(a),ia())})),m(A,(a=>{"object"==typeof a?(!1===a[1]&&(o.value=!0,setTimeout((()=>{o.value=!1}),C.value)),y((()=>{ta(a[0])}))):y((()=>{ta(a)}))}),{immediate:!0}),m(j,(a=>{a?K():Y()})),m(s,(a=>{n.emit("page-change",a),n.emit("input",a)})),f((()=>{oa||(a.autoplayHoverPause&&(N.value.addEventListener("mouseenter",Y,{passive:!0}),N.value.addEventListener("mouseleave",G,{passive:!0})),a.keyboard&&window.addEventListener("keydown",ma,{passive:!0})),G(),window.addEventListener("resize",((a,n,t)=>{let e;return()=>{const s=void 0,o=t&&!e;clearTimeout(e),e=setTimeout((()=>{e=null,t||a.apply(s)}),n),o&&a.apply(s)}})(pa,C.value),{passive:!0}),(r&&a.touchDrag||a.mouseDrag)&&$.value.addEventListener(r?"touchstart":"mousedown",ea,{passive:!0}),(()=>{const n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(n){let t={attributes:!0,data:!0};if(a.adjustableHeight){const a={childList:!0,subtree:!0,characterData:!0};t=Object.assign({},t,a)}if(M.value=new n((()=>{y((()=>{ra(),ga()}))})),N.value){const a=N.value.getElementsByClassName("VueCarousel-inner");for(let n=0;n<a.length;n++)M.value.observe(a[n],t)}}})(),ra(),ga(),w.value=(()=>{for(let a in ua)if(a in window)return ua[a]})(),D.value.addEventListener(w.value,va,{passive:!0}),x.value=(()=>{for(let a in ca)if(a in window)return ca[a]})(),D.value.addEventListener(x.value,ka,{passive:!0}),n.emit("mounted"),"backward"===a.autoplayDirection&&(o.value=!0,setTimeout((()=>{o.value=!1}),C.value),y((()=>{ta(_.value)})))})),b((()=>{ra()})),h((()=>{oa||(a.autoplayHoverPause&&(N.value.removeEventListener("mouseenter",Y),N.value.removeEventListener("mouseleave",G)),a.keyboard&&window.removeEventListener("keydown",ma)),M.value&&M.value.disconnect(),window.removeEventListener("resize",Z),D.value.removeEventListener(w.value,va),D.value.removeEventListener(x.value,ka),$.value.removeEventListener(r?"touchstart":"mousedown",ea)})),{vueConciseCarousel:N,vueCarouselWrapper:$,vueCarouselInner:D,isCenterModeEnabled:X,offset:g,maxOffset:R,currentOffset:q,dragging:o,transitionStyle:I,slideWidth:F,currentHeight:S,padding:U,isNavigationRequired:W,pageCount:_,slideCount:P,currentPerPage:O,currentPage:s,canAdvanceForward:z,canAdvanceBackward:V,restartAutoplay:K,pauseAutoplay:Y,computeCarouselHeight:ga,getCarouselHeight:aa,handleNavigation:a=>{J(a),Y(),n.emit("navigation-click",a)},goToPage:ta}}},ga={class:"VueCarousel-wrapper",ref:"vueCarouselWrapper"};ra.render=function(s,o,l,p,i,u){const c=a("Navigation"),r=a("Pagination");return n(),t("div",{ref:"vueConciseCarousel",class:["VueCarousel",{"VueCarousel--reverse":"top"===l.paginationPosition}]},[e("div",ga,[e("div",{ref:"vueCarouselInner",class:["VueCarousel-inner",{"VueCarousel-inner--center":p.isCenterModeEnabled}],style:{transform:`translate(${p.currentOffset}px, 0)`,transition:p.dragging?"none":p.transitionStyle,"ms-flex-preferred-size":`${p.slideWidth}px`,"webkit-flex-basis":`${p.slideWidth}px`,"flex-basis":`${p.slideWidth}px`,visibility:p.slideWidth?"visible":"hidden",height:`${p.currentHeight}`,"padding-left":`${p.padding}px`,"padding-right":`${p.padding}px`}},[C(s.$slots,"default")],6)],512),l.navigationEnabled&&p.isNavigationRequired?C(s.$slots,"navigation",{key:0},(()=>[e(c,{clickTargetSize:l.navigationClickTargetSize,nextLabel:l.navigationNextLabel,prevLabel:l.navigationPrevLabel,canAdvanceForward:p.canAdvanceForward,canAdvanceBackward:p.canAdvanceBackward,onNavigationClick:p.handleNavigation},null,8,["clickTargetSize","nextLabel","prevLabel","canAdvanceForward","canAdvanceBackward","onNavigationClick"])])):P("v-if",!0),l.paginationEnabled?C(s.$slots,"pagination",{key:1},(()=>[e(r,{paginationPosition:l.paginationPosition,scrollPerPage:l.scrollPerPage,maxPaginationDotCount:l.maxPaginationDotCount,paginationPadding:l.paginationPadding,paginationSize:l.paginationSize,paginationActiveColor:l.paginationActiveColor,paginationColor:l.paginationColor,speed:l.speed,pageCount:p.pageCount,slideCount:p.slideCount,currentPage:p.currentPage,onPaginationClick:o[1]||(o[1]=a=>p.goToPage(a,"pagination"))},null,8,["paginationPosition","scrollPerPage","maxPaginationDotCount","paginationPadding","paginationSize","paginationActiveColor","paginationColor","speed","pageCount","slideCount","currentPage"])])):P("v-if",!0)],2)};const da={name:"Slide",emits:["slide-click"],setup(a,n){const t=w("carousel"),e=d(null),s=c((()=>t.adjustableHeight)),o=a=>{const e=t.isTouch&&a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0].clientX:a.clientX,s=t.dragStartX.value-e;(0===t.minSwipeDistance||Math.abs(s)<t.minSwipeDistance)&&n.emit("slide-click",Object.assign({},a.currentTarget.dataset))};return f((()=>{oa||(e.value.addEventListener("dragstart",(a=>a.preventDefault()),{passive:!0}),e.value.addEventListener(t.isTouch?"touchend":"mouseup",o,{passive:!0}))})),h((()=>{oa||(e.value.removeEventListener("dragstart",(a=>a.preventDefault())),e.value.removeEventListener(t.isTouch?"touchend":"mouseup",o))})),{vueCarouselSlide:e,isAdjustableHeight:s}}};da.render=function(a,e,s,o,l,p){return n(),t("div",{ref:"vueCarouselSlide",tabindex:"-1",role:"tabpanel",class:["VueCarousel-slide",{"VueCarousel-slide-adjustableHeight":o.isAdjustableHeight}]},[C(a.$slots,"default")],2)};const va=x(G);va.component(ra.name,ra),va.component(da.name,da),va.mount("#app");