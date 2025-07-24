# 🐾 PAWLLOS - Pet Adoption Web App

PAWLLOS is a pet adoption web platform where users can:

* Sign up and take a pet preference survey
* View pets that match their personality and preferences
* Adopt pets with a simple application
* Post pets for adoption
* Track their adoption and post history via their profile



## 🚀 How to Run

1. Clone or download the project folder.
2. Open `signup.html` in your browser.
3. Follow the flow:

   * Sign up → Survey → Homepage → Adopt or Add Pets → View Profile

## 🔐 Firebase Setup

This app uses [Firebase](https://firebase.google.com) for:

* 🔐 Authentication (email + password)
* 🔥 Firestore Database (users, pets, adoptions)

You must include this in **every page**:

```html
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"></script>
```

And configure it:

```js
const firebaseConfig = { /* your config */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
```

## 🧠 Key Features

* Firebase Auth for secure login/signup
* Firestore for real-time pet/user/adoption data
* Matching logic: shows pets based on user survey result
* Reusable `shared.js` handles:

  * Firebase setup
  * Navbar with active page highlight
  * Logout functionality

## 🌐 Firebase Hosting (optional)

```bash
npm install -g firebase-tools
firebase login
firebase init  # choose "Hosting", set public dir
firebase deploy
```

## 📝 Credits

Built with 💙 by Harigovind P. Nair
