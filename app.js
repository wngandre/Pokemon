///
/// EXERCICE CLASS
///

class Pokemon {                                         // CLASS CREEE

    constructor(name, attack, defense, hp, luck) {      // méthode prédéfinie
        this.name = name;                               // Nom Pokemon (méthode définis)
        this.attack = attack;                           // Dégâts (méthode définis)
        this.defense = defense;                         // Défense (méthode définis)
        this.hp = hp;                                   // PV (méthode définis)
        this.luck = luck;                               // Chance (méthode définis)
    }

    isLucky() {                                         // Fonction isLucky
        let L = Math.random()                           // L est défini par math.random()
        if(L < this.luck) {                             // Si L est inférieur à this.luck
            return true                                 // Renvoie true (vrai) considéré ayant de la chance
        }
        else {
            return false                                // Renvoie false (faux) considéré ayant pas de chance
        }
    }

    attackPokemon() {                                   // Fonction attackPokemon
        let atk = this.attack - this.defense            // Calcule "attack" et "defense" dans "atkdef"
        return atk                                      // Résultat du calcule "attack" et "defense" dans "atkdef"
    }
}


let pipi = new Pokemon("Pipi", 50, 10, 100, 0.9)        // Pokémon(INSTANCE) n°1 Nom : pipi; ATK 50; DEF 10; PV 100; Chance 0,9
let caca = new Pokemon("Caca", 70, 30, 140, 0.2)        // Pokémon(INSTANCE) n°2 Nom : caca; ATK 70; DEF 30; PV 140; Chance 0,2

let atkCaca = 0
let atkPipi = 0

while(caca.hp > 0 && pipi.hp > 0) {

    if (caca.isLucky() === true) {
        atkPipi = caca.attackPokemon(pipi.defense);
        pipi.hp = pipi.hp - atkCaca;
        console.log(caca.name + " a subit " + atkPipi + " de dégât. " + " Il reste " + pipi.hp + " HP à " + pipi.name);
    }
    else {
        console.log(caca.name + " a raté !");
    }
    
    if (pipi.isLucky() === true) {
        atkCaca = pipi.attackPokemon(caca);
        caca.hp = caca.hp - atkPipi;
        console.log(pipi.name + " a subit " + atkCaca + " de dégât. " + " Il reste " + caca.hp + " HP à " + caca.name);
    }
    else {
        console.log(pipi.name + " a raté !");
    }
}

if (caca.hp <= 0) {
    console.log(caca.name + " à été emporté dans la cuvette. " + pipi.name + " à gagné.");
}

if (pipi.hp <= 0) {
    console.log(pipi.name + " à été emporté dans la cuvette. " + caca.name + " à gagné.")
}