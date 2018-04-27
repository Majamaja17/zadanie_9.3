var test = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous periodd.";
var dinosaur = "Triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var testCharsAfter = test.replace("Velociraptor", dinosaurUpperCased);

console.log(testCharsAfter.length/2);

var newText = testCharsAfter.length/2;

console.log(newText, Math.round(newText));

var partOfTest = testCharsAfter.slice(0, Math.round(newText));

console.log(partOfTest);