Vue.createApp({
    data() {
        return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Frankenstein%27s_monster_%28Boris_Karloff%29.jpg/280px-Frankenstein%27s_monster_%28Boris_Karloff%29.jpg",
            nom : "Frankenstein monster",
            age : 204,
        }
    },
    methods : {
        affichageAleatoire(){
            return Math.random();
        },
        ageDix() {
            return this.age + 10;
        },
        afficherNom() {
            return nom;
        }
    }
}).mount('#app')