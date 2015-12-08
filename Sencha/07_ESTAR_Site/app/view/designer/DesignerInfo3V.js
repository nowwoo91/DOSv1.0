Ext.define('ESTAR.view.designer.DesignerInfo3V', {
    extend: 'Ext.Container',
    alias: 'widget.designerinfo3v',
    
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
				'<p style="padding: 10px;">[전시회] - 2012. 11<br>- Ewha Womans University ECC<br><br>[전시회] - 2012. 12<br>The National Assembly<br><br>[전시회] - 2013. 01<br>2013 Special Olympics World Winter Games<br><br>[전시회] - 2013. 04<br>Gallery H<br><br>[전시회] - 2013. 06<br>IBA Seoul Forum<br><br>[전시회] - 2013. 06<br>Korea Art Summer Festival<br><br>[전시회] - 2013. 06<br>Compassion Korea<br><br></p>' +
				'</p>' +
				'</article>' +
				'</section>' +
				'<div></div>' +
				'</section>'

        ]
    }
});

