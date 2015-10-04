function konamiCodeJS_success() // function to be called when the code is successfully entered
{
	console.log( "Ya cheeky bastard" );
}	

var konamiCodeJS_target = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ]; // target key combination
var konamiCodeJS_keyPresses = []; // stores user's keypresses for checking

function konamiCodeJS_konamiLogic( key )
{
	switch ( key )
	{
		case 37: // left
		case 38: // up
		case 39: // right
		case 40: // down
		case 65: // A
		case 66: // B
			konamiCodeJS_keyPresses.push( key );
			break;
		default: // if any other key is pressed, forget the stored keypresses
			konamiCodeJS_keyPresses = [];
			return;
	}
	
	var valid = true;
	
	for ( var i = 0; i < konamiCodeJS_keyPresses.length; i++ )
	{
		if ( konamiCodeJS_keyPresses[i] != konamiCodeJS_target[i] )
		{
			valid = false;
			konamiCodeJS_keyPresses = []; // clear the stored keypresses if a key is out of order
			break;
		}
	}
	
	if ( valid && konamiCodeJS_keyPresses.length == konamiCodeJS_target.length ) // this code executes when the 
	{
		konamiCodeJS_success();
		konamiCodeJS_keyPresses = []; // clear the stored keypresses once the code has been successfully entered
	}
}

document.addEventListener( "keydown", function( e ) { konamiCodeJS_konamiLogic( e.which ); } );