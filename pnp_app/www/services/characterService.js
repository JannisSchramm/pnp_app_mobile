app.service("characterIdProvider", function () {

    var characterId = null;
    this.getCharacterId = function () {
        return characterId;
    };

    this.setCharacterId = function(id) {
        characterId = id;
    };
});

app.service("getCharacterService", function ($localStorage) {

    this.getCharacter = function (id) {
        for(var i = 0; i < $localStorage.characters.length; i++) {
            if($localStorage.characters[i].id == id) {
                return $localStorage.characters[i];
            }
        }
        return null;
    };
});