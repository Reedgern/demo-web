(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(e,t,s){e.exports={gridWrapper:"Profile_gridWrapper__C81pU",avatar:"Profile_avatar__3fLoR",profileInfo:"Profile_profileInfo__3tojy",posts:"Profile_posts__51ubj",hintInfo:"Profile_hintInfo__2VCEl"}},291:function(e,t,s){e.exports={profileImage:"ProfileInfo_profileImage__2yN_P"}},292:function(e,t,s){e.exports={message:"WarningMessage_message__3kPz6"}},294:function(e,t,s){"use strict";s.r(t);var n=s(35),r=s(36),c=s(39),i=s(38),a=s(5),o=s(0),l=s.n(o),j=s(93),b=s(104),u=s(290),d=s.n(u),h=s(1),p=function(e){var t=Object(o.useState)(!1),s=Object(j.a)(t,2),n=s[0],r=s[1],c=Object(o.useState)(e.status),i=Object(j.a)(c,2),a=i[0],l=i[1];Object(o.useEffect)((function(){l(e.status)}),[e.status]);var b=function(t){t||e.updateStatus(a),r(t)};return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("b",{children:"Status"}),": "]}),Object(h.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){return b(!1)},value:a}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:d.a.hintInfo,children:e.isOwner&&"Save the status by clicking somewhere outside the input field!"})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{onDoubleClick:function(){return e.isOwner&&b(!0)},children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("b",{children:"Status"}),": "]}),e.status||"There is no status right now..."]}),Object(h.jsx)("span",{className:d.a.hintInfo,children:e.isOwner&&"Change the status by double-clicking on the text!"})]})})},O=s(291),f=s.n(O),x=s(125),m=s(126),g=s(71),v=s(70),k=s(31),P=s.n(k),_=Object(m.a)({form:"profileData"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[e.error?Object(h.jsx)("div",{className:P.a.summaryError,children:e.error}):null,Object(h.jsx)("button",{children:"Save changes"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Fullname"}),": ",Object(h.jsx)(x.a,{placeholder:"Fullname",name:"fullName",component:g.a})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",Object(h.jsx)(x.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Professional skills"}),": ",Object(h.jsx)(x.a,{name:"lookingForAJobDescription",component:g.b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",Object(h.jsx)(x.a,{placeholder:"About me",name:"aboutMe",component:g.b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object.entries(e.profile.contacts).map((function(e){var t=Object(j.a)(e,2),s=t[0];t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:s}),": ",Object(h.jsx)(x.a,{name:"contacts.".concat(s),component:g.a})]})}))]})]})})),y=function(e){var t=e.contactTitle,s=e.contactValue;return s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{children:t}),": ",Object(h.jsx)("a",{target:"_blank",href:s,children:s})]}):null},w=function(e){var t=e.profile,s=e.isOwner,n=e.toggleEditMode;return Object(h.jsxs)(h.Fragment,{children:[s&&Object(h.jsx)("div",{style:{marginLeft:"20%"},children:Object(h.jsx)("button",{style:{"text-align":"center"},onClick:n,children:"Edit profile info"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Fullname"}),": ",t.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}):null,Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object(h.jsx)("ul",{children:Object.entries(t.contacts).map((function(e){var t=Object(j.a)(e,2),s=t[0],n=t[1];return n?Object(h.jsx)("li",{children:Object(h.jsx)(y,{contactTitle:s,contactValue:n},s)}):null}))})]})]})},I=function(e){var t=e.profile,s=e.updateStatus,n=e.status,r=e.isOwner,c=e.saveImage,i=e.saveProfile,a=Object(o.useState)(!1),l=Object(j.a)(a,2),u=l[0],O=l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:d.a.avatar,children:[Object(h.jsx)("img",{className:f.a.profileImage,src:null!=t.photos.large?t.photos.large:b.a}),Object(h.jsx)("div",{children:r?Object(h.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0])}}):null})]}),Object(h.jsxs)("div",{className:d.a.profileInfo,children:[u?Object(h.jsx)(_,{profile:t,initialValues:t,onSubmit:function(e){i(e).then((function(){O(!1)}))}}):Object(h.jsx)(w,{toggleEditMode:function(){return O(!0)},isOwner:r,profile:t}),Object(h.jsx)(p,{isOwner:r,updateStatus:s,status:n})]})]})},F=s(15),S=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Text"}),": ",e.message," // ",Object(h.jsx)("strong",{children:"Likes"}),": ",e.likes]})},A=s(94),N=s(292),C=s.n(N),M=function(e){return Object(h.jsxs)("div",{className:C.a.message,children:[Object(h.jsx)("h2",{children:"Attention"}),Object(h.jsx)("p",{children:"This section is still being developing therefore some elements may works inappropriately."})]})},T=Object(v.a)(50),E=Object(m.a)({form:"addPost"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(x.a,{component:g.b,placeholder:"Enter new post",name:"newPostText",validate:[v.b,T]})}),Object(h.jsx)("button",{children:"Add post"})]})})),J={addPost:A.a},D=Object(F.b)((function(e){return{posts:e.profilePage.posts}}),J)((function(e){var t=e.posts.map((function(e){return Object(h.jsx)(S,{message:e.message,likes:e.likes},e.id)}));return Object(h.jsxs)("div",{className:d.a.posts,children:[Object(h.jsx)(M,{}),Object(h.jsx)("h1",{children:"My posts"}),t,e.isOwner&&Object(h.jsx)(E,{onSubmit:function(t){e.addPost(t.newPostText)}})]})})),U=s(49),L=s(9),V=s(10),W=function(e){return e.profile?Object(h.jsxs)("div",{className:d.a.profile+" "+d.a.gridWrapper,children:[Object(h.jsx)(I,Object(a.a)({},e)),Object(h.jsx)(D,{isOwner:e.isOwner})]}):Object(h.jsx)(U.a,{})},z=function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(n.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).refreshProfile=function(){var t=e.props.match.params.userId;t||(t=e.props.authUserId)?(e.props.getUserProfile(t),e.props.getStatus(t)):e.props.history.push("/login")},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.isFetching?Object(h.jsx)(U.a,{}):Object(h.jsx)(W,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId&&this.props.isAuth}))}}]),s}(l.a.Component),B={getUserProfile:A.d,getStatus:A.c,updateStatus:A.g,saveImage:A.e,saveProfile:A.f};t.default=Object(V.d)(Object(F.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId,isAuth:e.auth.isAuth,isFetching:e.profilePage.isFetching}}),B),L.h)(z)}}]);
//# sourceMappingURL=3.cef88c46.chunk.js.map