import{d as r}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,o={title:"Slim/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onSlimChange:t()},argTypes:{type:{control:"select",options:["text","email","password","tel","number"]}}},e={args:{label:"Full name",hint:"As shown on your ID.",name:"fullName",value:"",type:"text",required:!0,disabled:!1}},a={args:{label:"Email",name:"email",value:"not-an-email",type:"email",error:"Please enter a valid email address."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    hint: "As shown on your ID.",
    name: "fullName",
    value: "",
    type: "text",
    required: true,
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    name: "email",
    value: "not-an-email",
    type: "email",
    error: "Please enter a valid email address."
  }
}`,...a.parameters?.docs?.source}}};const m=["Text","WithError"];export{e as Text,a as WithError,m as __namedExportsOrder,o as default};
