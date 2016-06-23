$(document).ready(function(){
  var options = {firstName: "", lastName: "", lovesDogs:null, spiritDog: null, techSkills: [], nontechSkills:[]}

  var candidate = new Candidate(options);

  document.getElementById("coverletter").onsubmit = function candidateInfo(){
    candidate.getInfo();
    candidate.getSkills();
  }
});

var skills=[{name:"Ruby", technical: true},
            {name: "JavaScript", technical: true},
            {name:"Adobe Creative Suite", technical: false},
            {name:"AngularJS", technical: true},
            {name:"HTML5/CSS3", technical: true},
            {name:"MEAN Stack", technical: true},
            {name:"French", technical: false},
            {name:"SASS", technical: true},
            {name:"Bootstrap", technical: true},
            {name:"Graphic Design", technical:false},
            {name:"UI Design", technical: false},
            {name:"Jasmine", technical: true},
            {name:"jQuery", technical: true}]



var Candidate = function(options){
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.lovesDogs = options.lovesDogs;
  this.spiritDog = options.spiritDog;
  this.techSkills = options.techSkills;
  this.nontechSkills = options.nontechSkills;

}

Candidate.prototype.getInfo= function(){
  this.firstName = document.getElementById("firstName").value;
  this.lastName = document.getElementById("lastName").value;
  if (this.firstName === "Lisa" && this.lastName === "Buch"){
    this.lovesDogs = true;
    this.spiritDog = "Saint Bernard"
  }
}

  Candidate.prototype.getSkills = function(){
    for (var i=0; i<skills.length; i++){
      if (skills[i].technical){
          this.techSkills.push(skills[i].name)
      }else{
          this.nontechSkills.push(skills[i].name)
      }
    }
      return this.techSkills;
      return this.nontechSkills;
      return("I would love to discuss this opportunity further with you.")
}

