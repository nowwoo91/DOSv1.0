Ext.define('ESTAR.view.designer.DesignerInfo1V', {
    extend: 'Ext.Container',
    alias: 'widget.designerinfo1v',
    
    config: {
        layout: {
            type: 'vbox'
        },
        scrollable : "vertical",
//        tpl: [
//
//                '<header>' +
//                '<h1 >하나, 꿈을 꾸다 - 자폐인 인재양</h1>' +
//                '</header>' +
//                '<section style="padding-top: 5px;">' +
//                '<section>' +
//                '<article>' +
//                '<p>' +
//                '<p>- 목표 : 자폐인의 재능 재활(디자인 분야)<br/>- 교사 : 이화여자대학교 특수교육과 이소현 교수 연구팀<br/>- 대상 : 자폐 범주성 장애 청소년 및 성인<br/>- 비용 : 무료</p>' +
//                '</p>' +
//                '</article>' +
//                '</section>' +
//                '<div></div>' +
//                '</section>' +
//				'<header>' +
//				'<h1 >둘, 세상을 꾸미다 - 자폐인의 사회통합 자립생활 지원</h1>' +
//				'</header>' +
//				'<section style="padding-top: 5px;">' +
//				'<section>' +
//				'<article>' +
//				'<p>' +
//				'<p>- 설립이념 : 하나님이 만드신 존귀함의 회복<br/>- 핵심가치 : 자폐인의 사회통합과 자립생활 지원<br/>- 사업영역 : 자폐인의 그림을 활용한 디자인 상품 제작.판매<br/>- 경영인력 : 기업의 핵심가치를 추구하는 특수교육 & 디자인 전문가<br/>- 채용인력 : 디자인 스쿨을 졸업한  자폐 범주성 장애인 2명<br/>- 협력디자이너 18명</p>' +
//				'</p>' +
//				'</article>' +
//				'</section>' +
//				'<div></div>' +
//				'</section>'
//
//
//        ],
		items: [
			{
				cls: 'estarDescription',
				html: '<header>' +
					'<h1 >Autistar</h1>' +
					'</header>' +
					'<section>' +
					'<header>' +
					'<div style="width:0"></div>' +
					'<article>' +
					'<p>Autistar</p>' +
					'<p>Autism Special Talents And Rehabilitation</p>' +
					'</article>' +
					'</header>' +
					'<section>' +
					'<article>' +
					'<p><img src="./resources/images/autistar_logo.jpg" width=150>' +
					'<p>오티스타는 자폐인의 사회 통합과 재능재활을 추구하는 서울시예비사회적 기업입니다. <br/><br/>이화여자대학교 특수교육과 이소현 교수의 주도로 설립되었으며 자폐인을 대상으로 디자인 교육을 무상으로 제공하고 자폐인의 그림을 활용한 디자인 상품을 제작/판매합니다. <br/><br/>오티스타 제품의 판매 수익금은 자폐인의 사회통합과 자립생활을 지원하기 위해 사용됩니다.</p>' +
					'</p>' +
					'</article>' +
					'</section>' +
					'<div></div>' +
					'</section>'
			}, {
				xtype: 'list',
				height: 200,
				store: 'designerAutistarS',
				scrollable: false,
				itemTpl: [
					'{title}'
				]
			}
		]
    }
});


