var bio = {
     "name": "Huan Chen",
     "role": "Senior Forensic Engineer",
     "welcomeMessage": "Hello There",
     "biopic": "images/biopic.JPG",
     "contacts": {
         "email": "hchen.fred@gmail.com",
         "mobile": "415-741-9464",
         "github": "hchenfred",
         "location": "San Francisco"
     },
     "skills": ["java", "knowledge-based AI", "software development process", "github", "HTML/CSS", "jQuery"],
     display: function() {
         var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
         $("#header").prepend(formattedHeaderRole);
         var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
         $("#header").prepend(formattedHeaderName);
         var formmattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
         $("#topContacts").append(formmattedContactsEmail);
         var formmattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
         $("#topContacts").append(formmattedContactsMobile);
         var formmattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
         formmattedContactsGithub = formmattedContactsGithub.replace("%url%", "https://hchenfred.github.io/frontend-nanodegree-resume/");
         $("#topContacts").append(formmattedContactsGithub);
         var formmattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
         $("#topContacts").append(formmattedContactsLocation);

         var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
         $("#header").append(formattedBioPic);
         var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
         $("#header").append(formattedWelcomeMessage);
         $("#header").append(HTMLskillsStart);
         for (var skill in bio.skills) {
             var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
             $("#skills").append(formattedSkill);
         }
     }
 };

 bio.display();


 var education = {
     "schools": [{
         "name": "Georgia Institute of Technology",
         "degree": "master",
         "dates": "2016 - present",
         "location": "Georgia, USA",
         "url": "https://www.omscs.gatech.edu/",
         "majors": ["Computer Science"]
     }, {
         "name": "University Of York",
         "degree": "master",
         "dates": "2009 - 2010 ",
         "location": "York, UK",
         "url": "http://www.york.ac.uk/electronics/postgraduate/taught_masters_degrees/msc_dse/",
         "majors": ["Digital System Engineering"]
     }, {
         "name": "Tongji University",
         "degree": "bachelor",
         "dates": "2000 - 2005 ",
         "location": "Shanghai, China",
         "url": "http://www.tongji.edu.cn/english/",
         "majors": ["Electronics"]
     }],
     "onlineCourses": [{
         "title": "Front-End Web Developer",
         "school": "Udacity",
         "dates": "2016 - present ",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }],
     display: function() {
         for (var school in education.schools) {
             $("#education").append(HTMLschoolStart);
             var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
             $(".education-entry:last").append(formattedSchoolName);
             var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
             $(".education-entry:last").append(formattedSchoolDegree);
             var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
             $(".education-entry:last").append(formattedSchoolDates);
             var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
             $(".education-entry:last").append(formattedSchoolLocation);
             for (var major in education.schools[school].majors) {
                 var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                 $(".education-entry:last").append(formattedSchoolMajor);
             }
         }

         //online courses
         $("#education").append(HTMLonlineClasses);
         for (var course in education.onlineCourses) {
             $("#education").append('<div class="education-entry"></div>');
             var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
             $(".education-entry:last").append(formattedOnlineTitle);
             var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
             $(".education-entry:last").append(formattedOnlineSchool);
             var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
             $(".education-entry:last").append(formattedOnlineDates);
             var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
             $(".education-entry:last").append(formattedOnlineURL);
         }
     }
 };

 education.display();

 var work = {
     "jobs": [{
         "employer": "Dolby Laboratories",
         "title": "Forensic Engineer",
         "location": "San Francisco",
         "dates": "Nov 2012 - Present",
         "description": "Pre-audit analysis –provide strategic product analysis of licensees selected for audits, diligence on cross sales of and between components/technologies of licensees and their related entities under review"
     }, {
         "employer": "Dolby Laboratories",
         "title": "Applications Engineer",
         "location": "San Francisco",
         "dates": "Dec 2010 - Nov 2012",
         "description": "Test consumer products to make sure that they meet all requirements"
     }],
     display: function() {
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
     }
 }

 work.display();

 var projects = {
     "projects": [{
         "title": "Design an AI agent to solve Raven's Progressive Matrices",
         "dates": 2016,
         "description": "RPM (Raven’s Progressive Matrices) is a geometric problem used for intelligence test. The project is to design a knowledge-based AI agent that mimics human cognition to solve RPM problems.",
         "images": ["images/rpm1.png", "images/rpm2.png"]
     }, {
         "title": "Coffee and Tea Cart (Android App)",
         "dates": 2016,
         "description": "This project is to design an Android App which sells tea and coffee and manages all of its customers.",
         "images": []
     }],
     display: function() {
         for (project in projects.projects) {
             $("#projects").append(HTMLprojectStart);
             var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
             $(".project-entry:last").append(formattedProjectTitle);
             var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
             $(".project-entry:last").append(formattedProjectDates);
             var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
             $(".project-entry:last").append(formattedProjectDescription);
             for (var image in projects.projects[project].images) {
                 var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                 $(".project-entry:last").append(formattedProjectImage);
             }

         }
     }
 }

 projects.display();

 var displayFooter = function() {
   var formmattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
   $("#footerContacts").append(formmattedContactsEmail);
   var formmattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#footerContacts").append(formmattedContactsMobile);
   var formmattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   formmattedContactsGithub = formmattedContactsGithub.replace("%url%", "https://hchenfred.github.io/frontend-nanodegree-resume/");
   $("#footerContacts").append(formmattedContactsGithub);
   var formmattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#footerContacts").append(formmattedContactsLocation);
 };

 displayFooter();

 //add internationalizeButton
 $("#main").append(internationalizeButton);

 function inName(firstName, lastName) {
     return firstName + " " + lastName.toUpperCase();
 }

 $(document).click(function(loc) {
     // your code goes here

 });

 $("#mapDiv").append(googleMap);
