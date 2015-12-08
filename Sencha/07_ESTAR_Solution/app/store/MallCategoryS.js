Ext.define('ESTAR.store.MallCategoryS', {
	extend: 'Ext.data.Store',
	config: {
		model: 'ESTAR.model.MallM',
		autoLoad: true,
		storeId: 'mallCategoryS',

        proxy: {
            type: "jsonp",
            url : "http://estar.sencha.or.kr/server/jsonp/Proxy.jsp",
            reader: {
                type: "json",
                rootProperty: "mall.categoryList"
            }
        }
	}
});