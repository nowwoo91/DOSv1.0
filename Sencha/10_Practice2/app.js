Ext.application({
	name : 'ST2',

	views : [ 'Main' ],
	//stores:['MyStores'],
	//models:['MyModel'],

	launch : function() {
		console.log('launched1');
		Ext.Viewport.add({
			xtype : 'main'
		});
		console.log('launched2');
	}
})

