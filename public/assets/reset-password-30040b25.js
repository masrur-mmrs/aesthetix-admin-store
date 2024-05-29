import{u as f,a8 as w,q as x,d8 as D,j as s,B as l}from"./index-47ae49f6.js";import{c as y,g as v,I as d,u as _}from"./index-09a93a80.js";import{l as j}from"./index.modern-f46efc77.js";import{P as T,S as a}from"./login-layout-7c92cea0.js";import{S as U}from"./index-8289da5f.js";import{F as E}from"./index-0c633880.js";const I=()=>{const n=f(),t=w(),e=x.parse(t.search.substring(1));let r=null;if(e!=null&&e.token)try{r=j(e.token)}catch{r=null}const o=(r==null?void 0:r.email)||(e==null?void 0:e.email)||"",{register:i,handleSubmit:p,formState:{errors:u},setError:c}=y({defaultValues:{password:"",repeat_password:""}}),g=D(),N=_(),b=p(m=>{if(m.password!==m.repeat_password){c("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}g.mutate({token:e.token,password:m.password,email:o},{onSuccess:()=>{n("/login")},onError:h=>{N("Error",v(h),"error")}})});return s(T,{children:[s(U,{title:"Reset Password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:84,columnNumber:7},globalThis),s("div",{className:"flex flex-col items-center justify-center",children:r?s("form",{onSubmit:b,children:s("div",{className:"gap-y-large flex flex-col items-center",children:[s("h1",{className:"inter-xlarge-semibold",children:"Reset your password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:89,columnNumber:15},globalThis),s("div",{className:"gap-y-small flex flex-col items-center",children:[s(a,{placeholder:"Email",disabled:!0,readOnly:!0,value:o},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:91,columnNumber:17},globalThis),s("div",{children:[s(a,{placeholder:"Password (8+ characters)",type:"password",...i("password",{required:E.required("Password")})},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:98,columnNumber:19},globalThis),s(d,{errors:u,name:"password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:105,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:97,columnNumber:17},globalThis),s("div",{children:[s(a,{placeholder:"Confirm password",type:"password",...i("repeat_password",{required:"You must confirm your password"})},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:108,columnNumber:19},globalThis),s(d,{errors:u,name:"repeat_password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:115,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:107,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:90,columnNumber:15},globalThis),s(l,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Reset password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:118,columnNumber:15},globalThis),s("a",{href:"/login",className:"inter-small-regular text-grey-40 mt-xsmall",children:"Go back to sign in"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:121,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:88,columnNumber:13},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:87,columnNumber:11},globalThis):s("div",{className:"gap-y-large flex flex-col items-center",children:[s("div",{className:"gap-y-xsmall flex flex-col text-center",children:[s("h1",{className:"inter-xlarge-semibold text-[20px]",children:"Your reset link is invalid"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:132,columnNumber:15},globalThis),s("p",{className:"text-grey-50 inter-base-regular",children:"Try resetting your password again."},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:135,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:131,columnNumber:13},globalThis),s("a",{href:"/login?reset-password=true",children:s(l,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Go to reset password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:140,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:139,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:130,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:85,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:83,columnNumber:5},globalThis)};export{I as default};
