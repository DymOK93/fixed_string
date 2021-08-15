"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[810],{9173:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return x},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return f}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(1848),l=n(8330),a=n(6354),d=n(1631),p=["components"],m={sidebar_position:7,sidebar_label:"empty"},u="fixstr::basic_fixed_string::empty",c={unversionedId:"api/member-functions/empty",id:"api/member-functions/empty",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::empty",description:"Checks if the fixed string has no elements, i.e. whether begin() == end().",source:"@site/docs/api/member-functions/empty.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/empty",permalink:"/fixed_string/docs/api/member-functions/empty",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/empty.mdx",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"empty"},sidebar:"tutorialSidebar",previous:{title:"back",permalink:"/fixed_string/docs/api/member-functions/back"},next:{title:"size & length",permalink:"/fixed_string/docs/api/member-functions/size"}},f=[{value:"Parameters",id:"parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],h={toc:f};function x(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fixstrbasic_fixed_stringempty"},(0,o.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::empty")),(0,o.kt)(l.Z,{mdxType:"CppOverloadList"},(0,o.kt)(s.Z,{num:1,code:"[[nodiscard]] constexpr bool empty() const noexcept;",mdxType:"CppOverload"})),(0,o.kt)("p",null,"Checks if the fixed string has no elements, i.e. whether ",(0,o.kt)("inlineCode",{parentName:"p"},"begin() == end()"),"."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"(none)"),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the fixed string is empty, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise"),(0,o.kt)("h2",{id:"complexity"},"Complexity"),(0,o.kt)("p",null,"Constant."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(a.Z,{link:"https://godbolt.org/z/fd53T6Knn",mdxType:"LinkButton"},"Run this code!"),(0,o.kt)(d.Z,{className:"language-cpp",mdxType:"CodeBlock"},'#include <fixed_string.hpp>\n#include <iostream>\n\nint main()\n{\n    fixstr::fixed_string    hello_world = "Hello, world!";\n    fixstr::fixed_string<0> no_hello_world;\n\n    std::cout << std::boolalpha;\n    std::cout << "hello_world.empty(): " << hello_world.empty() << \'\\n\';\n    std::cout << "no_hello_world.empty(): " << no_hello_world.empty() << \'\\n\';\n}'),"Output:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello_world.empty(): false\nno_hello_world.empty(): true\n")))}x.isMDXComponent=!0}}]);