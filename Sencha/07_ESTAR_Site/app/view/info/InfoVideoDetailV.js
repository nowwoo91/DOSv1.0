Ext.define('ESTAR.view.info.InfoVideoDetailV', {
    extend: 'Ext.Container',
    alias: 'widget.infovideodetailv',
    id: 'infovideodetailv',
    
    config: {
        layout: {
            type: 'vbox'
            
        },
        scrollable : "vertical",
        cls: 'estarDescription',
        tpl: [
            '<header>' +
                '<h1 >{title}</h1>' +
                '</header>' +
                '<section>' +
                '<header>' +
                '<div><img src="./resources/images/sampleImg1.jpg" width=60"></div>' +
                '<article>' +
                '<p>Autistar</p>' +
                '<p>2013.08.15</p>' +
                '</article>' +
                '</header>' +
                '<section>' +
                '<article>' +
                '<p>' +
                '<p><iframe width="100%" src="//www.youtube.com/embed/{videoUrl}" frameborder="0" allowfullscreen></iframe></p>' +
                '</p>' +
                '</article>' +
                '</section>' +
                '<div></div>' +
                '</section>'
        ]
    }

});
