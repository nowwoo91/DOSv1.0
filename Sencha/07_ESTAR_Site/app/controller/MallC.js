Ext.define('ESTAR.controller.MallC', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mallCardV: 'mallcardv',
            mallCategoryV: 'mallcategoryv',
            mallCategoryList: 'mallcategoryv list',
            mallItemsV: 'mallitemsv',
            mallItemsList: 'mallitemsv list',
            mallItemDetailV: 'mallitemdetailv',
        },
        control: {
            'mallcategoryv': {
                activate: 'activateMallCategoryV',
                deactivate: 'deactivateMallCategoryV'
            },
            mallCategoryList: {
                itemtap: 'tapMallCategoryList'
            },
            mallItemsList: {
                itemtap: 'tapMallItemsList'
            }
        }
    },

    activateMallCategoryV: function() {
        try{
            Ext.getCmp("mallnavigationbar").items.items[0].items.items[1].show();   // 슬라이드메뉴 버튼 보이기. TODO 추후 변경 필요
        } catch(e) {
            // Do nothing
            // 최초 init 시점에 items가 없어서 에러 발생 하지만, try catch 구문으로 무시해 버린다.
        }
    },

    deactivateMallCategoryV: function() {
        Ext.getCmp("mallnavigationbar").items.items[0].items.items[1].hide();   // 슬라이드메뉴 버튼 감춤. TODO 추후 변경 필요
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