import{d as I,k as C,m as x,q as B,l as L,s as U,r as f,o as s,c,a as d,w as S,f as t,F as y,h as g,t as v,g as m,A as w,p as E,e as F,_ as k,v as O,x as b,j}from"./index.2fe7b4c8.js";const A=a=>(E("data-v-5c7cac55"),a=a(),F(),a),M={class:"charts-unit"},N={class:"flex"},V={class:"cover-container"},q={class:"list-container"},G={class:"cover-container"},z=["src"],H={class:"list-container"},J=["onDblclick"],K=A(()=>t("div",null,[t("span",null,"\u67E5\u770B\u5168\u90E8"),t("i",{class:"iconfont icon-arrow-right"})],-1)),Q=I({__name:"ChartsUnit",props:{playlistId:null},setup(a){const l=a;let o=C({tracks:[],updateTime:0,coverImgUrl:""});const i=x(()=>o.value.tracks.splice(0,5)),u=x(()=>{const e=o.value.updateTime,r=B(e).month(),p=B(e).date();return`${r+1}\u6708${p}\u65E5\u66F4\u65B0`}),n=C(!0),h=async()=>{try{let e={id:l.playlistId};n.value=!0;let r=await w.playlist.getPlaylistDetail(e);r.code===200&&(o.value=r.playlist,n.value=!1)}catch(e){console.log(e)}},T=L(),D=e=>{T.goPlaySong(e)};return U(()=>l.playlistId,()=>{setTimeout(()=>{h()},80)},{immediate:!0}),(e,r)=>{const p=f("el-skeleton-item"),P=f("el-skeleton");return s(),c("div",M,[d(P,{loading:n.value,animated:""},{template:S(()=>[t("div",N,[t("div",V,[d(p,{variant:"image"})]),t("div",q,[(s(),c(y,null,g(5,_=>d(p,{variant:"p"})),64))])])]),default:S(()=>[t("div",G,[t("span",null,v(m(u)),1),t("img",{src:m(o).coverImgUrl},null,8,z)]),t("div",H,[(s(!0),c(y,null,g(m(i),(_,$)=>(s(),c("div",{key:_.id,onDblclick:et=>D(_.id)},[t("span",null,v($+1),1),t("span",null,v(_.name),1),t("span",null,v(_.ar[0].name),1)],40,J))),128)),K])]),_:1},8,["loading"])])}}});const R=k(Q,[["__scopeId","data-v-5c7cac55"]]),W={class:"official-charts"},X=I({__name:"OfficialCharts",setup(a){const l=O([]),o=async()=>{try{let u=(await w.discoverMusic.getTopList()).list.splice(0,4);for(const n of u)l.push(n.id)}catch(i){console.log(i)}};return b(async()=>{await o()}),(i,u)=>{const n=f("BaseTitle");return s(),c("div",W,[t("div",null,[d(n,{title:"\u5B98\u65B9\u699C"}),(s(!0),c(y,null,g(l,h=>(s(),j(R,{playlistId:h},null,8,["playlistId"]))),256))])])}}});const Y=k(X,[["__scopeId","data-v-8ff0a43c"]]),Z={class:"song-charts"},tt=I({__name:"SongCharts",setup(a){return(l,o)=>(s(),c("div",Z,[d(Y)]))}});const at=k(tt,[["__scopeId","data-v-f46d82d5"]]);export{at as default};
