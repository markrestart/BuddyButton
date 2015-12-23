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
   
.controller('newMeetingCtrl', function($scope,LoginService) {

})
   
.controller('buddiesCtrl', function($scope,LoginService) {

})
   
.controller('meetingsCtrl', function($scope,MeetingService,LoginService) {
  $scope.meetings = theMeetings;
  $scope.setMeeting=function(val){
	MeetingService.selectedMeeting=val;
  };
  
})
      
.controller('newBuddyCtrl', function($scope,LoginService) {

})
   
.controller('veiwMeetingCtrl', function($scope,MeetingService,LoginService) {
	$scope.meetings = theMeetings;
	$scope.meetingService=MeetingService;
	
})

   var theMeetings = [
  { id: 1, name: 'Coffee?', distance: 10, details: 'Hey, I\'m at that place that sells coffee.'},
  { id: 2, name: 'Grab lunch.', distance: .5, details: 'Grabbing lunch, any one care to join?'},
  { id: 3, name: 'Hang out between classes', distance: 3.4, details: 'Got an hour before class. hang out?'},
  { id: 4, name: 'stuff', distance: 5.1, details: 'yeah'}
];