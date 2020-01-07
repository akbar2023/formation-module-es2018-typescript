"use strict";


var BatisseurDePyramides = function(hauteur){
  this.forme = "triangulaire";
  this.hauteur = hauteur;
}

// Méthode d'instance (sera exécutable à partir d'1 pyramide)
BatisseurDePyramides.prototype.quelleEstLaHauteur = function(){
  // Ici cette méthode utilise une référence à l'objet qui
  // est créé à l'aide de la fonction constructeur.
  // Cette méthode est faite pour être utilisée
  // sur 1 pyramide qui aura été crée à l'aide de la fonction
  // constructeur
  console.dir(this.hauteur);
}

// Méthode statique (elle ne pourra être appelé qu'a partir de
// de la fonction constructeur)
BatisseurDePyramides.quiEstLaMaitriseDOuvrage = function(){
  console.log("La maitrise d'ouvrage est le Pharaon.");
}

var pyramideDeGizeh  = new BatisseurDePyramides(200);
// l'objet obtenu à l'aide de la fonction constructeur
// BatisseurDePyramide est appelé "instance" de la fonction
// constructeur.

// .quelleEstLaHauter est qualifiée de méthode d'instance (est rattachée au prototype des objet créés à l'aide de la fonction constructeur)
pyramideDeGizeh.quelleEstLaHauteur(); // affiche 200 dans la console.
// 200 c'est la hauteur de la pyramideDeGizeh

// quiEstLaMaitriseDOuvrage est qualifiée de méthode statique (est rattachée à la fonction constructeur)
BatisseurDePyramides.quiEstLaMaitriseDOuvrage(); // affiche "... Pharaon" dans la console
// "... Pharaon" c'est la maitrise d'ouvrage de n'importe quel pyramide.

// En ES6+
// encapsulation à l'aide d'un bloc class
class ConstructeurDePyramides {
  constructor(hauteur){
    this.forme = "triangulaire";
    this.hauteur = hauteur;
  }
  // méthode d'instance (va dans la propriété prototype de la fonction constructeur)
  quelleEstLaHauteur(){
    console.log(this.hauteur);
  }
  // méthode statique (est rattachée à la fonction constructeur)
  static quiEstLaMaitriseDOuvrage(){
    console.log("La maitrise d'ouvrage est le Pharaon");
  }
};

var pyramideDeGizeh2 = new ConstructeurDePyramides(200);

// Méthode d'instance (existe que sur 1 pyramide)
pyramideDeGizeh.quelleEstLaHauteur();

// Méthode statique (n'existe pas pour 1 pyramide)
ConstructeurDePyramides.quiEstLaMaitriseDOuvrage();

/**
// En ES3/5
var ConstructeurDePyramides = (function(){
  // encapsulation dans une IFE
  function ConstructeurDePyramides(hauteur) {
    this.forme = "triangulaire";
    this.hauteur = hauteur;
  }

  // méthode d'instance (va dans la propriété prototype de la fonction constructeur)
  ConstructeurDePyramides.prototype.quelleEstLaHauteur = function(){
    console.log(this.hauteur);
  }
  // méthode statique (est rattachée à la fonction constructeur)
  ConstructeurDePyramides.quiEstLaMaitriseDOuvrage = function(){
    console.log("La maitrise d'ouvrage est le Pharaon");
  }
  return ConstructeurDePyramides;
}()); // Exécution immédiate
*/

