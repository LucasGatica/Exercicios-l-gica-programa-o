const cores = ['vermelho','laranja','verde']
for (let cor of cores) {
    console.log(cor);
}


//diferenças entre keys values e entries

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']



const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']



const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
//[ ['speed', 400], ['color', 'magenta'] ]