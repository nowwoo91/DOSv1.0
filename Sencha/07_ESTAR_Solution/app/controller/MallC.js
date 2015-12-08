Ext.define('ESTAR.controller.MallC', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mallCardV: 'mallcardv',
            mallCategoryV: 'mallcategoryv',
            mallCategoryList: 'mallcategoryv list',
            //mallItemsV: 'mallitemsv',
            mallItemsList: 'mallitemsv list',
            mallItemDetailV: 'mallitemdetailv'
        },
        control: {
            mallCategoryList: {
                itemtap: 'tapMallCategoryList'
            },
            mallItemsList: {
                itemtap: 'tapMallItemsList'
            }
        }
    },

    tapMallCategoryList: function(list, idx, el, record) {
        if (!this.mallItemsV) {
            this.mallItemsV = Ext.widget('mallitemsv');
        }
        this.mallItemsV.config.title = record.data.category;
        //this.mallItemsV.setRecord(record);

        this.getMallCardV().push(this.mallItemsV);
    },

    tapMallItemsList: function(list, idx, el, record) {
        if (!this.mallItemDetailV) {
            this.mallItemDetailV = Ext.widget('mallitemdetailv');
        }
        this.mallItemDetailV.config.title = record.data.category;
        this.mallItemDetailV.setRecord(record);

        this.getMallCardV().push(this.mallItemDetailV);
    }
});