/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){var e=function(e,t){function i(){var e=arguments,t=this.getContentElement("advanced","txtdlgGenStyle");t&&t.commit.apply(t,e),this.foreach(function(t){t.commit&&"txtdlgGenStyle"!=t.id&&t.commit.apply(t,e)})}function a(e){if(!n){n=1;var t=this.getDialog(),i=t.imageElement;if(i){this.commit(o,i),e=[].concat(e);for(var a,l=e.length,s=0;l>s;s++)a=t.getContentElement.apply(t,e[s].split(":")),a&&a.setup(o,i)}n=0}}var n,l,o=1,s=2,r=4,m=8,g=/^\s*(\d+)((px)|\%)?\s*$/i,d=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,u=/^\d+px$/,c=function(){var e=this.getValue(),t=this.getDialog(),i=e.match(g);if(i&&("%"==i[2]&&v(t,!1),e=i[1]),t.lockRatio){var a=t.originalElement;"true"==a.getCustomData("isReady")&&("txtHeight"==this.id?(e&&"0"!=e&&(e=Math.round(a.$.width*(e/a.$.height))),isNaN(e)||t.setValueOf("info","txtWidth",e)):(e&&"0"!=e&&(e=Math.round(a.$.height*(e/a.$.width))),isNaN(e)||t.setValueOf("info","txtHeight",e)))}h(t)},h=function(e){return e.originalElement&&e.preview?(e.commitContent(r,e.preview),0):1},v=function(e,t){if(!e.getContentElement("info","ratioLock"))return null;var i=e.originalElement;if(!i)return null;if("check"==t){if(!e.userlockRatio&&"true"==i.getCustomData("isReady")){var a=e.getValueOf("info","txtWidth"),n=e.getValueOf("info","txtHeight"),l=1e3*i.$.width/i.$.height,o=1e3*a/n;e.lockRatio=!1,a||n?isNaN(l)||isNaN(o)||Math.round(l)==Math.round(o)&&(e.lockRatio=!0):e.lockRatio=!0}}else void 0!=t?e.lockRatio=t:(e.userlockRatio=1,e.lockRatio=!e.lockRatio);var s=CKEDITOR.document.getById(C);if(e.lockRatio?s.removeClass("cke_btn_unlocked"):s.addClass("cke_btn_unlocked"),s.setAttribute("aria-checked",e.lockRatio),CKEDITOR.env.hc){var r=s.getChild(0);r.setHtml(e.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢")}return e.lockRatio},p=function(e){var t=e.originalElement;if("true"==t.getCustomData("isReady")){var i=e.getContentElement("info","txtWidth"),a=e.getContentElement("info","txtHeight");i&&i.setValue(t.$.width),a&&a.setValue(t.$.height)}h(e)},f=function(e,t){function i(e,t){var i=e.match(g);return i?("%"==i[2]&&(i[1]+="%",v(a,!1)),i[1]):t}if(e==o){var a=this.getDialog(),n="",l="txtWidth"==this.id?"width":"height",s=t.getAttribute(l);s&&(n=i(s,n)),n=i(t.getStyle(l),n),this.setValue(n)}},b=function(){var e=this.originalElement;e.setCustomData("isReady","true"),e.removeListener("load",b),e.removeListener("error",y),e.removeListener("abort",y),CKEDITOR.document.getById(S).setStyle("display","none"),this.dontResetSize||p(this),this.firstLoad&&CKEDITOR.tools.setTimeout(function(){v(this,"check")},0,this),this.firstLoad=!1,this.dontResetSize=!1},y=function(){var t=this,i=t.originalElement;i.removeListener("load",b),i.removeListener("error",y),i.removeListener("abort",y);var a=CKEDITOR.getUrl(e.skinPath+"images/noimage.png");t.preview&&t.preview.setAttribute("src",a),CKEDITOR.document.getById(S).setStyle("display","none"),v(t,!1)},E=function(e){return CKEDITOR.tools.getNextId()+"_"+e},C=E("btnLockSizes"),x=E("btnResetSize"),S=E("ImagePreviewLoader"),k=E("previewLink"),I=E("previewImage");return{title:e.lang.image["image"==t?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){var e=this;e.imageElement=!1,e.linkElement=!1,e.imageEditMode=!1,e.linkEditMode=!1,e.lockRatio=!0,e.userlockRatio=0,e.dontResetSize=!1,e.firstLoad=!0,e.addLink=!1;var i=e.getParentEditor(),a=i.getSelection(),n=a&&a.getSelectedElement(),r=n&&n.getAscendant("a");if(CKEDITOR.document.getById(S).setStyle("display","none"),l=new CKEDITOR.dom.element("img",i.document),e.preview=CKEDITOR.document.getById(I),e.originalElement=i.document.createElement("img"),e.originalElement.setAttribute("alt",""),e.originalElement.setCustomData("isReady","false"),r){e.linkElement=r,e.linkEditMode=!0;var m=r.getChildren();if(1==m.count()){var g=m.getItem(0).getName();("img"==g||"input"==g)&&(e.imageElement=m.getItem(0),"img"==e.imageElement.getName()?e.imageEditMode="img":"input"==e.imageElement.getName()&&(e.imageEditMode="input"))}"image"==t&&e.setupContent(s,r)}(n&&"img"==n.getName()&&!n.data("cke-realelement")||n&&"input"==n.getName()&&"image"==n.getAttribute("type"))&&(e.imageEditMode=n.getName(),e.imageElement=n),e.imageEditMode?(e.cleanImageElement=e.imageElement,e.imageElement=e.cleanImageElement.clone(!0,!0),e.setupContent(o,e.imageElement)):e.imageElement=i.document.createElement("img"),v(e,!0),CKEDITOR.tools.trim(e.getValueOf("info","txtUrl"))||(e.preview.removeAttribute("src"),e.preview.setStyle("display","none"))},onOk:function(){var i=this;if(i.imageEditMode){var a=i.imageEditMode;"image"==t&&"input"==a&&confirm(e.lang.image.button2Img)?(a="img",i.imageElement=e.document.createElement("img"),i.imageElement.setAttribute("alt",""),e.insertElement(i.imageElement)):"image"!=t&&"img"==a&&confirm(e.lang.image.img2Button)?(a="input",i.imageElement=e.document.createElement("input"),i.imageElement.setAttributes({type:"image",alt:""}),e.insertElement(i.imageElement)):(i.imageElement=i.cleanImageElement,delete i.cleanImageElement)}else"image"==t?i.imageElement=e.document.createElement("img"):(i.imageElement=e.document.createElement("input"),i.imageElement.setAttribute("type","image")),i.imageElement.setAttribute("alt","");i.linkEditMode||(i.linkElement=e.document.createElement("a")),i.commitContent(o,i.imageElement),i.commitContent(s,i.linkElement),i.imageElement.getAttribute("style")||i.imageElement.removeAttribute("style"),i.imageEditMode?!i.linkEditMode&&i.addLink?(e.insertElement(i.linkElement),i.imageElement.appendTo(i.linkElement)):i.linkEditMode&&!i.addLink&&(e.getSelection().selectElement(i.linkElement),e.insertElement(i.imageElement)):i.addLink?i.linkEditMode?e.insertElement(i.imageElement):(e.insertElement(i.linkElement),i.linkElement.append(i.imageElement,!1)):e.insertElement(i.imageElement)},onLoad:function(){var e=this;"image"!=t&&e.hidePage("Link");var a=e._.element.getDocument();e.getContentElement("info","ratioLock")&&(e.addFocusable(a.getById(x),5),e.addFocusable(a.getById(C),5)),e.commitContent=i},onHide:function(){var e=this;e.preview&&e.commitContent(m,e.preview),e.originalElement&&(e.originalElement.removeListener("load",b),e.originalElement.removeListener("error",y),e.originalElement.removeListener("abort",y),e.originalElement.remove(),e.originalElement=!1),delete e.imageElement},contents:[{id:"info",label:e.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:e.lang.common.url,required:!0,onChange:function(){var e=this.getDialog(),t=this.getValue();if(t.length>0){e=this.getDialog();var i=e.originalElement;e.preview.removeStyle("display"),i.setCustomData("isReady","false");var a=CKEDITOR.document.getById(S);a&&a.setStyle("display",""),i.on("load",b,e),i.on("error",y,e),i.on("abort",y,e),i.setAttribute("src",t),l.setAttribute("src",t),e.preview.setAttribute("src",l.$.src),h(e)}else e.preview&&(e.preview.removeAttribute("src"),e.preview.setStyle("display","none"))},setup:function(e,t){if(e==o){var i=t.data("cke-saved-src")||t.getAttribute("src"),a=this;this.getDialog().dontResetSize=!0,a.setValue(i),a.setInitValue()}},commit:function(e,t){var i=this;e==o&&(i.getValue()||i.isChanged())?(t.data("cke-saved-src",i.getValue()),t.setAttribute("src",i.getValue())):e==m&&(t.setAttribute("src",""),t.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(e.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:e.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:e.lang.image.alt,accessKey:"T","default":"",onChange:function(){h(this.getDialog())},setup:function(e,t){e==o&&this.setValue(t.getAttribute("alt"))},commit:function(e,t){var i=this;e==o?(i.getValue()||i.isChanged())&&t.setAttribute("alt",i.getValue()):e==r?t.setAttribute("alt",i.getValue()):e==m&&t.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:e.lang.common.width,onKeyUp:c,onChange:function(){a.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(d),i=!(!t||0===parseInt(t[1],10));return i||alert(e.lang.common.invalidWidth),i},setup:f,commit:function(e,t,i){var a=this.getValue();if(e==o)a?t.setStyle("width",CKEDITOR.tools.cssLength(a)):t.removeStyle("width"),!i&&t.removeAttribute("width");else if(e==r){var n=a.match(g);if(n)t.setStyle("width",CKEDITOR.tools.cssLength(a));else{var l=this.getDialog().originalElement;"true"==l.getCustomData("isReady")&&t.setStyle("width",l.$.width+"px")}}else e==m&&(t.removeAttribute("width"),t.removeStyle("width"))}},{type:"text",id:"txtHeight",width:"40px",label:e.lang.common.height,onKeyUp:c,onChange:function(){a.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(d),i=!(!t||0===parseInt(t[1],10));return i||alert(e.lang.common.invalidHeight),i},setup:f,commit:function(e,t,i){var a=this.getValue();if(e==o)a?t.setStyle("height",CKEDITOR.tools.cssLength(a)):t.removeStyle("height"),!i&&t.removeAttribute("height");else if(e==r){var n=a.match(g);if(n)t.setStyle("height",CKEDITOR.tools.cssLength(a));else{var l=this.getDialog().originalElement;"true"==l.getCustomData("isReady")&&t.setStyle("height",l.$.height+"px")}}else e==m&&(t.removeAttribute("height"),t.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var e=CKEDITOR.document.getById(x),t=CKEDITOR.document.getById(C);e&&(e.on("click",function(e){p(this),e.data&&e.data.preventDefault()},this.getDialog()),e.on("mouseover",function(){this.addClass("cke_btn_over")},e),e.on("mouseout",function(){this.removeClass("cke_btn_over")},e)),t&&(t.on("click",function(e){var t=this,i=(v(t),t.originalElement),a=t.getValueOf("info","txtWidth");if("true"==i.getCustomData("isReady")&&a){var n=i.$.height/i.$.width*a;isNaN(n)||(t.setValueOf("info","txtHeight",Math.round(n)),h(t))}e.data&&e.data.preventDefault()},this.getDialog()),t.on("mouseover",function(){this.addClass("cke_btn_over")},t),t.on("mouseout",function(){this.removeClass("cke_btn_over")},t))},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.lockRatio+'" class="cke_btn_locked" id="'+C+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+e.lang.image.lockRatio+"</span></a>"+'<a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.resetSize+'" class="cke_btn_reset" id="'+x+'" role="button"><span class="cke_label">'+e.lang.image.resetSize+"</span></a>"+"</div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",width:"60px",label:e.lang.image.border,"default":"",onKeyUp:function(){h(this.getDialog())},onChange:function(){a.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateBorder),setup:function(e,t){if(e==o){var i,a=t.getStyle("border-width");a=a&&a.match(/^(\d+px)(?: \1 \1 \1)?$/),i=a&&parseInt(a[1],10),isNaN(parseInt(i,10))&&(i=t.getAttribute("border")),this.setValue(i)}},commit:function(e,t,i){var a=parseInt(this.getValue(),10);e==o||e==r?(isNaN(a)?!a&&this.isChanged()&&(t.removeStyle("border-width"),t.removeStyle("border-style"),t.removeStyle("border-color")):(t.setStyle("border-width",CKEDITOR.tools.cssLength(a)),t.setStyle("border-style","solid")),i||e!=o||t.removeAttribute("border")):e==m&&(t.removeAttribute("border"),t.removeStyle("border-width"),t.removeStyle("border-style"),t.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",width:"60px",label:e.lang.image.hSpace,"default":"",onKeyUp:function(){h(this.getDialog())},onChange:function(){a.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateHSpace),setup:function(e,t){if(e==o){var i,a,n,l=t.getStyle("margin-left"),s=t.getStyle("margin-right");l=l&&l.match(u),s=s&&s.match(u),a=parseInt(l,10),n=parseInt(s,10),i=a==n&&a,isNaN(parseInt(i,10))&&(i=t.getAttribute("hspace")),this.setValue(i)}},commit:function(e,t,i){var a=parseInt(this.getValue(),10);e==o||e==r?(isNaN(a)?!a&&this.isChanged()&&(t.removeStyle("margin-left"),t.removeStyle("margin-right")):(t.setStyle("margin-left",CKEDITOR.tools.cssLength(a)),t.setStyle("margin-right",CKEDITOR.tools.cssLength(a))),i||e!=o||t.removeAttribute("hspace")):e==m&&(t.removeAttribute("hspace"),t.removeStyle("margin-left"),t.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",width:"60px",label:e.lang.image.vSpace,"default":"",onKeyUp:function(){h(this.getDialog())},onChange:function(){a.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateVSpace),setup:function(e,t){if(e==o){var i,a,n,l=t.getStyle("margin-top"),s=t.getStyle("margin-bottom");l=l&&l.match(u),s=s&&s.match(u),a=parseInt(l,10),n=parseInt(s,10),i=a==n&&a,isNaN(parseInt(i,10))&&(i=t.getAttribute("vspace")),this.setValue(i)}},commit:function(e,t,i){var a=parseInt(this.getValue(),10);e==o||e==r?(isNaN(a)?!a&&this.isChanged()&&(t.removeStyle("margin-top"),t.removeStyle("margin-bottom")):(t.setStyle("margin-top",CKEDITOR.tools.cssLength(a)),t.setStyle("margin-bottom",CKEDITOR.tools.cssLength(a))),i||e!=o||t.removeAttribute("vspace")):e==m&&(t.removeAttribute("vspace"),t.removeStyle("margin-top"),t.removeStyle("margin-bottom"))}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:e.lang.common.align,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.alignLeft,"left"],[e.lang.common.alignRight,"right"]],onChange:function(){h(this.getDialog()),a.call(this,"advanced:txtdlgGenStyle")},setup:function(e,t){if(e==o){var i=t.getStyle("float");switch(i){case"inherit":case"none":i=""}!i&&(i=(t.getAttribute("align")||"").toLowerCase()),this.setValue(i)}},commit:function(e,t,i){var a=this.getValue();if(e==o||e==r){if(a?t.setStyle("float",a):t.removeStyle("float"),!i&&e==o)switch(a=(t.getAttribute("align")||"").toLowerCase()){case"left":case"right":t.removeAttribute("align")}}else e==m&&t.removeStyle("float")}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(e.lang.common.preview)+"<br>"+'<div id="'+S+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>'+'<div class="ImagePreviewBox"><table><tr><td>'+'<a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+k+'">'+'<img id="'+I+'" alt="" /></a>'+(e.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:e.lang.link.title,padding:0,elements:[{id:"txtUrl",type:"text",label:e.lang.common.url,style:"width: 100%","default":"",setup:function(e,t){if(e==s){var i=t.data("cke-saved-href");i||(i=t.getAttribute("href")),this.setValue(i)}},commit:function(t,i){var a=this;if(t==s&&(a.getValue()||a.isChanged())){var n=decodeURI(a.getValue());i.data("cke-saved-href",n),i.setAttribute("href",n),(a.getValue()||!e.config.image_removeLinkByEmptyURL)&&(a.getDialog().addLink=!0)}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:e.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:e.lang.common.browseServer},{id:"cmbTarget",type:"select",label:e.lang.common.target,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.targetNew,"_blank"],[e.lang.common.targetTop,"_top"],[e.lang.common.targetSelf,"_self"],[e.lang.common.targetParent,"_parent"]],setup:function(e,t){e==s&&this.setValue(t.getAttribute("target")||"")},commit:function(e,t){e==s&&(this.getValue()||this.isChanged())&&t.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:e.lang.image.upload,elements:[{type:"file",id:"upload",label:e.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:e.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:e.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",label:e.lang.common.id,setup:function(e,t){e==o&&this.setValue(t.getAttribute("id"))},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",style:"width : 100px;",label:e.lang.common.langDir,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.langDirLtr,"ltr"],[e.lang.common.langDirRtl,"rtl"]],setup:function(e,t){e==o&&this.setValue(t.getAttribute("dir"))},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",label:e.lang.common.langCode,"default":"",setup:function(e,t){e==o&&this.setValue(t.getAttribute("lang"))},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",label:e.lang.common.longDescr,setup:function(e,t){e==o&&this.setValue(t.getAttribute("longDesc"))},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",label:e.lang.common.cssClass,"default":"",setup:function(e,t){e==o&&this.setValue(t.getAttribute("class"))},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",label:e.lang.common.advisoryTitle,"default":"",onChange:function(){h(this.getDialog())},setup:function(e,t){e==o&&this.setValue(t.getAttribute("title"))},commit:function(e,t){var i=this;e==o?(i.getValue()||i.isChanged())&&t.setAttribute("title",i.getValue()):e==r?t.setAttribute("title",i.getValue()):e==m&&t.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",label:e.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),"default":"",setup:function(e,t){if(e==o){var i=t.getAttribute("style");!i&&t.$.style.cssText&&(i=t.$.style.cssText),this.setValue(i);var a=t.$.style.height,n=t.$.style.width,l=(a?a:"").match(g),s=(n?n:"").match(g);this.attributesInStyle={height:!!l,width:!!s}}},onChange:function(){a.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]),h(this)},commit:function(e,t){e==o&&(this.getValue()||this.isChanged())&&t.setAttribute("style",this.getValue())}}]}]}};CKEDITOR.dialog.add("image",function(t){return e(t,"image")}),CKEDITOR.dialog.add("imagebutton",function(t){return e(t,"imagebutton")})}();