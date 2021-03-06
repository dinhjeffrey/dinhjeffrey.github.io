


(function() {

  var app = angular.module('stream', ['ngAnimate']); // angular js

  app.controller('GlobalController', ['$scope', '$timeout', function($scope, $timeout) {
    myThis = this;
    this.alertMsg = '';

    this.setAlert = function(text) {
      this.alertMsg = text;
    };

    // Emitted by StreamListController
    $scope.$on('getUserFailed', function(event, msg) {
      myThis.alertMsg = msg;

      $timeout(function() {
        myThis.alertMsg = '';
      }, 8000);
    });
  }]);

  app.controller('TabsController', function() {
    this.tab = 1;

    this.selectTab = function(selectedTab) {
      this.tab = selectedTab;
    };

    this.isSelected = function(selectedTab) {
      return this.tab === selectedTab;
    };
  });

  app.controller('AddStreamController', ['$animate', '$scope', function($animate, $scope) {
    this.isAddClicked = false;
    this.newStreamer = '';
    this.onAddStreamClicked = function() {
      $animate.enabled(true);
      this.isAddClicked = !this.isAddClicked;
    };

    this.submitNewStreamer = function() {
      $scope.$emit('streamerSubmitted', this.newStreamer);
      this.newStreamer = '';
      this.isAddClicked = false;
    };

    this.toggleAnimation = function(isEnabled) {
      $animate.enabled(isEnabled);
    };
  }]);

  app.controller('StreamListController', ['$http', '$scope', '$animate', function($http, $scope, $animate) {
    var myThis = this;
    this.streamers = [];

    var getStreamData = function(streamer) {
      var streamUrl = 'https://api.twitch.tv/kraken/streams/' + streamer + '?callback=JSON_CALLBACK';
      $http.jsonp(streamUrl).success(function(data) {
        if (data && data.stream) {
          var channel = data.stream.channel;
          myThis.streamers.push({
            'online': true,
            'display_name': channel.display_name,
            'status': channel.status,
            // used game to get viewers because 'viewers': doesn't work.
            'game': data.stream.viewers,
            'url': 'http://www.twitch.tv/' + streamer,
            'logo': channel.logo || 'http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png'
          });
        } else if (data.error) {
          accountClosed(streamer);
        } else {
          offlineStatus(streamer);
        }
      });
    };

    var accountClosed = function(streamer) {
      var userUrl = 'https://api.twitch.tv/kraken/users/' + streamer + '?callback=JSON_CALLBACK';
      $http.jsonp(userUrl).success(function(data) {
      	if (data.display_name.toString() === 'undefined'){ // makes it so you can't add undefined accounts
      		return;
      	}
        myThis.streamers.push({
          'online': false,
          'display_name': data.display_name + "'s account is closed.",
          'logo': 'http://images.chesscomfiles.com/images/banneduser.gif'
        });
      })
    };

    var offlineStatus = function(streamer) {
      var userUrl = 'https://api.twitch.tv/kraken/users/' + streamer + '?callback=JSON_CALLBACK';
      $http.jsonp(userUrl).success(function(data) {
        myThis.streamers.push({
          'online': false,
          'display_name': data.display_name,
          'url': 'http://www.twitch.tv/' + streamer,
          'logo': data.logo || 'http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png'
        });
      })
    };

    this.addStream = function(name) {
      getStreamData(name);
    };

    defaultStreamers.forEach(function(streamer) {
      getStreamData(streamer);
    });

    // adds streamer

    $scope.$on('streamerSubmitted', function(event, streamer) {
    	if (streamer==''){
    		return;
    	}
      myThis.addStream(streamer);
    });



    this.removeStreamer = function(streamer) {
      for (var i = 0; i < this.streamers.length; i++) {
        if (this.streamers[i].$$hashKey === streamer.$$hashKey) {
          this.streamers.splice(i, 1);
        }
      }
    };

  }]);

  app.controller('StreamerController', function($scope) {
    this.hovered = false;

    this.hover = function(isHovered) {
      this.hovered = isHovered;
    };

    this.getHoveredState = function() {
      return this.hovered;
    };
  });

  var defaultStreamers = ["medrybw", "marmaladenightmare","brunofin", "kjasi", "freecodecamp", "doctorshenanigan"];

})();
