Ext.application({
	name : 'ST2',

	views : [ 'Hello' ],

	launch : function() {
		Ext.define( 'app.view.MyClass', {
	        myName: 'Hello',
	        getMyName: function(){
	               return this.myName;
	        },
	        setMyName: function(p){
	               this.myName = p;
	        }
		} );
	
		var a = Ext.create('app.view.MyClass');
		a.setMyName( "World" );
		alert( a.getMyName() );
		Ext.Msg.alert("타이틀", "메세지", null);

	}
})
