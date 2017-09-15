'use strict';

var favoritesController = angular.module('favoritesController', []);

favoritesController.controller('FavCtrl', ['$scope', '$localStorage', 'characterListService',
    function($scope, $localStorage, characterListService) {

        var loadFavorites = function() {
            $scope.favorites = characterListService.getFavoriteCharacterList();
        }

        $scope.showCharacter = function(id) {

        }

        $scope.removeFavorite = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters[i].favorite = false;
                }
            }
            loadFavorites();
        }

        loadFavorites();
      /*$scope.redirectToTimeline = function() {
       $location.path('/timeline');
       };

       $scope.redirectToMaps = function() {
       $location.path('/maps');
       };*/

    }]);