// Mock Database with some JSON data
import africanews from "../assets/icons/Africanews.png";
import arzamas from "../assets/icons/arzamas.png";
import balogo from "../assets/icons/balogo.png";
import beatclublogo from "../assets/icons/beatclublogo.png";
import beaute from "../assets/icons/beaute.png";
import bloomht from "../assets/icons/bloomht.png";
import booba from "../assets/icons/booba.jpg";
import br1 from "../assets/icons/br1.png";
import daaitv from "../assets/icons/daaitv.png";
import dubaitvnews from "../assets/icons/dubaitvnews.png";
import dwnews from "../assets/icons/dwnews.png";
import earthtv from "../assets/icons/earth-tv.png";
import ebrutv from "../assets/icons/ebrutv.png";
import explore from "../assets/icons/explore.png";
import falloutradio from "../assets/icons/falloutradio.png";
import franceinfo from "../assets/icons/franceinfo.png";
import gx from "../assets/icons/gx.png";
import hometeam from "../assets/icons/hometeam.png";
import hsn from "../assets/icons/hsn.png";
import liverpooltv from "../assets/icons/liverpooltv.png";
import mathnews from "../assets/icons/mathnews.png";
import nasa1 from "../assets/icons/nasa1.png";
import nasa2 from "../assets/icons/nasa2.png";
import ndtv from "../assets/icons/ndtv.png";
import newsone from "../assets/icons/newsone.png";
import paldoga from "../assets/icons/paldoga.png";
import qvc2 from "../assets/icons/QVC2.png";
import qvc3 from "../assets/icons/QVC3.png";
import r24 from "../assets/icons/R24.png";
import rtarabic from "../assets/icons/RTArabic.png";
import skynews from "../assets/icons/skynewslogo.png";
import somoytv from "../assets/icons/Somoytv.png";
import tech from "../assets/icons/tech.png";
import tomfriends from "../assets/icons/tomfriends.png";
import ubongo from "../assets/icons/Ubongo.png";
import xset from "../assets/icons/xset.png";
import ytnscience from "../assets/icons/ytnscience.png";

const data = {
  Info: [
    {
      number: 1,
      channelName: "Geaux Info",
      channelIcon: gx,
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=c6d90fc6-12f1-45fa-a89b-1ad6be6b7308&autostart=true",
          title: "GeauxInfo",
        },
      ],
    },
    {
      number: 2,
      channelName: "Geaux Spotlight",
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=2ea00799-3b7a-4fb1-8e9e-276eb83edc6a&autostart=true",
          title: "Creator Showcase",
        },
      ],
    },
    {
      number: 3,
      channelName: "Geaux Shorts",
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=f3e73191-573d-4320-8203-f3f870229e42&autostart=true",
          title: "Various Short films",
        },
      ],
    },
  ],
  "News/Business": [
    {
      number: 101,
      channelName: "Getting Started",
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tb1xo",
          title: "GeauxBusiness",
        },
      ],
    },
    {
      number: 102,
      channelName: "Bloomberg HT",
      channelIcon: bloomht,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=uVvzcXNhhVg",
          title: "Bloomberg HT Canli Yayin 24/7",
        },
      ],
    },
    {
      number: 103,
      channelName: "NDTV India",
      channelIcon: ndtv,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=l9ViEIip9q4",
          title: "NDTV News in Hindi",
        },
      ],
    },
    {
      number: 105,
      channelName: "Mathrubhumi News",
      channelIcon: mathnews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=irF-4N_fHjs",
          title: "മലയാളം: മാതൃഭൂമി ന്യൂസ്",
        },
      ],
    },
    {
      number: 107,
      channelName: "EbruTV",
      channelIcon: ebrutv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x67n3k1",
          title: "EbruTV Kenya Live",
        },
      ],
    },
    {
      number: 108,
      channelName: "Liverpool TV",
      channelIcon: liverpooltv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x702gf3",
          title: "Local Liverpool News",
        },
      ],
    },
    {
      number: 109,
      channelName: "SKY News",
      channelIcon: skynews,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Auq9mYxFEE?",
          title: "Sky News",
        },
      ],
    },
    {
      number: 110,
      channelName: "Somoy TV",
      channelIcon: somoytv,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=KgiwN7ddb2U?",
          title: "Somoy TV Bangladesh Live 24/7",
        },
      ],
    },
    {
      number: 112,
      channelName: "FranceInfo",
      channelIcon: franceinfo,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=wwNZKfBLAsc?",
          title: "FranceInfo 24/7",
        },
      ],
    },
    {
      number: 113,
      channelName: "Africanews",
      channelIcon: africanews,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x6i7vf8",
          title: "pan-African media",
        },
      ],
    },
    {
      number: 114,
      channelName: "DaAi World Live",
      channelIcon: daaitv,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x5crdro",
          title: "DaIi TV",
        },
      ],
    },
    {
      number: 115,
      channelName: "NewsOne",
      channelIcon: newsone,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=3e0FsU1N6OQ",
          title: "Наживо останні новини світу та України",
        },
      ],
    },
    {
      number: 116,
      channelName: "Arzamas Academy",
      channelIcon: arzamas,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tsc6y",
          title: "Arzamas.academy",
        },
      ],
    },
    {
      number: 117,
      channelName: "RT Arabic",
      channelIcon: rtarabic,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=3AokIYKBz8I",
          title: "RT Arabic 24/7",
        },
      ],
    },
    {
      number: 118,
      channelName: "Russia 24 News",
      channelIcon: r24,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8T9SFZDP60Q",
          title: "новости России и мира",
        },
      ],
    },
  ],
  "Health/Lifestyle": [
    {
      number: 200,
      channelName: "HSN",
      channelIcon: hsn,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=1ph8qQnjXts?",
          title: "HSN Live",
        },
      ],
    },
    {
      number: 201,
      channelName: "QVC2 Live",
      channelIcon: qvc2,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=_v_wMS-uACE?",
          title: "QVC2 Live",
        },
      ],
    },
    {
      number: 202,
      channelName: "QVC3 Live",
      channelIcon: qvc3,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Qt2c93O1p_c?",
          title: "QVC3 Live",
        },
      ],
    },
    {
      number: 203,
      channelName: "Naturalista",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYM4Q9A4G-NNAPZ7Fl7SiXBj&",
          title: "Natural Hair Advice",
        },
      ],
    },
    {
      number: 204,
      channelName: "Home Decor",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYM5fkeGzSSlU3x1MC9mobCj&",
          title: "DIY Home Decor",
        },
      ],
    },
    {
      number: 205,
      channelName: "Geaux Thrifting",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYMrFVh9Cn4o48hTrCtR1pPy&",
          title: "Thrift Flip",
        },
      ],
    },
    {
      number: 206,
      channelName: "Beaute 101",
      channelIcon: beaute,
      episodes: [
        {
          videoId:
            "https://www.wim.tv/embed/?cast=59a5d503-8874-43be-837e-297524a57e9d&autostart=true",
          title: "Beaute",
        },
      ],
    },
    {
      number: 207,
      channelName: "Geauxing Home",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLS7PdlYEvYYOFe1mXqR39oXbKcpYupNNx&",
          title: "HomeTalk",
        },
      ],
    },
  ],
  Kids: [
    {
      number: 301,
      channelName: "Cat Tales",
      channelIcon: tomfriends,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=PbP0_yYXcHU?",
          title: "Talking Tom and Friends",
        },
      ],
    },
    {
      number: 302,
      channelName: "Booba",
      channelIcon: booba,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=XK8METRgK_U",
          title: "Booba 24/7",
        },
      ],
    },
    {
      number: 303,
      channelName: "Ubungo Kids",
      channelIcon: ubongo,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x7tb1xt",
          title: "Ubungo Kids 24/7",
        },
      ],
    },
  ],
  Music: [
    {
      number: 400,
      channelName: "Geaux Chill",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=5qap5aO4i9A?",
          title: "lofi hip hop radio",
        },
      ],
    },
    {
      number: 401,
      channelName: "Issa Vibe (16+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=L9Q1HUdUMp0?",
          title: "R&B / Hip-Hop Radio",
        },
      ],
    },
    {
      number: 402,
      channelName: "NCM Music Radio",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Oxj2EAr256Y&",
          title: "NCM Live Stream",
        },
      ],
    },
    {
      number: 404,
      channelName: "Geaux HipHop (16+)",
      episodes: [
        {
          videoId: "https://dai.ly/x7tae7z",
          title: "HipHop",
        },
      ],
    },

    {
      number: 405,
      channelName: "Shuffle Dance Music (16+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=qWf-FPFmVw0",
          title: "Best Electro House & Bass Boosted Mix",
        },
      ],
    },
    {
      number: 406,
      channelName: "BritAsia TV Live",
      channelIcon: balogo,
      episodes: [
        {
          videoId: "https://www.dailymotion.com/video/x6s18p8",
          title: "UK and overseas music",
        },
      ],
    },
    {
      number: 407,
      channelName: "Makkah Live",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=QCM2gY65-g8",
          title: "بث مباشر || قناة القرآن الكريم",
        },
      ],
    },
    {
      number: 409,
      channelName: "Roots Reggae Radio (16+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=u6kdx-Q61l0",
          title: "24/7 Reggae Music",
        },
      ],
    },
    {
      number: 410,
      channelName: "Best Radio 1 (16+)",
      channelIcon: br1,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=kGKkUN50R0c",
          title: "Radio Pop Music",
        },
      ],
    },
    {
      number: 411,
      channelName: "DOOM Metal Music",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=dGfdGZ8cH-o",
          title: "24/7 Metal Music SOLITUDE PRODUCTIONS",
        },
      ],
    },
    {
      number: 412,
      channelName: "Best Turkish Music",
      channelIcon: paldoga,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=xtMgvRYIQU8",
          title: "Pal Doğa Radyo - En İyi Türkçe Şarkılar",
        },
      ],
    },
    {
      number: 413,
      channelName: "Rolling Venice",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=ph1vpnYIxJk",
          title: "Venice with classical music",
        },
      ],
    },
    {
      number: 414,
      channelName: "ISS Live Stream",
      channelIcon: nasa2,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=EEIk7gwjgIM",
          title: "ISS with calming music",
        },
      ],
    },
    {
      number: 415,
      channelName: "Relaxing Underwater Music",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=UQRDv3HtmUA",
          title: "Soothing clips & music",
        },
      ],
    },
    {
      number: 416,
      channelName: "The World",
      channelIcon: earthtv,
      episodes: [
        {
          videoId: "hhttps://www.youtube.com/watch?v=JlqrHo-Rsi0",
          title: "EarthTV",
        },
      ],
    },
    {
      number: 417,
      channelName: "Calming Music with nature",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=P7d1H83IcjE",
          title: "World's Most Beautiful Places",
        },
      ],
    },
    {
      number: 418,
      channelName: "Native American Flute & Rain",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=C9v3sZypcn4",
          title: "Relaxing Meditation Sleep Music",
        },
      ],
    },
    {
      number: 419,
      channelName: "Fallout76 Appalachia Radio ",
      channelIcon: falloutradio,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=iZZ-y_z6zLQ",
          title: "24/7 Old World Radio",
        },
      ],
    },
    {
      number: 420,
      channelName: "Gaming Music Mix (16+)",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=eosLoIMzW7E",
          title: "24/7 Live Stream EDM Gaming Music",
        },
      ],
    },
  ],
  "Science & Tech": [
    {
      number: 500,
      channelName: "XSET (16+)",
      channelIcon: xset,
      episodes: [
        {
          videoId: "https://dai.ly/x7wdujr",
          title: "XSET Gaming",
        },
      ],
    },
    {
      number: 501,
      channelName: "Everything Tech",
      channelIcon: tech,
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=cb4d1b62-5f9d-41f0-807c-8c0d2a07fe4c&autostart=true",
          title: "Everything Tech",
        },
      ],
    },
    {
      number: 502,
      channelName: "Geaux Fantasy",
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=a9ae014d-6c64-4260-a3bd-3cc6dd04fec1&autostart=true",
          title: "JuJu: The Web Series",
        },
      ],
    },
    {
      number: 503,
      channelName: "Geaux Tech",
      episodes: [
        {
          videoId:
            "https://www.youtube.com/watch?v=videoseries?list=PLKEbmWOXwpBREqf2dgNleCuCJPe7a7irX&",
          title: "Future Technology",
        },
      ],
    },
    {
      number: 505,
      channelName: "étoile",
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=nA9UZF-SZoQ?",
          title: "Space and Universe",
        },
      ],
    },
    {
      number: 506,
      channelName: "NASA TV",
      channelIcon: nasa1,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=21X5lGlDOfg",
          title: "Official Stream of NASA TV",
        },
      ],
    },
    {
      number: 507,
      channelName: "YTN Science",
      channelIcon: ytnscience,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=GyBgbzdkiH8?",
          title: "Korean Science Channel",
        },
      ],
    },
    {
      number: 508,
      channelName: "Hometeam History",
      channelIcon: hometeam,
      episodes: [
        {
          videoId: "https://www.wim.tv/embed/?cast=b4468c68-25b7-4a49-8612-dcd74445516a&autostart=true",
          title: "African History, culture and worldview",
        },
      ],
    },
  ],
  "Explore on the Geaux": [
    {
      number: 600,
      channelName: "Santa Monica Beach Cam",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=OWbI6WtlI-k",
          title: "Santa Monica Beach Cam by EXPLORE.org",
        },
      ],
    },
    {
      number: 601,
      channelName: "Aquarium of the Pacific",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=F109TZt3nRc?",
          title: "Tropical Reef Camera EXPLORE.org",
        },
      ],
    },
    {
      number: 602,
      channelName: "Raptor Resource Project",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=UmclL6funN8?",
          title: "Decoran Eagles EXPLORE.org",
        },
      ],
    },
    {
      number: 604,
      channelName: "Warrior Canine Connection",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=G0IBqtO1K28",
          title: "Nursery at Warrior Canine Connection Explore.org",
        },
      ],
    },
    {
      number: 605,
      channelName: "Big Cat Rescue",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=8chd0qHhMWQ",
          title: "Big Cat Rescue EXPLORE.org",
        },
      ],
    },
    {
      number: 606,
      channelName: "Kitten Rescue",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=9Iup70E0Ig0",
          title: "Kitten Rescue Cat Cam EXPLORE.org",
        },
      ],
    },
    {
      number: 607,
      channelName: "Aquarium of the Pacific",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=LvfaMv9nbJc",
          title: "Shark Lagoon Cam EXPLORE.org",
        },
      ],
    },
    {
      number: 608,
      channelName: "OrcaLab",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=5jcU2MVkEy8",
          title: "Underwater Cam EXPLORE.org",
        },
      ],
    },
    {
      number: 609,
      channelName: "Wolong Grove",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=Gm3bQVANtVo",
          title: "Panda Cam EXPLORE.org",
        },
      ],
    },
    {
      number: 610,
      channelName: "Donkey Hill",
      channelIcon: explore,
      episodes: [
        {
          videoId: "https://www.youtube.com/watch?v=FUkxWre2yRU",
          title: "Donkey Hill Cam EXPLORE.org",
        },
      ],
    },
  ],
};

export { data };
