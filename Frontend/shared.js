// shared.js

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBX10ONUiCc9NPrOmjFsC3Dq83u8GxwaK0",
    authDomain: "pawllos-c985f.firebaseapp.com",
    projectId: "pawllos-c985f",
    storageBucket: "pawllos-c985f.firebaseapp.com",
    messagingSenderId: "605956154730",
    appId: "1:605956154730:web:d0df6d427f92b581467113"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  // Add navbar
  const currentPage = location.pathname.split("/").pop();
  const nav = document.createElement("nav");
  nav.style.cssText = `
    background-color: #ff6f61;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  `;

  nav.innerHTML = `
    <div style="font-weight: bold; font-size: 1.3rem;">🐾 Pawllos</div>
    <div>
      <a href="index.html" style="${navStyle('index.html')}">Home</a>
      <a href="add_pet.html" style="${navStyle('add_pet.html')}">Add Pet</a>
      <a href="about.html" style="${navStyle('about.html')}">About</a>
      <a href="profile.html" style="${navStyle('profile.html')}">Profile</a>
      <a href="#" id="logoutBtn" style="margin-left: 1rem; color: white;">Logout</a>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  // Nav style helper
  function navStyle(filename) {
    const base = "margin: 0 0.8rem; color: white; text-decoration: none;";
    return currentPage === filename ? base + " text-decoration: underline;" : base;
  }

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  });
});
