function add(a, b) {
    var c;
    c = a + b;
    return c;
}

var result = add(10, 5);
console.log(result);


function fruits(name, colour, brand) {
    this.name = name;
    this.colour = colour;
    this.brand = brand;
    console.log(name);
    console.log(colour);
    console.log(brand);
}

console.log(fruits("abc", "blue", "qwe"));

