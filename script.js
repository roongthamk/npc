// 1. Import Firebase modules
import { initializeApp }
  from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
}
  from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// 2. Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyDYoKDRbsHl8g5RQ4r_i7DdKX0xvCDIb2c",
  authDomain: "npc-web-app.firebaseapp.com",
  projectId: "npc-web-app",
  storageBucket: "npc-web-app.firebasestorage.app",
  messagingSenderId: "585432361799",
  appId: "1:585432361799:web:b91a5ff4c3b38ddacf7a62",
  measurementId: "G-P75JJWEMNJ"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
// 4. Create Google provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});
  
console.log("Firebase initialized successfully!");

// 5. Handle redirect result
getRedirectResult(auth).catch(console.error);

// 6. Setup login button
const loginButton = document.getElementById("loginButton");

loginButton.onclick = async () => {
  try {
    const result = await signInWithRedirect(auth, provider);
    const user = result.user;

    console.log("Signed in:");
    console.log(user.email);

    document.getElementById("userInfo").textContent =
      "Signed in as: " + user.email;
  
  } catch (error) {
    console.error(error);
  }
};

// 7. Listen for authentication state
//onAuthStateChanged(auth, (user) => {
//  if (!user) {
//    document.getElementById("userInfo").textContent =
//      "Not signed in";
//    return;
//  }
//  
//  const email = user.email;
//  const allowed =
//    email.endsWith("@chula.ac.th") ||
//    email.endsWith("@student.chula.ac.th");
//  
//  if (!allowed) {
//    alert(
//      "Please sign in using your Chulalongkorn account."
//    );
//    signOut(auth);
//    return;
//  }
//  document.getElementById("userInfo").textContent =
//    "Signed in as: " + email;
//});


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
