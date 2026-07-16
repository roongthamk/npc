const CATEGORIES = [

  {
    title: "นิสิต",
    description: "Students",
    url: "https://script.google.com/a/macros/chula.ac.th/s/AKfycbwUS7Zmasb_J6USTMKTq1Kff6_aKCQ18prfijhhKazvx65vmo8znx-Y68ZBpfFA_GHe/exec",
    enabled: true
  },

  {
    title: "บุคลากร",
    description: "Staff",
    url: "https://script.google.com/a/macros/chula.ac.th/s/AKfycbxzB1fI0OhO0mUJykAu6CO6qi4jtJlHFhKRACYgwn01lznIrMcWcippyIu-5e_CjJTt0g/exec",
    enabled: true
  },

  {
    title: "แอดมิน",
    description: "Admin",
    url: "https://script.google.com/a/macros/chula.ac.th/s/AKfycby28zFW0SctDrDp4Sd9f_Qu-X9yR3UNrOKnmVuveDB508YZG2PzQlt8ie-CIkIMqJ75wA/exec",
    enabled: true
  }

];

function renderCategories(categories) {
  const container = document.createElement("div");
  container.className = "grid";

  categories.forEach(category => {
    let card;
    if(category.enabled){
      card = document.createElement("a");
      card.href = category.url;
      card.className = "card card-link";
    }
    else{
      card = document.createElement("div");
      card.className = "card card-disabled";
    }

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = category.title;

    const desc = document.createElement("div");
    desc.className = "description";
    desc.textContent = category.description;

    card.appendChild(title);
    card.appendChild(desc);

    container.appendChild(card);
  });

  document
    .getElementById("content")
    .replaceChildren(container);
}

renderCategories(CATEGORIES);
