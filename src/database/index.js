// Mock Database with some JSON data
import africanews from "../assets/icons/Africanews.png";
import arzamas from "../assets/icons/arzamas.png";
import bean from "../assets/icons/bean.png";
import beatclublogo from "../assets/icons/beatclublogo.png";
import beaute from "../assets/icons/beaute.png";
import bloomht from "../assets/icons/bloomht.png";
import daaitv from "../assets/icons/daaitv.png";
import dubaitvnews from "../assets/icons/dubaitvnews.png";
import dwnews from "../assets/icons/dwnews.png";
import ebrutv from "../assets/icons/ebrutv.png";
import farmers from "../assets/icons/farmers.png";
import franceinfo from "../assets/icons/franceinfo.png";
import gaming from "../assets/icons/gaming.png";
import gx from "../assets/icons/gx.png";
import hsn from "../assets/icons/hsn.png";
import jazeera from "../assets/icons/jazeera.png";
import liverpooltv from "../assets/icons/liverpooltv.png";
import mathnews from "../assets/icons/mathnews.png";
import pawpatrol from "../assets/icons/pawpatrol.png";
import qvc2 from "../assets/icons/QVC2.png";
import qvc3 from "../assets/icons/QVC3.png";
import r24 from "../assets/icons/R24.png";
import rtarabic from "../assets/icons/RTArabic.png";
import skynews from "../assets/icons/skynewslogo.png";
import somoytv from "../assets/icons/Somoytv.png";
import suchtv from "../assets/icons/suchtv.png";
import tech from "../assets/icons/tech.png";
import tomfriends from "../assets/icons/tomfriends.png";
import tvnet from "../assets/icons/tvnet.png";
import vestifm from "../assets/icons/vestifm.png";



const data = {
  Info: [
    {
      number: 411,
      channelName: "Geaux Info",
      channelIcon: gx,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7t6quu",
          title: "GeauxInfo"
        }
      ]
    },
    {
      number: 412,
      channelName: "Geaux Spotlight",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tuc2j",
          title: "Creator Showcase"
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
      number: 101,
      channelName: "Bloomberg HT",
      channelIcon: bloomht,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=uVvzcXNhhVg",
          title: "Bloomberg HT Canli Yayin 24/7"
        }
      ]
    },
    {
      number: 101,
      channelName: "TVNet Canli Yayin",
      channelIcon: tvnet,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Cn7I6iBJ6nY",
          title: "Türkiye'nin yeni medya ekranı"
        }
      ]
    },
    {
      number: 102,
      channelName: "DW News",
      channelIcon: dwnews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=NvqKZHpKs-g?",
          title: "DW News Live"
        }
      ]
    },
    {
      number: 103,
      channelName: "Dubai TV",
      channelIcon: dubaitvnews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=1X0OYu8NMOo",
          title: "DubaiTV Live 24/7"
        }
      ]
    },
    {
      number: 103,
      channelName: "Mathrubhumi News",
      channelIcon: mathnews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=irF-4N_fHjs",
          title: "മലയാളം: മാതൃഭൂമി ന്യൂസ്"
        }
      ]
    },
    {
      number: 103,
      channelName: "Al Jazeera English",
      channelIcon: jazeera,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=2EppLNonncc&",
          title: "Al Jazeera English Live 24/7"
        }
      ]
    },
    {
      number: 104,
      channelName: "EbruTV",
      channelIcon: ebrutv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x67n3k1",
          title: "EbruTV Kenya Live"
        }
      ]
    },
    {
      number: 105,
      channelName: "Liverpool TV",
      channelIcon: liverpooltv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x702gf3",
          title: "Local Liverpool News"
        }
      ]
    },
    {
      number: 106,
      channelName: "SKY News",
      channelIcon: skynews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Auq9mYxFEE?",
          title: "Sky News"
        }
      ]
    },
    {
      number: 107,
      channelName: "Somoy TV",
      channelIcon: somoytv,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=KgiwN7ddb2U?",
          title: "Somoy TV Bangladesh Live 24/7"
        }
      ]
    },
    {
      number: 108,
      channelName: "Such TV News",
      channelIcon: suchtv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x72hrde",
          title: "Pakistan News"
        }
      ]
    },
    {
      number: 109,
      channelName: "FranceInfo",
      channelIcon: franceinfo,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=wwNZKfBLAsc?",
          title: "FranceInfo 24/7"
        }
      ]
    },
    {
      number: 110,
      channelName: "Africanews",
      channelIcon: africanews,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x6i7vf8",
          title: "pan-African media"
        }
      ]
    },
    {
      number: 111,
      channelName: "DaAi World Live",
      channelIcon: daaitv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x5crdro",
          title: "DaIi TV"
        }
      ]
    },
    {
      number: 112,
      channelName: "KTN Farmers TV",
      channelIcon: farmers,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7opfez",
          title: "KTN Farmers TV Live Stream"
        }
      ]
    },
    {
      number: 113,
      channelName: "Arzamas Academy",
      channelIcon: arzamas,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tsc6y",
          title: "Arzamas.academy"
        }
      ]
    },
    {
      number: 114,
      channelName: "RT Arabic",
      channelIcon: rtarabic,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=3AokIYKBz8I",
          title: "RT Arabic 24/7"
        }
      ]
    },
    {
      number: 115,
      channelName: "Russia 24 News",
      channelIcon: r24,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8T9SFZDP60Q",
          title: "новости России и мира"
        }
      ]
    },
    {
      number: 117,
      channelName: "Vesti FM Online 24/7",
      channelIcon: vestifm,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=zUIE8CGN8Ok",
          title: "Вести ФМ онлайн: Прямой эфир"
        }
      ]
    }
  ],
  "Health/Lifestyle": [
    {
      number: 200,
      channelName: "HSN",
      channelIcon: hsn,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=1ph8qQnjXts?",
          title: "HSN Live"
        }
      ]
    },
    {
      number: 202,
      channelName: "QVC2 Live",
      channelIcon: qvc2,
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
      channelIcon: qvc3,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Qt2c93O1p_c?",
          title: "QVC3 Live"
        }
      ]
    },
    {
      number: 204,
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
      number: 205,
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
      number: 206,
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
      number: 207,
      channelName: "Beaute 101",
      channelIcon: beaute,
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYNOc0A38gOM1MWXp3hG-I-8&",
          title: "Beaute"
        }
      ]
    },
    {
      number: 208,
      channelName: "GeauxGaming (13+)",
      channelIcon: gaming,
      episodes: [
        {
          videoId:
            "https://www.dailymotion.com/video/x7tb31h",
          title: "Geauxing Gaming"
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
      channelName: "Mr. Bean",
      channelIcon: bean,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Ue0xaq1Q-B4",
          title: "Best of Mr. Bean"
        }
      ]
    },
    {
      number: 301,
      channelName: "Cat Tales",
      channelIcon: tomfriends,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=PbP0_yYXcHU?",
          title: "Talking Tom and Friends"
        }
      ]
    },
    {
      number: 302,
      channelName: "Booba",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=XK8METRgK_U",
          title: "Booba 24/7"
        }
      ]
    },
    {
      number: 303,
      channelName: "PAW Patrol",
      channelIcon: pawpatrol,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=mF9QMYaaZzo",
          title: "Ultimate Rescue 24/7"
        }
      ]
    },
    {
      number: 304,
      channelName: "Kids Songs",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=VyPDo5dieZU",
          title: "Dave and Ava"
        }
      ]
    },
    {
      number: 305,
      channelName: "GeauxKids",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tb1xt",
          title: "GeauxKids 24/7"
        }
      ]
    },
    {
      number: 306,
      channelName: "WB Kids",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=BRkQ-ZGiNbc?",
          title: " Classic TOM & JERRY"
        }
      ]
    },
  ],
  Music: [
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
      channelName: "NCM Music Radio",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Oxj2EAr256Y&",
          title: "NCM Live Stream"
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
      channelName: "StewShowcase (13+)",
      channelIcon: beatclublogo,
      episodes: [
        {
          videoId: "https://dai.ly/x7tae7z",
          title: "The Stew Showcase"
        }
      ]
    },

    {
      number: 406,
      channelName: "Shuffle Dance Music 2020",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=qWf-FPFmVw0",
          title: "Best Electro House & Bass Boosted Mix"
        }
      ]
    },
    {
      number: 407,
      channelName: "BritAsia TV Live",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x6s18p8",
          title: "UK and overseas music"
        }
      ]
    },
    {
      number: 407,
      channelName: "Makkah Live",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=QCM2gY65-g8",
          title: "بث مباشر || قناة القرآن الكريم"
        }
      ]
    },
    {
      number: 408,
      channelName: "K-POP IDOL",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=lbRN7gJm4lo",
          title: "실시간 온라인 전용 아이돌 채널"
        }
      ]
    },
    {
      number: 409,
      channelName: "Roots Reggae Radio (13+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=u6kdx-Q61l0",
          title: "24/7 Reggae Music"
        }
      ]
    },
    {
      number: 410,
      channelName: "Best Radio 1 (13+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=kGKkUN50R0c",
          title: "Radio Pop Music"
        }
      ]
    },
    {
      number: 411,
      channelName: "DOOM Metal Music",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=dGfdGZ8cH-o",
          title: "24/7 Metal Music SOLITUDE PRODUCTIONS"
        }
      ]
    },
    {
      number: 412,
      channelName: "Best Turkish Music",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=xtMgvRYIQU8",
          title: "Pal Doğa Radyo - En İyi Türkçe Şarkılar"
        }
      ]
    },
    {
      number: 413,
      channelName: "Rolling Venice",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=ph1vpnYIxJk",
          title: "Venice with classical music"
        }
      ]
    },
    {
      number: 414,
      channelName: "ISS Live Stream",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=EEIk7gwjgIM",
          title: "ISS with calming music"
        }
      ]
    },
    {
      number: 415,
      channelName: "Relaxing Underwater Music",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=UQRDv3HtmUA",
          title: "Soothing clips & music"
        }
      ]
    },
    {
      number: 416,
      channelName: "The World",
      episodes: [
        {
          videoId: "hhttps://www.youtube.com/watch?v=JlqrHo-Rsi0",
          title: "EarthTV"
        }
      ]
    },
    {
      number: 417,
      channelName: "Calming Music with nature",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=P7d1H83IcjE",
          title: "World's Most Beautiful Places"
        }
      ]
    },
    {
      number: 418,
      channelName: "Native American Flute & Rain",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=C9v3sZypcn4",
          title: "Relaxing Meditation Sleep Music"
        }
      ]
    }
  ],
  "Science & Fantasy": [
    {
      number: 500,
      channelName: "Everything Tech",
      channelIcon: tech,
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
      channelName: "Live Cab View",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=lu1AVjJUCBo",
          title: "Train cab View 24/7"
        }
      ]
    },
    {
      number: 504,
      channelName: "étoile",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=nA9UZF-SZoQ?",
          title: "Space and Universe"
        }
      ]
    },
    {
      number: 505,
      channelName: "NASA TV",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=21X5lGlDOfg",
          title: "Official Stream of NASA TV"
        }
      ]
    },
    {
      number: 506,
      channelName: "YTN Science",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=GyBgbzdkiH8?",
          title: "Korean Science Channel"
        }
      ]
    }
  ],
  "Explore on the Geaux": [
    {
      number: 600,
      channelName: "Santa Monica Beach Cam",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=OWbI6WtlI-k",
          title: "Santa Monica Beach Cam by EXPLORE.org"
        }
      ]
    },
    {
      number: 601,
      channelName: "Aquarium of the Pacific",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=F109TZt3nRc?",
          title: "Tropical Reef Camera EXPLORE.org"
        }
      ]
    },
    {
      number: 602,
      channelName: "Raptor Resource Project",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=UmclL6funN8?",
          title: "Decoran Eagles EXPLORE.org"
        }
      ]
    },
    {
      number: 603,
      channelName: "Guide Dogs of America",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=f12EgkREedY",
          title: "Guide Dogs Mobility Cam EXPLORE.org"
        }
      ]
    },
    {
      number: 604,
      channelName: "Warrior Canine Connection",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=G0IBqtO1K28",
          title: "Nursery at Warrior Canine Connection Explore.org"
        }
      ]
    },
    {
      number: 605,
      channelName: "Big Cat Rescue",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8chd0qHhMWQ",
          title: "Big Cat Rescue EXPLORE.org"
        }
      ]
    },
    {
      number: 606,
      channelName: "Kitten Rescue",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Iup70E0Ig0",
          title: "Kitten Rescue Cat Cam EXPLORE.org"
        }
      ]
    },
    {
      number: 607,
      channelName: "Aquarium of the Pacific",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=LvfaMv9nbJc",
          title: "Shark Lagoon Cam EXPLORE.org"
        }
      ]
    },
    {
      number: 608,
      channelName: "OrcaLab",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=5jcU2MVkEy8",
          title: "Underwater Cam EXPLORE.org"
        }
      ]
    },
    {
      number: 609,
      channelName: "Wolong Grove",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Gm3bQVANtVo",
          title: "Panda Cam EXPLORE.org"
        }
      ]
    },
    {
      number: 610,
      channelName: "Donkey Hill",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=FUkxWre2yRU",
          title: "Donkey Hill Cam EXPLORE.org"
        }
      ]
    },
  ]
};

export { data };
