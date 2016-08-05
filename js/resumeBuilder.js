/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ["java", "knowledge-based AI", "software development process", "github"];
var bio = {
  "name": "Huan Chen",
  "role": "Forensic Engineer",
  "contacts": {
    "email": "hchen.fred@gmail.com",
    "mobile": "415-741-9464",
    "location": "San Francisco"
  },
  "picURL": "",
  "welcomeMsg": "Welcome to my page",
  "skills": skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main").append(formattedRole);
var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", bio.contactInfo);
$("#main").append(formattedContactInfo);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#main").append(formattedWelcomeMsg);
var formattedSkills = HTMLwelcomeMsg.replace("%data%", bio.skills);
$("#main").append(formattedSkills);

var currWork = {
  "position": "Forensic Engineer",
  "employ": "Dolby",
  "year": "2010 - present",
  "location": "San Francisco"
}

var education = {
  "school": "University Of York",
  "year": "2009 - 2010",
  "location": "York, UK"
}
$("#main").append(currWork["position"]);
$("#main").append(education.school);
