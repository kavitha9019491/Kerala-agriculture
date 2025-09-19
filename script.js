// Simple login (demo purpose)
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if(user === "admin" && pass === "1234"){
    window.location.href = "plants.html";
  } else {
    document.getElementById("error").innerText = "Invalid login! Try admin/1234";
  }
}

// Go to details page with plant name
function goToDetails(plant) {
  localStorage.setItem("selectedPlant", plant);
  window.location.href = "details.html";
}

// Show plant details
document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("plantName")){
    let plant = localStorage.getItem("selectedPlant");
    document.getElementById("plantName").innerText = plant + " Details";

    let info = {
      "Coconut": "Coconut is Kerala’s main crop. 🌴 Price ~₹35/unit. Water: Moderate. Best season: Summer.",
      "Banana": "Banana grows well in Kerala’s soil. 🍌 Price ~₹50/dozen. Needs regular watering.",
      "Paddy": "Paddy is the staple food crop. 🌾 Price ~₹30/kg. Requires plenty of water.",
      "Pepper": "Kerala is famous for pepper. 🌿 Price ~₹500/kg. Grows in shade.",
      "Rubber": "Rubber plantations thrive in Kerala. 🌳 Price ~₹150/kg latex.",
      "Tea": "Tea is grown in Munnar hills. 🍵 Price ~₹250/kg leaves.",
      "Coffee": "Coffee plantations common in Wayanad. ☕ Price ~₹400/kg beans.",
      "Arecanut": "Arecanut is widely grown. 🌴 Price ~₹300/kg.",
      "Ginger": "Ginger is a spice crop. 🌱 Price ~₹120/kg. Requires moist soil.",
      "Cardamom": "Cardamom is Kerala’s green gold. 🌿 Price ~₹800/kg."
    };

    document.getElementById("plantInfo").innerText = info[plant] || "Details not available.";
  }
});

// Preview uploaded photo
function previewImage(event) {
  let output = document.getElementById("preview");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.style.display = "block";
}
// Fake disease detection (for demo)
function detectDisease() {
  const diseases = [
    "No disease detected ✅",
    "Leaf spot disease 🍂",
    "Bacterial blight 🦠",
    "Root rot 🌱",
    "Yellowing leaves 🍃"
  ];
  let result = diseases[Math.floor(Math.random() * diseases.length)];
  document.getElementById("diseaseResult").innerText = "Result: " + result;
}
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
// Fake AI disease detection for uploaded photo
function analyzePhoto() {
  let preview = document.getElementById("preview");
  let resultBox = document.getElementById("diseaseResult");

  if (!preview.src || preview.style.display === "none") {
    resultBox.innerText = "⚠ Please upload a plant photo first!";
    return;
  }

  // Simulated detection (in real AI you would analyze the image pixels here)
  const diseases = [
    { name: "Leaf Spot Disease 🍂", chance: 0.2 },
    { name: "Bacterial Blight 🦠", chance: 0.2 },
    { name: "Root Rot 🌱", chance: 0.2 },
    { name: "Yellowing Leaves 🍃", chance: 0.2 }
  ];

  // Randomly decide if disease exists
  let hasDisease = Math.random() < 0.5;  // 50% chance

  if (!hasDisease) {
    resultBox.innerText = "✅ No disease detected!";
  } else {
    let disease = diseases[Math.floor(Math.random() * diseases.length)];
    resultBox.innerText = "⚠ Disease detected: " + disease.name;
  }
}
// Start Camera
document.addEventListener("DOMContentLoaded", function(){
  let camera = document.getElementById("camera");
  if(camera){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => { camera.srcObject = stream; })
      .catch(err => { console.error("Camera error: ", err); });
  }
});

// Capture photo from camera
function capturePhoto() {
  let video = document.getElementById("camera");
  let canvas = document.getElementById("canvas");
  let preview = document.getElementById("preview");

  let context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Show captured image
  preview.src = canvas.toDataURL("image/png");
  preview.style.display = "block";
}

// Disease analysis (checks captured image instead of upload)
function analyzePhoto() {
  let preview = document.getElementById("preview");
  let resultBox = document.getElementById("diseaseResult");

  if (!preview.src || preview.style.display === "none") {
    resultBox.innerText = "⚠ Please take a photo first!";
    return;
  }

  // Fake disease detection
  const diseases = [
    "Leaf Spot Disease 🍂",
    "Bacterial Blight 🦠",
    "Root Rot 🌱",
    "Yellowing Leaves 🍃"
  ];

  let hasDisease = Math.random() < 0.5; // 50% chance

  if (!hasDisease) {
    resultBox.innerText = "✅ No disease detected!";
  } else {
    let disease = diseases[Math.floor(Math.random() * diseases.length)];
    resultBox.innerText = "⚠ Disease detected: " + disease;
  }
}