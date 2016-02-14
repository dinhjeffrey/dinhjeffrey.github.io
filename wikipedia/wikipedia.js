/**
 * Learn Angular. It just got re-writed
 * [app description] Declares a module. WikiApp is a container for different parts of the app - controllers, services, filters, directives, etc.
 * @type {[type]}
 */
var app = angular.module('WikiApp', ['ngAnimate']);
/**
 * [description] app.controller (constructor) is the part of the software that handles user input. This part of the program waits for user input, then informs the other two parts to make appropriate changes.
 * @param  {[type]} $scope    [description] Connects your view to the model. Every controller has an associated $scope object 
 * @param  {[type]} $http     [description]
 * @param  {[type]} $timeout) [description] code queued using timeout. should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)
 * @return {[type]}           [description]
 */
app.controller('MainCtrl', function($scope, $http, $timeout) {
  var form = $('form');
  var close = $('.eks');
  var input = $('input');
  var search = $("#search");
  var help = $("#help");
/**
 * What does $scope.results={}; and $scope.$apply(); do?
 * [results description]
 * @type {Object} $scope.apply() is a trigger to update the DOM, and in most cases (such as a trigger from the DOM like ng-click
 */
  $scope.results = {};

  close.on('click', function() {
    form.toggleClass('open');
    
    if (!form.hasClass('open') && $scope.searchTxt !== '' && typeof $scope.searchTxt !== 'undefined') {
	    search.toggleClass('fullHeight');
      help.toggleClass('hide');
      $scope.searchTxt = '';
    } 
    $scope.results = [''];
    $scope.$apply();
  });

  input.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if (form.hasClass('open')) {
      input.focus();
    } else {
      return;
    }
  });

  $scope.search = function() {
    $scope.results = [];
    help.addClass('hide');
    search.removeClass('fullHeight');
    var title = input.val();
    var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    var page = 'http://en.wikipedia.org/?curid=';
    
    $http.jsonp(api + title + cb)
    .success(function(data) {
      var results = data.query.pages;
      angular.forEach(results, function(v,k)  {
        $scope.results.push({title: v.title, body: v.extract, page: page + v.pageid});
      });
    });
  };
});