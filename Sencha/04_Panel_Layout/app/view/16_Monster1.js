var yellow = {
	xtype: 'carousel',
	items:	[ 
				{cls: "monster1-1 monsterCls"},
				{cls: "monster2-1 monsterCls"},
				{cls: "monster3-1 monsterCls"}
			]
};

var red = {
	xtype: 'tabpanel',
	items:	[ 
        	  {html: 1, cls: 'red1'},
        	  {html: 2, cls: 'red2'},
        	  {html: 3, cls: 'red3'}
			]
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
