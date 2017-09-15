'use strict';

var cthulhuController = angular.module('cthulhuController', []);

dsController.controller('CthulhuCtrl', ['$scope', '$localStorage', '$location', 'characterListService', 'loadJsonService', 'characterIdProvider',
    function($scope, $localStorage, $location, characterListService, loadJsonService, characterIdProvider) {
        $scope.showNew = false;
        load();

        function load() {
            loadJsonService.loadJsonFromFile("../resources/cthulhu/cthulhuProffesion.json", function(response) {
                $scope.professions = JSON.parse(response);
            });
            loadJsonService.loadJsonFromFile("../resources/cthulhu/cthulhuAbility.json", function(response) {
                $scope.abilities = JSON.parse(response);
            });
        }

        var loadCharacters = function() {
            $scope.characters = characterListService.getGameCharacterList("Cthulhu");
        }

        $scope.saveNewChar = function() {
            if($localStorage.characters.length == 0) {
                $localStorage.characters = [];
            }
            var newChar = createNewChar();
            $localStorage.characters.push(newChar);
            console.log($localStorage.characters);
            loadCharacters();
            $scope.showNew = false;
        }

        var createNewChar = function() {
            var createChar = {
                "id": new Date().getTime(),
                "game": "Cthulhu",
                "favorite": false,
                "name": $scope.newName,
                "profession": $scope.newProfession,
                "info": {
                    "sex": $scope.newSex,
                    "birthplace": $scope.newBirthplace,
                    "birthday": $scope.newBirthday,
                    "age": $scope.newAge,
                    "residence": $scope.newResidence
                },
                "attributes": {
                },
                "abilities": $scope.abilities,
                "inventory": {},
                "weapons": {},
                "notes": $scope.newNotes
            };
            return createChar;
        };

        $scope.showCharacter = function(id) {
            characterIdProvider.setCharacterId(id);
            $location.path('/dsCharacter');
        }

        $scope.removeCharacter = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters.splice(i,1);
                    loadCharacters();
                    return true;
                }
            }
        }

        $scope.addFavorite = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters[i].favorite = true;
                }
            }
        }

        loadCharacters();
    }]);