export default getModelFixtures = () => ({
  "basics" : {
      "name" : "Jacek Adamczyk",
      "label" : "Teamleiter / Produktmanager",
      // "picture" : "",
      "email" : "jacek@adamczyk.me",
      "phone" : "+48 514 716 760",
      "website" : "http://adamczyk.me",
      // "summary" : "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
      "location" : {
          // "address" : "2712 Broadway St",
          // "postalCode" : "CA 94115",
          "city" : "Łódź (mögliche Übersiedelung)",
          "countryCode" : "PL",
          // "region" : "NY"
      },
      // "profiles" : [
      //     {
      //         "network" : "Twitter",
      //         "username" : "neutralthoughts",
      //         "url" : ""
      //     },
      //     {
      //         "network" : "SoundCloud",
      //         "username" : "dandymusicnl",
      //         "url" : "https://soundcloud.com/dandymusicnl"
      //     }
      // ]
  },
  "awards": [
    {
      "title": "EU-XCEL Startup Accelerator Finalteilnehmer",
      "date": "November 2015",
      "awarder": {
        "name": "EU-XCEL",
        "website": "http://euxcel.eu",
        "location": {
          "city": "Cork",
          "countryCode": "ie"
        }
      },
      "summary": "Leiter des Teams 'Tamaze' - der Talent Entdeckung Plattform. Der Final wurde mit ein SCRUM-Woche in Munich und 4-Monate Fernbeschleunigungphase vorangegangen. Verkaufsgerede, Produktdesign, Geschäftsmodell."
    },
    {
      "title": "Masterarbeit Wettbewerbe - die erte und dritte Platz",
      "date": "Februar 2015",
      "awarder": {
        "name": "Stadt Śrem, Ingenieurverein der Telekommunikation",
        "website": "http://sit.org.pl",
        "location": {
          "city": "Poznań",
          "countryCode": "pl"
        }
      },
      "summary": "mit Masterarbeit: 'Bluetooth Low Energy beacons in moderne Krankenhaus-Rezeption.' "
    }
  ],
  "work" : [
      {
          "company" : "Earrly.com",
          "position" : "Produktbauer",
          "websites" : ["http://earrly.com"],
          "startDate" : "Juli 2016",
          "summary" : "Ein Nebenprojekt- die Zusammenfassung mit einem onlineservice verschönen. Benutzte Technologie: ReactJS, MeteorJS, auf Heroku deployed, i18n, UX Prototyp mit Flatdesign.",
          "location": {
            "city": "Łódź",
            "countryCode": "pl",
          }
      },
      {
          "company" : "TomTom",
          "position" : "Software-Entwickler",
          "websites" : ["http://tomtom.com"],
          "startDate" : "September 2016",
          "summary" : "DevOps, Continuous Integration, Automatisierung der Infrastruktur (AWS, Ansible, Python), Test-Driven Development, geografisch verteilt (Berlin-Łódź) Teamskoordination. Organisierung des Hackathons für 200+ Menschen.",
          "location": {
            "city": "Łódź",
            "countryCode": "pl"
          }
      },
      {
          "company" : "TomTom",
          "position" : "Software-Entwicklung Praktikum",
          "websites" : ["http://tomtom.com"],
          "startDate" : "März 2016",
          "endDate" : "Juni 2016",
          "summary" : "Masterarbeit - 'Continuous Integration in open-source Projekte gemäßigt und während die Migration der Versionkontrolle beibehalten'.",
          "location": {
            "city": "Berlin",
            "countryCode": "de"
          }
      },
      {
          "company" : "Allegro.pl",
          "position" : "Junior Web-Entwickler",
          "websites" : ["http://allegro.pl"],
          "startDate" : "April 2014",
          "endDate" : "Juni 2014",
          "summary" : "Front-end & DevOps, cross-environment deployment. JavaScript, Versionkontrolle / Code Überprufung Systems (Bitbucket, Gerrit).",
          "location": {
            "city": "Poznań",
            "countryCode": "pl"
          }
      },
      {
          "company" : "Universät Stuttgart - Lehrstuhl für Hydromechanik.",
          "position" : "IT Assistant",
          "websites": ["http://hydrosys.uni-stuttgart.de"],
          "startDate" : "May 2013",
          "endDate" : "September 2013",
          "summary": "CMWR14 Konferenzticketplatform behalten.",
          "location": {
            "city": "Stuttgart",
            "countryCode": "de"
          }
      }
  ],
  "education" : [
      {
          "institution" : {
            "name": "Tilburg Universität",
            "location": {
              "city": "Tilburg",
              "countryCode": "nl"
            }
          },
          "area" : "Information Management",
          "studyType" : "Master",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Geschäftsprozessintegration",
          "Serviceorientierte Architektur", "Enterprise Governance und Digital Transformation"]
      },
      {
          "institution" : {
            "name": "Universität Stuttgart",
            "location": {
              "city": "Stuttgart",
              "countryCode": "de"
            }
          },
          "area" : "Information Technologie",
          "studyType" : "Master",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Datawarehousing und Analytics (OLAP), Web Services Orchestration"]
      },
      {
          "institution" : {
            "name": "Universität Kreta",
            "location": {
              "city": "Heraklion",
              "countryCode": "gr"
            }
          },
          "area" : "Computer Science",
          "studyType" : "Master",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Big-Data Management (MapReduce, Hadoop), Large Scale Systems \
                      (clustering, load balancing), Digitalökonomie"]
      },
      {
          "institution" : {
            "name": "Technische Universität Poznań",
            "location": {
              "city": "Poznań",
              "countryCode": "pl"
            }
          },
          "area" : "Electronik und Telekommunikation",
          "studyType" : "Master",
          "startDate" : "2012",
          "endDate" : "2014"
      }
  ],
  // "publications" : [
  //     {
  //         "name" : "Video compression for 3d media",
  //         "publisher" : "Hooli",
  //         "releaseDate" : "2014-10-01",
  //         "website" : "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
  //         "summary" : "Innovative middle-out compression algorithm that changes the way we store data."
  //     }
  // ],
  "skills" : [
      {
        "name" : "Business",
        "keywords" : [
          "Enterprise Architecture",
          "BPMN",
          "BPEL",
          "UML",
          "Geschäftsmodelle"
        ]
      },
      {
        "name" : "Soft Skills",
        "keywords" : [
          "Öffentliches Sprechen",
          "Leitung"
        ]
      },
      {
        "name" : "Web Entwicklung",
        "keywords" : [
          "MeteorJS",
          "ReactJS",
          "REST"
        ]
      },
      {
        "name" : "DevOps",
        "keywords" : [
          "Ansible",
          "Docker",
          "Gradle",
          "AWS"
        ]
      },
      {
        "name" : "Programmierung",
        "keywords" : [
          "Python",
          "Groovy",
          "JavaScript",
          "Java",
          "TDD"
        ]
      },
      {
        "name" : "Sonstige",
        "keywords" : [
          "Git",
          "Photoshop",
          "Illustrator",
        ]
      },
  ],
  "languages" : [
      {
          "language" : "polnisch",
          "fluency" : "mutterspr.",
          "level" : 8
      },
      {
          "language" : "englisch",
          "fluency" : "C2",
          "level" : 7,
          "certificate": true
      },
      {
          "language" : "deutsch",
          "fluency" : "B2",
          "level" : 5,
          "certificate": true
      },
      {
          "language" : "spanisch",
          "fluency" : "A2",
          "level" : 3,
          "certificate": true
      }
  ],
  "interests" : [
      {
          "name" : "American Basketball",
          "icon" : "basketball"
      },
      {
          "name" : "Produkt und UX Design",
          "icon" : "monitor"
      },
      {
          "name" : "Gelegentlicher Gitarrist",
          "icon" : "guitar"
      },
      {
          "name" : "Tennis Spieler",
          "icon" : "raquet"
      }
  ],
  // "references" : [
  //     {
  //         "name" : "Erlich Bachman",
  //         "reference" : "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
  //     }
  // ],
  "certifications" : [
      {
          "name" : "Machine Learning Foundations: Ein Fallstudie-Ansatz",
          "authority": "Washington Universität"
      },
      {
          "name" : "SCRUM Management-Methodik",
          "authority": "Roche Poznań"
      }
  ],
  // "meta" : {
  //     "url" : "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
  //     "dateModified" : 1461755909
  // }
})
