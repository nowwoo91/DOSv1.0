Ext.define('ST2.view.Timeline', {
    extend: 'Ext.List',
    xtype: 'timeline',
    requires: ['ST2.store.Twitters'],
    
    config: {
        title: 'Timeline',
        itemTpl: [
	        ' <div class="tweet">',
	        '     <div class="avatar"><img src="{profile_image_url}" /></div>',
	        '     <div class="tweet-content">',
	        '       <h2>{from_user}</h2>',
	        '       <p>{text}</p>',
	        '     </div>',
	        ' </div>'
	    ],
		store: 'Twitters',
    }
});
