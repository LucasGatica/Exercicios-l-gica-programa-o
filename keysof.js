var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( atributo of Object.keys(clothingItem) ) {
    console.log("atributo ", atributo, ": valor ", clothingItem[atributo])
}

console.log(Object.keys(clothingItem))
console.log(Object.values(clothingItem))
console.log(Object.entries(clothingItem))


for(entrada of Object.entries(clothingItem)){

    for(var i =0; i<entrada.length;i++){

    if(i==0){
     console.log("atributo ",entrada[i])
    }else{
        console.log("valor ",entrada[i],"\n")
    }

    }
}