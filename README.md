# Memory Game

## Aim

-   Memory game is implemented by using Java script and the Document Object Model

### Operations for the memory game

-   Memory game logic

    -   The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

-   Congratulations pop-up

    -   when a user wins the game a model appears to congratulate the player and asks if they want to play again. It should also tell the player how much time it took to took to win the game, and what the star rating was.

-   Restart Button

    -   A restart button should reset the game board, timer and star rating.

-   Star rating

    -   The game displays the star rating (3 stars) that reflects the player performance. At the beginning of a it should display at least 3 stars. After some number of moves, there should be the decrease in the stars. For some more moves it should decrease in some more moves.

-   Timer

    -   When the player starts the game the timer should start and when the player wins the game it should stop.

-   Move counter

    -   Game has to display how number of moves the player have made.

-   Restart
    -   Game has to include the restart button.

## What I have done in this Project

-   Clone the repository which is provided by the Udacity. the following files are extracted:
             1. css/app.css
             2. img
             3. js(app.js)
             4. CONTRIBUTING.md
             5. index.html
             6. README.md

-   Inside the app.js file I have implemented the following statements:
    -   Created a **totalCards** list that holds all cards
    -   Initially all cards are shuffled randomly using shuffle method
    -   In memory game if player click on particular card display the card
    -   For every opening of two cards increment moves variable
    -   If two cards are matched then show them otherwise close the cards within certain time interval(because player has to remember the card)
    -   when player begin the game time has to be displayed (implemented using timeCount method)
    -   Based on number of moves Star rating is decreased. For some more moves it should decrease star rating
    -   when player click on refresh button the game is reset(using reload() method)
    -   When player open all cards which display the game pop-up display Congratulations message and how much time did player take to complete the game, moves, star rating then finally ask the opinion of game that player want to play again or exit.

## Conclusion

-   I learned how to combine my skills in HTML, CSS, and JavaScript into a large project.
-   JavaScript enables the development of complex applications on the web
