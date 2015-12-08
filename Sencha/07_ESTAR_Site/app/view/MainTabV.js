Ext.define('ESTAR.view.MainTabV', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.ux.slidenavigation.View',

    alias: 'widget.maintabv',
    id: 'maintabv',

    config: {

		layout: {
			animation: {
				type: 'slide',
				direction: 'right'
			}
		},

        slideSelector: false,     // 'x-toolbar':모든 영역을 슬라이드 할 수 있도록 설정, false:안되도록
        containerSlideDelay: -1,  // 얼만큼 슬라이드해야 작동하는가 (-1 = disable)
        selectSlideDuration: 200,
        itemMask: true,
        slideButtonDefaults: {
            selector: 'titlebar'        // 기본 버튼 위치
        },
        list: {
            //top: -46,
            maxDrag: 800,
            width: 300,
            //scrollable: false,
            grouped: false,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                title: {
                    title: 'AutiSTaR',
                    centered: false,
                    width: 200,
                    left: 0
                }
            }]
        },

        items: [
			{
				xtype: 'homecardv',
				title: '- Go Home',
				slideButton: true
			},
			{
				xtype: 'designercardv',
				title: '- Shopping',
				slideButton: true
			},
			{
				xtype: 'mallcardv',
				title: '- Feel AutiSTaR',
				slideButton: true
			},
            {
                xtype: 'infocardv',
                title: '- Stay in Touch',
                iconCls: 'bookmarks',
                slideButton: true
            }
        ]
    }
});
