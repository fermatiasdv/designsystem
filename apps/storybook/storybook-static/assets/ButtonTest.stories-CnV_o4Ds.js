import{t as e}from"./jsx-runtime-DXopviyY.js";var t=e(),n={base:`Arial, sans-serif`},r={xs:`12px`,sm:`14px`,base:`16px`,md:`18px`,lg:`22px`,xl:`24px`,"2xl":`28px`,"3xl":`36px`,"4xl":`40px`,"5xl":`44px`,"6xl":`50px`,"7xl":`64px`,"8xl":`80px`},i={light:300,regular:400,medium:500,semibold:600,bold:700},a={primary:`#222222`,black:`#000000`,secondary:`#565a5d`,brand:`#0651d5`,tertiary:`#818487`,white:`#ffffff`,dark:`#2c3135`,darkAlt:`#333333`,darkDeep:`#1a1b1f`,lightGray:`#eeefef`,offWhite:`#fafafa`,deepDark:`#151719`,warmLight:`#fff1dd`,charcoal:`#23272a`,error:`#e23939`,transparent:`#00000000`},o={gray:`#dddddd`,white:`#ffffff`,offWhite:`#fafafa`,brand:`#0651d5`,brandTransparent:`#0651d500`,brandLight:`#b9c3df`,whiteTransparent:`#ffffff00`,charcoal:`#23272a`,black:`#000000`,deepDark:`#101213`,dark:`#1a1d20`,lightGray:`#eeefef`,errorLight:`#ffdede`},s={transparent:`0.8px solid rgba(0, 0, 0, 0)`,subtle:`0.8px solid rgb(179, 181, 182)`,warmLight:`0.8px solid rgb(253, 241, 224)`,warmAccent:`0.8px solid rgb(254, 232, 176)`},c={none:`0px`,xs:`3px`,sm:`4px`,md:`5px`,lg:`8px`,xl:`12px`,"2xl":`16px`,"3xl":`24px`,topLeft2xl:`16px 0px 0px 0px`,bottomXl:`0px 0px 12px 12px`};function l(...e){return e.filter(Boolean).join(` `)}var u={primary:{backgroundColor:o.brand,color:a.white,border:s.transparent},secondary:{backgroundColor:o.white,color:a.brand,border:s.subtle},ghost:{backgroundColor:o.offWhite,color:a.primary,border:s.transparent}},d={sm:{fontSize:r.sm,padding:`6px 12px`,borderRadius:c.md},md:{fontSize:r.base,padding:`10px 20px`,borderRadius:c.lg},lg:{fontSize:r.md,padding:`14px 28px`,borderRadius:c.xl}},f={fontFamily:n.base,fontWeight:i.medium,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,transition:`opacity 0.15s ease`,outline:`none`},p={opacity:.4,cursor:`not-allowed`};function m({variant:e=`primary`,size:n=`md`,disabled:r=!1,className:i,style:a,children:o,...s}){let c={...f,...u[e],...d[n],...r?p:{},...a};return(0,t.jsx)(`button`,{className:l(`button-test`,i),style:c,disabled:r,...s,children:o})}var h={title:`Atoms/ButtonTest`,component:m,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},children:{control:`text`}}},g={args:{variant:`primary`,size:`md`,children:`Primary`}},_={args:{variant:`secondary`,size:`md`,children:`Secondary`}},v={args:{variant:`ghost`,size:`md`,children:`Ghost`}},y={args:{variant:`primary`,size:`sm`,children:`Small`}},b={args:{variant:`primary`,size:`lg`,children:`Large`}},x={args:{variant:`primary`,size:`md`,disabled:!0,children:`Disabled`}},S={render:()=>(0,t.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,t.jsx)(m,{variant:`primary`,children:`Primary`}),(0,t.jsx)(m,{variant:`secondary`,children:`Secondary`}),(0,t.jsx)(m,{variant:`ghost`,children:`Ghost`})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <ButtonTest variant="primary">Primary</ButtonTest>\r
      <ButtonTest variant="secondary">Secondary</ButtonTest>\r
      <ButtonTest variant="ghost">Ghost</ButtonTest>\r
    </div>
}`,...S.parameters?.docs?.source}}};var C=[`Primary`,`Secondary`,`Ghost`,`Small`,`Large`,`Disabled`,`AllVariants`];export{S as AllVariants,x as Disabled,v as Ghost,b as Large,g as Primary,_ as Secondary,y as Small,C as __namedExportsOrder,h as default};