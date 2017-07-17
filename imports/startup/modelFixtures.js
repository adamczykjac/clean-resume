export default getModelFixtures = () => ({
  "basics" : {
      "name" : "Richard Hendriks",
      "label" : "Doer, Dream Believer, Maker",
      "email" : "richard.hendriks@mail.com",
      "phone" : "(912) 555-4321",
      "website" : "http://richardhendricks.com",
      "location" : {
          "address" : "2712 Broadway St",
          "postalCode" : "CA 94115",
          "city" : "San Francisco",
          "countryCode" : "US",
          "region" : "California"
      },
  },
  "awards": [
    {
        "title" : "Digital Compression Pioneer Award",
        "date" : "2014-11-01",
        "awarder": {
          "name": "Techcrunch",
          "website": "http://techcrunch.com",
          "location": {
            "city": "Rio De Janeiro",
            "countryCode": "br"
          }
        },
        "summary" : "Proin vitae eleifend nunc. Morbi tristique nisi vitae mi ornare, eu suscipit turpis viverra. Duis eget lorem et mauris interdum convallis. ."
    },
    {
        "title" : "Golden Raspberry Award",
        "date" : "2014-11-01",
        "awarder": {
          "name": "Film Academy",
          "website": "http://nyfa.edu",
          "location": {
            "city": "New York",
            "countryCode": "us"
          }
        },
        "summary" : "For the best role in the series 'Sillicon Valley'. Aliquam risus sem, posuere a rhoncus sed, semper convallis mi. Ut ornare nec diam sit amet tempor. Praesent sit amet dapibus magna."
    }
  ],
  "work" : [
      {
          "company" : "Pied Piper",
          "position" : "CEO/President",
          "websites" : ["http://piedpiper.com"],
          "startDate" : "2014-01",
          "summary" : "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
          "location": {
            "city": "Palo Alto",
            "countryCode": "us",
          }
      },
      {
          "company" : "Google",
          "position" : "Intern",
          "websites" : ["http://google.com"],
          "startDate" : "2013-12-01",
          "endDate" : "2014-12-01",
          "summary" : "My career-breaking point started here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae velit euismod, fringilla ante at, fringilla nisl.",
          "location": {
            "city": "Mountain View",
            "countryCode": "us",
          }
      },
      {
          "company" : "HochFive",
          "position" : "Copywriter",
          "websites" : ["http://hochfive.com"],
          "startDate" : "2011-12",
          "endDate" : "2013-12",
          "summary" : "Hasellus est odio, cursus in vulputate non, semper sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta mi quis mauris condimentum, id varius massa sodales. Integer efficitur urna vitae urna finibus elementum.",
          "location": {
            "city": "Berlin",
            "countryCode": "de",
          }
      }
  ],
  "education" : [
      {
          "institution" : {
            "name": "University of Harvard",
            "location": {
              "city": "Harvard, IL",
              "countryCode": "us"
            }
          },
          "area" : "Business Administration",
          "studyType" : "Master",
          "startDate" : "2011-06-01",
          "endDate" : "2014-01-01",
          "courses" : [
              "DB1101 - Basic SQL",
              "CS2011 - Java Introduction"
          ]
      },
      {
          "institution" : {
            "name": "Ministry of Silly Walks",
            "location": {
              "city": "London",
              "countryCode": "gb"
            }
          },
          "area" : "Moonwalk",
          "studyType" : "Bachelor",
          "startDate" : "2008-07",
          "endDate" : "2010-01",
          "courses" : [
              "Basic Silly Footsteps",
              "Advanced Mambo-Jambo choreography"
          ]
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
          "name" : "Web Development",
          "keywords" : [
              "HTML",
              "CSS",
              "Javascript"
          ]
      },
      {
          "name" : "Compression",
          "keywords" : [
              "Mpeg",
              "MP4",
              "GIF"
          ]
      },
      {
          "name" : "Digital Marketing",
          "keywords" : [
              "Cold Emails",
              "Effective email campaigns"
          ]
      },
      {
          "name" : "UX Prototyping",
          "keywords" : [
              "Sketch",
              "Wireframing"
          ]
      },
      {
        "name" : "Soft Skills",
        "keywords" : [
          "Public Speaking",
          "Leadership"
        ]
      }
  ],
  "languages" : [
      {
          "language" : "English",
          "fluency" : "Native",
          "level" : 8
      },
      {
          "language" : "German",
          "fluency" : "C1",
          "level" : 6,
            "certificate": true
      },
      {
          "language" : "Spanish",
          "fluency" : "B1",
          "level" : 3
      },
      {
          "language" : "Esperanto",
          "fluency" : "A1",
          "level" : 2
      }
  ],
  "interests" : [
      {
          "name" : "American Basketball",
          "icon" : "basketball"
      },
      {
          "name" : "Product & UX Design",
          "icon" : "monitor"
      },
      {
          "name" : "Distant Traveller",
          "icon" : "airplane"
      },
      {
          "name" : "DIY Lover",
          "icon" : "saw"
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
          "date" : "2015-02-10",
          "expiryDate" : "2020-02-10",
          "authority" : "Compression Institute"
      },
      {
          "name" : "PMP - Project Management Professional",
          "date" : "2017-01-15",
          "expiryDate" : "2020-02-10",
          "authority" : "PMI International"
      }
  ],
  // "meta" : {
  //     "url" : "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
  //     "dateModified" : 1461755909
  // }
})
