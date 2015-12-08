Ext.define('ESTAR.view.info.InfoDetailV', {
    extend: 'Ext.Container',
    alias: 'widget.infodetailv',
    id: 'infodetailv',
    
    config: {
        layout: {
            type: 'vbox'            
        },
        scrollable : "vertical",
        tpl: [
            '{title2} - {text}'
        ]
    }

});