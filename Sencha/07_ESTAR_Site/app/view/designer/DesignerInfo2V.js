Ext.define('ESTAR.view.designer.DesignerInfo2V', {
    extend: 'Ext.Container',
    alias: 'widget.designerinfo2v',
    
    config: {
        layout: {
            type: 'vbox'
        },
        scrollable : "vertical",
        cls: 'estarDescription',
        tpl: [
            '<header>' +
                '<h1 >{name}</h1>' +
                '</header>' +
                '<section>' +
                '<header>' +
                '<div><img src="./resources/images/sampleImg1.jpg" width=60"></div>' +
                '<article>' +
                '<p>ESTAR</p>' +
                '<p>2013.09.28</p>' +
                '</article>' +
                '</header>' +
                '<section>' +
                '<article>' +
				'<p><div style="width: 100%; text-align: center"><img src="./resources/images/sampleImg1.jpg" width=150></div>' +
				'<p style="padding: 10px;">[목표]<br/>- 자폐인의 재능 재활 – 직무지도를 포함한 진로지원<br><br>[지도교사]<br>- 이화여자대학교 특수교육과 이소현 교수 연구팀<br><br>[참여대상]<br>- 오티스타 디자인 스쿨에 참여한 성인<br><br>[지도과정]<br>- 대인관계기술 등 직업생활에 필요한 전문적인 기술 교수 </p>' +
                '</p>' +
                '</article>' +
                '</section>' +
                '<div></div>' +
                '</section>' +
                '<header>' +
                '<h1 >연락처</h1>' +
                '</header>' +
                '<section style="padding-top: 5px;">' +
                '<section>' +
                '<article>' +
                '<p>' +
                '<p>Autistar 로 연락 주세요.<p style="margin-left: 20px;color: #555555">- Tel: <a href="tel:025231714" style="color: #3879d9">02-523-1714</a></p><p style="margin-left: 20px;color: #555555">- E-Mail : <a href="email:info@Autistar.co.kr" style="color: #3879d9">info@Autistar.co.kr</a></p></p>' +
                '</p>' +
                '</article>' +
                '</section>' +
                '<div></div>' +
                '</section>'


        ]
    }
});