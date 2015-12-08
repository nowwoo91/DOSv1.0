Ext.define('ESTAR.view.info.InfoMainV', {
    extend: 'Ext.Container',
    alias: 'widget.infomainv',    
    config: {
        title: 'Info',
        layout: {
            type: 'vbox'

        },
        items: [
            {
                xtype: 'list',
                itemId: 'infoMainItem',
                store: 'infoS',
                itemTpl: [
                    '<div style="position: relative; height: 2em;">',
                    '<img src="{icon}" style="position: absolute; top:50%; width: 2.4em; height: 2.4em; margin-top: -1.2em; left: 0.em" />',
                    '<span style="position: absolute; top:50%; height: 1em; left: 3em; margin-top:-0.5em; font-size: 1em;"> {title1} </span>' +
					'<img style="float: right;" src="./resources/images/btn_arrow_right_list.png">',
                    '</div>'],
                scrollable: true,
                flex:1
            }
        ]
    }

});