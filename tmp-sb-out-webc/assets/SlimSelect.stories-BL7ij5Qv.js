import{e as n}from"./components-BNwEcBJn.js";import"./iframe-Bbjb4q25.js";import"./preload-helper-PPVm8Dsz.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o={title:"Slim/Select",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onSlimChange:l()}},e={args:{label:"Country",name:"country",value:"fr",options:[{value:"fr",label:"France"},{value:"be",label:"Belgium"},{value:"de",label:"Germany",disabled:!0}]}},a={args:{label:"Team",hint:"Pick the team that owns this service.",error:"Please select a team.",options:[{value:"",label:"Select…"},{value:"platform",label:"Platform"},{value:"design",label:"Design System"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    name: "country",
    value: "fr",
    options: [{
      value: "fr",
      label: "France"
    }, {
      value: "be",
      label: "Belgium"
    }, {
      value: "de",
      label: "Germany",
      disabled: true
    }]
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Team",
    hint: "Pick the team that owns this service.",
    error: "Please select a team.",
    options: [{
      value: "",
      label: "Select…"
    }, {
      value: "platform",
      label: "Platform"
    }, {
      value: "design",
      label: "Design System"
    }]
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithHintAndError"];export{e as Default,a as WithHintAndError,m as __namedExportsOrder,o as default};
