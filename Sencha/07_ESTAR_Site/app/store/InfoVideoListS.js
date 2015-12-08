Ext.define('ESTAR.store.InfoVideoListS', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'ESTAR.model.InfoVideoListM',
		autoLoad: true,
		storeId: 'infoVideoListS'
	}
});