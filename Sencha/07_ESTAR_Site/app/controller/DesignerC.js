Ext.define('ESTAR.controller.DesignerC', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            designerCardV: 'designercardv',
            designerMainV: 'designermainv',
            designerMainList: 'designermainv list',
            designerInfo1V: 'designerinfo1v',
			designerInfo1ListV: 'designerinfo1v list',
			designerInfo1SubV: 'designerinfo1subv',
            designerInfo2V: 'designerinfo2v',
            designerInfo3V: 'designerinfo3v',
            designerWordV: 'designerworkv'
        },
        control: {
            'designermainv': {
                activate: 'activateDesignerMainV',
                deactivate: 'deactivateDesignerMainV'
            },
            designerMainList: {
                itemtap: 'onDesignerMainItemTap'
            },
			designerInfo1ListV: {
				itemtap: 'onDesignerInfo1ItemTap'
			}
        }

    },
    activateDesignerMainV: function() {
        try{
            Ext.getCmp("designernavigationbar").items.items[0].items.items[1].show();   // 슬라이드메뉴 버튼 보이기. TODO 추후 변경 필요
        } catch(e) {
            // Do nothing
            // 최초 init 시점에 items가 없어서 에러 발생 하지만, try catch 구문으로 무시해 버린다.
        }
    },

    deactivateDesignerMainV: function() {
        Ext.getCmp("designernavigationbar").items.items[0].items.items[1].hide();   // 슬라이드메뉴 버튼 감춤. TODO 추후 변경 필요
    },

	onDesignerMainItemTap: function(list, idx, el, record) {

		if( idx == 0 ) {
			if (!this.designerInfo1V) {
				this.designerInfo1V = Ext.widget('designerinfo1v');
			}
			this.designerInfo1V.config.title = "Autistar";
			this.designerInfo1V.setRecord(record);

			this.getDesignerCardV().push(this.designerInfo1V);
		} else if( idx == 1 ) {
			if (!this.designerInfo2V) {
				this.designerInfo2V = Ext.widget('designerinfo2v');
			}
			this.designerInfo2V.config.title = "오티스타 인턴쉽";
			this.designerInfo2V.setRecord(record);

			this.getDesignerCardV().push(this.designerInfo2V);
		} else {
			if (!this.designerInfo3V) {
				this.designerInfo3V = Ext.widget('designerinfo3v');
			}
			this.designerInfo3V.config.title = "오티스타 전시회";
			this.designerInfo3V.setRecord(record);

			this.getDesignerCardV().push(this.designerInfo3V);
		}
	},

	onDesignerInfo1ItemTap: function(list, idx, el, record) {

		if (!this.designerInfo1SubV) {
			this.designerInfo1SubV = Ext.widget('designerinfo1subv');
		}
		this.designerInfo1SubV.config.title = "Autistar";
		this.designerInfo1SubV.setRecord(record);

		this.getDesignerCardV().push(this.designerInfo1SubV);
	}
});