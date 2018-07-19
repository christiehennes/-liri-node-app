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

```# Spotify API keys

SPOTIFY_ID=e083737f72174e99a8ecf2c896050c8b
SPOTIFY_SECRET=b09221832fb740a8871baa3e3d3959e7

# Twitter API keys"

TWITTER_CONSUMER_KEY=npwThKGMlnDd60IxwG1KcxrMu
TWITTER_CONSUMER_SECRET=kbnk2DnywtT3HsQ9IrDLXE3AoCO40FKClJYF2mdLFOFwgv8fc6
TWITTER_ACCESS_TOKEN_KEY=4177977023-Z5yyHJcPjP3ypOl6QW9q6nOUZ9UbYUaCx6sT3nW
TWITTER_ACCESS_TOKEN_SECRET=qfx8Ksyy0NAnSVf84qEJJwZNJtzmGvEWG8EzAWuhGQNyh```
