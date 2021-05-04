let cat = document.getElementById("cat")
let dog = document.getElementById("dog")
let bird = document.getElementById("bird")

cat.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_4.png"
})

cat.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    bird.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})

dog.addEventListener("mouseover", function() {
    cat.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_3.png"
})

dog.addEventListener("mouseout", function( event ) {
    cat.style.opacity = 1; 
    bird.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})

bird.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    cat.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_2.png"
})

bird.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    cat.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})

// Hovering function for molecules
let mol1 = document.getElementById("mol1")
let mol2 = document.getElementById("mol2")
let mol3 = document.getElementById("mol3")

mol1.addEventListener("mouseover", function() {
    mol2.style.opacity = 0.2;
    mol3.style.opacity = 0.2;
    document.getElementById("molnn").src="figs/intro/molnn_2.png"
})

mol1.addEventListener("mouseout", function( event ) {
    mol2.style.opacity = 1; 
    mol3.style.opacity = 1;
    document.getElementById("molnn").src="figs/intro/molnn_5.png"
})


mol2.addEventListener("mouseover", function() {
    mol1.style.opacity = 0.2;
    mol3.style.opacity = 0.2;
    document.getElementById("molnn").src="figs/intro/molnn_3.png"
})

mol2.addEventListener("mouseout", function( event ) {
    mol1.style.opacity = 1; 
    mol3.style.opacity = 1;
    document.getElementById("molnn").src="figs/intro/molnn_5.png"
})

mol3.addEventListener("mouseover", function() {
    mol1.style.opacity = 0.2;
    mol2.style.opacity = 0.2;
    document.getElementById("molnn").src="figs/intro/molnn_4.png"
})

mol3.addEventListener("mouseout", function( event ) {
    mol1.style.opacity = 1; 
    mol2.style.opacity = 1;
    document.getElementById("molnn").src="figs/intro/molnn_5.png"
})
