// Variables
var name = "Sammy McGee";
var email = "jeffbatt@gmail.com"
// Date
var newDate = "March 2, 2018 01:00:00";
var timeSince = new Date(newDate);

// Started Function

function sendStarted(){
	var startedStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "https://w3id.org/xapi/dod-isd/verbs/started",  
	        "display": {"en-US": "started"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/simple_button",  
	        "definition": {  
	            "name": {"en-US": "Simple button example"},  
	            "description": {"en-US": "User clicked on the started button."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(startedStatement); 

	// Alert message
	alert('Started statement has been sent!')
}

// Interacted function
function sendInteracted(){
	var interactedStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://adlnet.gov/expapi/verbs/interacted",  
	        "display": {"en-US": "interacted"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/simple_button",  
	        "definition": {  
	            "name": {"en-US": "Simple button example"},  
	            "description": {"en-US": "User clicked on interacted button."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(interactedStatement); 

	// Alert message
	alert('Interacted statement has been sent!')

}

// Finished statement
function sendCompleted(){
	var completedStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "https://w3id.org/xapi/dod-isd/verbs/completed",  
	        "display": {"en-US": "completed"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/simple_button",  
	        "definition": {  
	            "name": {"en-US": "Simple button example"},  
	            "description": {"en-US": "User clicked on completed button."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(completedStatement); 

	// Alert message
	alert('Completed statement has been sent!')

}

// Generate Content
function generateData(){
	alert('Generated data button')
}

// On Blur Events
function saveName(){
	name = document.getElementById('nameEntered').value;
	console.log(name);
}

function saveEmail(){
	email = document.getElementById('userEmail').value;
	console.log(email)
}