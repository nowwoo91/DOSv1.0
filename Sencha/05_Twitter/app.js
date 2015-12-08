Ext.application({
    name: 'ST2',

    views: ['Main'],
    stores: ['Twitters'],
    models: ['Twitter'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});