Ext.define('ST2.store.Twitters', {
    extend: 'Ext.data.Store',
    
    config: {
    	autoLoad: true,
        model: 'ST2.model.Twitter',
//        data: [
//          {name: 'JongKwang',
//           text: 'Hello, Tweet Client',
//           profile_image_url: '/resources/img/myPic.jpg'}
//        ],
        proxy: {
            type: 'jsonp',
            url: 'http://yelp.senchabits.com/go',
            extraParams: { 
				fn: "twitter",
				q: "sencha",
				uniqueify: Math.random()
            },
            reader: {
                rootProperty: 'data.statuses'
            }
        }
    }
});

