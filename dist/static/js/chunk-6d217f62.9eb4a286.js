(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d217f62"],{"52dd":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"projectEdit"}},[i("el-form",{ref:"editForm",staticClass:"editForm",attrs:{model:t.editForm,rules:t.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"标题:",prop:"title"}},[i("el-input",{model:{value:t.editForm.title,callback:function(e){t.$set(t.editForm,"title",e)},expression:"editForm.title"}})],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"GitHub:"}},[i("el-input",{model:{value:t.editForm.githubAddress,callback:function(e){t.$set(t.editForm,"githubAddress",e)},expression:"editForm.githubAddress"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"演示地址:"}},[i("el-input",{model:{value:t.editForm.showAddress,callback:function(e){t.$set(t.editForm,"showAddress",e)},expression:"editForm.showAddress"}})],1)],1)],1),i("el-form-item",{attrs:{label:"简介:",prop:"introduction"}},[i("el-input",{model:{value:t.editForm.introduction,callback:function(e){t.$set(t.editForm,"introduction",e)},expression:"editForm.introduction"}})],1),i("el-form-item",{attrs:{label:"标签:",prop:"tag"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:t.editForm.tag,callback:function(e){t.$set(t.editForm,"tag",e)},expression:"editForm.tag"}},t._l(t.tagList,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("el-form-item",{staticClass:"is-required",attrs:{label:"封面:",prop:"cover"}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:t.imgAction,headers:t.imgHeaders,"on-change":t.imgHandleChange,"on-success":t.imgHandleSuccess,"on-remove":t.imgHandleRemove,"on-error":t.imgHandleError,limit:1,"list-type":"picture","file-list":t.editForm.imgList}},[i("el-button",{staticClass:"btn-primary",attrs:{size:"mini",type:"primary"}},[t._v("选择图片上传")]),i("span",{staticClass:"upload-span",staticStyle:{"margin-left":"10px"},attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb")])],1)],1),i("el-form-item",{attrs:{label:"正文:",prop:"content"}},[i("tinymce",{ref:"editor",attrs:{disabled:t.disabled},model:{value:t.editForm.content,callback:function(e){t.$set(t.editForm,"content",e)},expression:"editForm.content"}})],1),i("el-form-item",[i("router-link",{attrs:{to:{path:"/manage/project"}}},[i("el-button",[t._v("返回")])],1),i("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleForm("editForm")}}},[t._v("确 定 ")])],1)],1)],1)},o=[],n=(i("d81d"),i("fb6a"),i("96cf"),i("1da1")),s=i("a0bc"),a=i("9579"),d=i("5b29"),l=i("5f87"),u={components:{ImgManage:s["a"],Tinymce:a["a"]},data:function(){return{imgAction:"/api/upload",imgHeaders:{Authorization:Object(l["a"])()},loading:!1,editForm:{id:null,title:null,tag:[],imgList:[],cover:null,githubAddress:null,showAddress:null,introduction:null,content:"Welcome to Use Tinymce Editor"},tagList:[{label:"标签1",value:1},{label:"标签2",value:2},{label:"标签3",value:3}],rules:{title:[{required:!0,message:"标题不能为空!",trigger:"blur"}],introduction:[{required:!0,message:"简介不能为空!",trigger:"blur"}],tag:[{required:!0,message:"标签至少选一个!",trigger:"change"}],cover:[{required:!0,message:"封面不能为空!",trigger:"blur"}],content:[{required:!0,message:"内容不能为空!",trigger:"blur"}]},msg:"",disabled:!1}},created:function(){this.$route.query&&this.$route.query.id?(this.id=this.$route.query.id,this.mode="edit",this.getDetail(this.id)):(this.mode="add",this.getTagList())},methods:{getTagList:function(){var t=this;this.tagList=[],Object(d["e"])().then((function(e){e&&"success"===e.status&&(t.tagList=e.data.map((function(t){return{value:t._id,label:t.tagName}})))}),(function(e){t.message.error(e),t.loading=!1}))},getDetail:function(){var t=this,e={id:this.id};Object(d["c"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(i){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i||"success"!==i.status){e.next=13;break}return r=i.data,t.editForm.title=r.title,t.editForm.cover=r.cover,t.editForm.githubAddress=r.githubAddress,t.editForm.showAddress=r.showAddress,t.editForm.introduction=r.introduction,t.editForm.imgList=[],t.editForm.imgList.push({name:"封面",url:r.cover}),t.editForm.content=r.content,e.next=12,t.getTagList();case 12:t.editForm.tag=r.tagId.map((function(t){return t._id}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){t.message.error(e)}))},handleForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;var i={title:e.editForm.title,githubAddress:e.editForm.githubAddress,showAddress:e.editForm.showAddress,introduction:e.editForm.introduction,tagId:e.editForm.tag,content:e.editForm.content,cover:e.editForm.cover};console.log(i),"add"===e.mode?e.add(i):(i.id=e.id,e.edit(i))}))},add:function(t){var e=this;this.loading=!0,Object(d["a"])(t).then((function(t){t&&"success"===t.status&&(e.$message({message:t.msg,type:"success"}),e.loading=!1,e.resetForm())}),(function(t){e.message.error(t),e.loading=!1}))},edit:function(t){var e=this;this.loading=!0,Object(d["b"])(t).then((function(t){t&&"success"===t.status&&(e.$message({message:t.msg,type:"success"}),e.loading=!1,e.resetForm(),e.getDetail())}),(function(t){e.message.error(t),e.loading=!1}))},resetForm:function(){this.$refs["editForm"].resetFields(),this.editForm.imgList=[],this.editForm.githubAddress=null,this.editForm.showAddress=null},imgHandleChange:function(t,e){this.editForm.imgList=e.slice()},imgHandleSuccess:function(t){this.editForm.cover=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_imgReadUrl+t.url,this.$refs.editForm.validateField("imgList"),this.$message({message:"封面图上传成功",type:"success"})},imgHandleRemove:function(){this.editForm.imgList=[],this.editForm.cover=null},imgHandleError:function(){this.$message.error("上传出错")},init:function(){}},mounted:function(){}},c=u,m=c,g=(i("cf9c"),i("2877")),p=Object(g["a"])(m,r,o,!1,null,"fd19165a",null);e["default"]=p.exports},"5b29":function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"g",(function(){return d})),i.d(e,"f",(function(){return l})),i.d(e,"e",(function(){return u}));var r=i("b775");function o(t){return Object(r["a"])({url:"/api/project/find",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/api/project/detail",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/api/project/create",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/api/project/update",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/api/project/remove",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/api/project/publish",method:"post",data:t})}function u(){return Object(r["a"])({url:"/api/tag/find",method:"get"})}},cf9c:function(t,e,i){"use strict";var r=i("ec87"),o=i.n(r);o.a},ec87:function(t,e,i){}}]);