angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('MeetingService', [function(){
this.selectedMeeting;

}])

.service('LoginService', [function(){
this.isLoggedIn = false;
this.user;
}]);
