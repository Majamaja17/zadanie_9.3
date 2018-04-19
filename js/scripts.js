var test = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var testCharsAfter = test.replace("Velociraptor", dinosaurUpperCased);
var partOfTest = testCharsAfter.slice(0,72);

console.log(partOfTest);