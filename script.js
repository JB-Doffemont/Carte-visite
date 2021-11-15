// Composant racine
const RootComponent = {
  // Data properties
  data() {
    return {
      name: "Doffémont Jean-Bernard",
      compagny: "Bocal Academy",
      job: "Apprenant",
      email: "jeanbernard_doffemont@yahoo.fr",
      phone: "07-84-23-40-01",
      theme: "",
    };
  },

  methods: {
    // Methode pour le changement de couleur de la carte
    switchColor() {
      if (this.theme == "") {
        this.theme = "red";
      } else if (this.theme == "red") {
        this.theme = "blue";
      } else if (this.theme == "blue") {
        this.theme = "green";
      } else {
        this.theme = "";
      }
    },

    // Cette méthode récupère le contenu du champs sur lequel l'èvènement
    // est détecté et modifie la data property correspondante
    changeValue(e) {
      this[e.target.name] = e.target.value;
    },
  },
};

/* Création de l'instance d'application Vue et montage */
Vue.createApp(RootComponent).mount("#root");
