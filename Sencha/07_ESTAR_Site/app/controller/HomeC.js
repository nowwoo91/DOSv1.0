Ext.define('ESTAR.controller.HomeC', {
    extend : 'Ext.app.Controller',

    config: {
        refs: {
            homeMainV: 'homemainv',
            homeCardV: 'homecardv',
            homeInfoV: 'homeinfov',
            homeMainNoticeList: 'homemainv list'
        },
        control: {
            homemainv: {
                activate: 'activateHomeMainV',
                deactivate: 'deactivateHomeMainV'
            },
            'homemainv #btnHomeNotice': {
            	tap: 'onTapHomeNotice'
            },
            'homemainv #btnInfo': {
            	tap: 'onClickInfo'
            },
            homeMainNoticeList: {
                itemtap: 'onHomeMainItemTap'
            }
        }
    },

    activateHomeMainV: function() {
        try{
            Ext.getCmp("homenavigationbar").items.items[0].items.items[1].show();   // 슬라이드메뉴 버튼 보이기. TODO 추후 변경 필요
        } catch(e) {
            // Do nothing
            // 최초 init 시점에 items가 없어서 에러 발생 하지만, try catch 구문으로 무시해 버린다.
        }
    },

    deactivateHomeMainV: function() {
        Ext.getCmp("homenavigationbar").items.items[0].items.items[1].hide();   // 슬라이드메뉴 버튼 감춤. TODO 추후 변경 필요
    },

    onClickInfo: function(btn) {
    	
        Ext.data.JsonP.request({
            url: 'http://estar.sencha.or.kr/server/jsonp/HomeNotice.jsp',
            callbackKey: 'callback',
            params: {
                id : 12 // 임시 ID 입니다. 변경해서 사용 하세요.
            },
            success: function(data) {
            	
            	// this.getHomeInfoV() 컨터이너의 tpl 속성에 적용 된다.
            	// .setData({...}) 와 비슷한 것으로
            	// .setHtml("...") 와 .setTpl(new XTemplate())이 있다.
            	// Ext.getCmp("homeinfov") 대신 this.getHomeInfoV() 으로 처리 하기도 한다(참고로 남겨둠). 예시> this.getHomeInfoV().setData(data);
            	Ext.getCmp("homeinfov").setData(data);
            	
            	
            	// Card Switch
            	// Ext.getCmp("homecardv") 대신 this.getHomeInfoV() 으로 처리 하기도 한다(참고로 남겨둠). 예시> this.getHomeCardV().setActiveItem('homeinfov');
            	Ext.getCmp("homecardv").setActiveItem('homeinfov');
            },
            failure: function( res, req ) {
            	Ext.Msg.alert("통신에 실패 하였습니다.", "RES:"+res + " \n " + "REQ:"+req);
            }
        });
    },

    onTapHomeNotice : function(button) {
        if (!this.homeNoticeV) {
            this.homeNoticeV = Ext.widget('homenoticev');
        }
        this.getHomeCardV().push(this.homeNoticeV);
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

