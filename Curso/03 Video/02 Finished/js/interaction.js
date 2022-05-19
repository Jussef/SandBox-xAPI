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
    	var videoHalf = {  
		    "actor": {  
		        "mbox": "mailto:"+email,  
		        "name": name,  
		        "objectType": "Agent"  
		    },  
		    "verb": {  
		        "id": "http://activitystrea.ms/schema/1.0/consume",  
		        "display": {"en-US": "consumed"}  
		    },  
		    "object": {  
		        "id": "http://learningdojo.net/xapi/video1",  
		        "definition": {  
		            "name": {"en-US": "Video 1"},  
		            "description": {"en-US": "at least half of the video"}  
		        },  
		        "objectType": "Activity"  
		    }  
		};

		ADL.XAPIWrapper.sendStatement(videoHalf);
    }

    if (currentTime == durationTime) {
    	var videoEnd = {  
		    "actor": {  
		        "mbox": "mailto:"+email,  
		        "name": name,  
		        "objectType": "Agent"  
		    },  
		    "verb": {  
		        "id": "http://activitystrea.ms/schema/1.0/complete",  
		        "display": {"en-US": "completed"}  
		    },  
		    "object": {  
		        "id": "http://learningdojo.net/xapi/video1",  
		        "definition": {  
		            "name": {"en-US": "Video 1"},  
		            "description": {"en-US": "the video"}  
		        },  
		        "objectType": "Activity"  
		    }  
		};

		ADL.XAPIWrapper.sendStatement(videoEnd); 
    }
};

// Video play
video1.onplaying = function(){
	var videoPlay = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://adlnet.gov/expapi/verbs/initialized",  
	        "display": {"en-US": "initialized"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/video1",  
	        "definition": {  
	            "name": {"en-US": "Video 1"},  
	            "description": {"en-US": "the video"}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(videoPlay); 
}

// Video pause
video1.onpause = function(){
	var videoPause = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "https://w3id.org/xapi/video/verbs/paused",  
	        "display": {"en-US": "paused"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/video1",  
	        "definition": {  
	            "name": {"en-US": "Video 1"},  
	            "description": {"en-US": "the video at " + currentTime + " seconds."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(videoPause); 
}

// Getting User
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