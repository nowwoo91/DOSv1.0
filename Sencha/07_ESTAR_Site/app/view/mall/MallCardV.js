Ext.define('ESTAR.view.mall.MallCardV', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mallcardv',
    id: 'mallcardv',
    config: {
        autoDestroy: false,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        navigationBar: {
            title: 'ESTAR',
            id: 'mallnavigationbar'
        },
        items: [
            {
                xtype: 'mallcategoryv'
            }
        ]
    },
    initialize: function() {
    	this.callParent(arguments);
    }
});