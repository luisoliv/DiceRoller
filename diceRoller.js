//global vars of the programs
const readline = require('readline');
const fileBuffer = require('./fileReader');

//functions & procedures of the program
function showMotd()
{
	console.log("\tWelcome to dicesRoller made by luisoliv v0.1");
	console.log("for info. about command use /help");
	console.log("for rolling dice use /roll XdY");
}

function showHelp()
{
	console.log("1) For rolling some dices, use the comand /XdY whereas X is the quantity of dices");
	console.log("\tand Y is the size (in sides) of every dice.");
	console.log("2) For showing this manual, type help.");
	console.log("3) For quitting type exit.\n\n");
}

function rollDices(x,y)
{
	var result = "{";
	var sum = 0;

	for(var i=0; i < x; i++)
	{	
		var rnd = Math.floor( (Math.random() * y) + 1);
		sum += rnd;

		result += rnd.toString();
		if(i != x-1)
			result += ", ";
	}
	result += ("} = ["+sum.toString()+"]");

	return result;
}

function parser(command)
{
	var cmd;
	var x,y,result;
    
	if(command[0] == '/') //then it is an actual command
	{
	    command = command.substring(1);
	    
	    if(/^\d{1,2}d\d{1,2}$/.test(command))
	    {
	        cmd = command.split("d"); //dividing quantity and size of dices
		    x = parseInt(cmd[0]);
		    y = parseInt(cmd[1]);
            
		    result = rollDices(x,y);
		    console.log(result);
		
		    fileBuffer.openFile('logs.txt', result, x, y);
	    }
	    else
	        console.log("Error, invalid command, please try it again");
	}
	else if(command === "help")
		showHelp();
	else
	    console.log("Error, invalid command, please try it again");
}

function inputLoop()
{
    
	const buffer = readline.createInterface(
	{
	  input: process.stdin,
	  output: process.stdout
	});
	
	buffer.question('Dices://> ', (command) =>
	{
	    if(command != "exit")
		{
			parser(command);
			buffer.close();
		}			
		else
		{
			console.log("Exiting the program...");
			buffer.close();
			return 0;
		}			
	});	
}

//main entry point of the program
main();

function main()
{
	//showMotd(); disabled for convenience
	inputLoop(); 
	//doing an actual loop with an input stdin is harder
	// than i though due asynchronous nature of nodeJS
	//so it's a pending task for 0.4 version of the dice roller
}
