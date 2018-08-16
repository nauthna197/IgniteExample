/*!@license
 * Infragistics.Web.ClientUI Grid Merged Cells 15.2.20152.2235
 *
 * Copyright (c) 2011-2016 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.shared.js
 *	infragistics.dataSource.js
 *	infragistics.util.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){"use strict";$.widget("ui.igGridCellMerging",{css:{mergedCellsTop:"ui-iggrid-mergedcellstop",mergedCellsBottom:"ui-iggrid-mergedcellsbottom",mergedCell:"ui-iggrid-mergedcell"},options:{initialState:"regular",inherit:false},events:{cellsMerging:"cellsMerging",cellsMerged:"cellsMerged"},_create:function(){this._sortingRequested=false;this._v=false},destroy:function(){this._removePaint();this._unregisterEvents();$.Widget.prototype.destroy.call(this);return this},_gridSorting:function(){this._sortingRequested=true},_gridSorted:function(){this._sortingRequested=false;this._notInitial=true},_gridRendered:function(){var key,index,sExp=this.grid.dataSource.settings.sorting.expressions,i,j;if(this.options.initialState==="merged"&&this._sortingRequested===false&&!this._notInitial){for(j=0;j<this.grid._visibleColumns().length;j++){this._paintMergedCells(j,this.grid._visibleColumns()[j].key)}}else{for(i=0;i<sExp.length;i++){key=sExp[i].fieldName;for(j=0;j<this.grid._visibleColumns().length;j++){if(this.grid._visibleColumns()[j].key===key){index=j;break}}if(typeof this.grid._startColIndex==="number"){index-=this.grid._startColIndex}if(index!==null&&index!==undefined&&key){this._paintMergedCells(index,key)}}}},_rrn:function(){this._gridRendered()},_rcn:function(){this._gridRendered()},_columnsCollectionModified:function(){this._gridRendered()},_paintMergedCells:function(index,key){var cells,prvCell,curCell,prvCellTxt,curCellTxt,first=true,str=false,hasFixedCols=this.grid.hasFixedColumns(),count=0,i,args,cval,noCancel;if(hasFixedCols){if(key){index=this.grid.getVisibleIndexByKey(key,true)+1}else{index=index+1+this._getSystemFixedColumnsCount()}if(this.grid.isFixedColumn(key)){cells=this.grid.container().find("#"+this.grid.id()+"_fixed tbody tr>td:nth-child("+index+")")}else{cells=this.grid.container().find("#"+this.grid.id()+" tbody tr>td:nth-child("+index+")")}}else{cells=this.grid.container().find("#"+this.grid.id()+" tbody tr>td:nth-child("+(index+1+this._getSystemColumnsCount())+")")}this._addVirtualBorderCells(cells,key);prvCell=cells.eq(0);for(i=1;i<cells.length;i++){curCell=cells.eq(i);prvCellTxt=this._getComparableCellText(prvCell);curCellTxt=this._getComparableCellText(curCell);if(prvCellTxt===curCellTxt&&prvCellTxt!==cval){if(str===false){args=this._getEventArgsForCell(prvCell);noCancel=this._trigger(this.events.cellsMerging,this,args);if(noCancel!==true){cval=prvCellTxt;prvCell=curCell;continue}}cval=null;str=true;if(first===true){if(!cells.eq(i-1)[0].fictive){cells.eq(i-1).addClass(this.css.mergedCellsTop)}first=false;count++}if(!curCell[0].fictive){curCell.addClass(this.css.mergedCell)}count++}else{if(str===true){args.count=count;count=0;this._trigger(this.events.cellsMerged,this,args);cells.eq(i-1).addClass(this.css.mergedCellsBottom);str=false}first=true}prvCell=curCell}if(str===true){args.count=count;this._trigger(this.events.cellsMerged,this,args);if(!cells.eq(cells.length-1)[0].fictive){cells.eq(cells.length-1).addClass(this.css.mergedCellsBottom)}}},_addVirtualBorderCells:function(list,key){var ds=this.grid.dataSource.dataView();if(this._v===true){if(this.grid._startRowIndex>0){list.splice(0,0,{txt:String(ds[this.grid._startRowIndex-1][key]),fictive:true})}if(this.grid._startRowIndex+this.grid._virtualRowCount<this.grid.dataSource.dataView().length){list.splice(list.length,0,{txt:String(ds[this.grid._startRowIndex+this.grid._virtualRowCount][key]),fictive:true})}}},_getSystemFixedColumnsCount:function(){var firstRow=this.grid.fixedContainer().find("tbody>tr:not([data-container='true'],[data-grouprow='true']):first");return firstRow.children("[data-parent='true'],[data-skip='true'],th").length},_getSystemColumnsCount:function(){var firstRow=this.grid.container().find("#"+this.grid.id()+" tbody>tr:not([data-container='true'],[data-grouprow='true']):first");return firstRow.children("[data-parent='true'],[data-skip='true'],th").length},_getEventArgsForCell:function(cell){var args,row,rKey,rIdx,val;if(cell[0].fictive){row=null;rKey=null;rIdx=this.grid._startRowIndex?this.grid._startRowIndex-1:-1;val=cell[0].txt}else{row=cell.closest("tr");rKey=row.attr("data-id");rIdx=this._getVisibleRowIndex(row);if(rKey===""||rKey===null||rKey===undefined){rKey=rIdx}val=cell.html()}args={owner:this,row:row,rowIndex:rIdx,rowKey:rKey,grid:this.grid,value:val};return args},_getComparableCellText:function(cell){var text=cell[0].fictive?cell[0].txt:cell.html().replace(/^&nbsp;$/,"");if(this.grid.dataSource.settings.sorting.caseSensitive===false){text=text.toLowerCase()}return text},_getVisibleRowIndex:function(row){return row.closest("tbody").children("tr:not([data-container='true'],[data-grouprow='true'])").index(row)+(this.grid._startRowIndex||0)},_removePaint:function(){var dataRows=this.grid.element.children("tbody").children("tr:not([data-container='true'],[data-grouprow='true'])"),cells,i;cells=dataRows.children("td."+this.css.mergedCellsTop+",td."+this.css.mergedCell);for(i=0;i<cells.length;i++){$(cells[i]).removeClass(this.css.mergedCellsTop).removeClass(this.css.mergedCell).removeClass(this.css.mergedCellsBottom)}},_createHandlers:function(){this._sortingInitiatedHandler=$.proxy(this._gridSorting,this);this._sortingHandler=$.proxy(this._gridSorted,this);this._virtualRowsHandler=$.proxy(this._rrn,this);this._virtualColumnsHandler=$.proxy(this._rcn,this);this._columnsCollectionModifiedHandler=$.proxy(this._columnsCollectionModified,this)},_registerEvents:function(){this.grid.element.bind({iggridsortingcolumnsorting:this._sortingInitiatedHandler,iggridsortingcolumnsorted:this._sortingHandler,iggridvirtualrecordsrender:this._virtualRowsHandler,iggridvirtualhorizontalscroll:this._virtualColumnsHandler,iggridcolumnscollectionmodified:this._columnsCollectionModifiedHandler})},_unregisterEvents:function(){var tbl=this.grid.element;tbl.unbind("iggridsortingcolumnsorting",this._sortingInitiatedHandler);tbl.unbind("iggridsortingcolumnsorted",this._sortingHandler);tbl.unbind("iggridvirtualrecordsrender",this._virtualRowsHandler);tbl.unbind("iggridvirtualhorizontalscroll",this._virtualColumnsHandler);tbl.unbind("iggridcolumnscollectionmodified",this._columnsCollectionModifiedHandler)},_injectGrid:function(gridInstance){this.grid=gridInstance;this._v=this.grid.options.virtualization===true||this.grid.options.rowVirtualization===true;this._createHandlers();this._unregisterEvents();this._registerEvents()}});$.extend($.ui.igGridCellMerging,{version:"15.2.20152.2235"})})(jQuery);