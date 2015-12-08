Ext.define('ESTAR.controller.InfoC', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            infoCardV: 'infocardv',
            infoMainV: 'infomainv',
            infoMainList: 'infomainv list',
            infoDetailV: 'infodetailv',
            infoVideoListV: 'infovideolistv',
            infoVideoListList: 'infovideolistv list',
            infoVideoDetailV: 'infovideodetailv'
        },
        control: {
            'infomainv': {
                activate: 'activateInfoMainV',
                deactivate: 'deactivateInfoMainV'
            },
            infoMainList: {
                itemtap: 'onInfoMainItemTap'
            },
            infoVideoListList: {
                itemtap: 'onInfoVideoListListItemTap'
            }
        }
    },
    activateInfoMainV: function() {
        try{
            Ext.getCmp("infonavigationbar").items.items[0].items.items[1].show();   // 슬라이드메뉴 버튼 보이기. TODO 추후 변경 필요
        } catch(e) {
            // Do nothing
            // 최초 init 시점에 items가 없어서 에러 발생 하지만, try catch 구문으로 무시해 버린다.
        }
    },

    deactivateInfoMainV: function() {
        Ext.getCmp("infonavigationbar").items.items[0].items.items[1].hide();   // 슬라이드메뉴 버튼 감춤. TODO 추후 변경 필요
    },

    onInfoMainItemTap: function(list, idx, el, record) {

        if( idx == 0 ) {    // 이소현 교수의 동영상을 선택한 경우
            Ext.Msg.alert('죄송합니다', '현재 동영상 준비중에 있습니다', Ext.fn);
        } else if( idx == 1 ) {    // 이소현 교수의 동영상을 선택한 경우
            if (!this.infoVideoListV) {
                this.infoVideoListV = Ext.widget('infovideolistv');
            }
            this.infoVideoListV.config.title = "myTitle";
            this.infoVideoListV.setRecord(record);

            this.getInfoCardV().push(this.infoVideoListV);
        } else {
            if (!this.infoDetailV) {
                this.infoDetailV = Ext.widget('infodetailv');
            }
            this.infoDetailV.config.title = "myTitle";
            this.infoDetailV.setRecord(record);

            this.getInfoCardV().push(this.infoDetailV);
        }


    },
    onInfoVideoListListItemTap: function(list, idx, el, record) {
        if (!this.infoVideoDetailV) {
            this.infoVideoDetailV = Ext.widget('infovideodetailv');
        }
        this.infoVideoDetailV.config.title = "myTitle";
        this.infoVideoDetailV.setRecord(record);

        this.getInfoCardV().push(this.infoVideoDetailV);
    }
});