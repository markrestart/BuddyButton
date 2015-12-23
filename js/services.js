angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('MeetingService', [function(){
this.selectedMeeting = 9;
}])

.service('LoginService', [function(){
this.isLoggedIn = false;
this.user;
}]);
