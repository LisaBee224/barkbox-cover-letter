describe("a candidate", function(){
  var candidate

  beforeEach(function(){
    options = {firstName: "Lisa", lastName: "Buch", lovesDogs: true, spiritDog: "Saint Bernard", techSkills: [], nontechSkills: []}

    candidate = new Candidate(options);

    skills = [{name: "JavaScript", technical: true},
              {name: "Frisbee", technical:false}]
  });
  it("has a first name", function(){
    expect(candidate.firstName).toEqual("Lisa");
  });
  it("has a last name", function(){
    expect(candidate.lastName).toEqual("Buch");
  });
  describe("does candidate love dogs", function(){
    it("checks candidate's name and verifies if they love dogs", function(){
      expect(candidate.lovesDogs).toBe(true);
       });
      it("reveals candidate's spirit dog", function(){
        expect(candidate.spiritDog).toEqual("Saint Bernard");
    });
  });
  describe("getting candidate's technical skills", function(){
    it("returns an array of skills where technical is true", function(){
      candidate.getSkills();
      expect(candidate.techSkills).toEqual(["JavaScript"]);
    });
  });
      describe("getting candidate's nontechnical skills", function(){
    it("returns an array of skills where technical is false", function(){
      candidate.getSkills();
      expect(candidate.nontechSkills).toEqual(["Frisbee"]);
  });

});
    });