Ext.define('ESTAR.store.HomeNoticeS', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'ESTAR.model.HomeM',
		autoLoad: true,
		storeId: 'homeNoticeS'
	}
});