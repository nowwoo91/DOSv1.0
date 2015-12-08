Ext.define("ST2.store.MyStores", {
	extend:'Ext.data.Store',

	config:{
		autoload:true,
		model: 'ST2.model.MyModel',
		storeId:'mystore',
		
		proxy:{
			type:'jsonp',
			url:"http://hamlet.sencha.or.kr/hamlet/api/serverList.jsp",
			extraParams:{
				//파라미터
			}
		}
	}
});