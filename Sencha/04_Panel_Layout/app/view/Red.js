Ext.define("ST2.view.Red", {
	extend: 'Ext.Carousel',
	
	//alias: 'widget.red',
	xtype: 'red',
	
	config: {
		items: [ {cls:'monster1-2 monsterCls'},
		         {cls:'monster2-2 monsterCls'},
		         {cls:'monster3-2 monsterCls'}]
	}
});
