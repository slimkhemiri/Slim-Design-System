import{g as a}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,n={title:"Slim/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onSlimChange:s()}},e={args:{label:"Message",placeholder:"Type your message…",rows:4,value:""}},r={args:{label:"Message",value:"Too short",minlength:20,error:"Please provide at least 20 characters."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message…",
    rows: 4,
    value: ""
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    value: "Too short",
    minlength: 20,
    error: "Please provide at least 20 characters."
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","WithError"];export{e as Default,r as WithError,c as __namedExportsOrder,n as default};
