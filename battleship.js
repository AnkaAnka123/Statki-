var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 +1;
var location3 = location2 + 1;

//komórka wskazana przez gracza - do sprawdzenia
var guess;

//zmienna przechowująca liczbę trafień
var hits = 0;

//zmienna przechowująca liczbę prób
var guesses = 0;

//zmienna przechwująca info czy okręt został zatopiony
var inSunk = false

while (inSunk == false) {
  guess = prompt("Gotów, cel pal ognia!  (Podaj liczbę z zakresu 0 - 6):");
  if(guess < 0 || guess > 6) {
    alert ("Proszę podać prawidłowy numer");
  } else{
    guesses = guesses + 1;
  
    if (guess == location1 || guess == location2 || guess == location3){
      alert("TRAFIONY!!");
         hits = hits + 1;
  
           if (hits == 3){
            inSunk = true;
            alert ("Zatopiłeś mój okręt!")
            }
  }else{
    alert("PUDŁO!!")
  }
  }
}



var stats = "Potrzebowałeś " + guesses + " prób, by zatopić okręt, " + "czyli Twoja efektywność wynosi: " + (3/guesses) + ".";
alert(stats);