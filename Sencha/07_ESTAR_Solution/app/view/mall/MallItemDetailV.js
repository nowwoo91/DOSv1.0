Ext.define('ESTAR.view.mall.MallItemDetailV', {
    extend: 'Ext.Container',
    alias: 'widget.mallitemdetailv',
    config: {
        scrollable: true,
        cls: 'estarDescription',
        layout: 'vbox',
        tpl: [
            '<header>' +
            '<h1 >{name}</h1>' +
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
            '<p>' +
			'<tpl if="image1"><img src="{image1}" style="width: 100%; text-align: center; float: none;"></tpl>' +
			'<tpl if="image2"><img src="{image2}" style="width: 100%; text-align: center; float: none;"></tpl>' +
			'<tpl if="image3"><img src="{image3}" style="width: 100%; text-align: center; float: none;"></tpl>' +
			'<tpl if="image4"><img src="{image4}" style="width: 100%; text-align: center; float: none;"></tpl>' +
			'<tpl if="image5"><img src="{image5}" style="width: 100%; text-align: center; float: none;"></tpl>' +
			'<tpl if="image6"><img src="{image6}" style="width: 100%; text-align: center; float: none;"></tpl>' +
            '<p style="padding: 10px;">{name} {desc}</p>' +
            '</p>' +
            '</article>' +
            '</section>' +
            '<div></div>' +
            '</section>' +
                '<header>' +
                '<h1 >구매방법</h1>' +
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
