var audio=document.getElementById('audio');
var PlayPauseBTN=document.getElementById('PlayPauseBTN');
var count= 0;
function playPause()
{
	if(count == 0)
	{
		count = 1;
		audio.play();
		PlayPauseBTN.innerHTML = "Pause &#9208;";
	}else{
		count = 0;
		audio.pause();
			PlayPauseBTN.innerHTML = "play &#9658;";
	}
}
function stop(){
playPause()	
audio.pause();
audio.currentTime= 0;
		PlayPauseBTN.innerHTML = "play &#9658;";
	
}