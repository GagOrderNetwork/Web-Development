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
    },
    {
      number: 56,
      channelName: "Shine",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "cv6JVmyAU80",
          title: "Louie Bello - Someday (acapella)",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "6Hc8Z3QzKic",
          title: "Amy WInehouse - Valerie (Cover)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "uPz7UsQmsjM",
          title: "De-Lor - Cruel (Acapella)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "lGkYAKV3-2s",
          title: "Sid Sriram - Limitless (Acapella)",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 41,
      channelName: "Concerts",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "FH4GUan5eA0",
          title: "G-eazy - Hang Ten (Live)",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "3Q8KJysuqFA",
          title: "G-eazy - Endless Summer (Live)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "M5cJvj06J9A",
          title: "Aer - Feel I bring (Live)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "_e0RrrLGumQ",
          title: "Aer - School (Live)",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 97,
      channelName: "TBS",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "ubnNSDlRvtM",
          title: "Tomorrows Bad Seeds - Vices (Live)",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "PJupwo149xI",
          title: "Tomorrows Bad Seeds - Nice & Slow, Slow Down",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "MqUJFDrMIf0",
          title: "Tomorrows Bad Seeds - Roundtrip (Live)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "yN_Y3DW1ucE",
          title: "Tomorrows Bad Seeds - Downlow (Live)",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  "Business/News": [
    {
      number: 5,
      channelName: "BNB",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "Ap9f-BR1M7k",
          title:
            "Simon Tofield (Simon's Cat) Interview at the Brookline Booksmith",
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
    },
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
    },
    {
      number: 30,
      channelName: "Seasonal News",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "kWu-_gu9hSg",
          title: "Creepy Santa Clause!",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "IbE9N-6LB3I",
          title: "Maye Star Interview",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "4DlCl7WAqho",
          title: "Spits Nelson Interview",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "aipe4uwbDq0",
          title: "DJ Choppa Dunks Interview",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  Kids: [
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
    },
    {
      number: 15,
      channelName: "Good Kids",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "Ap9f-BR1M7k",
          title:
            "Simon Tofield (Simon's Cat) Interview at the Brookline Booksmith",
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
      number: 1,
      channelName: "What Kids Say",
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
    }
  ],
  "Fashion/Beauty": [
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
    },
    {
      number: 34,
      channelName: "Makeup-Monday",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "K9bLGTym6TI",
          title:
            "Asher Roth and Vic from Kids These Days Interview outside the Brighton Music Hall",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "_t7tQWHib8A",
          title:
            "G-eazy Interview (talks about Warp Tour, the album critics and upcoming features)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "eXzAqBHvccA",
          title: "Na Palm Interview at CollegeFest 2012",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "KoNEtkhSFSk",
          title: "AJR Interview Boston",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    },
    {
      number: 29,
      channelName: "Eye Liner",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "U2_oTq_44-8",
          title:
            "ROCKIE FRESH INTERVIEW (Talks about Tour with G-eazy, debut album, Puma, and MMG)",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "sjbct1rc2-E",
          title:
            "LOVELIFE INTERVIEW (Talks about Music Strategy, Touring with The Neighbourhood, Meaning of logo)",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "KSmDog8Apho",
          title:
            "The Maine Interview (Talks about double headling with Anberlin, Halloween show, Being Unsigned)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "kM_VZlDYNig",
          title:
            "QuESt INTERVIEW (Talks about Car Accidents, NEATO, the Logic tour, Hip-hop Album of June and Kanye)",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ],
  Sports: [
    {
      number: 3,
      channelName: "Computer Bias",
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
    },
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
      channelName: "Function Programming",
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
    },
    {
      number: 83,
      channelName: "Go Seek",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId: "tAz2qth0yYw",
          title: "Grandpa Learns Computers",
          runtime: 30,
          start: 16,
          end: 17
        },
        {
          videoId: "CMOVsJVDA5M",
          title: "Reel Big Fish Interview at the Royal in Boston",
          runtime: 30,
          start: 17,
          end: 18
        },
        {
          videoId: "o08NvbqB4B0",
          title:
            "LUCY ROSE INTERVIEW (talks about fans, SXSW, the Shivers concept and more)",
          runtime: 30,
          start: 18,
          end: 19
        },
        {
          videoId: "Z2UL0rXwJVw",
          title:
            "Jillian Jensen stopped by the studio to play us a new, unreleased track!",
          runtime: 30,
          start: 20,
          end: 23
        }
      ]
    }
  ]
};

module.exports = data;
