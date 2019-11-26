$(document).ready(function() {
    // run function on initial page load
    pokemonGuess();
});

function pokemonGuess() {
    var pokemonArray = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
    var randomNumber = Math.floor(Math.random() * pokemonArray.length);
    var stripped = pokemonArray[randomNumber].toLowerCase();
    console.log(pokemonArray[randomNumber]);
    console.log(stripped);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == pokemonArray[randomNumber]) {
            $('h1').text(guess + ' is correct! :D');
            $('input').val('');
            $('.button p').text('Play Again!');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else {
            $('h1').text('I\'m sorry but ' + guess + ' is incorrect. :(' + ' The correct answer is ' + stripped + '.');
            $('input').val('');
            $('.button p').text('Play Again!');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    });
    $(document).keypress(function(e) {
        if (e.which == 13) {
            //Enter key pressed
            $('#submit').click(); //Trigger button click event
        }
    });
}
