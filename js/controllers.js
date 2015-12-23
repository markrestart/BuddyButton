angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('welcomeCtrl', function($scope) {

})
   
.controller('newMeetingCtrl', function($scope) {

})
   
.controller('buddiesCtrl', function($scope) {

})
   
.controller('meetingsCtrl', function($scope,MeetingService) {
  $scope.meetings = theMeetings;
  $scope.setMeeting=function(val){
	MeetingService.selectedMeeting=val;
  };
  
})
      
.controller('newBuddyCtrl', function($scope) {

})
   
.controller('veiwMeetingCtrl', function($scope,MeetingService) {
	$scope.meetings = theMeetings;
	$scope.meetingService=MeetingService;
	
})

   var theMeetings = [
  { id: 1, name: 'Coffee?', distance: 10, details: 'Hey, I\'m at that place that sells coffee.'},
  { id: 2, name: 'Grab lunch.', distance: .5, details: 'Grabbing lunch, any one care to join?'},
  { id: 3, name: 'Hang out between classes', distance: 3.4, details: 'Got an hour before class. hang out?'},
  { id: 4, name: 'stuff', distance: 5.1, details: 'yeah'}
];