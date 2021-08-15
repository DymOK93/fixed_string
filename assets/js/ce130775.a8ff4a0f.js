"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[586],{9455:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return x},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return b}});var r=t(7462),i=t(3366),s=(t(7294),t(3905)),a=t(1848),o=t(8330),c=t(6354),d=t(1631),p=["components"],u={sidebar_position:12,sidebar_label:"rbegin & crbegin"},l="fixstr::basic_fixed_string::rbegin` <br/> `fixstr::basic_fixed_string::crbegin",m={unversionedId:"api/member-functions/rbegin",id:"api/member-functions/rbegin",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::rbegin` <br/> `fixstr::basic_fixed_string::crbegin",description:"Returns a reverse iterator to the first character of the reversed fixed string.",source:"@site/docs/api/member-functions/rbegin.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/rbegin",permalink:"/fixed_string/docs/api/member-functions/rbegin",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/rbegin.mdx",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"rbegin & crbegin"},sidebar:"tutorialSidebar",previous:{title:"end & cend",permalink:"/fixed_string/docs/api/member-functions/end"},next:{title:"rend & crend",permalink:"/fixed_string/docs/api/member-functions/rend"}},b=[{value:"Parameters",id:"parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],g={toc:b};function x(e){var n=e.components,u=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},g,u,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fixstrbasic_fixed_stringrbegin--fixstrbasic_fixed_stringcrbegin"},(0,s.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::rbegin")," ",(0,s.kt)("br",null)," ",(0,s.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::crbegin")),(0,s.kt)(o.Z,{mdxType:"CppOverloadList"},(0,s.kt)(a.Z,{num:1,code:"[[nodiscard]] constexpr reverse_iterator rbegin() noexcept;",mdxType:"CppOverload"}),(0,s.kt)(a.Z,{num:2,code:"[[nodiscard]] constexpr const_reverse_iterator rbegin() const noexcept;",mdxType:"CppOverload"}),(0,s.kt)(a.Z,{num:3,code:"[[nodiscard]] constexpr const_reverse_iterator crbegin() const noexcept;",mdxType:"CppOverload"})),(0,s.kt)("p",null,"Returns a reverse iterator to the first character of the reversed fixed string.\nIt corresponds to the last character of the non-reversed fixed string."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image explaining reverse iterators",src:t(3388).Z})),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"(none)"),(0,s.kt)("h2",{id:"return-value"},"Return value"),(0,s.kt)("p",null,"Reverse iterator to the first character."),(0,s.kt)("h2",{id:"complexity"},"Complexity"),(0,s.kt)("p",null,"Constant."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)(c.Z,{link:"https://godbolt.org/z/MWd1Wvfsx",mdxType:"LinkButton"},"Run this code!"),(0,s.kt)(d.Z,{className:"language-cpp",mdxType:"CodeBlock"},"#include <algorithm>\n#include <fixed_string.hpp>\n#include <iostream>\n#include <iterator>\n#include <string>\n\nint main()\n{\n    fixstr::fixed_string s(\"Exemplar!\");\n    *s.rbegin() = 'y';\n    std::cout << s << '\\n'; // \"Exemplary\"\n\n    std::string c;\n    std::copy(s.crbegin(), s.crend(), std::back_inserter(c));\n    std::cout << c << '\\n'; // \"yralpmexE\"\n}"),"Output:",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Exemplary\nyralpmexE\n")))}x.isMDXComponent=!0},3388:function(e,n,t){n.Z=t.p+"assets/images/range-rbegin-rend-db0c747050c57a1c52c778a92a214575.png"}}]);