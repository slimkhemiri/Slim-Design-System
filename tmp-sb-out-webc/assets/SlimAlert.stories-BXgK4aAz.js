import{S as a}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Slim/Alert",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]}}},r={args:{variant:"info",heading:"Information",children:"This is an info alert."}},n={args:{variant:"danger",heading:"Error",children:"Something went wrong."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    heading: "Information",
    children: "This is an info alert."
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    heading: "Error",
    children: "Something went wrong."
  }
}`,...n.parameters?.docs?.source}}};const i=["Info","Danger"];export{n as Danger,r as Info,i as __namedExportsOrder,s as default};
