Ext.define('ESTAR.view.home.HomeCardV', {
    extend: 'Ext.NavigationView',
    alias: 'widget.homecardv',
    id: 'homecardv',
    requires: ['ESTAR.view.home.HomeMainV'],

    config: {
        autoDestroy: false,
        title: 'Home',
        items: [
            {
                xtype: 'homemainv'
            }
        ]
    }
});