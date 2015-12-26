angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope,$state,LoginService) {
  $scope.data = {};
 
$scope.loginEmail = function(){
  Parse.User.logIn($scope.data.username, $scope.data.password, {
    success: function(user) {
      // Do stuff after successful login.
		LoginService.isLoggedIn = true;
		LoginService.user = user;
//		alert("success!");
		$state.go('tabsController.newMeeting');
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      alert("error!");
    }
  });
};
})
   
.controller('signupCtrl', function($scope,$state) {
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
	  $state.go("login");
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
   
.controller('newMeetingCtrl', function($scope,LoginService,MeetingService,$state) {
	$scope.listing ={};
	console.log(LoginService.user);

	Parse.GeoPoint.current({
		success: function (point) {
			//use current location
			$scope.myLocation = point;
			MeetingService.myLocation = point;
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
	  $state.go("veiwMeeting");
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
   
.controller('meetingsCtrl', function($scope,MeetingService,LoginService,$state) {
$scope.meetingsList = [];
var query = new Parse.Query('Meetings');
query.find({
  success: function(results) {
	$scope.localMeetings = results;
	$scope.meetings = [];
  for (i = 0; i < results.length; i++) { 
	$scope.theMeeting = {};
	$scope.theMeeting.localID = i;
	$scope.theMeeting.name = results[i].get("Name");
	$scope.theMeeting.details = results[i].get("Details");
	$scope.theMeeting.time = results[i].get("Time");
	$scope.theMeeting.location = results[i].get("Location");
	$scope.meetings.push($scope.theMeeting);
}
  },
  error: function(error) {
    // error is an instance of Parse.Error.
  }
});

	$scope.setMeeting=function(localMeetingID){
		MeetingService.selectedMeeting = $scope.localMeetings[localMeetingID];
		$state.go("veiwMeeting");
	}
  
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
	$scope.meeting.distance = MeetingService.myLocation.milesTo($scope.meeting.location);
})