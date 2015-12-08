Ext.define('ESTAR.store.HomeCoverflowS', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'ESTAR.model.HomeM',
		autoLoad: true,
		storeId: 'homeCoverflowS'
	}
});