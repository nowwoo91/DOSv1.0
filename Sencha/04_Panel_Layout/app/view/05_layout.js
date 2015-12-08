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
	xtype : 'hello',
	config : {
		layout : 'auto',
		items : [yellow, red, blue]
	}
}); 