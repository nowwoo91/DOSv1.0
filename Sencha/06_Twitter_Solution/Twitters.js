Ext.define('ST2.store.Twitters', {
    extend: 'Ext.data.Store',
    
    config: {
    	autoLoad: true,
        model: 'ST2.model.Twitter',
        data: [
          {from_user: 'JongKwang',
           text: 'Hello, Tweet Client',
           profile_image_url: '/resources/img/myPic.jpg'}
        ],
        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',
            extraParams: { 
				q: "gangnam",
				rpp: 25,
				geocode: '37.56621,126.9779,50km',
				uniqueify: Math.random()
            },
            reader: {
                rootProperty: 'results'
            }
        }
    }
});

