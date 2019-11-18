// Mock Database with some JSON data
const data = {
  Info: [
    {
      number: 411,
      channelName: "Geaux Info",
      episodes: [
        {
          videoId: "4mD8MGU4pfw?",
          title: "GeauxInfo"
        }
      ]
    }
  ],
  "News/Business": [
    {
      number: 101,
      channelName: "Getting Started",
      episodes: [
        {
          videoId: "3rxFMcYQI9c?",
          title: "GeauxBusiness"
        }
      ]
    },
    {
      number: 102,
      channelName: "DW News",
      episodes: [
        {
          videoId: "NvqKZHpKs-g?",
          title: "DW News Live"
        }
      ]
    },
    {
      number: 404,
      channelName: "SpaceX",
      episodes: [
        {
          videoId: "UkPyUUOT1dg?",
          title: "Boca Chica Starship Construction and Launch Facility"
        }
      ]
    },
    {
      number: 103,
      channelName: "Al Jazeera",
      episodes: [
        {
          videoId: "U4GUp8rVUNI?",
          title: "Al Jazeera Live"
        }
      ]
    },
    {
      number: 104,
      channelName: "ABC7",
      episodes: [
        {
          videoId: "IukZ7gOGPj8?",
          title: "ABC 7 SW Florida"
        }
      ]
    },
    {
      number: 105,
      channelName: "Bitcoin Live",
      episodes: [
        {
          videoId: "9MkFI8PT_LE?",
          title: "Live Bitcoin Trading 24/7"
        }
      ]
    },
    {
      number: 106,
      channelName: "CNA",
      episodes: [
        {
          videoId: "JvZVnBn6zEI?",
          title: "CNA Singapore News"
        }
      ]
    },
    {
      number: 107,
      channelName: "Australia News Live",
      episodes: [
        {
          videoId: "nu3iXDR7iXo?",
          title: "ABC News"
        }
      ]
    },
    {
      number: 108,
      channelName: "FranceInfo",
      episodes: [
        {
          videoId: "wwNZKfBLAsc?",
          title: "France Info"
        }
      ]
    },
    {
      number: 109,
      channelName: "ABN Telugu",
      episodes: [
        {
          videoId: "VMAwgDJIsM0?",
          title: "ABN Telugu Latest News"
        }
      ]
    }
  ],
  "Fashion/Lifestyle": [
    {
      number: 200,
      channelName: "HSN Live",
      episodes: [
        {
          videoId: "1ph8qQnjXts?",
          title: "HSN Live"
        }
      ]
    },
    {
      number: 201,
      channelName: "QVC",
      episodes: [
        {
          videoId: "2v9ytGk5KhI?",
          title: "QVC LIVE STREAM"
        }
      ]
    },
    {
      number: 202,
      channelName: "QVC2 Live",
      episodes: [
        {
          videoId: "_v_wMS-uACE?",
          title: "QVC2 Live"
        }
      ]
    },
    {
      number: 203,
      channelName: "QVC3 Live",
      episodes: [
        {
          videoId: "Qt2c93O1p_c?",
          title: "QVC3 Live"
        }
      ]
    },
    {
      number: 204,
      channelName: "JTV",
      episodes: [
        {
          videoId: "VWcFIxOaOLg?",
          title: "Jewelry Television Live"
        }
      ]
    },
    {
      number: 205,
      channelName: "QVC Japan",
      episodes: [
        {
          videoId: "wMo3F5IouNs?",
          title: "QVC Japan"
        }
      ]
    }
  ],
  Kids: [
    {
      number: 300,
      channelName: "Toys",
      episodes: [
        {
          videoId: "SZXRgEL94_I?",
          title: "KunKun Play Superhero Rescue Toys Car Fun Playtime"
        }
      ]
    },
    {
      number: 301,
      channelName: "FunFunFun",
      episodes: [
        {
          videoId: "8-sX2YAGJV8?",
          title: "Kidtoons"
        }
      ]
    },
    {
      number: 302,
      channelName: "Kid Tales",
      episodes: [
        {
          videoId: "tYqFztmDggQ?",
          title: "Ben and Holly's Little Kingdom"
        }
      ]
    },
    {
      number: 303,
      channelName: "Caillou",
      episodes: [
        {
          videoId: "4bvh4npvgyA?",
          title: "It's Caillou"
        }
      ]
    },
    {
      number: 304,
      channelName: "Ben 10 LIVE",
      episodes: [
        {
          videoId: "ExFEBETaHuo?",
          title: "Play with all the alien toys | Ben 10 Toys | Toy Play"
        }
      ]
    },
    {
      number: 305,
      channelName: "Good Kids",
      episodes: [
        {
          videoId: "QougB4t6TWU?",
          title: "Booba"
        }
      ]
    },
    {
      number: 306,
      channelName: "Toon Room",
      episodes: [
        {
          videoId: "gXARGZF1Wp4?",
          title: "Mr.Bean"
        }
      ]
    }
  ],
  Music: [
    {
      number: 617,
      channelName: "Geaux Dancing",
      episodes: [
        {
          videoId: "UX1cdPqW5M8?",
          title: "Geaux Dancing"
        }
      ]
    },
    {
      number: 619,
      channelName: "Geaux Chill",
      episodes: [
        {
          videoId: "WN47-WT7tjY?",
          title: "Calming Music, Meditation"
        }
      ]
    },
    {
      number: 112,
      channelName: "Issa Vibe (13+)",
      episodes: [
        {
          videoId: "L9Q1HUdUMp0?",
          title: "R&B / Hip-Hop Radio"
        }
      ]
    },
    {
      number: 620,
      channelName: "Pop Music",
      episodes: [
        {
          videoId: "yixlb8qMTmA?",
          title: "Pop Music Live"
        }
      ]
    },
    {
      number: 621,
      channelName: "The Jazz Lounge",
      episodes: [
        {
          videoId: "-7_ZuR7gFgc?",
          title: "Jazz All Day Long"
        }
      ]
    },
    {
      number: 622,
      channelName: "GRR!",
      episodes: [
        {
          videoId: "57w9CvHdomY?",
          title: "Gangsta Rap Radio"
        }
      ]
    }
  ],
  "Science, Sports, and Stuff": [
    {
      number: 699,
      channelName: "Geaux Tech",
      episodes: [
        {
          videoId: "videoseries?list=PLKEbmWOXwpBREqf2dgNleCuCJPe7a7irX&",
          title: "G.T.P"
        }
      ]
    },
    {
      number: 698,
      channelName: "Geaux Tutorial",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYM4Q9A4G-NNAPZ7Fl7SiXBj&",
          title: "Natural Hair Advice"
        }
      ]
    },
    {
      number: 700,
      channelName: "étoile",
      episodes: [
        {
          videoId: "nA9UZF-SZoQ?",
          title: "Space and Universe"
        }
      ]
    },
    {
      number: 701,
      channelName: "ABC News",
      episodes: [
        {
          videoId: "dNCI18p9wSw?",
          title: "ABC News Live"
        }
      ]
    },
    {
      number: 702,
      channelName: "Nature One",
      episodes: [
        {
          videoId: "c4C1c4z8hTQ?",
          title: "Brooks Falls - Katmai National Park, Alaska-Explore.org"
        }
      ]
    },
    {
      number: 703,
      channelName: "Nature Two",
      episodes: [
        {
          videoId: "wVLfgu9KtBQ?",
          title: "Mississippi River Flyway Cam powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 704,
      channelName: "Future Of",
      episodes: [
        {
          videoId: "GyBgbzdkiH8?",
          title: "Science, News, Earth 2050"
        }
      ]
    },
    {
      number: 706,
      channelName: "G.O. On Geaux",
      episodes: [
        {
          videoId: "GzWYt99LTRI?",
          title: "GeauxInterviews"
        }
      ]
    }
  ]
};

export { data };
