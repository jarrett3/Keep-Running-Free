/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("scaytcheck",function(e){function t(){return"undefined"!=typeof document.forms["optionsbar_"+g]?document.forms["optionsbar_"+g].options:[]}function i(){return"undefined"!=typeof document.forms["languagesbar_"+g]?document.forms["languagesbar_"+g].scayt_lang:[]}function a(e,t){if(e){var i=e.length;if(void 0==i)return e.checked=e.value==t.toString(),void 0;for(var a=0;i>a;a++)e[a].checked=!1,e[a].value==t.toString()&&(e[a].checked=!0)}}function n(e){p.getById("dic_message_"+g).setHtml('<span style="color:red;">'+e+"</span>")}function o(e){p.getById("dic_message_"+g).setHtml('<span style="color:blue;">'+e+"</span>")}function d(e){e=String(e);for(var t=e.split(","),i=0,a=t.length;a>i;i+=1)p.getById(t[i]).$.style.display="inline"}function s(e){e=String(e);for(var t=e.split(","),i=0,a=t.length;a>i;i+=1)p.getById(t[i]).$.style.display="none"}function l(e){p.getById("dic_name_"+g).$.value=e}var c,r,_=!0,p=CKEDITOR.document,g=e.name,m=CKEDITOR.plugins.scayt.getUiTabs(e),y=[],u=0,f=["dic_create_"+g+",dic_restore_"+g,"dic_rename_"+g+",dic_delete_"+g],v=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"],h=e.lang.scayt,b=[{id:"options",label:h.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+g+'"><div class="inner_options">'+'	<div class="messagebox"></div>'+'	<div style="display:none;">'+'		<input type="checkbox" name="options"  id="allCaps_'+g+'" />'+'		<label for="allCaps" id="label_allCaps_'+g+'"></label>'+"	</div>"+'	<div style="display:none;">'+'		<input name="options" type="checkbox"  id="ignoreDomainNames_'+g+'" />'+'		<label for="ignoreDomainNames" id="label_ignoreDomainNames_'+g+'"></label>'+"	</div>"+'	<div style="display:none;">'+'	<input name="options" type="checkbox"  id="mixedCase_'+g+'" />'+'		<label for="mixedCase" id="label_mixedCase_'+g+'"></label>'+"	</div>"+'	<div style="display:none;">'+'		<input name="options" type="checkbox"  id="mixedWithDigits_'+g+'" />'+'		<label for="mixedWithDigits" id="label_mixedWithDigits_'+g+'"></label>'+"	</div>"+"</div></form>"}]},{id:"langs",label:h.languagesTab,elements:[{type:"html",id:"langs",html:'<form name="languagesbar_'+g+'"><div class="inner_langs">'+'	<div class="messagebox"></div>	'+'   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+g+'" ></div>'+'   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+g+'"></div>'+"</div></form>"}]},{id:"dictionaries",label:h.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+g+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">'+'	<div style="margin:5px auto; width:80%;white-space:normal; overflow:hidden;" id="dic_message_'+g+'"> </div>'+'	<div style="margin:5px auto; width:80%;white-space:normal;"> '+'       <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>'+'		<span class="cke_dialog_ui_labeled_content" >'+'			<div class="cke_dialog_ui_input_text">'+'				<input id="dic_name_'+g+'" type="text" class="cke_dialog_ui_input_text"/>'+"		</div></span></div>"+'		<div style="margin:5px auto; width:80%;white-space:normal;">'+'			<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+g+'">'+"				</a>"+'			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+g+'">'+"				</a>"+'			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+g+'">'+"				</a>"+'			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+g+'">'+"				</a>"+"		</div>"+'	<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+g+'"></div>'+"</div></form>"}]},{id:"about",label:h.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+g+'"></div>'}]}],k={title:h.title,minWidth:360,minHeight:220,onShow:function(){var t=this;if(t.data=e.fire("scaytDialog",{}),t.options=t.data.scayt_control.option(),t.chosed_lang=t.sLang=t.data.scayt_control.sLang,!t.data||!t.data.scayt||!t.data.scayt_control)return alert("Error loading application service"),t.hide(),void 0;var i=0;_?t.data.scayt.getCaption(e.langCode||"en",function(e){i++>0||(c=e,w.apply(t),x.apply(t),_=!1)}):x.apply(t),t.selectPage(t.data.tab)},onOk:function(){var e=this.data.scayt_control;e.option(this.options);var t=this.chosed_lang;e.setLang(t),e.refresh()},onCancel:function(){var e=t();for(var n in e)e[n].checked=!1;a(i(),"")},contents:y};for(CKEDITOR.plugins.scayt.getScayt(e),r=0;r<m.length;r++)1==m[r]&&(y[y.length]=b[r]);1==m[2]&&(u=1);var w=function(){function e(e){var t=p.getById("dic_name_"+g).getValue();if(!t)return n(" Dictionary name should not be empty. "),!1;try{var i=e.data.getTarget().getParent(),a=/(dic_\w+)_[\w\d]+/.exec(i.getId())[1];L[a].apply(null,[i,t,f])}catch(o){n(" Dictionary error. ")}return!0}var t,i=this,a=i.data.scayt.getLangList(),r=["dic_create","dic_delete","dic_rename","dic_restore"],_=[],y=[],h=v;if(u){for(t=0;t<r.length;t++)_[t]=r[t]+"_"+g,p.getById(_[t]).setHtml('<span class="cke_dialog_ui_button">'+c["button_"+r[t]]+"</span>");p.getById("dic_info_"+g).setHtml(c.dic_info)}if(1==m[0])for(t in h){var b="label_"+h[t],k=b+"_"+g,w=p.getById(k);if("undefined"!=typeof w&&"undefined"!=typeof c[b]&&"undefined"!=typeof i.options[h[t]]){w.setHtml(c[b]);var x=w.getParent();x.$.style.display="block"}}var I='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p>'+"<p>"+c.version+window.scayt.getAboutInfo().version.toString()+"</p>"+"<p>"+c.about_throwt_copy+"</p>";p.getById("scayt_about_"+g).setHtml(I);var D=function(e,t){var a=p.createElement("label");a.setAttribute("for","cke_option"+e),a.setHtml(t[e]),i.sLang==e&&(i.chosed_lang=e);var n=p.createElement("div"),o=CKEDITOR.dom.element.createFromHtml('<input id="cke_option'+e+'" type="radio" '+(i.sLang==e?'checked="checked"':"")+' value="'+e+'" name="scayt_lang" />');return o.on("click",function(){this.$.checked=!0,i.chosed_lang=e}),n.append(o),n.append(a),{lang:t[e],code:e,radio:n}};if(1==m[1]){for(t in a.rtl)y[y.length]=D(t,a.ltr);for(t in a.ltr)y[y.length]=D(t,a.ltr);y.sort(function(e,t){return t.lang>e.lang?-1:1});var B=p.getById("scayt_lcol_"+g),C=p.getById("scayt_rcol_"+g);for(t=0;t<y.length;t++){var T=t<y.length/2?B:C;T.append(y[t].radio)}}var L={};L.dic_create=function(e,t,i){var a=i[0]+","+i[1],l=c.err_dic_create,r=c.succ_dic_create;window.scayt.createUserDictionary(t,function(e){s(a),d(i[1]),r=r.replace("%s",e.dname),o(r)},function(e){l=l.replace("%s",e.dname),n(l+"( "+(e.message||"")+")")})},L.dic_rename=function(e,t){var i=c.err_dic_rename||"",a=c.succ_dic_rename||"";window.scayt.renameUserDictionary(t,function(e){a=a.replace("%s",e.dname),l(t),o(a)},function(e){i=i.replace("%s",e.dname),l(t),n(i+"( "+(e.message||"")+" )")})},L.dic_delete=function(e,t,i){var a=i[0]+","+i[1],r=c.err_dic_delete,_=c.succ_dic_delete;window.scayt.deleteUserDictionary(function(e){_=_.replace("%s",e.dname),s(a),d(i[0]),l(""),o(_)},function(e){r=r.replace("%s",e.dname),n(r)})},L.dic_restore=i.dic_restore||function(e,t,i){var a=i[0]+","+i[1],l=c.err_dic_restore,r=c.succ_dic_restore;window.scayt.restoreUserDictionary(t,function(e){r=r.replace("%s",e.dname),s(a),d(i[1]),o(r)},function(e){l=l.replace("%s",e.dname),n(l)})};var H,E=(f[0]+","+f[1]).split(",");for(t=0,H=E.length;H>t;t+=1){var S=p.getById(E[t]);S&&S.on("click",e,this)}},x=function(){var e=this;if(1==m[0])for(var i=t(),n=0,l=i.length;l>n;n++){var c=i[n].id,r=p.getById(c);r&&(i[n].checked=!1,1==e.options[c.split("_")[0]]&&(i[n].checked=!0),_&&r.on("click",function(){e.options[this.getId().split("_")[0]]=this.$.checked?1:0}))}if(1==m[1]){var y=p.getById("cke_option"+e.sLang);a(y.$,e.sLang)}u&&(window.scayt.getNameUserDictionary(function(e){var t=e.dname;s(f[0]+","+f[1]),t?(p.getById("dic_name_"+g).setValue(t),d(f[1])):d(f[0])},function(){p.getById("dic_name_"+g).setValue("")}),o(""))};return k});