# Liri Node Project

This is a command line app built with node.js that allows you to search for a song via Spotify, display your last 20 tweets via Twitter, and look up info on a movie

## Instructions

You will need to create your own .env file that contains your Spotify and Twitter keys. See below for format. 
From there, run the program in the command line with ```node <file.js> <command> <song/movie>```

## Commands

Twitter:
```node <file.js> my-tweets```

Spotify:
```node <file.js> spotify-this-song <song name>```

OMDB:
```node <file.js> movie-this <movie name>```

Random: 
```node <file.js> do-what-it-says```
This will do whatever command is listed in random.txt






## .env format 

```
# Spotify API keys

SPOTIFY_ID=enterID
SPOTIFY_SECRET=enterSecret

# Twitter API keys"

TWITTER_CONSUMER_KEY=enterConsumerKey
TWITTER_CONSUMER_SECRET=enterSecretKey
TWITTER_ACCESS_TOKEN_KEY=enterToken
TWITTER_ACCESS_TOKEN_SECRET=enterSecret
```
