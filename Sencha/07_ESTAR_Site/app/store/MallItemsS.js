Ext.define('ESTAR.store.MallItemsS', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ESTAR.model.MallM',
        autoLoad: true,
        storeId: 'mallItemsS'
    }
});