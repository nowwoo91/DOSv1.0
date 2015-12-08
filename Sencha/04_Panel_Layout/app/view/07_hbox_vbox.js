var yellow = {
	html : 'Yellow',
	cls : 'yellow1'
};

var red = {
	html : 'Red',
	cls : 'red1'
};

var blue = {
	html : 'Blue',
	cls : 'blue1'
};

Ext.define('ST2.view.Hello', {
	extend : 'Ext.Container',
	id : 'hello',
	xtype : 'hello',
	config : {
		layout : {
			type : 'hbox',
			animation : 'fade'
		},
		items : [yellow, red, blue]
	}
});