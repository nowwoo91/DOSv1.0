Ext.define('ESTAR.view.info.InfoCardV', {
    extend: 'Ext.NavigationView',
    alias: 'widget.infocardv',
    id: 'infocardv',

    config: {
        autoDestroy: false,
        title: 'Info',
        navigationBar: {
            title: 'Info',
            id: 'infonavigationbar'
        },
        items: [
            {
                xtype: 'infomainv'
            }
        ]
    }
});