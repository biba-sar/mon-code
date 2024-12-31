/*function wordBlank(prenom, nom, age, ville){
    var information = "";
    information += "Bonjour je m'appele " + prenom + " " + nom + " " + "j'ai " + age + " ans" + " " + "j'habite a "//-
    + " " + ville;
    return information;
}

console.log(wordBlank("Abibatou", "Cissokho", 21, "Dakar"));

var array = [["Cereale", 2], ["Banane", 5], ["Sucre", 20]];
console.log(array);

function nextInline(arr, item) {
    arr.push(item)

    return arr.shift()
}
var textArray = [1, 2, 3, 4, 5]
console.log(JSON.stringify(textArray));
console.log(nextInline(textArray, 6));
console.log(JSON.stringify(textArray));
//golf code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Boget", "Double Bogey", "Go-Home"]

function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    }else if(strokes <= par - 2 ) {
        return names[1];
    }
    else if(strokes == par - 1) {
        return names[2];
    }
    else if(strokes == par) {
         return names[3];
    }else if(strokes == par + 1) {
        return names[4];
   }else if(strokes == par + 2)  {
        return names[5];
   }else if(strokes == par + 3){
       return names[6]
   }
}
console.log(golfScore(1, 3));

var myPerson = {
    "name": "Abibatou",
    "nom": "Cissokho",
    16: "age"
}
console.log(myPerson["name"])

var nombre = 16;
console.log(myPerson[nombre]);

myPerson["ville"] = "Dakar";
delete myPerson.nom;
console.log(myPerson);

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",   
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContent = myStorage.car.inside["passenger seat"]
console.log(gloveBoxContent);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "pink",
            "red"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var seconTree = myPlants[1].list[1];
console.log(seconTree);

var myArray = [];

var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);
*/
let randomNumber = Math.floor(Math.random() * 10);
let attemps = 5;
function submit() {
    attemps--;
    const inputElement = document.getElementById("guess");
    const result = document.getElementById("result");
    const guess = inputElement.value;
    while (attemps > 0){
    
       if (guess === randomNumber){
            attemps = 0;
            result.innerHTML = "You won";
            result.style.color = 'green';
            break;
        
      } else if (guess > randomNumber){
             result.innerHTML =  "essaie encore, tu est en dessus du nombre!, il vous reste " + attemps + "  temps";
             result.style.color = 'blue';
            break;
      } else {
             result.innerHTML = "essaie encore, tu est au dessous du nombre!, il vous reste " + attemps + "  temps";
             result.style.color = 'blue';
             break;
            
       }
    }
    if (attemps === 0 && guess != randomNumber){
        result.innerHTML = "Perdu, le nombre mystére était " + randomNumber + "!!!";
        result.style.color ='red';
    }
    


}
















































































