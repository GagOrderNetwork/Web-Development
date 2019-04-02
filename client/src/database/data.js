// Mock Database with some JSON data
const data = {
  Music: [
    {
      number: 8,
      channelName: "G-Soul",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "6i0-cK64gYo",
          title: "BODEGA BAMZ INTERVIEW",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "p13XJByy6Lc",
          title: "ZELOOPERZ INTERVIEW",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "ycAtj4KPHtc",
          title: "DENZEL CURRY INTERVIEW",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "PJj9aaPBqZY",
          title: "HOLYCHILD INTERVIEW",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Sit Downs": [
    {
      number: 5,
      channelName: "Mhmm",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "k8P10o1PIsE",
          title: "The Whitest Kids U' Know interview",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "SL-Rbvb3ra0",
          title: "The Louie Lenny Show: Louie Gets Robbed",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "KpCnproZCqs",
          title: "Black Man WIth White Problems",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "SwSZZ480VHA",
          title: "Double Vision and Madi Vivian Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 6,
      channelName: "FunFunFun",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "Sm1PhZ6S8vU",
          title: "Are You Black?",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "iclfAxdacgQ",
          title: "CollegeFest 2012: Basketball commentary",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "nChsO4OgjZo",
          title: "Louie Bello Interview",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "ic4qxOUZaNc",
          title: "Gag Order Radio interview with Asher Roth",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "A-Soft": [
    {
      number: 9,
      channelName: "Cover",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "x0it-N2PIHE",
          title: "Ashley Sofia - Soulmate",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "5al9ju5cSTU",
          title: "Ashley Sofia - Pull Me Up",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "YUfhWWcqhH8",
          title: "Passafire - Carousel (Live)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "4zQATGP7VGs",
          title: "G-eazy Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Repeat 2": [
    {
      number: 3,
      channelName: "GNConf",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "go3SaMCgexg",
          title: "Rage617 & Relentless freestyle",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "McoBRgdChCE",
          title: "TimeFlies Interview with Gag Order radio Part 1",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "0B05uq_cj6Q",
          title: "G-eazy - Outsider (Live)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "3cSrVjifw84",
          title: "Tayyib Ali Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 2,
      channelName: "FunFunFun",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "g9iuF8a_cnk",
          title: "Yuna Interview",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "xVanqL9s6yY",
          title: "SID SRIRAM INTERVIEW",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "i_C9OG7mViQ",
          title: "Iyadonna Update!",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "N0_8FpHdNM8",
          title: "DO THE CARLTON!!",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Repeat 3": [
    {
      number: 15,
      channelName: "Mhmm",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "k8P10o1PIsE",
          title: "The Whitest Kids U' Know interview",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "SL-Rbvb3ra0",
          title: "The Louie Lenny Show: Louie Gets Robbed",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "KpCnproZCqs",
          title: "Black Man WIth White Problems",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "SwSZZ480VHA",
          title: "Double Vision and Madi Vivian Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Repeat 4": [
    {
      number: 8,
      channelName: "G-Soul",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "6i0-cK64gYo",
          title: "BODEGA BAMZ INTERVIEW",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "p13XJByy6Lc",
          title: "ZELOOPERZ INTERVIEW",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "ycAtj4KPHtc",
          title: "DENZEL CURRY INTERVIEW",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "PJj9aaPBqZY",
          title: "HOLYCHILD INTERVIEW",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 3,
      channelName: "GNConf",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "go3SaMCgexg",
          title: "Rage617 & Relentless freestyle",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "McoBRgdChCE",
          title: "TimeFlies Interview with Gag Order radio Part 1",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "0B05uq_cj6Q",
          title: "G-eazy - Outsider (Live)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "3cSrVjifw84",
          title: "Tayyib Ali Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Repeat 5": [
    {
      number: 3,
      channelName: "AltShiftX",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "IGXE7ajZe4U",
          title:
            "Oddisee Interview at the Middle East Club in Boston (talks about DC, albums and original tracks)",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "qHaT83hXob4",
          title:
            "Mario Jose Interview (talks Pentatonix , Carrie Underwood, his EP, and more)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "nP5MTOTbFvI",
          title:
            "Seether Interview (John Humphrey, the drummer, talks about brands, bands and his family)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "NybdAhY0aZY",
          title:
            "Justin Lawrence Hoyt Skype Interview into the studio with Gag Order Radio Show",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Repeat 6": [
    {
      number: 1,
      channelName: "GSLive",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "Hi6UDdMN6uM",
          title: "bloopers from Grandpa",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "SW0-MetWBzU",
          title: "Sharp Turn Ahead calls via Skype",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "EBDU3UjyaYE",
          title: "B.o.B INTERVIEW (Discusses JOHN DOE, KANYE, NO GENRE 2)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "cKB7PbT849s",
          title:
            "MEG MYERS INTERVIEW (TALKS ABOUT MAKE A SHADOW EP, LA LIFE, PUPPIES, BEING HAPPY)",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 2,
      channelName: "FunFunFun",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "Sgcx3Nbfi0",
          title:
            "Big Tim Kellams calls via Skype into the Gag Order Radio Show studio",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "cfP6ED8gneQ",
          title:
            "Jarell Perry Interview at the Brighton Music Hall in Boston (talks about Yuna and more)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "imM6MP-_IWo",
          title:
            "SoMo Interview (Talks about doing covers, touring, falling on stage, the fans and more)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "m9bw4JnsKfE",
          title: "Bonnie Holliday calls in via Skype",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ]
};

module.exports = data;
