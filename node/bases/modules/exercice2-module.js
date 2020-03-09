console.log("Je suis le module secondaire !");

console.log(__dirname); // affiche le chemin du fichier local du dossier dans lequel il se situe, donc ici 'node/bases/modules' 
console.log(global.process.cwd()); // affiche le chemin du dossier dans lequel le code s'est exécuté, ici le fichier 'exercice2.js' situé dans le dossier 'node/bases'


jeMePresente = ["Je m'appelle Akbar", "J'ai 23 ans", "J'habite à Boulogne-Billancourt"];

class Presentation {

    constructor() {
        for (let i = 0; i < this.presLength; i++) {
            console.log(jeMePresente[i]);
        }
    };

    presLength = jeMePresente.length;
}

module.exports.Presentation = Presentation;
