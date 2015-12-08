Ext.application({
    name: 'ST2',
    
    tabletStartupScreen : 'resources/img/tablet_startup.png',
	phoneStartupScreen : 'resources/img/phone_startup.png',
	icon : 'resources/img/icon.png',
	glossOnIcon : false,

    views: ['Main'],
    stores: ['Twitters'],
    models: ['Twitter'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});