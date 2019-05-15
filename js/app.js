/*
 * Create a list that holds all of your cards
 */
allCards = document.querySelectorAll('.card');
// converting nodelist into array
totalCards = [...allCards];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
//displayCards() is used to add particular card into clickedCards.
function displayCards() {
  if (!this.classList.contains("open") && clickedCards.length < 2) {
    this.classList.add("show", "open", "disable");
    clickedCards.push(this);
    matchCards();
  }
  if (timer === 0) {
    timer++;
    timeCount();
  }
}
//when card is clicked addEventListenermethod listens and handle it.
for (i in totalCards) {
  totalCards[i].addEventListener("click", displayCards);
}
/*
 * querySelector() return A NodeList object, representing the first element that matches the specified CSS selector
 * shuffle all cards
 */
var deckcards = document.querySelector('.deck');
var shuff = shuffle(totalCards);
for (i in shuff) {
  [].forEach.call(shuff, function(element) {
    deckcards.appendChild(element);
  });
}
/*
 * setting time 300ms to close the card if they are not matched
 * if cards are matched then make those cards match,open and show.
 */
var count = 0;
clickedCards = [];

function matchCards() {
  setTimeout(function() {
    if (clickedCards.length === 2) {
      movesCount();
      if (clickedCards[0].firstElementChild.className == clickedCards[1].firstElementChild.className) {
        for (i in clickedCards) {
          clickedCards[i].classList.add("match");
          clickedCards[i].classList.remove("open", "show");
        }
        count = count + 2;
        gameOver();

      } else {
        for (i in clickedCards) {
          clickedCards[i].classList.remove("open", "show", "disable");
        }
      }
      clickedCards = [];
    }
  }, 300);
}

// MOves counter
var movements = document.querySelector('.moves');

function movesCount() {
  moves = movements.innerHTML;
  moves++;
  movements.innerHTML = moves;
  starRater();
}

var timer = 0,
  min = 0,
  sec = 0;
var timings = document.querySelector('.timer');
var timerStor;
//timer start when we click first card
function timeCount() {
  timerStor = setInterval(function() {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    timings.innerHTML = min + ":" + sec;
  }, 1000);
}
//get all stars and based on number of moves rating is decreased
allStars = [].slice.call(document.querySelectorAll('.fa-star'));
var numberOfStars = 3;

function starRater() {
  if (moves == 15) {
    allStars[2].classList.add('fa-star-o');
    allStars[2].classList.remove('fa-star');
    numberOfStars--;
  }
  if (moves == 25) {
    allStars[1].classList.add('fa-star-o');
    allStars[1].classList.remove('fa-star-half-o');
    allStars[1].classList.remove('fa-star');
    numberOfStars--;
  }
}
//when refresh button is clicked reload the game
var restarter = document.querySelector('.restart');
restarter.addEventListener("click", reStart);

function reStart() {
  location.reload();
}

//when all cards are matched call gameOver()
function gameOver() {
  var count1 = document.querySelectorAll('.fa-star').length;
  var allstarCount = "";
  while (count1-- > 0) {
    allstarCount += "<i class='fa fa-star'></i>";
  }
  if (count == 16) {
    clearInterval(timerStor);
    swal({
      title: "Congratulations...!",
      html: "Total Moves :" + movements.innerHTML +
        "<br> You have earned : " + allstarCount +
        "<br>  Wow! you are completed the game with in short time : " + timings.innerHTML,
      icon: "success",
      confirmButtonText: 'play again',
      showCancelButton: true
    }).then((value) => {
      if (value) {
        reStart();
      }
    });
  }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
