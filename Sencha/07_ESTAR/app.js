Ext.application({
	name : 'ESTAR',

	views : [
        'MainTabV'
    ],

	launch : function() {
		Ext.Viewport.add({
			xtype : 'maintabv'
		});
		console.log('launched');
	}
});
