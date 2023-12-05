import{e as m,w as l,l as p,m as w,n as f,aa as g,Z as v}from"./index-OE56k1X-.js";import{a as C,U as u,R as I}from"./errors-3055a99c.browser.esm-nv5LXain.js";import{InjectedConnector as P}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-yG-y9jf8.js";import"./url-bc88b2b6.browser.esm-bQ071zCC.js";import"./normalizeChainId-e4cc0175.browser.esm-3qrEAm98.js";var c=new WeakMap;class R extends P{constructor(t){const n={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:v},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),m(this,"id",l.phantom),p(this,c,{writable:!0,value:void 0}),w(this,c,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var r,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new C;this.setupListeners(),this.emit("message",{type:"connecting"});let s=null;if(f(this,c)&&((r=this.options)!=null&&r.shimDisconnect)&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(s=await this.getAccount().catch(()=>null),!!s))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!s){const o=await e.request({method:"eth_requestAccounts"});s=g(o[0])}let i=await this.getChainId(),a=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:i,unsupported:a},provider:e,account:s};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new I(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{R as PhantomConnector};
