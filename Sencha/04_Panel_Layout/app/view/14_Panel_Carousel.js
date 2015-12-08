var yellow = {
	xtype: 'carousel',
	items:	[ 
        	  {html: 1, cls: 'yellow1'},
        	  {html: 2, cls: 'yellow2'},
        	  {html: 3, cls: 'yellow3'}
			]
};

var red = {
	title : 'Red',
	html : 'Red',
	cls : 'red1'
};

var blue = {
	title : 'Blue',
	html : 'Blue',
	cls : 'blue1'
};

Ext.define('ST2.view.Hello', {
	extend : 'Ext.Panel',
	id : 'hello',
	xtype : 'hello',
	config : {
		layout : {
			type : 'vbox',
			animation : { type: 'fade', duration: 1300 }
		},
		defaults: { flex : 1 },
		items : [yellow, red, blue]
	}
});
