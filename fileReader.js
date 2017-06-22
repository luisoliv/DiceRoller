/*
    This module is in charge of manipulatig all the 
    log activities of the dice
*/

//requires and imports
var fs = require('fs');
var lineReader = require('readline').createInterface(
{
    input: require('fs').createReadStream('logs.txt')
});

//functions and procedures
exports.openFile = function(filename, result)
{
     //@params are (FILENAME, err, fileStat)
    fs.stat(filename, function(err, fileStat)
    {
        if (err) //if FILENAME doesn't exists
        {
            if (err.code == 'ENOENT')
                console.log('Error. File does not exist.');
        } 
        else 
        {
            if (fileStat.isFile()) //it exist and is a file
                fs.appendFile(filename , result+"\n");
            else if (fileStat.isDirectory()) //if it is an actual folder/directory
                console.log('Directory found. (try to make a '+filename+' in the main folder of this program');
        }
    });   
}

exports.destroy = function()
{
    /*
        this method is used to "free" the memory used for global entities
        (a.k.a nullifing globals so the garbage collector frees everything up)
    */
    fs = null;
    linereader = null;
}
