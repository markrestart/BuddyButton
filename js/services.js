angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('MeetingService', [function(){
this.selectedMeeting;
this.myLocation;
}])

.service('LoginService', [function(){
this.isLoggedIn = false;
this.user;
}]);
