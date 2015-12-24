angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope,$location,LoginService) {
  $scope.data = {};
 
$scope.loginEmail = function(){
  Parse.User.logIn($scope.data.username, $scope.data.password, {
    success: function(user) {
      // Do stuff after successful login.
		LoginService.isLoggedIn = true;
		LoginService.user = user;
//		alert("success!");
		$location.path('/page4/page5');
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      alert("error!");
    }
  });
};
})
   
.controller('signupCtrl', function($scope,$location) {
  $scope.data = {};
 
$scope.signupEmail = function(){
	alert("triggered");
  //Create a new user on Parse
  var user = new Parse.User();
  user.set("username", $scope.data.username);
  user.set("password", $scope.data.password);
  user.set("email", $scope.data.email);
 
  // other fields can be set just like with Parse.Object
  //user.set("somethingelse", "like this!");
 
  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      alert("success! Please log in.");
	  $location.path("/page1");
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
 
};
 
})
   
.controller('welcomeCtrl', function($scope,LoginService) {

})
   
.controller('newMeetingCtrl', function($scope,LoginService,MeetingService,$location) {
	$scope.listing ={};
	console.log(LoginService.user);

	Parse.GeoPoint.current({
		success: function (point) {
			//use current location
			$scope.myLocation = point;
		}
	});
	
	$scope.username = LoginService.user.get("username");
	console.log($scope.username);
	
	$scope.postMeeting=function(){
	//verify forms
	meetingPost = new Parse.Object("Meetings");
	meetingPost.save({
	Location: $scope.myLocation,
	Details: $scope.listing.details,
	Name: $scope.listing.name,
	Time: parseInt($scope.listing.hours),
	Attending: [$scope.username],
	},{
success: function(myMeeting) {
// The save was successful.
      MeetingService.selectedMeeting = myMeeting;
	  $location.path("/page9");
},
error: function(myMeeting, error) {
// The save failed.  Error is an instance of Parse.Error.
      alert("Error: " + error.code + " " + error.message);
}
});
}
})
   
.controller('buddiesCtrl', function($scope,LoginService) {

})
   
.controller('meetingsCtrl', function($scope,MeetingService,LoginService) {
$scope.meetingsList = [];
var query = new Parse.Query('Meetings');
query.find({
  success: function(results) {
	console.log("Results: " + results[0];
	$scope.meettings = [];
  for (i = 0; i < results.length; i++) { 
	$scope.themeeting = {};
	$scope.theMeeting.name = results[i].get("Name");
	$scope.theMeeting.details = results[i].get("Details");
	$scope.theMeeting.time = results[i].get("Time");
	$scope.theMeeting.location = results[i].get("Location");
	$scope.meettings.push(theMeeting);
}
  },
  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
  
})
      
.controller('newBuddyCtrl', function($scope,LoginService) {

})
   
.controller('veiwMeetingCtrl', function($scope,MeetingService,LoginService) {
	$scope.meeting = {}
	$scope.meeting.name = MeetingService.selectedMeeting.get("Name");
	$scope.meeting.details = MeetingService.selectedMeeting.get("Details");
	$scope.meeting.time = MeetingService.selectedMeeting.get("Time");
	$scope.meeting.location = MeetingService.selectedMeeting.get("Location");
	$scope.meeting.attending = MeetingService.selectedMeeting.get("Attending");
	
//		Parse.GeoPoint.current({
//		success: function (point) {
			//use current location
//			currentLocation = point;
//			console.log(currentLocation + " is " + point);
//		}
//	});

//	$scope.meeting.distance = currentLocation.milesTo($scope.meeting.location);
})