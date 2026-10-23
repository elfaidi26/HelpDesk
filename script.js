
let tickets = [
    {
        id: 1,
        titre: "Connexion Wi-Fi instable",
        description: "Le réseau se déconnecte régulièrement.",
        categorie: "Réseau",
        priorite: "Haute",
    },
    {
        id: 2,
        titre:"Installation d’un logiciel",
        description: "Installer un logiciel sur le poste.",
        categorie: "Logiciel",
        priorite: "Normale",
    },
    {
        id: 3,
        titre: "Clavier défectueux",
        description: "Certaines touches ne fonctionnent plus.",
        categorie: "Matériel",
        priorite: "",
    }

];

let demandeId = 4;


const form = document.getElementById("form_demande");
const liste = document.getElementById("liste_cards")
const compteur = document.getElementById("compteur");



function afficher(){
    liste.innerHTML = "";
    tickets.forEach((ticket)=>{
        const carte = document.createElement("article");
        carte.classList.add("demande_card");
        const top = document.createElement("div");
        top.classList.add("card_top");
        const icon = document.createElement("span");
        icon.classList.add("card_icon");
        icon.textContent="⌁";
        const ref = document.createElement("span");
        ref.classList.add("card_ref");
        ref.textContent=ticket.id;
        top.append(icon,ref);

        const titre = document.createElement("h3");
        titre.textContent=ticket.titre;
        const description = document.createElement("p");
        description.textContent=ticket.description;

        const tags = document.createElement("div");
        tags.classList.add("card_tags");
        const categorie = document.createElement("span");
        categorie.classList.add("card-tag-1");
        categorie.textContent=ticket.categorie;
        const priorite = document.createElement("span");
        priorite.classList.add("card-tag-2");
        priorite.textContent=ticket.priorite;
        tags.append(categorie,priorite);

        const actions = document.createElement("div");
        actions.classList.add("card_actions");
        const btnModifier = document.createElement("button");
        btnModifier.textContent = "Modifier";
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.addEventListener("click", () => supprimerTicket(ticket.id));
        actions.append(btnModifier, btnSupprimer);

        carte.append(top, titre, description, tags, actions);
        liste.append(carte);
    });
    compteur.textContent = tickets.length + " demande" + (tickets.length > 1 ? "s" : "");
}

function AjouterTicket(e){
    e.preventDefault();

    
    const titre = document.getElementById("titre").value;
    const categorie = document.getElementById("categorie").value;
    const priorite = document.getElementById("priorite").value;
    const description = document.getElementById("description").value;

    if(titre === "" || description === ""){
        return;
    }

    const nouveauTicket = {
    id: "HD-" + String(prochainId).padStart(3, "0"),
    titre: titre,
    description: description,
    categorie: categorie,
    priorite: priorite
  };

  tickets.push(nouveauTicket); 
  prochainId++;

  afficher(); 
  form.reset();      
}

form.addEventListener("submit", AjouterTicket);

