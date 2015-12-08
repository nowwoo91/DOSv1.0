Ext.application({
	name : 'ST2',

	views : [ 'Hello' ],

	launch : function() {
		Ext.Viewport.add({
			xtype : 'hello'
		});
		console.log('launched');
	}
})
