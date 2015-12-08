Ext.define('ESTAR.view.designer.DesignerCardV', {
    extend: 'Ext.NavigationView',
    alias: 'widget.designercardv',
    id: 'designercardv',

    config: {
        autoDestroy: false,
        navigationBar: {
            title: 'ESTAR',
            id: 'designernavigationbar'
        },
        items: [
            {
                xtype: 'designermainv'
            }
        ]
    }
});