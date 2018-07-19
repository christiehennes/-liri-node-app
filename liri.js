require("dotenv").config();
const keys = require('./keys.js');
const $ = (require('jquery'));
const fs = require('fs');

debug = 0;


//Initalize Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

//Initalize Spotify 
var Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

//Initalize OMDB
var request = require("request");


//Get the input from the user
let userInput = process.argv.slice(2);
if (debug){console.log(userInput);} 

//Set variables for the command line arguments
let command = userInput[0];
let arg = userInput[1];

//Process the user input with a switch statement 

processInput(command, arg);


//Function that holds the switch statement
function processInput(command, arg){
    
    switch (command){

        case 'my-tweets':
    
            if(debug) console.log("in my tweets");
    
            //Make the Twitter call and display tweet information
            twitterRequest();
    
            break;
    
        case 'spotify-this-song':
            if(debug) console.log("in spotify this song");
    
            //Search for The Sign if the usere did not enter a song
            if (arg === undefined){
                arg = '"The Sign" by Ace of Base';
            }
    
            spotifyRequest(arg); //Make the spotify request
            break;
    
        case 'movie-this':
    
            //Set the argument to Mr. Nobody if the user did not enter a movie 
            if(arg === undefined){
                arg = 'Mr. Nobody';
            }
    
            omdbRequest(arg); //Make the omdb request
            break;
    
        case 'do-what-it-says':
    
            random(); //Make the random function call and process the text in the file 
            break;

        default:
            console.log("Please enter a valid command");
    
    }
}

function omdbRequest(arg) {

    //Make the OMDB request via request 
    request('http://www.omdbapi.com/?t=' + arg + '&y=&plot=short&apikey=d7c89213', function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
    
        // Parse the body of the response and display movie info
        console.log(`
        Title: ${JSON.parse(body).Title}
        Year: ${JSON.parse(body).Year}
        IMDB Rating: ${JSON.parse(body).Ratings[0].Value}
        Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}
        Country: ${JSON.parse(body).Country}
        Language: ${JSON.parse(body).Language}
        Plot: ${JSON.parse(body).Plot}
        Actors: ${JSON.parse(body).Actors}
        `);

        }
    });
}

function spotifyRequest(arg){

    spotify.search({ type: 'track', query: arg }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        // console.log(JSON.stringify(data, null, " "));

        let songInfo = data.tracks.items[0];
        if(debug){console.log(JSON.stringify(songInfo, null, " "))};


        console.log(
            `
            Artist(s): ${songInfo.artists[0].name}
            Song Name: ${songInfo.name}
            Preview Link: ${songInfo.preview_url}
            Album: ${songInfo.album.name}
            `
        )





    });


}

function twitterRequest(arg){
    client.get('statuses/user_timeline', {screen_name: 'christiehennes'}, function(error, tweets, response) {
        if(error) console.log(error);
        
        tweets.forEach(tweet => {
            console.log(`
            ${tweet.text}
            ${tweet.created_at}
            
            `)
        });
    });
}

function random(){

    fs.readFile('./random.txt', 'utf8', function(err, data) {
        if(err) console.log(err);

       let result = data.split(','); //Split the text on a comma 
       processInput(result[0], result[1]); //Process the text using the processInput function

      });
}