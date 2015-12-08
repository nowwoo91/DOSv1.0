Ext.define('ESTAR.view.home.HomeMainV', {
    extend: 'Ext.Container',
    alias: 'widget.homemainv',
    id: 'homemainv',
    
    config: {
        title: 'AutiSTaR',
        layout:  'vbox',

        scrollable : "vertical",
        items: [
            {
            	xtype: 'coverflowv',
                store: 'homeCoverflowS',
            	height: 200,
				layout: {
					type: 'vbox',
					pack:'center',
					align: 'center'
				}
            },{
                xtype: 'container',
                html: '<b>공지사항</b>',
                style: 'margin-top: 20px; margin-left: 5px;'
            },{
                xtype: 'list',
                store: 'homeNoticeS',
                itemTpl: '<img src="{icon}" style="position: absolute; top:50%; height: 30px; margin: -15px 0 0 -10px; left: 0.em">' +
                    '<span style="position: absolute; top:50%; width: 90%; margin-top: -5px; padding-left: 25px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{title}</span><img style="float: right;" src="./resources/images/btn_arrow_right_list.png">',
                scrollable: false,
				height: 200
                //onItemDisclosure: true
            }
        ],
        listeners: {
            activate: function(view) {  // 활성화 되면 Info 버튼을 add() 한다.
                this.infoButton = Ext.getCmp("infoButton");
                if( this.infoButton )
                    this.infoButton.show( true );

            },
            deactivate: function(view) { // 비활성화 되면 Info 버튼을 remove() 한다.
                this.infoButton = Ext.getCmp("infoButton");
                if( this.infoButton )
                    this.infoButton.hide( true );
            }
        }
    }

});