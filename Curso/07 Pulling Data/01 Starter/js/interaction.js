// Variables
var name = "Sammy McGee";
var email = "jeffbatt@gmail.com"
// Date
var newDate = "March 2, 2018 01:00:00";
var timeSince = new Date(newDate);
// Store data
var txt = " ";

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
	
	// Step 1
	var interactedVerbs = getInteractedStatements();
	var intVerbsArr = ADL.XAPIWrapper.getStatements(interactedVerbs);

	// Step 3
	if (intVerbsArr){
		var interactionCount = intVerbsArr.statements.length;
		document.getElementById('interactionCount').innerHTML = interactionCount;

		for (i = 0; i < intVerbsArr.statements.length; i++) {  
			// Converting time stamp into readable dates
			var timeStamp = intVerbsArr.statements[i].timestamp;
			// timeStamp = getDateFromISOString(timeStamp);
			var date = new Date(timeStamp).toUTCString();

			// Creating the rows
			var stmt =  "<div class='row'><p>" + (i+1) + ". " +  
				intVerbsArr.statements[i].actor.name + " " +
				// intVerbsArr.statements[i].actor.mbox + "    " +  
				"<b class='verbDisplay'>"+
				intVerbsArr.statements[i].verb.display["en-US"] + " " + 
				"</b> " + 
				" with " +
				// intVerbsArr.statements[i].object.id + "    " + 
				"<b>" +
				intVerbsArr.statements[i].object.definition.name["en-US"] + "    " + 
				"</b>" +
				"on " +
				date + "    " + 
				"</p></div>";
			txt += stmt;  

    	}  

    	// Write out the rows
    	document.getElementById("results").innerHTML = txt;  
	}

	if (interactionCount >= 20) {
		document.getElementById('interactionCount').style.background = '#7a162b'
	}

}

function getInteractedStatements(){
	var myparams = ADL.XAPIWrapper.searchParams();
	myparams['since'] = timeSince.toISOString();
	myparams['verb'] = "http://adlnet.gov/expapi/verbs/interacted";
	myparams['activity'] = "http://learningdojo.net/xapi/simple_button";
	myparams['agent'] = '{"mbox" : "mailto:'+email+'"}';

	return myparams
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