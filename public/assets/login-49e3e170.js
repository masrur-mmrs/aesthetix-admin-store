import{u as p,d6 as f,j as e,B as g,r as a,d7 as D,F as y,X as v}from"./index-47ae49f6.js";import{c as b,I as N,g as T,u as j}from"./index-09a93a80.js";import{S as t,P as _}from"./login-layout-7c92cea0.js";import{F as U}from"./index-0c633880.js";import{C as w}from"./index-0223cce7.js";import{S as k}from"./index-8289da5f.js";const S=({toResetPassword:o})=>{const{register:s,handleSubmit:m,setError:r,formState:{errors:i}}=b(),n=p(),{mutate:u,isLoading:l}=f();return e("form",{onSubmit:m(d=>{u(d,{onSuccess:()=>{n("/a/orders")},onError:()=>{r("password",{type:"manual",message:"These credentials do not match our records."},{shouldFocus:!0})}})}),children:e("div",{className:"flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold text-grey-90 mb-large text-[20px]",children:"Log in to Medusa"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:49,columnNumber:9},globalThis),e("div",{children:[e(t,{placeholder:"Email",...s("email",{required:!0}),autoComplete:"email",className:"mb-small"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:53,columnNumber:11},globalThis),e(t,{placeholder:"Password",type:"password",...s("password",{required:!0}),autoComplete:"current-password",className:"mb-xsmall"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:59,columnNumber:11},globalThis),e(N,{errors:i,name:"password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:66,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:52,columnNumber:9},globalThis),e(g,{className:"rounded-rounded inter-base-regular mt-4 w-[280px]",variant:"secondary",size:"medium",type:"submit",loading:l,children:"Continue"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:68,columnNumber:9},globalThis),e("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:o,children:"Forgot your password?"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:77,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:48,columnNumber:7},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/login-card/index.tsx",lineNumber:47,columnNumber:5},globalThis)},E=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),z=({goBack:o})=>{const[s,m]=a.useState(!1),{register:r,handleSubmit:i,formState:{errors:n}}=b(),{mutate:u,isLoading:l}=D(),c=j(),d=i(h=>{u({email:h.email},{onSuccess:()=>{m(!0)},onError:x=>{c("Error",T(x),"error")}})});return e("form",{onSubmit:d,children:e("div",{className:"flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold text-grey-90 mb-xsmall text-[20px]",children:"Reset your password"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:54,columnNumber:9},globalThis),e("span",{className:"inter-base-regular text-grey-50 mb-large text-center",children:["Enter your email address below, and we'll",e("br",{},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:59,columnNumber:11},globalThis),"send you instructions on how to reset",e("br",{},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:61,columnNumber:11},globalThis),"your password."]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:57,columnNumber:9},globalThis),s?e("div",{className:"text-grey-60 rounded-rounded bg-grey-5 border-grey-20 p-base gap-x-small flex w-[280px] items-center border",children:[e("div",{children:e(w,{className:"text-blue-50",size:20},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:92,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:91,columnNumber:13},globalThis),e("div",{className:"gap-y-2xsmall flex flex-col",children:e("span",{className:"inter-base-regular",children:"Succesfully sent you an email"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:95,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:94,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:90,columnNumber:11},globalThis):e(y,{children:[e("div",{className:"w-[280px]",children:[e(t,{placeholder:"Email",...r("email",{required:U.required("Email"),pattern:{value:E,message:"This is not a valid email"}})},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:67,columnNumber:15},globalThis),e(N,{errors:n,name:"email"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:77,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:66,columnNumber:13},globalThis),e(g,{variant:"secondary",size:"medium",className:"mt-large w-[280px]",type:"submit",loading:l,children:"Send reset instructions"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:79,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:65,columnNumber:11},globalThis),e("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:o,children:"Go back to sign in"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:101,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:53,columnNumber:7},globalThis)},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/components/organisms/reset-token-card/index.tsx",lineNumber:52,columnNumber:5},globalThis)},Z=()=>{const[o,s]=a.useState(!1),{user:m}=v(),r=p();return a.useEffect(()=>{m&&r("/")},[m,r]),a.useEffect(()=>{window.location.search.includes("reset-password")&&s(!0)},[]),e(_,{children:[e(k,{title:"Login"},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/login.tsx",lineNumber:40,columnNumber:7},globalThis),o?e(z,{goBack:()=>{s(!1),r("/login",{replace:!0})}},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/login.tsx",lineNumber:43,columnNumber:9},globalThis):e(S,{toResetPassword:()=>{s(!0)}},void 0,!1,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/login.tsx",lineNumber:45,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/masrur-mmrs/Documents/Dropshipping/my-medusa-store/node_modules/@medusajs/admin-ui/ui/src/pages/login.tsx",lineNumber:39,columnNumber:5},globalThis)};export{Z as default};