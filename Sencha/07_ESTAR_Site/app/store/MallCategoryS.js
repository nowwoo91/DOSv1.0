Ext.define('ESTAR.store.MallCategoryS', {
	extend: 'Ext.data.Store',
	config: {
		model: 'ESTAR.model.MallM',
		autoLoad: true,
		storeId: 'mallCategoryS'
	}
});