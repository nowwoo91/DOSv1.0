Ext.define("ESTAR.store.DesignerAutistarS", {
	extend: 'Ext.data.Store',
    config: {
    	model: 'ESTAR.model.DesignerM',
    	autoLoad: true,
    	storeId: 'designerAutistarS',
		data: [
			{
				title: '하나, 꿈을 꾸다 - 자폐인 인재양성',
				image: './resources/images/autistar1-1.png',
				article: '- 목표 : 자폐인의 재능 재활(디자인 분야)<br/>- 교사 : 이화여자대학교 특수교육과 이소현 교수 연구팀<br/>- 대상 : 자폐 범주성 장애 청소년 및 성인<br/>- 비용 : 무료'
			},{
				title: '둘, 세상을 꾸미다 - 자폐인의 사회통합 자립생활 지원',
				image: './resources/images/autistar1-2.png',
				article: '- 설립이념 : 하나님이 만드신 존귀함의 회복<br/>- 핵심가치 : 자폐인의 사회통합과 자립생활 지원<br/>- 사업영역 : 자폐인의 그림을 활용한 디자인 상품 제작.판매<br/>- 경영인력 : 기업의 핵심가치를 추구하는 특수교육 & 디자인 전문가<br/>- 채용인력 : 디자인 스쿨을 졸업한  자폐 범주성 장애인 2명<br/>- 협력디자이너 18명'
			},{
				title: '셋, 생각을 변화시키다 - 장애인식개선',
				image: './resources/images/autistar1-3.png',
				article: '- 전시회 : 2012. 11<br>Ewha Womans University ECC<br>- 전시회 : 2012. 12<br>The National Assembly<br>- 전시회 : 2013. 01<br>2013 Special Olympics World Winter Games<br>- 전시회 : 2013. 04<br>Gallery H<br>- 전시회 : 2013. 06<br>IBA Seoul Forum<br>- 전시회 : 2013. 06<br>Korea Art Summer Festival<br>- 전시회 : 2013. 06<br>Compassion Korea<br>'
			}
		]
    }
});