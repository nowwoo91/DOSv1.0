Ext.define('ESTAR.view.designer.DesignerInfo1SubV', {
    extend: 'Ext.Container',
    alias: 'widget.designerinfo1subv',
    
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
                '<section style="padding-top: 5px;">' +
                '<section>' +
                '<article>' +
				'<p><div style="width: 100%; text-align: center"><img src="{image}" width=150></div>' +
                '<p style="padding: 10px;">{article}</p>' +
                '</p>' +
                '</article>' +
                '</section>' +
                '<div></div>' +
                '</section>'
        ]
    }
});


