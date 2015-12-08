Ext.define('ESTAR.store.HomeNoticeS', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'ESTAR.model.HomeM',
		autoLoad: true,
		storeId: 'homeNoticeS',

        proxy: {
            type: "jsonp",
            url : "http://estar.sencha.or.kr/server/jsonp/Proxy.jsp",
            reader: {
                type: "json",
                rootProperty: "home.noticeList"
            }
        }
	}
});