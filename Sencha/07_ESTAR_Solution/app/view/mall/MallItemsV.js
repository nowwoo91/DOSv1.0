Ext.define('ESTAR.view.mall.MallItemsV', {
	extend: 'Ext.Container',
	alias: 'widget.mallitemsv',
	config: {
        layout: {
            type: 'fit'

        },
        scrollable : "vertical",
        items: [
			{
                xtype: 'list',
                store: 'mallItemsS',
                cls: 'threeColumn',           // 3컬럼 배열을 위한 Custom CSS
                //itemTpl: '{name}, {price}, {thumbnail}',
                itemTpl: '<img src="{image1}" width=90 style="border-radius: 4px;">' +
                    '<p style="text-align: left; font-size: 10px">{name}</p>' +
                    '<p style="text-align: right; font-size: 10px; color: #006bb6">{price}</p>'
            }
        ]
	}
});