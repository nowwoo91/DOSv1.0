Ext.define("ESTAR.store.DesignerS", {
	extend: 'Ext.data.Store',
    config: {
    	model: 'ESTAR.model.DesignerM',
    	autoLoad: true,
    	storeId: 'designerS'
    }
});