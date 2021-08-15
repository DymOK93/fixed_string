"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[156],{4487:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return f}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(1848),s=n(8330),c=n(6354),d=n(1631),p=["components"],m={sidebar_position:5,sidebar_label:"front"},u="fixstr::basic_fixed_string::front",l={unversionedId:"api/member-functions/front",id:"api/member-functions/front",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::front",description:"Returns reference to the first character in the string.",source:"@site/docs/api/member-functions/front.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/front",permalink:"/fixed_string/docs/api/member-functions/front",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/front.mdx",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"front"},sidebar:"tutorialSidebar",previous:{title:"at",permalink:"/fixed_string/docs/api/member-functions/at"},next:{title:"back",permalink:"/fixed_string/docs/api/member-functions/back"}},f=[{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],x={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fixstrbasic_fixed_stringfront"},(0,o.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::front")),(0,o.kt)(s.Z,{mdxType:"CppOverloadList"},(0,o.kt)(a.Z,{num:1,code:"[[nodiscard]] constexpr reference front() noexcept requires N != 0;",mdxType:"CppOverload"}),(0,o.kt)(a.Z,{num:2,code:"[[nodiscard]] constexpr const_reference front() const noexcept requires N != 0;",mdxType:"CppOverload"})),(0,o.kt)("p",null,"Returns reference to the first character in the string. "),(0,o.kt)("p",null,"The function is not provided for empty strings."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"requires")," is used only in the documentation purposes.\nIn order to support C++17 the implementation uses SFINAE."))),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"Reference to the first element."),(0,o.kt)("h2",{id:"complexity"},"Complexity"),(0,o.kt)("p",null,"Constant."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(c.Z,{link:"https://godbolt.org/z/G5jEnq5Eh",mdxType:"LinkButton"},"Run this code!"),(0,o.kt)(d.Z,{className:"language-cpp",mdxType:"CodeBlock"},'// clang-format off\n#include <fixed_string.hpp>\n#include <iostream>\n\nint main()\n{\n    {\n        fixstr::fixed_string s = "Exemplary";\n        char& f = s.front();\n        f = \'e\';\n        std::cout << s << \'\\n\'; // "exemplary"\n    }\n\n    {\n        constexpr const fixstr::fixed_string c = "Exemplary";\n        char const& f = c.front();\n        std::cout << &f << \'\\n\'; // "Exemplary"\n    }\n}'),"Output:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"exemplary\nExemplary\n")))}h.isMDXComponent=!0}}]);