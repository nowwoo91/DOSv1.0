Ext.define('ESTAR.store.HomeCoverflowS', {
    extend: 'Ext.data.Store',

    config: {
        model: 'ESTAR.model.HomeM',
        autoLoad: true,
        storeId: 'homeCoverflowS',
        proxy: {
            type: "jsonp",
            url : "http://estar.sencha.or.kr/server/jsonp/Proxy.jsp",
            reader: {
                type: "json",
                rootProperty: "home.coverflowList"
            }
        }
    }
});