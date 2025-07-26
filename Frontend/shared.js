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

  // Build navigation bar
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
    <div id="nav-links">
      <a href="index.html" style="${navStyle('index.html')}">Home</a>
      <a href="add_pet.html" style="${navStyle('add_pet.html')}">Add Pet</a>
      <a href="about.html" style="${navStyle('about.html')}">About</a>
      <a href="profile.html" style="${navStyle('profile.html')}">Profile</a>
      <a href="#" id="logoutBtn" style="margin-left: 1rem; color: white;">Logout</a>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  // Style active nav item
  function navStyle(filename) {
    const base = "margin: 0 0.8rem; color: white; text-decoration: none;";
    return currentPage === filename ? base + " text-decoration: underline;" : base;
  }

  // Logout functionality
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  });

  // Auth listener for redirect protection & admin link injection
  auth.onAuthStateChanged((user) => {
    const allowedPages = ["login.html", "signup.html"];
    const current = location.pathname.split("/").pop();

    if (!user && !allowedPages.includes(current)) {
      window.location.href = "login.html";
    }

    // Show Admin link only to the admin user
    if (user?.email === "www.hariatl10@gmail.com") {
      const adminLink = document.createElement("a");
      adminLink.href = "admin.html";
      adminLink.textContent = "Admin";
      adminLink.style = navStyle('admin.html');
      document.getElementById("nav-links").prepend(adminLink);
    }
  });
});
