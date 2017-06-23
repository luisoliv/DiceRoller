# DiceRoller v0.2 22/06/2017
A simple dice roller CLI program for unplugged (a.k.a no internet connection) Roleplaying sessions

Features :
* A simple command-like syntax for rolling dices
* Logs all the roll in a txt file, easy to view
* Made with nodeJS so you can run it in your favorite platform with no worries
* No dependencies outside core nodeJS libraries, so it's just extract and run.
* Logging functionality + timestamp and rolls in logfile.

Pending Features :
* A direct-not-asynchronous inputLoop, so the program doesn't quit after each roll. 
* An extra command to quickly view the logfile from the inside the program.
* The aditional feature of adding an small tag or description to every roll (and logging it aswell)
* Modify the command input loop to detect the commands by a regex
