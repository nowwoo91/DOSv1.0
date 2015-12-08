var yellow = {
	title : 'Yellow',
	html : 'Yellow',
	cls : 'yellow1'
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
	extend : 'Ext.TabPanel',
	id : 'hello',
	xtype : 'hello',
	config : {
		layout : {
			type : 'card',
			animation : { type: 'fade', duration: 1300 }
		},
		defaults: { flex : 1 },
		items : [yellow, red, blue]
	}
});
