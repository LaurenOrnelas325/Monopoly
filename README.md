
# Monopoly Capstone

## Project Overview

I will be recreating monopoly and the goal is the add as many features from the original game as possible in a 3 week time frame.

## Functionality

From a users perspective there will be 2 pages. One will be a login/signup page where they can input their username and password and the next will be the actual game play page.
The users information used to signup as well as gameplay data like win/loss ratio will be stored in the back-end.
## Data Model

    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    win_loss = models.IntegerField(max_length=250)

## Schedule

* Setting Up Django and Django_rest user app [3 days]
* Designing layout of board and other sections nessecary for base functionality [2 days]
* Completeing all neccesary functions for game to run [1 week]
* testing and wrapping up styling of board [3 days]



