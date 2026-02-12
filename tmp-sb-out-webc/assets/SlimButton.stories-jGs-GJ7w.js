import{b as e}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Slim/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost"]},size:{control:"radio",options:["sm","md","lg"]},type:{control:"radio",options:["button","submit","reset"]}}},r={args:{variant:"primary",size:"md",disabled:!1,loading:!1,type:"button",children:"Continue"}},a={args:{variant:"secondary",size:"md",loading:!0,children:"Saving…"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    type: "button",
    children: "Continue"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    loading: true,
    children: "Saving…"
  }
}`,...a.parameters?.docs?.source}}};const i=["Primary","Loading"];export{a as Loading,r as Primary,i as __namedExportsOrder,s as default};
