var s=Object.defineProperty;var n=(t,a,e)=>a in t?s(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var r=(t,a,e)=>(n(t,typeof a!="symbol"?a+"":a,e),e);import{bd as p,be as o,ak as c,al as i}from"./index-OE56k1X-.js";class l{constructor(a){r(this,"featureName",p.name);r(this,"set",c(async a=>{const e=await o.parseAsync(a);return i.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[e.platform_fee_recipient,e.platform_fee_basis_points]})}));this.contractWrapper=a}async get(){const[a,e]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return o.parseAsync({platform_fee_recipient:a,platform_fee_basis_points:e})}}export{l as C};