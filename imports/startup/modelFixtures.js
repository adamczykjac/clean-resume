export default getModelFixtures = () => ({
  "basics" : {
      "name" : "Richard Hendriks",
      "label" : "DOER, DREAM BELIEVER, MAKER",
      // "picture" : "",
      "email" : "richard.hendriks@mail.com",
      "phone" : "(912) 555-4321",
      "picture": "DxnLe4Qm94dto5M9S", // image with this id has to be present in mongo
      "website" : "richardhendricks.com",
      // "summary" : "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
      "location" : {
          // "address" : "2712 Broadway St",
          // "postalCode" : "CA 94115",
          "city" : "San Francisco",
          "countryCode" : "US",
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
      "title": "Digital Compression Pioneer Award",
      "date": "2014-11",
      "awarder": {
        "name": "TechCrunch",
        "website": "http://euxcel.eu",
        "location": {
          "city": "Rio De Janeiro",
          "countryCode": "br"
        }
      },
      "summary": "Proin vitae eleifend nunc. Morbi tristique nisi vitae mi ornare, eu suscipit turpis viverra. Duis eget lorem et mauris interdum convallis. .."
    }
  ],
  "work" : [
      {
          "company" : "Earrly.com",
          "position" : "CEO / President",
          "website" : "http://earrly.com",
          "startDate" : "July 2016",
          "summary" : "Side-project. Beautify your resume via an online service. Technology Stack: ReactJS, MeteorJS, Heroku, i18n, Flat Design, Wireframing, Git Branching Model.",
          "location": {
            "city": "Palo Alto",
            "countryCode": 'us'
          }
      }
  ],
  "education" : [
      {
          "institution" : {
            "name": "Tilburg University",
            "location": {
              "city": "Tilburg",
              "countryCode": "nl"
            }
          },
          "area" : "Information Management",
          "studyType" : "Master of Science",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Advanced Resource Planning, Business Process Integration, \
          Service Oriented Architecture, Enterprise Governance and Digital Transformation"]
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
        "name" : "Soft Skills",
        "keywords" : [
          "Public Speaking",
          "Leadership"
        ]
      },
      {
        "name" : "Programming",
        "keywords" : [
          "Python",
          "Groovy",
          "JavaScript",
          "Java",
          "TDD"
        ]
      },
      {
        "name" : "Other",
        "keywords" : [
          "Git",
          "Photoshop",
          "Illustrator",
        ]
      },
  ],
  "languages" : [
      {
          "language" : "english",
          "fluency" : "native",
          "level" : 8
      },
      {
          "language" : "polish",
          "fluency" : "C2",
          "certificate": true,
          "level" : 7
      }
  ],
  "interests" : [
      {
          "name" : "American Basketball"
      },
      {
          "name" : "Product & UX Design"
      },
      {
          "name" : "Occasional Guitarist"
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
          "name" : "CCC - Compression Codec Certification",
          "authority": "Compression Institute"
      }
  ],
  // "meta" : {
  //     "url" : "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
  //     "dateModified" : 1461755909
  // }
})
