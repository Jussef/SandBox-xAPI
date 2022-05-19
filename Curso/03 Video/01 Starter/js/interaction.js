// Various variables
var videoHalfWay = 0;
var currentTime;
var durationTime;

// Actor Variables
var name = "Joe Smoe";
var email = "joe@smoe.com";
var firstPlayDone = false;

// Video reference
var video1 = document.getElementById('video1');

// Interaction loaded
function pageLoaded(){
	// Pause video
	video1.pause();
	// Connecting to LRS
	var conf = {
	  "endpoint" : "https://cloud.scorm.com/tc/CJ0NK8AJKV/sandbox/",
	  "auth" : "Basic " + toBase64('jeffbatt@gmail.com:DevLearn17'),
	};
	ADL.XAPIWrapper.changeConfig(conf);

	// Show prompt
	$('#namePrompt').modal('show')
}

// Video loaded
video1.onloadedmetadata = function(){
	// Figuring out times
	videoHalfWay = Math.round(video1.duration/2);
	durationTime = Math.round(video1.duration);
}

// Video Half Way
video1.ontimeupdate = function(){
	// Update current time
	currentTime = Math.round(video1.currentTime);

    if (currentTime == videoHalfWay) {
    	// Trigger halfway
    }

    if (currentTime == durationTime) {
    	// Video code at end of video
    }
};

// Video play
video1.onplaying = function(){
	// Trigger when video plays
}

// Video pause
video1.onpause = function(){
	// Trigger when video pauses
}

// Getting User Info
function saveName(){
	name = document.getElementById('nameEntered').value;
	console.log(name);
}

function saveEmail(){
	email = document.getElementById('userEmail').value;
	console.log(email)
}

function playVideo(){
	video1.play();
}