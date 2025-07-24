
function renderNavbar(currentPage) {
  const nav = document.createElement("nav");
  nav.style.background = "#ff6f61";
  nav.style.padding = "1rem";
  nav.style.display = "flex";
  nav.style.justifyContent = "space-between";
  nav.innerHTML = `
    <div style="font-weight:bold; color:white;">🐾 Pawllos</div>
    <div>
      <a href="index.html" style="color:white; margin-right:1rem; ${currentPage === 'home' ? 'text-decoration: underline;' : ''}">Home</a>
      <a href="add_pet.html" style="color:white; margin-right:1rem; ${currentPage === 'add' ? 'text-decoration: underline;' : ''}">Add Pet</a>
      <a href="profile.html" style="color:white; margin-right:1rem; ${currentPage === 'profile' ? 'text-decoration: underline;' : ''}">Profile</a>
      <a href="about.html" style="color:white; margin-right:1rem; ${currentPage === 'about' ? 'text-decoration: underline;' : ''}">About</a>
      <button onclick="logout()" style="background:transparent; color:white; border:none; cursor:pointer;">Logout</button>
    </div>`;
  document.body.insertBefore(nav, document.body.firstChild);
}

function logout() {
  firebase.auth().signOut().then(() => {
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
}

//  AUTO-LOAD NAVBAR BASED ON PAGE NAME
const page = window.location.pathname.split("/").pop();
if (page.includes("index")) renderNavbar("home");
else if (page.includes("add_pet")) renderNavbar("add");
else if (page.includes("profile")) renderNavbar("profile");
else if (page.includes("about")) renderNavbar("about");

/* ✅ Firebase Hosting Setup Instructions:
1. Install Firebase CLI: npm install -g firebase-tools
2. Login: firebase login
3. Init your project: firebase init (select Hosting)
4. Choose your public directory (e.g., "public" or the folder with your HTML files)
5. Deploy: firebase deploy
*/

/* ✅ FIREBASE SDKs (Required for Every Page)
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"></script>
*/
const firebaseConfig = {
  apiKey: "AIzaSyBX10ONUiCc9NPrOmjFsC3Dq83u8GxwaK0",
  authDomain: "pawllos-c985f.firebaseapp.com",
  projectId: "pawllos-c985f",
  storageBucket: "pawllos-c985f.firebasestorage.app",
  messagingSenderId: "605956154730",
  appId: "1:605956154730:web:d0df6d427f92b581467113"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
