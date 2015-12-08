Ext.define('ESTAR.view.home.CoverFlowV', {
    extend: 'Ext.ux.Cover',
    alias: 'widget.coverflowv',
    
    config: {
        itemCls: 'my-cover-item',
        //These are just for demo purposes.
        height: (Ext.os.deviceType !== 'Phone')? 300: undefined,
        width: (Ext.os.deviceType !== 'Phone')? 800: undefined,
        //end-demo
        itemTpl : [
            '<div>',
            '<div class="dev" style="position: absolute; z-index: 2;">{name} {subname}</div>',
            //'<div class="company">{price}</div>',
            '<div class="image"><tpl if="image1"><img  src="{image1}" style="width: 100%"></tpl></div>',
            '</div>'
        ],
        selectedIndex: 2,
        listeners:{
            itemdoubletap: function(){
                console.log('itemdbltap', arguments);
            },
            itemtap: function(cover, idx){
                console.log('itemtap', arguments);
            },
            scope: this
        }
    },
    initComponent: function() {
        this.callParent();
    }

});