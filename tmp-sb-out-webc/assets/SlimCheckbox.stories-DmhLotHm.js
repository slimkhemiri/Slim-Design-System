import{c as a}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,n={title:"Slim/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onSlimChange:s()}},e={args:{label:"I agree to the terms",hint:"You can unsubscribe later.",checked:!1,disabled:!1,required:!1,value:"agree"}},r={args:{label:"Accept policy",checked:!0,error:"This field is required for compliance."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree to the terms",
    hint: "You can unsubscribe later.",
    checked: false,
    disabled: false,
    required: false,
    value: "agree"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept policy",
    checked: true,
    error: "This field is required for compliance."
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","CheckedWithError"];export{r as CheckedWithError,e as Default,l as __namedExportsOrder,n as default};
