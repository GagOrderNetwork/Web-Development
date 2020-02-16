// Mock Database with some JSON data
const data = {
  Info: [
    {
      number: 411,
      channelName: "Geaux Info",
      episodes: [
        {
          videoId: "RKfLEpI9QZg?",
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
          videoId: "8Xin6dXAmLs?",
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
      number: 103,
      channelName: "Al Jazeera",
      episodes: [
        {
          videoId: "WisZM9CMlTo?",
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
          videoId: "Jlot28Q90HU?",
          title: "Live Bitcoin Trading - Tom Crown"
        }
      ]
    },
    {
      number: 106,
      channelName: "CNA",
      episodes: [
        {
          videoId: "U_XsRZXL2Ic?",
          title: "Breaking news, top stories"
        }
      ]
    },
    {
      number: 107,
      channelName: "BD News",
      episodes: [
        {
          videoId: "KgiwN7ddb2U?",
          title: "Bangladesh News"
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
      channelName: "HSN",
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
      channelName: "HSN2",
      episodes: [
        {
          videoId: "1pepSUbkLVI?",
          title: "HSN2 Live"
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
    },
    {
      number: 206,
      channelName: "Naturalista",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYM4Q9A4G-NNAPZ7Fl7SiXBj&",
          title: "Natural Hair Advice"
        }
      ]
    },
    {
      number: 207,
      channelName: "Home Decor",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYM5fkeGzSSlU3x1MC9mobCj&",
          title: "DIY Home Decor"
        }
      ]
    },
    {
      number: 208,
      channelName: "Geaux Thrifting",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYMrFVh9Cn4o48hTrCtR1pPy&",
          title: "Thrift Flip"
        }
      ]
    },
    {
      number: 209,
      channelName: "Beaute 101",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYNOc0A38gOM1MWXp3hG-I-8&",
          title: "Beaute"
        }
      ]
    },
    {
      number: 210,
      channelName: "Geauxing Home",
      episodes: [
        {
          videoId: "videoseries?list=PLS7PdlYEvYYOFe1mXqR39oXbKcpYupNNx&",
          title: "HomeTalk"
        }
      ]
    }
  ],
  Kids: [
    {
      number: 300,
      channelName: "Paw Patrol",
      episodes: [
        {
          videoId: "XWMwQkiRrGI?",
          title: "Rescue Episode Marathon"
        }
      ]
    },
    {
      number: 301,
      channelName: "FunFunFun",
      episodes: [
        {
          videoId: "ZY5oov1_jbo?",
          title: "LARVA OFFICIAL"
        }
      ]
    },
    {
      number: 302,
      channelName: "Cat Tales",
      episodes: [
        {
          videoId: "PbP0_yYXcHU?",
          title: "Talking Tom and Friends"
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
      channelName: "WB Kids",
      episodes: [
        {
          videoId: "933-mhry0Bc?",
          title: "TOM & JERRY, LOONEY TUNES AND SCOOBY-DOO"
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
          videoId: "kdtkyYid7YA?",
          title: "Chillout Music | EDM 2019"
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
      channelName: "Piano Time!",
      episodes: [
        {
          videoId: "y7e-GC6oGhg?",
          title: "Study Music, Relaxing Music"
        }
      ]
    }
  ],
  "Science, Sports, and Stuff": [
    {
      number: 697,
      channelName: "G.T.R.",
      episodes: [
        {
          videoId: "YqlHSHtVxQI?",
          title: "Geaux Tech Reviews"
        }
      ]
    },
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
      number: 702,
      channelName: "TWiT",
      episodes: [
        {
          videoId: "PUihQudaFEg?",
          title: "Tech Podcast"
        }
      ]
    },
    {
      number: 703,
      channelName: "Nature Two",
      episodes: [
        {
          videoId: "F109TZt3nRc?",
          title: "MTropical Reef Camera powered by EXPLORE.org"
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
          videoId: "vw0Zp_HBGqg?",
          title: "GeauxInterviews"
        }
      ]
    }
  ]
};

export { data };
