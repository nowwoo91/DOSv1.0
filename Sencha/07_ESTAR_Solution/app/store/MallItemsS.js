Ext.define('ESTAR.store.MallItemsS', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ESTAR.model.MallM',
        autoLoad: true,
        storeId: 'mallItemsS',

        proxy: {
            type: "jsonp",
            url : "http://estar.sencha.or.kr/server/jsonp/Proxy.jsp",
            reader: {
                type: "json",
                rootProperty: "mall.itemList"
            }
        }
    }
});