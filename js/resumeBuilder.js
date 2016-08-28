var bio = {
    "name": "Huan Chen",
    "role": "",
    "contacts": {
        "mobile": "(415)-741-9464",
        "email": "hchen.fred@gmail.com",
        "github": "https://github.com/hchenfred",
        "location": "San Francisco"
    },
    "welcomeMessage": "Hello There",
    "skills": ["JavaScript", "HTML", "CSS", "jQuery", "GitHub"],
    "biopic": "images/biopic.JPG",
    display: function() {
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedHeaderName, formattedHeaderRole);
        var formmattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formmattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formmattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formmattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formmattedContactsEmail, formmattedContactsMobile, formmattedContactsGithub, formmattedContactsLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBioPic, formattedWelcomeMessage, HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

        $("#footerContacts").append(formmattedContactsEmail, formmattedContactsMobile, formmattedContactsGithub, formmattedContactsLocation);
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Georgia Institute of Technology",
        "location": "Georgia, USA",
        "degree": "master",
        "majors": ["Computer Science"],
        "dates": "2016 - present",
        "url": "https://www.omscs.gatech.edu/"
    }, {
        "name": "University Of York",
        "location": "York, UK",
        "degree": "master",
        "majors": ["Digital System Engineering"],
        "dates": "2009 - 2010 ",
        "url": "http://www.york.ac.uk/electronics/postgraduate/taught_masters_degrees/msc_dse/"
    }, {
        "name": "Tongji University",
        "location": "Shanghai, China",
        "degree": "bachelor",
        "majors": ["Electronics"],
        "dates": "2000 - 2005 ",
        "url": "http://www.tongji.edu.cn/english/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2016 - present ",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);
            for (var majorIndex = 0; majorIndex < education.schools[i].majors.length; majorIndex++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[majorIndex]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }

        //online courses
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append('<div class="education-entry"></div>');
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
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
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkDescription);
        }
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Design an AI agent to solve Raven's Progressive Matrices",
        "dates": "2016",
        "description": "RPM (Raven’s Progressive Matrices) is a geometric problem used for intelligence test. The project is to design a knowledge-based AI agent that mimics human cognition to solve RPM problems.",
        "images": ["images/rpm1.png", "images/rpm2.png"]
    }, {
        "title": "Coffee and Tea Cart (Android App)",
        "dates": "2016",
        "description": "This project is to design an Android App which sells tea and coffee and manages all of its customers.",
        "images": ["images/android.png"]
    }],
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
            for (var imageIndex = 0; imageIndex < projects.projects[i].images.length; imageIndex++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[imageIndex]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

//add internationalizeButton
$("#main").append(internationalizeButton);

$(document).click(function(loc) {
    // your code goes here

});

$("#mapDiv").append(googleMap);
