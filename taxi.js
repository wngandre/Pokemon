class Humain {
    
    constructor(santeMentale, name) {
        this.santeMentale = 10;
        this.name = name;
    }
}

let John = new Humain("John");

let music = [
    "Wejdene - Annissa",
    "GAZO - DIE",
    "KOBA LA D - Train de vie",
    "Ninho - La vie qu'on mène",
    "4keus Gang - Bienvenue au Mail (La Courneuve)"
]

while(John.santeMentale > 0) {
    let musicRandom = Math.floor(Math.random() * 4) 
    John.santeMentale --;
        if(parseInt(musicRandom) === 0) {
            console.log("Fais chier, encore cette musique la , je dois encore changer de taxi à cause de cette musique");
        } else {
            console.log("Pas mal cette musique : " + music[musicRandom])
        } console.log(John.santeMentale)
}

if(John.santeMentale === 0) {
    console.log("EXPLOSION")
}
if(John.santeMentale > 0) {
    console.log("Bien arrivé");
}


/// J'ai pas réussi à le faire arriver, il ne fait que "EXPLOSER" je comprend pas.
/// Je sais pas où est le probleme.
/// Soyez indulgent s'il vous plaît. 