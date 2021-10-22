// # Exo 1
// Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€ 

let magasin = {
    pomme: 1.50,
    ananas: 2.00,
    chocolat: 2.00,
    pain: 1.00,
};

console.log(magasin);

let philippe = {
    argent: 30.00
}

let argent = 30.00
let ask;

course=()=>{
    for (let i in magasin ) {
      let ask = prompt('veut tu acheter un ingredient ?' + i);
      if (ask == "oui") {
          philippe.argent -= magasin[i]
          
      }
      else{
          console.log(`d'accord voici un autre élément`);
      }
      alert(`il vous reste ${philippe.argent}`)
        
        
    }

}
course();
console.log(philippe.argent);


// # Exo 2
// - Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
// - une propriété "objet" par exemple une canne 
// - une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme

// # Exo 2 B
// - Rajouter une method "se_promener" à la vieille_dame, qui change la valeur de l'objet à perdu 

let vieille_dame ={
    age: 80,
    nom:{
        nom:"dumont",
        prenom: "julie",
    },
        
        
        
      Object: "canne",
      moral : "mal",
     
    se_plaindre (a){
        if (this.moral=="mal") {
         console.log("vous me deranger " + a.nom);
            
            
        }
      
        else if (vieille_dame =="bien") {
            console.log("bonjour monsieur" + a.nom);
        }
            
    },
    se_promener(){
        this.Object ="perdu";
        return this.Object;
    }
       
};// 
// # Exo 3
// - Rajouter a vieil_homme une propriété "age","prenom" et une method saluer qui dira bonjour "le prenom de la vieille_dame + son nom de famille" et juste après lancera la fonction se_plaindre de la vieille dame 
// - Rajoutez égalment une methode adoucir, cette method changera le moral de la vieille_dame en "bien" -->

let vieil_homme ={
    nom: "zidane",
    prenom: "zizou",
    age:78,


    saluer(){
        console.log("Bonjour " + vieille_dame.nom.prenom + " " + vieille_dame.nom.nom);
        vieille_dame.se_plaindre(this);

    },    
    adoucir (){
        return vieille_dame.moral="bien";
    }    
}    

      
vieille_dame.se_plaindre(vieil_homme);
console.log(vieille_dame.Object);
console.log(vieille_dame.se_promener());

vieil_homme.saluer();
vieil_homme.adoucir();
vieille_dame.se_plaindre(vieil_homme);














