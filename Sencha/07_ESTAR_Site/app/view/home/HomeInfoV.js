Ext.define('ESTAR.view.home.HomeInfoV', {
    extend: 'Ext.Container',
    alias: 'widget.homeinfov',
    id: 'homeinfov',

    config: {
        title: 'Info',
        layout: {
            type: 'vbox'

        },
        scrollable : "vertical",
        cls: 'estarDescription',
        tpl: [
            '<header>' +
            '<h1>ESTAR Project</h1>' +
            '</header>' +
            '<section>' +
            '<header>' +
            '<div><img src="./resources/images/sampleImg1.jpg" width=60"></div>' +
            '<article>' +
            '<p>ESTAR Project</p>' +
            '<p>2013.09.28</p>' +
            '</article>' +
            '</header>' +
            '<section>' +
            '<article>' +
            '<p><img src="./resources/images/sampleImg1.jpg" width=150>' +
            '<p>한국센차유저그룹 제작. 후원 : 푸른 바다 저멀리새 희망이 넘실거린다하늘 높이 하늘 높이뭉개꿈이 피어난다여기 다시 태어난지구가 눈을 뜬다 새벽을 연다헤엄쳐라 거친 파도 헤치고달려라 땅을 힘껏 박차고아름다운 대지는 우리의 고향달려라 코난 미래소년 코난우리들의 코난</p>' +
            '</p>' +
            '</article>' +
            '</section>' +
            '<div></div>' +
            '</section>'
        ]
    }

});