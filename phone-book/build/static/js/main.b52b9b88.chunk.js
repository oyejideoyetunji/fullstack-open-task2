(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(15),l=n.n(u),r=(n(21),n(3)),o=n(2),i=n.n(o),m="/api/persons",s=function(e){var t=e.filterValue,n=e.setFilterValue;return c.a.createElement("section",null,c.a.createElement("label",null,"Filter contacts with: "),c.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},d=n(4),f=n(5),b=function(e){var t=e.contacts,n=e.setContacts,a=e.contact,u=e.setContact,l=e.setStatusData,r=function(e){var t=e.target.name,n=e.target.value;u(Object(f.a)(Object(f.a)({},a),{},Object(d.a)({},t,n)))};return c.a.createElement("section",null,c.a.createElement("h2",null,"Add a new Contact"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var c,r,o=t.find((function(e){return e.name===a.name||e.number===a.number}));if(void 0!==o)return o.number!==a.number?window.confirm("Your contact ".concat(a.name," already exists, update the old number to a new one?"))?(c=o.id,r=a,i.a.put("".concat(m,"/").concat(c),r)).then((function(e){n(t.map((function(t){return t.id===e.data.id?e.data:t}))),l({text:"".concat(e.data.name," updated successfully"),type:"success"}),setTimeout((function(){l(null)}),2e3),u({name:"",number:""})})).catch((function(e){l({text:"There was a problem updating ".concat(a.name," this contact might have been deleted already"),type:"error"}),setTimeout((function(){l(null)}),2e3)})):null:(l({text:"A contact ".concat(o.name," with the number ").concat(o.number," already exists"),type:"error"}),void setTimeout((function(){l(null)}),2e3));(function(e){return i.a.post(m,e)})(a).then((function(e){n(t.concat(e.data)),u({name:"",number:""}),l({text:"".concat(e.data.name," added successfully"),type:"success"}),setTimeout((function(){l(null)}),2e3)}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Name: "),c.a.createElement("input",{type:"text",name:"name",onChange:r,value:a.name,required:!0})),c.a.createElement("div",null,c.a.createElement("label",null,"Number: "),c.a.createElement("input",{type:"tel",name:"number",onChange:r,value:a.number,required:!0})),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",value:"Add"}))))},p=function(e){var t=e.contactsToShow,n=e.filterValue,a=e.handleContactDelete;return c.a.createElement("section",null,c.a.createElement("h2",null,"Contacts"),t.length<1?""===n?c.a.createElement("em",null,"Your Phone book is empty, please add contacts."):c.a.createElement("em",null,"No contact is matching your search"):t.map((function(e){return c.a.createElement("p",{key:e.id},c.a.createElement("i",null,"Name : ",e.name," ")," ",c.a.createElement("span",null," | Number : ",e.number," ")," ",c.a.createElement("button",{onClick:function(){return a(e)}},"DELETE"))})))},E=function(e){var t=e.statusData;return null===t?null:c.a.createElement("p",{className:"error"===t.type?"error-blck":"success-blck"},c.a.createElement("em",null,t.text))};var h=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)({name:"",number:""}),o=Object(r.a)(l,2),d=o[0],f=o[1],h=Object(a.useState)(""),v=Object(r.a)(h,2),y=v[0],C=v[1],w=Object(a.useState)(null),g=Object(r.a)(w,2),j=g[0],O=g[1];return Object(a.useEffect)((function(){i.a.get(m).then((function(e){u(e.data)}))}),[]),c.a.createElement("main",null,c.a.createElement("h1",null,"Phone Book"),c.a.createElement(s,{filterValue:y,setFilterValue:C}),c.a.createElement(E,{statusData:j}),c.a.createElement(b,{contacts:n,setContacts:u,contact:d,setContact:f,setStatusData:O}),c.a.createElement(p,{contactsToShow:function(){if(""===y)return n;var e=y.toUpperCase();return n.filter((function(t){return t.name.toUpperCase().includes(e)||t.number.includes(e)}))}(),filterValue:y,handleContactDelete:function(e){var t=e.name,a=e.id;return window.confirm("delete ".concat(t," from contacts?"))?function(e){return i.a.delete("".concat(m,"/").concat(e))}(a).then((function(){u(n.filter((function(e){return e.id!==a}))),O({text:"".concat(t," deleted successfully"),type:"success"}),setTimeout((function(){O(null)}),2e3)})):void 0}}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b52b9b88.chunk.js.map