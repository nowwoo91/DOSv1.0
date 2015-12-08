Ext.define('ST2.view.Hello', {
   extend: 'Ext.Container',
   xtype: 'main',
   //requires:["ST2.view.Hello"], //자식(itmes)의 hello를 찾아서 가는 곳
   
   config:{
	   html: 'aa'
//	   items:[
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'},
//          {xtype: 'hello'}
//          ]
   }
});

