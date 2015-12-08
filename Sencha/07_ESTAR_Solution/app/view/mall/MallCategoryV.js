Ext.define('ESTAR.view.mall.MallCategoryV', {
	extend: 'Ext.Container',
	alias: 'widget.mallcategoryv',
    id: "mallcategoryv",

	config: {
        title: 'Category',
		layout: {
			type: 'fit',
            animation: 'slide'
		},
		items: [
            {
	        	xtype: 'list',
                itemId: 'categoryl',
                store: 'mallCategoryS',
                cls: 'twoColumn',           // 2컬럼 배열을 위한 Custom CSS
                itemTpl: '<img src="{image1}" width=130 style="border-radius: 4px;">' +
                    '<p style="text-align: center">{category1}</p>',
                height: 'auto'
	        }
		]
	}
});