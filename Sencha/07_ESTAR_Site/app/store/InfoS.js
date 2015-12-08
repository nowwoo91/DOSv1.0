Ext.define('ESTAR.store.InfoS', {
	extend: 'Ext.data.Store',
	config: {
		model: 'ESTAR.model.InfoM',
		autoLoad: true,
		storeId: 'infoS'
	}
});