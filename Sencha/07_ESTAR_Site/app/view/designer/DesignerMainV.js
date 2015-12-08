Ext.define('ESTAR.view.designer.DesignerMainV', {
	extend: 'Ext.Container',
    alias: 'widget.designermainv',
    
    config: {
        title: 'Autistar',
		layout: {
			type: 'fit',
			animation: 'slide'
		},
        items: [
            {
                xtype: 'list',
                itemId: 'designerList',
                store: 'designerS',
                itemTpl: '<img src="{icon}" style="position: absolute; top:50%; height: 30px; margin: -15px 0 0 -10px; left: 0.em">' +
                    '<span style="position: absolute; top:50%; margin-top: -5px; padding-left: 25px;">{name}</span><img style="float: right;" src="./resources/images/btn_arrow_right_list.png">',
                scrollable: true
            }
        ]

    }
});