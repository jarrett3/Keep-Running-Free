/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("button",function(t){function e(t){var e=this,n=e.getValue();n?(t.attributes[e.id]=n,"name"==e.id&&(t.attributes["data-cke-saved-name"]=n)):(delete t.attributes[e.id],"name"==e.id&&delete t.attributes["data-cke-saved-name"])}return{title:t.lang.button.title,minWidth:350,minHeight:150,onShow:function(){var t=this;delete t.button;var e=t.getParentEditor().getSelection().getSelectedElement();if(e&&e.is("input")){var n=e.getAttribute("type");n in{button:1,reset:1,submit:1}&&(t.button=e,t.setupContent(e))}},onOk:function(){var t=this.getParentEditor(),e=this.button,n=!e,a=e?CKEDITOR.htmlParser.fragment.fromHtml(e.getOuterHtml()).children[0]:new CKEDITOR.htmlParser.element("input");this.commitContent(a);var i=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(i);var l=CKEDITOR.dom.element.createFromHtml(i.getHtml(),t.document);n?t.insertElement(l):(l.replace(e),t.getSelection().selectElement(l))},contents:[{id:"info",label:t.lang.button.title,title:t.lang.button.title,elements:[{id:"name",type:"text",label:t.lang.common.name,"default":"",setup:function(t){this.setValue(t.data("cke-saved-name")||t.getAttribute("name")||"")},commit:e},{id:"value",type:"text",label:t.lang.button.text,accessKey:"V","default":"",setup:function(t){this.setValue(t.getAttribute("value")||"")},commit:e},{id:"type",type:"select",label:t.lang.button.type,"default":"button",accessKey:"T",items:[[t.lang.button.typeBtn,"button"],[t.lang.button.typeSbm,"submit"],[t.lang.button.typeRst,"reset"]],setup:function(t){this.setValue(t.getAttribute("type")||"")},commit:e}]}]}});