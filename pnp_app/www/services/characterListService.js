app.service("characterListService", function ($localStorage) {
    this.getGameCharacterList = function (game) {
        var characterList = [];
        for(var i = 0; i < $localStorage.characters.length; i++) {
            if($localStorage.characters[i].game == game) {
                characterList.push($localStorage.characters[i]);
            }
        }
        console.log(game);
        console.log(characterList);
        return characterList;
    };

    this.getFavoriteCharacterList = function () {
        var characterList = [];
        for(var i = 0; i < $localStorage.characters.length; i++) {
            if($localStorage.characters[i].favorite) {
                characterList.push($localStorage.characters[i]);
            }
        }
        console.log("favorites");
        console.log(characterList);
        return characterList;
    };
});