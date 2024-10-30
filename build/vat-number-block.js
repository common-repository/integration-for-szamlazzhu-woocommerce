!function(){"use strict";var e,t={199:function(){var e=window.wp.element,t=window.wp.blocks,l=window.wp.primitives,a=(0,e.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(l.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z",fillRule:"evenodd",clipRule:"evenodd"}),(0,e.createElement)(l.Path,{d:"M15 15V15C15 13.8954 14.1046 13 13 13L11 13C9.89543 13 9 13.8954 9 15V15",fillRule:"evenodd",clipRule:"evenodd"}),(0,e.createElement)(l.Circle,{cx:"12",cy:"9",r:"2",fillRule:"evenodd",clipRule:"evenodd"})),o=window.wp.i18n,n=window.wp.blockEditor,c=window.wp.components,r=window.wc.wcSettings,i=window.wc.blocksCheckout;const{defaultText:s,defaultIndividualLabel:u,defaultCompanyLabel:m,defaultVatNumberLabel:d}=(0,r.getSetting)("wc-szamlazz-vat-number_data","");var p=JSON.parse('{"apiVersion":2,"name":"wc-szamlazz/vat-number-block","version":"2.0.0","title":"Számlázz.hu VAT Number Field","category":"woocommerce","description":"Adds a VAT number field to the checkout form.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-contact-information-block"],"textdomain":"wc-szamlazz","editorStyle":"file:../../../build/style-vat-number-block.css","attributes":{"lock":{"type":"object","default":{"move":true,"remove":true}}}}');(0,t.registerBlockType)(p,{icon:{src:(0,e.createElement)((function({icon:t,size:l=24,...a}){return(0,e.cloneElement)(t,{width:l,height:l,...a})}),{icon:a})},edit:({attributes:t,setAttributes:l})=>{const{text:a,individualLabel:r,companyLabel:p,vatNumberLabel:b,fieldType:w,autoComplete:v,companyDefault:f,showTitle:h,checkboxLabel:z}=t,k=(0,n.useBlockProps)(),[y,g]=(0,e.useState)(!0);return(0,e.createElement)("div",{...k},(0,e.createElement)(n.InspectorControls,{key:"setting"},(0,e.createElement)(c.PanelBody,{title:(0,o.__)("Settings","wc-szamlazz")},(0,e.createElement)(c.PanelRow,null,(0,e.createElement)(c.RadioControl,{label:(0,o.__)("Field Type","wc-szamlazz"),selected:w,options:[{label:(0,o.__)("Radio buttons","wc-szamlazz"),value:"radio"},{label:(0,o.__)("Single checkbox","wc-szamlazz"),value:"checkbox"}],onChange:e=>l({fieldType:e})})),"checkbox"==w&&(0,e.createElement)(c.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)(c.TextControl,{label:(0,o.__)("Checkbox label","wc-szamlazz"),value:z,onChange:e=>l({checkboxLabel:e}),help:(0,o.__)("Text to display next to the checkbox","wc-szamlazz")}))),"radio"==w&&(0,e.createElement)(c.PanelRow,null,(0,e.createElement)("fieldset",null,(0,e.createElement)(c.ToggleControl,{label:(0,o.__)("Company by default","wc-szamlazz"),onChange:()=>l({companyDefault:!f}),checked:f}))),(0,e.createElement)(c.PanelRow,null,(0,e.createElement)(c.ToggleControl,{label:(0,o.__)("Show Title","wc-szamlazz"),onChange:()=>l({showTitle:!h}),checked:h})),(0,e.createElement)(c.PanelRow,null,(0,e.createElement)(c.ToggleControl,{label:(0,o.__)("Autocomplete","wc-szamlazz"),onChange:()=>l({autoComplete:!v}),checked:v,help:(0,o.__)("If the customer enters a VAT number, it will validate it and also prefill the address and company name fields automatically.","wc-szamlazz")})))),(0,e.createElement)("div",{class:"wc-block-components-radio-control"},h&&(0,e.createElement)("p",null,(0,e.createElement)(n.PlainText,{className:"",value:a||s,onChange:e=>l({text:e}),style:{backgroundColor:"transparent"}})),"radio"==w&&(0,e.createElement)("div",{className:"wc-block-components-radio-control wc-szamlazz-vat-number-block-radios"},["individual","company"].map((t=>(0,e.createElement)("label",{className:"wc-block-components-radio-control__option "+("company"===t?"wc-block-components-radio-control__option-checked":""),htmlFor:`checkout-customer-type-${t}`},(0,e.createElement)("input",{id:`checkout-customer-type-${t}`,class:"wc-block-components-radio-control__input",name:"radio-control-wc-billing-customer-type",type:"radio",value:t,checked:"company"===t}),(0,e.createElement)("div",{class:"wc-block-components-radio-control__option-layout"},(0,e.createElement)("div",{class:"wc-block-components-radio-control__label-group"},(0,e.createElement)("span",{class:"wc-block-components-radio-control__label"},"individual"===t&&(0,e.createElement)(n.PlainText,{value:r||u,onChange:e=>l({individualLabel:e}),style:{backgroundColor:"transparent"}}),"company"===t&&(0,e.createElement)(n.PlainText,{value:p||m,onChange:e=>l({companyLabel:e}),style:{backgroundColor:"transparent"}})))))))),"checkbox"==w&&(0,e.createElement)(i.CheckboxControl,{className:"wc-szamlazz-vat-number-checkbox",label:z,onChange:e=>{g(e)},checked:y}),(y||"radio"==w)&&(0,e.createElement)("div",{class:"wc-block-components-text-input"},(0,e.createElement)("input",{type:"text"}),(0,e.createElement)("label",null,(0,e.createElement)(n.PlainText,{value:b||d,onChange:e=>l({vatNumberLabel:e})})))))},save:()=>(0,e.createElement)("div",{...n.useBlockProps.save()}),attributes:{...p.attributes,text:{type:"string",default:""},individualLabel:{type:"string",default:""},companyLabel:{type:"string",default:""},vatNumberLabel:{type:"string",default:""},fieldType:{type:"string",default:"radio"},autoComplete:{type:"boolean",default:!0},showTitle:{type:"boolean",default:!0},companyDefault:{type:"boolean",default:!1},checkboxLabel:{type:"string",default:"I buy as a company"}}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=function(t,l,o,n){if(!l){var c=1/0;for(u=0;u<e.length;u++){l=e[u][0],o=e[u][1],n=e[u][2];for(var r=!0,i=0;i<l.length;i++)(!1&n||c>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(r=!1,n<c&&(c=n));if(r){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={942:0,438:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,c=l[0],r=l[1],i=l[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var u=i(a)}for(t&&t(l);s<c.length;s++)n=c[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=self.webpackChunkwc_szamlazz_vat_number_block=self.webpackChunkwc_szamlazz_vat_number_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var o=a.O(void 0,[438],(function(){return a(199)}));o=a.O(o)}();