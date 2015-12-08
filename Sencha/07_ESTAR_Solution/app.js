Ext.Loader.setPath({
    'Ext.ux': 'app/plugin/ux'
});

Ext.application({
	name : 'ESTAR',

    controllers: [
        'HomeC',
        'MallC'
    ],

    models: [
        'HomeM',
        'MallM'
    ],

    stores: [
        'HomeCoverflowS',
        'HomeNoticeS',
        'MallCategoryS',
        'MallItemsS'
    ],

	views : [
        'MainTabV',
        'home.HomeMainV',
        'home.HomeCardV',
        'home.CoverFlowV',
        'home.HomeNoticeV',
        'mall.MallCardV',
        'mall.MallCategoryV',
        'mall.MallItemsV',
        'mall.MallItemDetailV'
    ],

	launch : function() {
		Ext.Viewport.add({
			xtype : 'maintabv'
		});
		console.log('launched');
	}
});
