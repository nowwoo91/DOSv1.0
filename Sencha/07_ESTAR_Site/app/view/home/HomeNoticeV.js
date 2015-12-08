Ext.define('ESTAR.view.home.HomeNoticeV', {
    extend: 'Ext.Container',
    alias: 'widget.homenoticev',
    id: 'homenoticev',

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
                            '<p>{header1}</p>' +
                            '<p>{header2}</p>' +
                        '</article>' +
                    '</header>' +
                    '<section>' +
                        '<article>' +
                            //'<p><img src="./resources/images/sampleImg1.jpg" width=150>' +
							'<p><div style="width: 100%; text-align: center; padding: 4px;">{image}</div>' +
                            '<p style="padding: 5px;">{text}</p>' +
                            '</p>' +
                        '</article>' +
                    '</section>' +
                    '<div></div>' +
                '</section>'
        ]
    }
});
