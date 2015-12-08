Ext.define('ESTAR.view.designer.DesignerWorkV', {
    extend: 'Ext.Container',
    alias: 'widget.designerworkv',
    
    config: {
        layout: {
            type: 'vbox',
        },
        scrollable: "vertical",
        items: [
			{
			    xtype: 'container',
			    margin: 10,
			    html: '<span style="border: 2px solid black; padding: 3px;">작품명 : 낙엽에 쌓인 경복궁 풍경<span>'
			},{
			    xtype: 'container',
			    margin: 10,
			    html: '<img style="width: 100%;" src="http://tv02.search.naver.net/ugc?t=252x448&q=http://imgnews.naver.com/image/019/2013/05/22/136922197857_59_20130522203503.jpg"/>',
			},{
			    xtype: 'container',
			    margin: '30 10 10 10',
			    html: '<span style="border: 2px solid black; padding: 3px; margin-top: 100px;">작품설명<span>',
			},{
			    xtype: 'container',
			    margin: 10,
			    html: '<div style="border: 2px solid black; min-height: 100px;">(작품 설명)</div>',
			},{
			    xtype: 'container',
			    margin: '30 10 10 10',
			    html: '<span style="border: 2px solid black; padding: 3px; margin-top: 100px;">Mall > 관련 상품으로 이동<span>',
			}
        ]
    }

});
