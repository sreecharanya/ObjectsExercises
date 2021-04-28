let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
  
    };

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad",
    species: "	Chimpanzee",
    mass: 	11,
    age: 6
};

let beagle ={
  name:"Leory",
  species:"beagle",
  mass:14,
  age:5
}

let tadigrade ={
  name:"Almina",
  species:"tadigrade",
  mass:0.0000000001,
  age:1
}
// After you have created the other object literals, add the astronautID property to each one.
tadigrade["astronautID"] = 7;
beagle["astronautID"] = 5;
superChimpOne["astronautID"]=3;
superChimpTwo["astronautID"]=2
salamander["astronautID"]=6


let crew =[];
crew.push(superChimpOne,superChimpTwo,salamander,beagle,tadigrade)

function steps() {
      let steps= Math.floor(Math.random()*crew.length);
      return steps;
   }

tadigrade["steps"] = steps();
beagle["steps"] =steps();
superChimpOne["steps"]=steps();
superChimpTwo["steps"]=steps();
salamander["steps"]=steps();
console.log(crew)

// Create an array to hold the animal objects.
// Print out the relevant information about each animal.
function crewReports(object){
  console.log(`${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Their ID is ${object.astronautID}.`)
}

  for(item in crew){
crewReports(crew[item])
  }

// Start an animal race!
function  fitnessTest(crew){
let i=0;
  for(item in crew){
    if(crew.steps===20){
      console.log("***")
      console.log(`${crew[item.name]} took ${i} turns to take 20 steps.` )
    }else{
      crew[item]=steps();
      i++;
    }
  }
}


console.log(fitnessTest(crew));