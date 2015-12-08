var yellow ={
    xtype:'carousel',
    items:
[
 {cls:'monster1-1 monsterCls'},
 {cls:'monster2-1 monsterCls'},
 {cls:'monster3-1 monsterCls'}
]};
var red =
    {xtype:'carousel',
    items:
[
 {cls:'monster1-2 monsterCls'},
 {cls:'monster2-2 monsterCls'},
 {cls:'monster3-2 monsterCls'}
]};
var blue =    
   {xtype:'carousel',
    items:
[
 {cls:'monster1-3 monsterCls'},
 {cls:'monster2-3 monsterCls'},
 {cls:'monster3-3 monsterCls'}
]};

Ext.define('ST2.view.Hello', {
   extend: 'Ext.Panel',
   xtype: 'hello',
   config: {
       layout:{ 
        type: 'vbox', //auto/fit/hvox/card/vbox
    animation: {
           type:'fade',
           duration:1500}
//fade/slide/flip/cube       
       },
       defaults:{flex:1},
       items: [ yellow, red , blue ]
   }	
});