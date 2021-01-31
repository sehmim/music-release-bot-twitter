const axios = require('axios');
var fs = require('fs');
require('dotenv').config()
var Twitter = require('twitter');
var moment = require('moment'); // require
var CronJob = require('cron').CronJob;
var schedulerPattern = '0 8 * * *' // Every dat at 8AM



async function getAllUpcomingReleases() {
    try {
        const { data } = await axios.get('https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json')
        const { feed } = data
        return feed.results;
    } catch (error) {
        console.log("Error -> ", error)
    }
}

function purifyData(data) {
    let purifiedList = [];
    let todaysDate = new Date().toUTCString()
    let todayDateFormatted = moment(todaysDate).format("YYYY-MM-DD")

    data.forEach(element => {
        if (element.releaseDate === todayDateFormatted) 
        {
            element.genres.forEach(genre => {
                if ((genre.name.includes("Metal") || genre.name.includes("Metal") || genre.name.includes("Djent") || genre.name.includes("core")))
                {
                    purifiedList.push(element)
                }
            })
        }
    });

    return purifiedList;
}

function PostTweet(postPayload) {
    var client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });
    
    client.post('statuses/update', {status: postPayload}, function(error, tweet, response){
        if(!error){
            console.log(tweet);
        }
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tweetRelease(data) {
    const tweetCount = 0;

    for (let index = 0; index < data.length; index++) {
        if (tweetCount < 5) {
            let randomNumber = getRandomInt(0, purifyData(data).length - 1)
            const randomRelease = purifyData(data)[randomNumber]
            let tweet = "🤖Bleep Bloop🤖 This is the Release Bot \nTodays Upcoming release: " + randomRelease.artistName + " | " + randomRelease.name + "\n" + "Check it out at -> " + randomRelease.artistUrl + "\n #metal #rock"
            PostTweet(tweet)
            data = data.filter((release)=> (release.id !== randomRelease.id))
        }
    }
}


var job = new CronJob(schedulerPattern, function() {
    getAllUpcomingReleases().then(data => {
        const purifiedData = purifyData(data)
        if (purifiedData.length > 0) {
                tweetRelease(purifiedData)
        } else {
            PostTweet("🤖Bleep Bloop🤖 This is the Release Bot \n Looks like there are no Rock/Metal Album releases today :'(")
        }
    })
}, null, true, 'America/Los_Angeles');

job.start();



