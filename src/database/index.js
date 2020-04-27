// Mock Database with some JSON data
const data = {
  Info: [
    {
      number: 411,
      channelName: "Geaux Info",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7t6quu",
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
          videoId: "https://www.dailymotion.com/video/x7tb1xo",
          title: "GeauxBusiness"
        }
      ]
    },
    {
      number: 102,
      channelName: "DW News",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=NvqKZHpKs-g?",
          title: "DW News Live"
        }
      ]
    },
    {
      number: 103,
      channelName: "Al Jazeera",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=WisZM9CMlTo?",
          title: "Al Jazeera Live"
        }
      ]
    },
    {
      number: 104,
      channelName: "ABC7",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=IukZ7gOGPj8?",
          title: "ABC 7 SW Florida"
        }
      ]
    },
    {
      number: 105,
      channelName: "SKY News",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Auq9mYxFEE?",
          title: "Sky News"
        }
      ]
    },
    {
      number: 106,
      channelName: "CNA",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=U_XsRZXL2Ic?",
          title: "Breaking news, top stories"
        }
      ]
    },
    {
      number: 107,
      channelName: "BD News",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=KgiwN7ddb2U?",
          title: "Bangladesh News"
        }
      ]
    },
    {
      number: 108,
      channelName: "France24",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=wwNZKfBLAsc?",
          title: "France News 24/7"
        }
      ]
    },
    {
      number: 109,
      channelName: "ABN Telugu",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=VMAwgDJIsM0?",
          title: "ABN Telugu Latest News"
        }
      ]
    },
    {
      number: 110,
      channelName: "Russian 24 News",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8T9SFZDP60Q",
          title: "новости 24 часа"
        }
      ]
    },
    {
      number: 110,
      channelName: "Мир 24. Прямая трансляция",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=fc6IJmpMcEQ",
          title: "Прямой эфир телеканала МИР 24"
        }
      ]
    }
  ],
  "Fashion/Lifestyle": [
    {
      number: 200,
      channelName: "HSN",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=1ph8qQnjXts?",
          title: "HSN Live"
        }
      ]
    },
    {
      number: 201,
      channelName: "QVC",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=2v9ytGk5KhI?",
          title: "QVC LIVE STREAM"
        }
      ]
    },
    {
      number: 202,
      channelName: "QVC2 Live",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=_v_wMS-uACE?",
          title: "QVC2 Live"
        }
      ]
    },
    {
      number: 203,
      channelName: "QVC3 Live",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Qt2c93O1p_c?",
          title: "QVC3 Live"
        }
      ]
    },
    {
      number: 204,
      channelName: "HSN2",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=1pepSUbkLVI?",
          title: "HSN2 Live"
        }
      ]
    },
    {
      number: 205,
      channelName: "QVC Japan",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=wMo3F5IouNs?",
          title: "QVC Japan"
        }
      ]
    },
    {
      number: 206,
      channelName: "Naturalista",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYM4Q9A4G-NNAPZ7Fl7SiXBj&",
          title: "Natural Hair Advice"
        }
      ]
    },
    {
      number: 207,
      channelName: "Home Decor",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYM5fkeGzSSlU3x1MC9mobCj&",
          title: "DIY Home Decor"
        }
      ]
    },
    {
      number: 208,
      channelName: "Geaux Thrifting",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYMrFVh9Cn4o48hTrCtR1pPy&",
          title: "Thrift Flip"
        }
      ]
    },
    {
      number: 209,
      channelName: "Beaute 101",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYNOc0A38gOM1MWXp3hG-I-8&",
          title: "Beaute"
        }
      ]
    },
    {
      number: 210,
      channelName: "Geauxing Home",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYOFe1mXqR39oXbKcpYupNNx&",
          title: "HomeTalk"
        }
      ]
    }
  ],
  Kids: [
    {
      number: 300,
      channelName: "The Fairly OddParents",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=TqYQ-Xc2X94?",
          title: "The Fairly OddParents 24/7"
        }
      ]
    },
    {
      number: 301,
      channelName: "FunFunFun",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=ZY5oov1_jbo?",
          title: "LARVA OFFICIAL"
        }
      ]
    },
    {
      number: 302,
      channelName: "Cat Tales",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=PbP0_yYXcHU?",
          title: "Talking Tom and Friends"
        }
      ]
    },
    {
      number: 303,
      channelName: "Mother Goose Club",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=OaJL4e3eOzI",
          title: "Mother Goose Club + More"
        }
      ]
    },
    {
      number: 304,
      channelName: "Caillou",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=4bvh4npvgyA?",
          title: "It's Caillou"
        }
      ]
    },
    {
      number: 305,
      channelName: "WB Kids",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=BRkQ-ZGiNbc?",
          title: " Classic TOM & JERRY"
        }
      ]
    },
    {
      number: 306,
      channelName: "Paw Patrol",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=KaMgAmoolNs?",
          title: "Mighty Pups"
        }
      ]
    }
  ],
  Music: [
    {
      number: 400,
      channelName: "Tropical House",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=jnGUs3jCb_I?",
          title: "Tropical House"
        }
      ]
    },
    {
      number: 401,
      channelName: "Geaux Chill",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=5qap5aO4i9A?",
          title: "lofi hip hop radio"
        }
      ]
    },
    {
      number: 402,
      channelName: "Issa Vibe (13+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=L9Q1HUdUMp0?",
          title: "R&B / Hip-Hop Radio"
        }
      ]
    },
    {
      number: 403,
      channelName: "Lofi Wave",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Cnudi0bQxG0?",
          title: "Quarantine and Chill"
        }
      ]
    },
    {
      number: 404,
      channelName: "The Jazz Lounge",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=-7_ZuR7gFgc?",
          title: "Jazz All Day Long"
        }
      ]
    },
    {
      number: 405,
      channelName: "StewShowcase",
      episodes: [
        {
          videoId: "https://dai.ly/x7tae7z",
          title: "The Stew Showcase"
        }
      ]
    },
    {
      number: 406,
      channelName: "G.O. On Geaux",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tb1xt",
          title: "GeauxInterviews"
        }
      ]
    },
    {
      number: 407,
      channelName: "Piano Time!",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=y7e-GC6oGhg?",
          title: "Study Music, Relaxing Music"
        }
      ]
    }
  ],
  "Science & Fantasy": [
    {
      number: 500,
      channelName: "Everything Tech",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tb1y4",
          title: "Everything Tech"
        }
      ]
    },
    {
      number: 501,
      channelName: "Geaux Fantasy",
      episodes: [
        {
          videoId: "https://dai.ly/x7tb1xc",
          title: "The works of Moon Ferguson"
        }
      ]
    },
    {
      number: 502,
      channelName: "Geaux Tech",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLKEbmWOXwpBREqf2dgNleCuCJPe7a7irX&",
          title: "Future Technology"
        }
      ]
    },
    {
      number: 503,
      channelName: "étoile",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=nA9UZF-SZoQ?",
          title: "Space and Universe"
        }
      ]
    },
    {
      number: 504,
      channelName: "Future Of",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=GyBgbzdkiH8?",
          title: "Science, News, Earth 2050"
        }
      ]
    }
  ],
  "Explore.org": [
    {
      number: 600,
      channelName: "Santa Monica Beach Cam",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=OWbI6WtlI-k",
          title: "Santa Monica Beach Cam powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 601,
      channelName: "Aquarium of the Pacific",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=F109TZt3nRc?",
          title: "Tropical Reef Camera powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 602,
      channelName: "Raptor Resource Project",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=UmclL6funN8?",
          title: "Decoran Eagles powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 603,
      channelName: "Guide Dogs of America",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=f12EgkREedY",
          title: "Guide Dogs Mobility Cam powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 604,
      channelName: "Warrior Canine Connection",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=G0IBqtO1K28",
          title: "Nursery at Warrior Canine Connection powered by Explore.org"
        }
      ]
    },
    {
      number: 605,
      channelName: "Big Cat Rescue",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8chd0qHhMWQ",
          title: "Big Cat Rescue powered by EXPLORE.org"
        }
      ]
    },
    {
      number: 605,
      channelName: "Kitten Rescue",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Iup70E0Ig0",
          title: "Kitten Rescue Cat Cam powered by EXPLORE.org"
        }
      ]
    }
  ]
};

export { data };
