Ext.define('ESTAR.view.home.HomeCardV', {
    extend: 'Ext.NavigationView',
    alias: 'widget.homecardv',
    id: 'homecardv',

    config: {
        autoDestroy: false,
//        tab: {
//            title: 'Speakers',
//            iconCls: 'team',
//            action: 'speakersTab'
//        },
        title: 'ESTAR1',

		layout: {
			type: 'card',
			animation: {
				type: 'slide',
				direction: 'right'
			}
		},

        navigationBar: {
            title: 'ESTAR',
            id: 'homenavigationbar',

            items: [
                {
                    xtype: 'button',
                    text: '',
                    align:'right',
                    id: 'infoButton',
                    iconCls: 'info',
                    handler: function() {
                        if (!this.homeInfoV) {
                            this.homeInfoV = Ext.widget('homeinfov');
                        }
                        this.homeInfoV.setData({id:4, title:'t14'});
                        Ext.getCmp('homecardv').push(this.homeInfoV);
                    }
                }
            ]
        },
        items: [
            {
                xtype: 'homemainv',
            }
        ],

        doSetActiveItem: function(activeItem, oldActiveItem) {
            alert(1);
//            var me = this,
//                navigationBar = me.getNavigationBar();
//
//            if (!activeItem) {
//                return;
//            }
//
//            if (navigationBar) {
//                navigationBar.rightBox.removeAll();
//                if ( activeItem.getRightButton ){
//                    console.log('Adding Right Button: ', activeItem.getRightButton());
//                    navigationBar.add(activeItem.getRightButton());
//                }
//            }
//            me.callParent(arguments);
        }
    }
});