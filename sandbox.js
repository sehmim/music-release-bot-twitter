// var CronJob = require('cron').CronJob;

// var schedulerPattern = '0 */3 * * *' // Every 6 hours

// var job = new CronJob('* * * * *', function() {
//     console.log('You will see this message every second');
//   }, null, true, 'America/Los_Angeles');

// job.start();


function purifyData(data) {
    let purifiedList = [];
    let todaysDate = new Date().toUTCString()
    // let todayDateFormatted = moment(todaysDate).format("YYYY-MM-DD")

    data.forEach(element => {
        // if (element.releaseDate === todayDateFormatted) 
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



const data = [{
    "artistName": "Rob Zombie",
    "id": "1535607919",
    "releaseDate": "2021-03-12",
    "name": "The Lunar Injection Kool Aid Eclipse Conspiracy",
    "kind": "album",
    "copyright": "℗ 2021 Nuclear Blast",
    "artistId": "110374",
    "contentAdvisoryRating": "Explicit",
    "artistUrl": "https://music.apple.com/us/artist/rob-zombie/110374?app=music",
    "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/2e/90/412e90cb-8e80-c83b-3841-5c2106987fe0/cover.jpg/200x200bb.png",
    "genres": [
      {
        "genreId": "1153",
        "name": "Metal",
        "url": "https://itunes.apple.com/us/genre/id1153"
      },
      {
        "genreId": "34",
        "name": "Music",
        "url": "https://itunes.apple.com/us/genre/id34"
      },
      {
        "genreId": "21",
        "name": "Rock",
        "url": "https://itunes.apple.com/us/genre/id21"
      }
    ],
    "url": "https://music.apple.com/us/album/the-lunar-injection-kool-aid-eclipse-conspiracy/1535607919?app=music"
  },
  {
    "artistName": "Chevelle",
    "id": "1545068576",
    "releaseDate": "2021-03-05",
    "name": "NIRATIAS",
    "kind": "album",
    "copyright": "℗ 2021 Epic Records, a division of Sony Music Entertainment",
    "artistId": "519486",
    "contentAdvisoryRating": "Explicit",
    "artistUrl": "https://music.apple.com/us/artist/chevelle/519486?app=music",
    "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/e2/e4/c9/e2e4c9b9-8971-fdf6-8d4e-aae0f7948e16/886448648000.jpg/200x200bb.png",
    "genres": [
      {
        "genreId": "21",
        "name": "Rock",
        "url": "https://itunes.apple.com/us/genre/id21"
      },
      {
        "genreId": "34",
        "name": "Music",
        "url": "https://itunes.apple.com/us/genre/id34"
      },
      {
        "genreId": "1153",
        "name": "Metal",
        "url": "https://itunes.apple.com/us/genre/id1153"
      }
    ],
    "url": "https://music.apple.com/us/album/niratias/1545068576?app=music"
  },
  {
    "artistName": "Dio",
    "id": "1542793897",
    "releaseDate": "2021-02-12",
    "name": "Holy Diver: Live",
    "kind": "album",
    "copyright": "℗ 2020 Niji Entertainment Group under exclusive license to BMG Rights Management (US) LLC",
    "artistId": "2779392",
    "artistUrl": "https://music.apple.com/us/artist/dio/2779392?app=music",
    "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ee/5c/0f/ee5c0fbb-0cf7-108e-a1eb-5665a7af030d/4050538661798.jpg/200x200bb.png",
    "genres": [
      {
        "genreId": "21",
        "name": "Rock",
        "url": "https://itunes.apple.com/us/genre/id21"
      },
      {
        "genreId": "34",
        "name": "Music",
        "url": "https://itunes.apple.com/us/genre/id34"
      },
      {
        "genreId": "1153",
        "name": "Metal",
        "url": "https://itunes.apple.com/us/genre/id1153"
      }
    ],
    "url": "https://music.apple.com/us/album/holy-diver-live/1542793897?app=music"
  },
  {
    "artistName": "Dio",
    "id": "1542793740",
    "releaseDate": "2021-02-12",
    "name": "Evil or Divine: Live in New York City",
    "kind": "album",
    "copyright": "℗ 2020 2020 Niji Entertainment Group under exclusive license to BMG Rights Management (US) LLC",
    "artistId": "2779392",
    "artistUrl": "https://music.apple.com/us/artist/dio/2779392?app=music",
    "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/bc/94/70/bc947065-3f0c-f01f-b9cc-5b0268952ea1/4050538661804.jpg/200x200bb.png",
    "genres": [
      {
        "genreId": "21",
        "name": "Rock",
        "url": "https://itunes.apple.com/us/genre/id21"
      },
      {
        "genreId": "34",
        "name": "Music",
        "url": "https://itunes.apple.com/us/genre/id34"
      },
      {
        "genreId": "1153",
        "name": "Metal",
        "url": "https://itunes.apple.com/us/genre/id1153"
      }
    ],
    "url": "https://music.apple.com/us/album/evil-or-divine-live-in-new-york-city/1542793740?app=music"
  },
  {
    "artistName": "Humanity's Last Breath",
    "id": "1536214601",
    "releaseDate": "2021-02-12",
    "name": "Välde",
    "kind": "album",
    "copyright": "℗ 2021 Unique Leader Records",
    "artistId": "387105055",
    "artistUrl": "https://music.apple.com/us/artist/humanitys-last-breath/387105055?app=music",
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/ed/b4/eeedb471-a77d-0d69-076a-73de1fac88e3/195081473062.jpg/200x200bb.png",
    "genres": [
      {
        "genreId": "1149",
        "name": "Death Metal/Black Metal",
        "url": "https://itunes.apple.com/us/genre/id1149"
      },
      {
        "genreId": "34",
        "name": "Music",
        "url": "https://itunes.apple.com/us/genre/id34"
      },
      {
        "genreId": "21",
        "name": "Rock",
        "url": "https://itunes.apple.com/us/genre/id21"
      }
    ],
    "url": "https://music.apple.com/us/album/v%C3%A4lde/1536214601?app=music"
  }]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winningRelease(data) {
    const tweetCount = 0;

    for (let index = 0; index < data.length; index++) {
        if (tweetCount < 5) {
            let randomNumber = getRandomInt(0, purifyData(data).length - 1)
            const randomRelease = purifyData(data)[randomNumber]
            let tweet = "Todays Upcoming release: " + randomRelease.artistName + " | " + randomRelease.name + "\n" + "Check it out at -> " + randomRelease.artistUrl
            console.log(tweet)
            data = data.filter((release)=> (release.id !== randomRelease.id))
        }
    }
}

winningRelease(data)