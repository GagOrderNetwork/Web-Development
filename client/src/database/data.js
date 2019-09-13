// Mock Database with some JSON data
const data = {
  Music: [
    {
      number: 8,
      channelName: "G-Soul",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/6i0-cK64gYo?rel=0&amp;autoplay=1&controls=0",
          title: "BODEGA BAMZ INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/p13XJByy6Lc?rel=0&amp;autoplay=1&controls=0",
          title: "ZELOOPERZ INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/ycAtj4KPHtc?rel=0&amp;autoplay=1&controls=0",
          title: "DENZEL CURRY INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/PJj9aaPBqZY?rel=0&amp;autoplay=1&controls=0",
          title: "HOLYCHILD INTERVIEW"
        }
      ]
    },
    {
      number: 56,
      channelName: "Shine",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId: "https://player.vimeo.com/video/169472004?autoplay=1",
          title: "Noir et Blanc"
        },
        {
          videoId:
            "https://youtube.com/embed/cv6JVmyAU80?rel=0&amp;autoplay=1&controls=0",
          title: "Louie Bello - Someday (acapella)"
        },
        {
          videoId:
            "https://youtube.com/embed/uPz7UsQmsjM?rel=0&amp;autoplay=1&controls=0",
          title: "De-Lor - Cruel (Acapella)"
        },
        {
          videoId:
            "https://youtube.com/embed/lGkYAKV3-2s?rel=0&amp;autoplay=1&controls=0",
          title: "Sid Sriram - Limitless (Acapella)"
        }
      ]
    },
    {
      number: 41,
      channelName: "Concerts",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/FH4GUan5eA0?rel=0&amp;autoplay=1&controls=0",
          title: "G-eazy - Hang Ten (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/3Q8KJysuqFA?rel=0&amp;autoplay=1&controls=0",
          title: "G-eazy - Endless Summer (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/M5cJvj06J9A?rel=0&amp;autoplay=1&controls=0",
          title: "Aer - Feel I bring (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/_e0RrrLGumQ?rel=0&amp;autoplay=1&controls=0",
          title: "Aer - School (Live)"
        }
      ]
    },
    {
      number: 97,
      channelName: "TBS",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/ubnNSDlRvtM?rel=0&amp;autoplay=1&controls=0",
          title: "Tomorrows Bad Seeds - Vices (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/PJupwo149xI?rel=0&amp;autoplay=1&controls=0",
          title: "Tomorrows Bad Seeds - Nice & Slow, Slow Down"
        },
        {
          videoId:
            "https://youtube.com/embed/MqUJFDrMIf0?rel=0&amp;autoplay=1&controls=0",
          title: "Tomorrows Bad Seeds - Roundtrip (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/yN_Y3DW1ucE?rel=0&amp;autoplay=1&controls=0",
          title: "Tomorrows Bad Seeds - Downlow (Live)"
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
          videoId:
            "https://youtube.com/embed/Ap9f-BR1M7k?rel=0&amp;autoplay=1&controls=0",
          title:
            "Simon Tofield (Simon's Cat) Interview at the Brookline Booksmith"
        },
        {
          videoId:
            "https://youtube.com/embed/SL-Rbvb3ra0?rel=0&amp;autoplay=1&controls=0",
          title: "The Louie Lenny Show: Louie Gets Robbed"
        },
        {
          videoId:
            "https://youtube.com/embed/KpCnproZCqs?rel=0&amp;autoplay=1&controls=0",
          title: "Black Man WIth White Problems"
        },
        {
          videoId:
            "https://youtube.com/embed/SwSZZ480VHA?rel=0&amp;autoplay=1&controls=0",
          title: "Double Vision and Madi Vivian Interview"
        }
      ]
    },
    {
      number: 6,
      channelName: "FunFunFun",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/Sm1PhZ6S8vU?rel=0&amp;autoplay=1&controls=0",
          title: "Are You Black?"
        },
        {
          videoId:
            "https://youtube.com/embed/iclfAxdacgQ?rel=0&amp;autoplay=1&controls=0",
          title: "CollegeFest 2012: Basketball commentary"
        },
        {
          videoId:
            "https://youtube.com/embed/nChsO4OgjZo?rel=0&amp;autoplay=1&controls=0",
          title: "Louie Bello Interview"
        },
        {
          videoId:
            "https://youtube.com/embed/ic4qxOUZaNc?rel=0&amp;autoplay=1&controls=0",
          title: "Gag Order Radio interview with Asher Roth"
        }
      ]
    },
    {
      number: 9,
      channelName: "Cover",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/x0it-N2PIHE?rel=0&amp;autoplay=1&controls=0",
          title: "Ashley Sofia - Soulmate"
        },
        {
          videoId:
            "https://youtube.com/embed/5al9ju5cSTU?rel=0&amp;autoplay=1&controls=0",
          title: "Ashley Sofia - Pull Me Up"
        },
        {
          videoId:
            "https://youtube.com/embed/YUfhWWcqhH8?rel=0&amp;autoplay=1&controls=0",
          title: "Passafire - Carousel (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/4zQATGP7VGs?rel=0&amp;autoplay=1&controls=0",
          title: "G-eazy Interview"
        }
      ]
    },
    {
      number: 30,
      channelName: "Seasonal News",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/kWu-_gu9hSg?rel=0&amp;autoplay=1&controls=0",
          title: "Creepy Santa Clause!"
        },
        {
          videoId:
            "https://youtube.com/embed/IbE9N-6LB3I?rel=0&amp;autoplay=1&controls=0",
          title: "Maye Star Interview"
        },
        {
          videoId:
            "https://youtube.com/embed/4DlCl7WAqho?rel=0&amp;autoplay=1&controls=0",
          title: "Spits Nelson Interview"
        },
        {
          videoId:
            "https://youtube.com/embed/aipe4uwbDq0?rel=0&amp;autoplay=1&controls=0",
          title: "DJ Choppa Dunks Interview"
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
          videoId:
            "https://youtube.com/embed/go3SaMCgexg?rel=0&amp;autoplay=1&controls=0",
          title: "Rage617 & Relentless freestyle"
        },
        {
          videoId:
            "https://youtube.com/embed/McoBRgdChCE?rel=0&amp;autoplay=1&controls=0",
          title: "TimeFlies Interview with Gag Order radio Part 1"
        },
        {
          videoId:
            "https://youtube.com/embed/0B05uq_cj6Q?rel=0&amp;autoplay=1&controls=0",
          title: "G-eazy - Outsider (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/3cSrVjifw84?rel=0&amp;autoplay=1&controls=0",
          title: "Tayyib Ali Interview"
        }
      ]
    },
    {
      number: 2,
      channelName: "FunFunFun",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/g9iuF8a_cnk?rel=0&amp;autoplay=1&controls=0",
          title: "Yuna Interview"
        },
        {
          videoId:
            "https://youtube.com/embed/xVanqL9s6yY?rel=0&amp;autoplay=1&controls=0",
          title: "SID SRIRAM INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/i_C9OG7mViQ?rel=0&amp;autoplay=1&controls=0",
          title: "Iyadonna Update!"
        },
        {
          videoId:
            "https://youtube.com/embed/N0_8FpHdNM8?rel=0&amp;autoplay=1&controls=0",
          title: "DO THE CARLTON!!"
        }
      ]
    },
    {
      number: 15,
      channelName: "Good Kids",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/Ap9f-BR1M7k?rel=0&amp;autoplay=1&controls=0",
          title:
            "Simon Tofield (Simon's Cat) Interview at the Brookline Booksmith"
        },
        {
          videoId:
            "https://youtube.com/embed/SL-Rbvb3ra0?rel=0&amp;autoplay=1&controls=0",
          title: "The Louie Lenny Show: Louie Gets Robbed"
        },
        {
          videoId:
            "https://youtube.com/embed/KpCnproZCqs?rel=0&amp;autoplay=1&controls=0",
          title: "Black Man WIth White Problems"
        },
        {
          videoId:
            "https://youtube.com/embed/SwSZZ480VHA?rel=0&amp;autoplay=1&controls=0",
          title: "Double Vision and Madi Vivian Interview"
        }
      ]
    },
    {
      number: 1,
      channelName: "What Kids Say",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/Hi6UDdMN6uM?rel=0&amp;autoplay=1&controls=0",
          title: "bloopers from Grandpa"
        },
        {
          videoId:
            "https://youtube.com/embed/SW0-MetWBzU?rel=0&amp;autoplay=1&controls=0",
          title: "Sharp Turn Ahead calls via Skype"
        },
        {
          videoId:
            "https://youtube.com/embed/EBDU3UjyaYE?rel=0&amp;autoplay=1&controls=0",
          title: "B.o.B INTERVIEW (Discusses JOHN DOE, KANYE, NO GENRE 2)"
        },
        {
          videoId:
            "https://youtube.com/embed/cKB7PbT849s?rel=0&amp;autoplay=1&controls=0",
          title:
            "MEG MYERS INTERVIEW (TALKS ABOUT MAKE A SHADOW EP, LA LIFE, PUPPIES, BEING HAPPY)"
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
          videoId:
            "https://youtube.com/embed/6i0-cK64gYo?rel=0&amp;autoplay=1&controls=0",
          title: "BODEGA BAMZ INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/p13XJByy6Lc?rel=0&amp;autoplay=1&controls=0",
          title: "ZELOOPERZ INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/ycAtj4KPHtc?rel=0&amp;autoplay=1&controls=0",
          title: "DENZEL CURRY INTERVIEW"
        },
        {
          videoId:
            "https://youtube.com/embed/PJj9aaPBqZY?rel=0&amp;autoplay=1&controls=0",
          title: "HOLYCHILD INTERVIEW"
        }
      ]
    },
    {
      number: 3,
      channelName: "GNConf",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/go3SaMCgexg?rel=0&amp;autoplay=1&controls=0",
          title: "Rage617 & Relentless freestyle"
        },
        {
          videoId:
            "https://youtube.com/embed/McoBRgdChCE?rel=0&amp;autoplay=1&controls=0",
          title: "TimeFlies Interview with Gag Order radio Part 1"
        },
        {
          videoId:
            "https://youtube.com/embed/0B05uq_cj6Q?rel=0&amp;autoplay=1&controls=0",
          title: "G-eazy - Outsider (Live)"
        },
        {
          videoId:
            "https://youtube.com/embed/3cSrVjifw84?rel=0&amp;autoplay=1&controls=0",
          title: "Tayyib Ali Interview"
        }
      ]
    },
    {
      number: 34,
      channelName: "Makeup-Monday",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/K9bLGTym6TI?rel=0&amp;autoplay=1&controls=0",
          title:
            "Asher Roth and Vic from Kids These Days Interview outside the Brighton Music Hall"
        },
        {
          videoId:
            "https://youtube.com/embed/_t7tQWHib8A?rel=0&amp;autoplay=1&controls=0",
          title:
            "G-eazy Interview (talks about Warp Tour, the album critics and upcoming features)"
        },
        {
          videoId:
            "https://youtube.com/embed/eXzAqBHvccA?rel=0&amp;autoplay=1&controls=0",
          title: "Na Palm Interview at CollegeFest 2012"
        },
        {
          videoId:
            "https://youtube.com/embed/KoNEtkhSFSk?rel=0&amp;autoplay=1&controls=0",
          title: "AJR Interview Boston"
        }
      ]
    },
    {
      number: 29,
      channelName: "Eye Liner",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/U2_oTq_44-8?rel=0&amp;autoplay=1&controls=0",
          title:
            "ROCKIE FRESH INTERVIEW (Talks about Tour with G-eazy, debut album, Puma, and MMG)"
        },
        {
          videoId:
            "https://youtube.com/embed/sjbct1rc2-E?rel=0&amp;autoplay=1&controls=0",
          title:
            "LOVELIFE INTERVIEW (Talks about Music Strategy, Touring with The Neighbourhood, Meaning of logo)"
        },
        {
          videoId:
            "https://youtube.com/embed/KSmDog8Apho?rel=0&amp;autoplay=1&controls=0",
          title:
            "The Maine Interview (Talks about double headling with Anberlin, Halloween show, Being Unsigned)"
        },
        {
          videoId:
            "https://youtube.com/embed/kM_VZlDYNig?rel=0&amp;autoplay=1&controls=0",
          title:
            "QuESt INTERVIEW (Talks about Car Accidents, NEATO, the Logic tour, Hip-hop Album of June and Kanye)"
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
          videoId:
            "https://youtube.com/embed/IGXE7ajZe4U?rel=0&amp;autoplay=1&controls=0",
          title:
            "Oddisee Interview at the Middle East Club in Boston (talks about DC, albums and original tracks)"
        },
        {
          videoId:
            "https://youtube.com/embed/qHaT83hXob4?rel=0&amp;autoplay=1&controls=0",
          title:
            "Mario Jose Interview (talks Pentatonix , Carrie Underwood, his EP, and more)"
        },
        {
          videoId:
            "https://youtube.com/embed/nP5MTOTbFvI?rel=0&amp;autoplay=1&controls=0",
          title:
            "Seether Interview (John Humphrey, the drummer, talks about brands, bands and his family)"
        },
        {
          videoId:
            "https://youtube.com/embed/NybdAhY0aZY?rel=0&amp;autoplay=1&controls=0",
          title:
            "Justin Lawrence Hoyt Skype Interview into the studio with Gag Order Radio Show"
        }
      ]
    },
    {
      number: 1,
      channelName: "GSLive",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/Hi6UDdMN6uM?rel=0&amp;autoplay=1&controls=0",
          title: "bloopers from Grandpa"
        },
        {
          videoId:
            "https://youtube.com/embed/SW0-MetWBzU?rel=0&amp;autoplay=1&controls=0",
          title: "Sharp Turn Ahead calls via Skype"
        },
        {
          videoId:
            "https://youtube.com/embed/EBDU3UjyaYE?rel=0&amp;autoplay=1&controls=0",
          title: "B.o.B INTERVIEW (Discusses JOHN DOE, KANYE, NO GENRE 2)"
        },
        {
          videoId:
            "https://youtube.com/embed/cKB7PbT849s?rel=0&amp;autoplay=1&controls=0",
          title:
            "MEG MYERS INTERVIEW (TALKS ABOUT MAKE A SHADOW EP, LA LIFE, PUPPIES, BEING HAPPY)"
        }
      ]
    },
    {
      number: 2,
      channelName: "Function Programming",
      image: "goo.gl/I91jY8",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/Sgcx3Nbfi0?rel=0&amp;autoplay=1&controls=0",
          title:
            "Big Tim Kellams calls via Skype into the Gag Order Radio Show studio"
        },
        {
          videoId:
            "https://youtube.com/embed/cfP6ED8gneQ?rel=0&amp;autoplay=1&controls=0",
          title:
            "Jarell Perry Interview at the Brighton Music Hall in Boston (talks about Yuna and more)"
        },
        {
          videoId:
            "https://youtube.com/embed/imM6MP-_IWo?rel=0&amp;autoplay=1&controls=0",
          title:
            "SoMo Interview (Talks about doing covers, touring, falling on stage, the fans and more)"
        },
        {
          videoId:
            "https://youtube.com/embed/m9bw4JnsKfE?rel=0&amp;autoplay=1&controls=0",
          title: "Bonnie Holliday calls in via Skype"
        }
      ]
    },
    {
      number: 83,
      channelName: "Go Seek",
      image: "goo.gl/aNe2Yj",
      episodes: [
        {
          videoId:
            "https://youtube.com/embed/tAz2qth0yYw?rel=0&amp;autoplay=1&controls=0",
          title: "Grandpa Learns Computers"
        },
        {
          videoId:
            "https://youtube.com/embed/CMOVsJVDA5M?rel=0&amp;autoplay=1&controls=0",
          title: "Reel Big Fish Interview at the Royal in Boston"
        },
        {
          videoId:
            "https://youtube.com/embed/o08NvbqB4B0?rel=0&amp;autoplay=1&controls=0",
          title:
            "LUCY ROSE INTERVIEW (talks about fans, SXSW, the Shivers concept and more)"
        },
        {
          videoId:
            "https://youtube.com/embed/Z2UL0rXwJVw?rel=0&amp;autoplay=1&controls=0",
          title:
            "Jillian Jensen stopped by the studio to play us a new, unreleased track!"
        }
      ]
    }
  ]
};

module.exports = data;
