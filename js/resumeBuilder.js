/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs": [
    {
      "employer": "Dolby Laboratories",
      "title": "Forensic Engineer",
      "location": "San Francisco",
      "dates": "Nov 2012 - Present",
      "description": "Pre-audit analysis –provide strategic product analysis of licensees selected for audits, diligence on cross sales of and between components/technologies of licensees and their related entities under review"
    },
    {
      "employer": "Dolby Laboratories",
      "title": "Applications Engineer",
      "location": "San Francisco",
      "dates": "Dec 2010 - Nov 2012",
      "description": "Test consumer products to make sure that they meet all requirements"
    }
  ]
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedWorkDates);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkDescription);
}

var projects = {
  "projects": [
    {
      "title": "Design an AI agent to solve Raven's Progressive Matrices",
      "dates": 2016,
      "description": "RPM (Raven’s Progressive Matrices) is a geometric problem used for intelligence test. The problem we are facing is to design a knowledge-based AI agent that mimics human cognition to solve RPM problems.",
      "image": []
    },
    {
      "title": "Coffee and Tea Cart (Android App)",
      "dates": 2016,
      "description": "This project is to design an Android App which sells tea and coffee and manages all of its customers.",
      "image": []
    }
  ]
}

var bio = {
  "name": "Huan Chen",
  "role": "Forensic Engineer",
  "welcomeMessage": "Welcome to my page",
  "biopic": "",
  "contacts": {
    "email": "hchen.fred@gmail.com",
    "mobile": "415-741-9464",
    "github": "hchenfred",
    "location": "San Francisco"
  },
  "skills": ["java", "knowledge-based AI", "software development process", "github"]
}

var education = {
  "schools": [
    {
      "name": "University Of York",
      "dates": "2009 - 2010",
      "location": "York, UK",
      "url": "",
      "majors": ["Digital System Design"]
    },
    {
      "name": "Tongji University",
      "dates": "2000 - 2005",
      "location": "Shanghai, China",
      "url": "",
      "majors": ["Electronics"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": "2016 - present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}
