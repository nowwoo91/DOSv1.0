Ext.define('ST2.view.Timeline', {
    extend: 'Ext.List',
    xtype: 'timeline',
    requires: ['ST2.store.Twitters'],
    
    config: {
        title: 'Timeline',
        itemTpl: [
	        ' <div class="tweet">',
	        '     <div class="avatar"><img src="{user.profile_image_url}" /></div>',
	        '     <div class="tweet-content">',
	        '       <h2>{user.name}</h2>',
	        '       <p>{text}</p>',
	        '     </div>',
	        ' </div>'
	    ],
		store: 'Twitters',
    }
});
