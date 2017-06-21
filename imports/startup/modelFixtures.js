export default getModelFixtures = () => ({
  "basics" : {
      "name" : "Jacek Adamczyk",
      "label" : "Team Leader / Product Manager",
      // "picture" : "",
      "email" : "jacek@adamczyk.me",
      "phone" : "+48 514 716 760",
      "website" : "http://adamczyk.me",
      // "summary" : "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
      "location" : {
          // "address" : "2712 Broadway St",
          // "postalCode" : "CA 94115",
          "city" : "Łódź (able to relocate)",
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
      "title": "EU-XCEL Startup Accelerator Finalist",
      "date": "November 2015",
      "awarder": {
        "name": "EU-XCEL",
        "website": "http://euxcel.eu",
        "location": {
          "city": "Cork",
          "countryCode": "ie"
        }
      },
      "summary": "Head of team 'Tamaze' - talent recognition platform. Final preceeded by SCRUM-Week in Munich and 4-month remote acceleration phase. Pitching, Product Design, Business Model."
    },
    {
      "title": "Best Master Thesis Contest - 3rd place",
      "date": "February 2015",
      "awarder": {
        "name": "Telecommunication Engineers Association",
        "website": "http://sit.org.pl",
        "location": {
          "city": "Poznań",
          "countryCode": "pl"
        }
      },
      "summary": "Thesis: 'Bluetooth Low Energy beacons in the concept of modern hospital reception desks.' "
    }
  ],
  "work" : [
      {
          "company" : "Earrly.com",
          "position" : "Maker",
          "website" : "http://earrly.com",
          "startDate" : "July 2016",
          "summary" : "Side-project. Beautify your resume via an online service. Technology Stack: ReactJS, MeteorJS, Heroku, i18n, Flat Design, Wireframing, Git Branching Model.",
          "location": {
            "city": "Łódź",
            "countryCode": "pl",
          }
      },
      {
          "company" : "TomTom",
          "position" : "Associate Software Developer",
          "website" : "http://tomtom.com",
          "startDate" : "September 2016",
          "summary" : "DevOps, Continuous Integration, Infrastructure automation (AWS, Ansible, Python), Test-Driven Development, coordination between geo-distributed (Berlin-Łódź) teams. Co-organized internal Hackathon for 200+ people.",
          "location": {
            "city": "Łódź",
            "countryCode": "pl"
          }
      },
      {
          "company" : "TomTom",
          "position" : "Software Development Intern",
          "website" : "http://tomtom.com",
          "startDate" : "March 2016",
          "endDate" : "June 2016",
          "summary" : "Master Thesis - 'Continuous Integration measured in open-source projects and retained during Version Control System migration'.",
          "location": {
            "city": "Berlin",
            "countryCode": "de"
          }
      },
      {
          "company" : "Allegro.pl",
          "position" : "Junior Web Developer",
          "website" : "http://allegro.pl",
          "startDate" : "April 2014",
          "endDate" : "June 2014",
          "summary" : "Front-end & DevOps, cross-environment deployment. JavaScript, Version Control / Code Review Systems (GIT/Gerrit).",
          "location": {
            "city": "Poznań",
            "countryCode": "pl"
          }
      },
      {
          "company" : "University of Stuttgart - Hydromechanics Dept.",
          "position" : "IT Assistant",
          "website": "http://www.hydrosys.uni-stuttgart.de/index.en.php",
          "startDate" : "May 2013",
          "endDate" : "September 2013",
          "summary": "Maintaining CMWR14 Conference Ticketing platform.",
          "location": {
            "city": "Stuttgart",
            "countryCode": "de"
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
      },
      {
          "institution" : {
            "name": "University of Stuttgart",
            "location": {
              "city": "Stuttgart",
              "countryCode": "de"
            }
          },
          "area" : "Information Technology",
          "studyType" : "Master of Science",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Datawarehousing and Analytics (OLAP), Web Services Orchestration"]
      },
      {
          "institution" : {
            "name": "University of Crete",
            "location": {
              "city": "Heraklion",
              "countryCode": "gr"
            }
          },
          "area" : "Computer Science",
          "studyType" : "Master of Science",
          "startDate" : "2014",
          "endDate" : "2016",
          "courses": ["Big-Data Management (MapReduce, Hadoop), Large Scale Systems \
                      (clustering, load balancing), Digital Economics"]
      },
      {
          "institution" : {
            "name": "Poznań University of Technology",
            "location": {
              "city": "Poznań",
              "countryCode": "pl"
            }
          },
          "area" : "Electronics & Telecommunication",
          "studyType" : "Master of Science",
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
          "Business Models"
        ]
      },
      {
        "name" : "Soft Skills",
        "keywords" : [
          "Public Speaking",
          "Leadership"
        ]
      },
      {
        "name" : "Web Development",
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
          "language" : "polish",
          "fluency" : "native",
          "level" : 8
      },
      {
          "language" : "english",
          "fluency" : "C2",
          "level" : 7,
          "certificate": true
      },
      {
          "language" : "german",
          "fluency" : "B2",
          "level" : 5,
          "certificate": true
      },
      {
          "language" : "spanish",
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
          "name" : "Product & UX Design",
          "icon" : "monitor"
      },
      {
          "name" : "Occasional Guitarist",
          "icon" : "guitar"
      },
      {
          "name" : "Tennis Player",
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
          "name" : "Machine Learning Foundations: A Case Study Approach",
          "authority": "University of Washington"
      },
      {
          "name" : "SCRUM Management Methodology",
          "authority": "Roche Poznań"
      }
  ],
  // "meta" : {
  //     "url" : "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
  //     "dateModified" : 1461755909
  // }
})
