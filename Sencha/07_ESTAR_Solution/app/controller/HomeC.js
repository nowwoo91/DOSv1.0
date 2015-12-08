Ext.define('ESTAR.controller.HomeC', {
    extend : 'Ext.app.Controller',

    config: {
        refs: {
            homeCardV: 'homecardv',
            homeMainNoticeList: 'homemainv list'
        },
        control: {
            homeMainNoticeList: {
                itemtap: 'onHomeMainItemTap'
            }
        }
    },

    onHomeMainItemTap: function(list, idx, el, record) {
        if (!this.homeNoticeV) {
            this.homeNoticeV = Ext.widget('homenoticev');
        }
        this.homeNoticeV.config.title = "myTitle";
        this.homeNoticeV.setRecord(record);

        this.getHomeCardV().push(this.homeNoticeV);
    }
});

