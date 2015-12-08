Ext.define('ESTAR.view.info.InfoVideoListV', {
    extend: 'Ext.Container',
    alias: 'widget.infovideolistv',
    id: 'infovideolistv',
    
    config: {
        layout: {
            type: 'vbox'
            
        },
        scrollable : "vertical",
        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
					{
						xtype: 'list',
					    itemId: 'infoVideoListItem',
					    store: 'infoVideoListS',
					    itemTpl: '{title}',
						scrollable: true
					}
                ]
            }
        ]
    }

});