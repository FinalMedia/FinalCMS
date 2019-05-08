/*
jQWidgets v2.7.0 (2013-Feb-08)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{savestate:function(b){var b=this.getstate();if(window.localStorage){window.localStorage["jqxGrid"+this.element.id]=this._stringify(b)}this._savedstate=b;return b},loadstate:function(c){var e="";if(c!=undefined&&c.width!=undefined){e=c}else{if(window.localStorage){var b=window.localStorage["jqxGrid"+this.element.id];if(b){var e=a.parseJSON(window.localStorage["jqxGrid"+this.element.id])}}else{if(this._savedstate){var e=this._savedstate}}}if(e!=null&&e!==""){var d=e;this.width=d.width;this.height=d.height;if(this.pageable){if(d.pagesize!=undefined){this.pagesize=d.pagesize}if(d.pagenum!=undefined){this.dataview.pagenum=d.pagenum}if(d.pagesizeoptions!=undefined){this.pagesizeoptions=d.pagesizeoptions}}if(this.sortable){if(d.sortdirection){if(d.sortdirection.ascending||d.sortdirection.descending){this.dataview.sortfield=d.sortcolumn;var f=d.sortdirection.ascending?"asc":"desc";this.dataview.sortfielddirection=f;this.source.sortcolumn=d.sortcolumn;this.source.sortdirection=f;if(!this.autoloadstate){this.sortby(d.sortcolumn,f)}}}else{if(this.dataview.sortfield!=null&&(this.dataview.sortfielddirection=="asc"||this.dataview.sortfielddirection=="desc")){this.sortby(this.dataview.sortfield,null)}}}if(this.groupable){this.dataview.groups=d.groups;this.groups=d.groups}if(this.virtualsizeinfo){this._loadselectionandcolumnwidths(d)}}},_loadselectionandcolumnwidths:function(g){var k="";if(g!=undefined&&g.width!=undefined){k=g}else{if(window.localStorage){var k=a.parseJSON(window.localStorage["jqxGrid"+this.element.id])}else{if(this._savedstate){var k=this._savedstate}}}if(k!=null){var y=k;var x=this;var f=false;var d=[];d.length=0;var w=[];a.each(this.columns.records,function(z){var i=y.columns[this.datafield];if(i!=undefined){if(this.text!=i.text){f=true}if(this.hidden!=i.hidden){f=true}this.width=i.width;this.hidden=i.hidden;this.pinned=i.pinned;this.groupable=i.groupable;this.resizable=i.resizable;this.draggable=i.draggable;this.text=i.text;this.align=i.align;this.cellsalign=i.cellsalign;if(z!=i.index){d[this.datafield]=i.index;d.length++}}});if(d.length>0){if(this.setcolumnindex){a.each(this.columns.records,function(i){var i=d[this.datafield];x.setcolumnindex(this.datafield,i,false)})}this.prerenderrequired=true;this.rendergridcontent(true);if(this._updatefilterrowui&&this.filterable&&this.showfilterrow){this._updatefilterrowui()}this._renderrows(this.virtualsizeinfo)}if(this.filterable){if(this.clearfilters){this.clearfilters(false)}var c="";var n=new a.jqx.filter();for(var u=0;u<y.filters.filterscount;u++){var v=y.filters["filtercondition"+u];var r=y.filters["filterdatafield"+u];var h=this.getcolumn(r);if(r!=c){n=new a.jqx.filter()}c=r;if(h&&h.filterable){var t=y.filters["filtervalue"+u];var o=y.filters["filteroperator"+u];var b=y.filters["filtertype"+u];var p=n.createfilter(b,t,v);n.addfilter(o,p);if(this.showfilterrow){var j=h._filterwidget;var e=h._filterwidget.parent();if(j!=null){switch(h.filtertype){case"number":e.find("input").val(t);if(this.host.jqxDropDownList){var m=n.getoperatorsbyfiltertype("numericfilter");j.find(".filter").jqxDropDownList("selectIndex",m.indexOf(v))}break;case"date":if(this.host.jqxDateTimeInput){var q=y.filters["filtervalue"+(u+1)];var b=y.filters["filtertype"+u];var p=n.createfilter(b,q,"LESS_THAN_OR_EQUAL");n.addfilter(o,p);a(e.children()[0]).jqxDateTimeInput("setRange",new Date(t),new Date(q));u++}else{j.val(t)}break;case"textbox":case"default":j.val(t);x["_oldWriteText"+j[0].id]=t;break;case"list":if(this.host.jqxDropDownList){var s=a(e.children()[0]).jqxDropDownList("getItems");var l=-1;a.each(s,function(z){if(this.value==t){l=z;return false}});a(e.children()[0]).jqxDropDownList("selectIndex",l)}else{j.val(t)}break;case"checkedlist":if(!this.host.jqxDropDownList){j.val(t)}break;case"bool":case"boolean":if(!this.host.jqxCheckBox){j.val(t)}else{a(e.children()[0]).jqxCheckBox({checked:t})}break}}}this.addfilter(r,n)}}if(y.filters.filterscount>0){this.applyfilters();if(this.showfilterrow){a.each(this.columns.records,function(){if(this.filtertype=="checkedlist"&&this.filterable){if(x.host.jqxDropDownList){var D=this;var B=D._filterwidget;var G=B.jqxDropDownList("getItems");var z=B.jqxDropDownList("listBox");z.checkAll(false);if(D.filter){z.uncheckAll(false);var F=D.filter.getfilters();for(var C=0;C<z.items.length;C++){var A=z.items[C].label;a.each(F,function(){if(this.condition=="NOT_EQUAL"){return true}if(A==this.value){z.checkIndex(C,false,false)}})}z._updateCheckedItems();var E=z.getCheckedItems().length;if(z.items.length!=E&&E>0){z.host.jqxListBox("indeterminateIndex",0,true,false)}}}}})}}if(this.pageable){if(this.gotopage){this.dataview.pagenum=-1;this.gotopage(y.pagenum)}}}if(y.selectedrowindexes&&y.selectedrowindexes.length>0){this.selectedrowindexes=y.selectedrowindexes;this.selectedrowindex=y.selectedrowindex}if(y.selectedcells){if(this._applycellselection){a.each(y.selectedcells,function(){x._applycellselection(this.rowindex,this.datafield,true,false)})}}if(this.groupable){this._refreshdataview();this.render();return}if(f){this.prerenderrequired=true;this.rendergridcontent(true);if(this.updating()){return false}}else{this._updatecolumnwidths();this._updatecellwidths()}this._renderrows(this.virtualsizeinfo)}},getstate:function(){var l=this.getdatainformation();var g={};g.width=this.width;g.height=this.height;g.pagenum=l.paginginformation.pagenum;g.pagesize=l.paginginformation.pagesize;g.pagesizeoptions=this.pagesizeoptions;g.sortcolumn=l.sortinformation.sortcolumn;g.sortdirection=l.sortinformation.sortdirection;if(this.selectionmode!=null){if(this.getselectedcells){if(this.selectionmode.toString().indexOf("cell")!=-1){var k=this.getselectedcells();var n=new Array();a.each(k,function(){n.push({datafield:this.datafield,rowindex:this.rowindex})});g.selectedcells=n}else{var j=this.getselectedrowindexes();g.selectedrowindexes=j;g.selectedrowindex=this.selectedrowindex}}}var h={};var d=0;if(this.dataview.filters){for(var i=0;i<this.dataview.filters.length;i++){var e=this.dataview.filters[i].datafield;var b=this.dataview.filters[i].filter;var c=b.getfilters();h[e+"operator"]=b.operator;for(var f=0;f<c.length;f++){c[f].datafield=e;h["filtervalue"+d]=c[f].value;h["filtercondition"+d]=c[f].condition;h["filteroperator"+d]=c[f].operator;h["filterdatafield"+d]=e;h["filtertype"+d]=c[f].type;d++}}}h.filterscount=d;g.filters=h;g.groups=this.groups;g.columns={};a.each(this.columns.records,function(m,o){var p={};p.width=this.width;p.hidden=this.hidden;p.pinned=this.pinned;p.groupable=this.groupable;p.resizable=this.resizable;p.draggable=this.draggable;p.text=this.text;p.align=this.align;p.cellsalign=this.cellsalign;p.index=m;g.columns[this.datafield]=p});return g},_stringify:function(e){if(window.JSON&&typeof window.JSON.stringify==="function"){var d=this;var c="";try{c=window.JSON.stringify(e)}catch(b){return d._str("",{"":e})}return c}var c=this._str("",{"":e});return c},_quote:function(b){var d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return'"'+b.replace(d,function(e){var f=c[e];return typeof f==="string"?f:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"'},_stringifyArray:function(e){var b=e.length,c=[],d;for(var d=0;d<b;d++){c.push(this._str(d,e)||"null")}return"["+c.join(",")+"]"},_stringifyObject:function(f){var c=[],d,b;var e=this;for(d in f){if(Object.prototype.hasOwnProperty.call(f,d)){b=e._str(d,f);if(b){c.push(e._quote(d)+":"+b)}}}return"{"+c.join(",")+"}"},_stringifyReference:function(b){switch(Object.prototype.toString.call(b)){case"[object Array]":return this._stringifyArray(b)}return this._stringifyObject(b)},_stringifyPrimitive:function(c,b){switch(b){case"string":return this._quote(c);case"number":return isFinite(c)?c:"null";case"boolean":return c}return"null"},_str:function(c,b){var e=b[c],d=typeof e;if(e&&typeof e==="object"&&typeof e.toJSON==="function"){e=e.toJSON(c);d=typeof e}if(/(number|string|boolean)/.test(d)||(!e&&d==="object")){return this._stringifyPrimitive(e,d)}else{return this._stringifyReference(e)}}})})(jQuery);