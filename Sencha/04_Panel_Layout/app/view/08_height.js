var yellow = {
	html : 'Yellow',
	cls : 'yellow1',
	height : 50
};

var red = {
	html : 'Red',
	cls : 'red1',
	height : 100
};

var blue = {
	html : 'Blue',
	cls : 'blue1',
	height : 150
};

Ext.define('ST2.view.Hello', {
	extend : 'Ext.Container',
	id : 'hello',
	xtype : 'hello',
	config : {
		layout : {
			type : 'vbox',
			animation : 'fade'
		},
		items : [yellow, red, blue]
	}
});
