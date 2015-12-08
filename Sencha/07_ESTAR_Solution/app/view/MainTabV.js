Ext.define('ESTAR.view.MainTabV', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.maintabv',
    id: 'maintabv',

    config: {
        layout: {
            animation: {
                type: 'flip',
                direction: 'right'
            }
        },
        tabBarPosition: 'bottom',

        defaults: {
            styleHtmlContent: true
        },
        items: [

            {
                title: 'Home',
                iconCls: 'home', // http://docs.sencha.com/touch/2.1.1/#!/api/Ext.Button
                xtype: 'homecardv'
            },
            {
                title: 'Company',
                iconCls: 'star',
                html: 'Company'
            },
            {
                title: 'Mall',
                iconCls: 'organize',
                xtype: 'mallcardv'
            },
            {
                title: 'Info',
                iconCls: 'info',
                html: 'Info'
            }
        ]
    }
});
