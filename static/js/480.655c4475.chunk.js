(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{5480:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(9434),r=n(8724),i=n(1413),o=n(7689),s={name:"",email:"",password:""},u={label:"Name:",name:"name",type:"text",placeholder:"Input name",required:!0},c={label:"Email:",name:"email",type:"email",placeholder:"Input email",required:!0},l={label:"Password:",name:"password",type:"password",placeholder:"Input password",required:!0},p=n(158),m=n(9820),f=n(587),d=n(5125),h={},b=n(3329),v=function(e){var t=e.onSubmit,n=(0,p.Z)({onSubmit:t,initialState:s}),a=n.state,r=n.handleChange,v=n.handleSubmit;if((0,m.Z)())return(0,b.jsx)(o.Fg,{to:"/contacts"});var y=a.name,x=a.email,S=a.password;return(0,b.jsxs)("form",{className:h.form,onSubmit:v,children:[(0,b.jsx)(f.Z,(0,i.Z)({value:y,onChange:r},u)),(0,b.jsx)(f.Z,(0,i.Z)({value:x,onChange:r},c)),(0,b.jsx)(f.Z,(0,i.Z)({value:S,onChange:r},l)),(0,b.jsx)(d.Z,{text:"Register"})]})};v.defaultProps={onSubmit:function(){}};var y=v,x=function(){var e=(0,a.I0)();return(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h2",{children:"Register:"}),(0,b.jsx)(y,{onSubmit:function(t){e((0,r.EL)(t))}})]})}},5125:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a={},r=n(3329),i=function(e){var t=e.type,n=e.text,i=e.onClick;return(0,r.jsx)("button",{className:a.btn,onClick:i,type:t,children:n})};i.defaultProps={type:"submit",onClick:function(){}};var o=i},587:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(6382),r=n(2791),i={},o=n(3329),s=function(e){var t=e.label,n=e.name,s=e.value,u=e.onChange,c=e.placeholder,l=e.required,p=e.type,m=e.pattern,f=e.title,d=(0,r.useMemo)((function(){return(0,a.x0)()}),[]);return(0,o.jsxs)("div",{className:i.wrapper,children:[(0,o.jsx)("label",{htmlFor:d,className:i.label,children:t}),(0,o.jsx)("input",{onChange:u,id:d,className:i.input,type:p,name:n,value:s,placeholder:c,required:l,pattern:m,title:f})]})};s.defaultProps={type:"text",required:!1,onChange:function(){}};var u=s},158:function(e,t,n){"use strict";var a=n(4942),r=n(1413),i=n(885),o=n(2791),s=n(2007),u=n.n(s),c=function(e){var t=e.onSubmit,n=e.initialState,s=e.isReset,u=(0,o.useState)((0,r.Z)({},n)),c=(0,i.Z)(u,2),l=c[0],p=c[1];return{state:l,setState:p,handleChange:function(e){var t=e.target,n=t.name,i=t.value,o=t.type,s=t.checked,u="checkbox"===o?s:i;p((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,u))}))},handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},l)),s&&p((0,r.Z)({},n))}}};c.defaultProps={onSubmit:function(){},initialState:{},isReset:!0},c.propTypes={onSubmit:u().func.isRequired,initialState:u().shape.isRequired,isReset:u().bool.isRequired},t.Z=c},888:function(e,t,n){"use strict";var a=n(9047);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=480.655c4475.chunk.js.map