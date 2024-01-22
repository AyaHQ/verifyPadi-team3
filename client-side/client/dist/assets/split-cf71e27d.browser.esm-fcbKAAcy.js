var R=Object.defineProperty;var b=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(b(i,typeof t!="symbol"?t+"":t,e),e);import{aV as v,ae as C,af as A,aW as P,ah as _,B as u,aq as n,_ as k,au as O,at as T,ak as l,al as o}from"./index-OE56k1X-.js";import{C as S,a as I,G as E,b as B}from"./contract-appuri-2a88c8fb.browser.esm-fIMgWqzA.js";import{C as N}from"./contract-interceptor-6f8989ff.browser.esm-amNiAGmN.js";import{C as L}from"./contract-roles-fa8ea1ef.browser.esm-9UAi7f_C.js";const h=class h{constructor(t,e,a){c(this,"withdraw",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await n(t)]})));c(this,"withdrawToken",l(async(t,e)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:await Promise.all([n(e),n(t)])})));c(this,"distribute",l(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})));c(this,"distributeToken",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await n(t)]})));let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,e,s,r,a);this._chainId=p,this.abi=A.parse(s||[]),this.contractWrapper=d,this.storage=a,this.metadata=new S(this.contractWrapper,P,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new L(this.contractWrapper,h.contractRoles),this.encoder=new _(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new B(this.contractWrapper),this.interceptor=new N(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let e=u.from(0);const a=await this.contractWrapper.read("payeeCount",[]);for(;e.lt(a);)try{const r=await this.contractWrapper.read("payee",[e]);t.push(await this.getRecipientSplitPercentage(r)),e=e.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),e={};for(const a of t)e[a.address]=await this.balanceOf(a.address);return e}async balanceOfTokenAllRecipients(t){const[e,a]=await Promise.all([n(t),this.getAllRecipients()]),r={};for(const s of a)r[s.address]=await this.balanceOfToken(s.address,e);return r}async balanceOf(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.getProvider().getBalance(this.getAddress()),this.contractWrapper.read("totalReleased",[])]),s=a.add(r);return this._pendingPayment(e,s,await this.contractWrapper.read("released",[e]))}async balanceOfToken(t,e){const[a,r]=await Promise.all([n(e),n(t)]),s=(await k(()=>import("./index-OE56k1X-.js").then(y=>y.eu),__vite__mapDeps([0,1]))).default,p=new O(a,s,this.contractWrapper.getProvider()),[d,W,g]=await Promise.all([p.balanceOf(this.getAddress()),this.contractWrapper.read("totalReleased",[a]),this.contractWrapper.read("released",[a,r])]),w=d.add(W),f=await this._pendingPayment(r,w,g);return await T(this.contractWrapper.getProvider(),a,f)}async getRecipientSplitPercentage(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:e,splitPercentage:r.mul(u.from(1e7)).div(a).toNumber()/1e5}}async _pendingPayment(t,e,a){const[r,s]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[])]);return e.mul(await this.contractWrapper.read("shares",[r])).div(s).sub(a)}async prepare(t,e,a){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a})}async call(t,e,a){return this.contractWrapper.call(t,e,a)}};c(h,"contractRoles",v);let m=h;export{m as Split};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-OE56k1X-.js","assets/index-Zpn9ZsWz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}