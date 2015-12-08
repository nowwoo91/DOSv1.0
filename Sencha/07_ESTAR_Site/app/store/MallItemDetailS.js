Ext.define('ESTAR.store.MallItemDetailS', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ESTAR.model.MallM',
        autoLoad: true,
        storeId: 'mallItemDetailS',
        proxy: {
            type: 'jsonp',
            url : 'http://estar.sencha.or.kr/server/jsonp/MallItemDetail.jsp',
            reader: {
                type: 'json',
                rootProperty: 'categories'
            }
        }
    }
});

/*
 url : 'http://garigori.sencha.or.kr/json/ui/03_listAll.jsp',
 */
