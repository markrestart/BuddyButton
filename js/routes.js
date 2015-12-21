angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('welcome', {
      url: '/page3',
      templateUrl: 'templates/welcome.html',
      controller: 'welcomeCtrl'
    })
        
      
    
      
        
    .state('tabsController.newMeeting', {
      url: '/page5',
      views: {
        'tab1': {
          templateUrl: 'templates/newMeeting.html',
          controller: 'newMeetingCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.buddies', {
      url: '/page6',
      views: {
        'tab2': {
          templateUrl: 'templates/buddies.html',
          controller: 'buddiesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.meetings', {
      url: '/page7',
      views: {
        'tab3': {
          templateUrl: 'templates/meetings.html',
          controller: 'meetingsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page4',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('newBuddy', {
      url: '/page8',
      templateUrl: 'templates/newBuddy.html',
      controller: 'newBuddyCtrl'
    })
        
      
    
      
        
    .state('veiwMeeting', {
      url: '/page9',
      templateUrl: 'templates/veiwMeeting.html',
      controller: 'veiwMeetingCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page3');

});