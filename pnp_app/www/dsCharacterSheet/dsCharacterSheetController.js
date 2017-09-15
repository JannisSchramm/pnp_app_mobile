'use strict';

var dsController = angular.module('dsCharacterSheetController', []);

dsController.controller('DsCharacterCtrl', ['$scope', '$localStorage', 'characterIdProvider', 'getCharacterService',
    function($scope, $localStorage, characterIdProvider, getCharacterService) {
        var loadCharacter = function() {
            var characterId = characterIdProvider.getCharacterId();
            $scope.character = getCharacterService.getCharacter(characterId);
            console.log($scope.character);
        }

        loadCharacter();

    }]);