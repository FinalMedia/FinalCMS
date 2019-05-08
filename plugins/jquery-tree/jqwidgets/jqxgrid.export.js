/*
jQWidgets v2.7.0 (2013-Feb-08)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{exportdata:function(i,p,o,h,j,l){if(!a.jqx.dataAdapter.ArrayExporter){throw"jqxdata.export.js is not loaded."}if(o==undefined){o=true}var u=this;if(h==undefined){var h=this.getrows();if(h.length==0){throw"No data to export."}}var s=j!=undefined?j:false;var r={};var g={};var m=[];var f=this.host.find(".jqx-grid-cell:first");var n=this.host.find(".jqx-grid-cell-alt:first");f.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));f.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));n.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));n.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));f.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));f.removeClass(this.toThemeProperty("jqx-fill-state-hover"));n.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));n.removeClass(this.toThemeProperty("jqx-fill-state-hover"));var d="cell";var c=1;var t="column";var b=1;var e=[];a.each(this.columns.records,function(x){var B=a(u.table[0].rows[0].cells[x]);if(u.table[0].rows.length>1){var y=a(u.table[0].rows[1].cells[x])}var A=function(C){C.removeClass(u.toThemeProperty("jqx-grid-cell-selected"));C.removeClass(u.toThemeProperty("jqx-fill-state-pressed"));C.removeClass(u.toThemeProperty("jqx-grid-cell-hover"));C.removeClass(u.toThemeProperty("jqx-fill-state-hover"))};A(B);if(y){A(y)}if(this.datafield==null){return true}if(u.showaggregates){if(u.getcolumnaggregateddata){e.push(u.getcolumnaggregateddata(this.datafield,this.aggregates,true,h))}}var z=u._getexportcolumntype(this);if(this.exportable&&(!this.hidden||s)){r[this.datafield]={};r[this.datafield].text=this.text;r[this.datafield].width=parseInt(this.width);if(isNaN(r[this.datafield].width)){r[this.datafield].width=60}r[this.datafield].formatString=this.cellsformat;r[this.datafield].localization=u.gridlocalization;r[this.datafield].type=z;r[this.datafield].cellsAlign=this.cellsalign;r[this.datafield].hidden=!o}d="cell"+c;var v=a(this.element);if(this.element==undefined){v=a(this.uielement)}t="column"+b;if(i=="html"||i=="xls"||i=="pdf"){var w=function(G,D,E,C,I,H,F){g[G]={};g[G]["font-size"]=D.css("font-size");g[G]["font-weight"]=D.css("font-weight");g[G]["font-style"]=D.css("font-style");g[G]["background-color"]=H._getexportcolor(D.css("background-color"));g[G]["color"]=H._getexportcolor(D.css("color"));g[G]["border-color"]=H._getexportcolor(D.css("border-top-color"));if(E){g[G]["text-align"]=I.align}else{g[G]["text-align"]=I.cellsalign;g[G]["formatString"]=I.cellsformat;g[G]["dataType"]=z}if(i=="html"||i=="pdf"){g[G]["border-top-width"]=D.css("border-top-width");g[G]["border-left-width"]=D.css("border-left-width");g[G]["border-right-width"]=D.css("border-right-width");g[G]["border-bottom-width"]=D.css("border-bottom-width");g[G]["border-top-style"]=D.css("border-top-style");g[G]["border-left-style"]=D.css("border-left-style");g[G]["border-right-style"]=D.css("border-right-style");g[G]["border-bottom-style"]=D.css("border-bottom-style");if(E){if(F==0){g[G]["border-left-width"]=D.css("border-right-width")}g[G]["border-top-width"]=D.css("border-right-width");g[G]["border-bottom-width"]=D.css("border-bottom-width")}else{if(F==0){g[G]["border-left-width"]=D.css("border-right-width")}}g[G]["height"]=D.css("height")}if(I.exportable&&(!I.hidden||s)){if(E){r[I.datafield].style=G}else{if(!C){r[I.datafield].cellStyle=G}else{r[I.datafield].cellAltStyle=G}}}};w(t,v,true,false,this,u,x);b++;w(d,B,false,false,this,u,x);if(u.altrows){d="cellalt"+c;w(d,y,false,true,this,u,x)}c++}});if(this.showaggregates){var q=[];if(e.length>0){a.each(this.columns.records,function(v){if(this.aggregates){for(var x=0;x<this.aggregates.length;x++){if(!q[x]){q[x]={}}if(q[x]){var y=u._getaggregatename(this.aggregates[x]);var z=u._getaggregatetype(this.aggregates[x]);var w=e[v];q[x][this.datafield]=y+": "+w[z]}}}});a.each(this.columns.records,function(v){for(var w=0;w<q.length;w++){if(q[w][this.datafield]==undefined){q[w][this.datafield]=""}}})}a.each(q,function(){h.push(this)})}var k=a.jqx.dataAdapter.ArrayExporter(h,r,g);if(p==undefined){this._renderrows(this.virtualsizeinfo);return k.exportTo(i)}else{k.exportToFile(i,p,l)}if(this.showaggregates){a.each(q,function(){h.pop(this)})}this._renderrows(this.virtualsizeinfo)},_getexportcolor:function(k){var f=k;if(k=="transparent"){f="#FFFFFF"}if(!f||!f.toString()){f="#FFFFFF"}if(f.toString().indexOf("rgb")!=-1){var i=f.split(",");var d=parseInt(i[0].substring(4));var h=parseInt(i[1]);var j=parseInt(i[2].substring(1,4));var l={r:d,g:h,b:j};var e=this._rgbToHex(l);return"#"+e}else{if(f.toString().indexOf("#")!=-1){if(f.toString().length==4){var c=f.toString().substring(1,4);f+=c}}}return f},_rgbToHex:function(b){return this._intToHex(b.r)+this._intToHex(b.g)+this._intToHex(b.b)},_intToHex:function(c){var b=(parseInt(c).toString(16));if(b.length==1){b=("0"+b)}return b.toUpperCase()},_getexportcolumntype:function(e){var f=this;var d="string";var c=f.source.datafields||((f.source._source)?f.source._source.datafields:null);if(c){var h="";a.each(c,function(){if(this.name==e.datafield){if(this.type){h=this.type}return false}});if(h){return h}}if(e!=null){if(this.dataview.cachedrecords==undefined){return d}var b=null;if(!this.virtualmode){if(this.dataview.cachedrecords.length==0){return d}b=this.dataview.cachedrecords[0][e.datafield];if(b!=null&&b.toString()==""){return"string"}}else{a.each(this.dataview.cachedrecords,function(){b=this[e.datafield];return false})}if(b!=null){if(e.cellsformat.indexOf("c")!=-1){return"number"}if(e.cellsformat.indexOf("n")!=-1){return"number"}if(e.cellsformat.indexOf("p")!=-1){return"number"}if(e.cellsformat.indexOf("d")!=-1){return"date"}if(e.cellsformat.indexOf("y")!=-1){return"date"}if(e.cellsformat.indexOf("M")!=-1){return"date"}if(e.cellsformat.indexOf("m")!=-1){return"date"}if(e.cellsformat.indexOf("t")!=-1){return"date"}if(typeof b=="boolean"){d="boolean"}else{if(a.jqx.dataFormat.isNumber(b)){d="number"}else{var g=new Date(b);if(g.toString()=="NaN"||g.toString()=="Invalid Date"){if(a.jqx.dataFormat){g=a.jqx.dataFormat.tryparsedate(b);if(g!=null){return"date"}else{d="string"}}else{d="string"}}else{d="date"}}}}}return d}})})(jQuery);