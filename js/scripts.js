var test = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var testCharsAfter = test.replace("Velociraptor", "triceratops");
var partOfTest = test.slice(0,61);

console.log(partOfTest);