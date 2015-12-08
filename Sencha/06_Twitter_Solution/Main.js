Ext.define('ST2.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainpanel',
    requires: [
        'ST2.view.Timeline'
    ],

    config: {
        items: [{
            xtype: 'timeline'
        }, {
        	title: 'Map',
            xtype: 'map'
        }]
    }
});