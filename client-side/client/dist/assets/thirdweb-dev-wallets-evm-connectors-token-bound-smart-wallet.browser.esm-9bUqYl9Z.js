import{SmartWalletConnector as o}from"./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm-rpvDMaTO.js";import{d as r}from"./thirdweb-dev-wallets.browser.esm-oYsxdPUp.js";import{b9 as n}from"./index-OE56k1X-.js";import"./index-Rk3_rD1A.js";import"./browser-7ACNNLw6.js";import"./url-bc88b2b6.browser.esm-bQ071zCC.js";import"./index.es-c5c7QnKt.js";import"./tslib.es6-GVow8CXj.js";import"./errors-3055a99c.browser.esm-nv5LXain.js";import"./normalizeChainId-e4cc0175.browser.esm-3qrEAm98.js";class l extends o{constructor(t){super({...t,factoryAddress:t.registryAddress||r}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,n("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}export{l as TokenBoundSmartWalletConnector};
