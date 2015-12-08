Ext.application({
	name : 'ST2',

	views : [ 'Hello', 'Main' ],
	stores: ['MyStores'],
	models: ['MyModel'],

	launch : function() {
		Ext.Viewport.add({
			xtype : 'main'
		});
		console.log('launched');
	}
})
