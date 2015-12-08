Ext.define('ESTAR.util.Proxy', {

	singleton: true,

	requires: ['Ext.data.proxy.JsonP'],

	process: function(url, callback) {
        /*
		var sessionStore = Ext.getStore('Sessions'),
		    speakerStore = Ext.getStore('Speakers'),
		    sessionSpeakerStore = Ext.getStore('SessionSpeakers'),
		    speakerSessionStore = Ext.getStore('SpeakerSessions'),
		    sessionIds, proposalModel, speakerModel, speakerSessions = {}, sessionId, speaker, sessionDays = {};
        */

        var homeM;
        var homeNoticeS = Ext.getStore("homeNoticeS"); // "homeNoticeS"는 storeId 이름을 쓴다
        var homeCoverflowS = Ext.getStore("homeCoverflowS");

        var mallM;
        var mallCategoryS = Ext.getStore("mallCategoryS");
        var mallItemsS = Ext.getStore("mallItemsS");
        var mallItemDetailS = Ext.getStore("mallItemDetailS");

        var designerM;
        var designerS = Ext.getStore("designerS");

        var infoM;
        var infoS = Ext.getStore("infoS");

        var infoVideoListM;
        var infoVideoListS = Ext.getStore("infoVideoListS");

        var ICON_PREFIX = "./resources/images/icon";
        var num;
        var getIconUrl = function() {
            num++;
            if( num > 12 )
                num = num - 12;
            return ICON_PREFIX + num + ".jpg";

        };

        Ext.data.JsonP.request({
            url: 'http://estar.sencha.or.kr/server/jsonp/Proxy.jsp',
            //url: 'http://localhost:8080/ESTAR/server/jsonp/Proxy.jsp',
            callbackKey: 'callback',
            params: {
                id : 12 // 임시 ID 입니다. 변경해서 사용 하세요.
            },
            success: function(data) {

                num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                Ext.Array.each(data.home.noticeList, function(row) {
                    row.icon = getIconUrl();
                    homeM = Ext.create('ESTAR.model.HomeM', row);
                    homeNoticeS.add( homeM );
                }); // close each

                Ext.Array.each(data.home.coverflowList, function(row) {
                    homeM = Ext.create('ESTAR.model.HomeM', row);
                    homeCoverflowS.add( homeM );
                }); // close each

                Ext.Array.each(data.mall.categoryList, function(row) {
                    mallM = Ext.create('ESTAR.model.MallM', row);
                    mallCategoryS.add( mallM );
                    console.log( row.name );
                }); // close each

                Ext.Array.each(data.mall.itemList, function(row) {
                    mallM = Ext.create('ESTAR.model.MallM', row);
                    mallItemsS.add( mallM );
                }); // close each

                num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                data.designer.designerList = [
                    {name: '디자인 기업 오티스타', icon: getIconUrl()},
                    {name: '오티스타 인턴십', icon: getIconUrl()},
                    {name: '오티스타 전시회', icon: getIconUrl()}
                ];
                Ext.Array.each(data.designer.designerList, function(row) {
                    designerM = Ext.create('ESTAR.model.DesignerM', row);
                    designerS.add( designerM );
                }); // close each

                Ext.Array.each(data.info.infoList, function(row) {
                    infoM = Ext.create('ESTAR.model.InfoM', row);
                    infoS.add( infoM );
                }); // close each

                Ext.Array.each(data.info.infoVideoList, function(row) {
                    infoVideoListM = Ext.create('ESTAR.model.InfoVideoListM', row);
                    infoVideoListS.add( infoVideoListM );
                }); // close each

                callback(); // app.js 의 callback 호출


                // this.getHomeInfoV() 컨터이너의 tpl 속성에 적용 된다.
                // .setData({...}) 와 비슷한 것으로
                // .setHtml("...") 와 .setTpl(new XTemplate())이 있다.
                // Ext.getCmp("homeinfov") 대신 this.getHomeInfoV() 으로 처리 하기도 한다(참고로 남겨둠). 예시> this.getHomeInfoV().setData(data);
                //Ext.getCmp("homeinfov").setData(data);


                // Card Switch
                // Ext.getCmp("homecardv") 대신 this.getHomeInfoV() 으로 처리 하기도 한다(참고로 남겨둠). 예시> this.getHomeCardV().setActiveItem('homeinfov');
                //Ext.getCmp("homecardv").setActiveItem('homeinfov');
            },
            failure: function( res, req ) {
                Ext.Msg.alert("통신에 실패 하였습니다.", "RES:"+res + " \n " + "REQ:"+req);
            }
        });
	}
});
