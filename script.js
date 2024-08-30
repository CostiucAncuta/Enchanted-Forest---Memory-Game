.allura-regular {
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
}
.sevillana-regular {
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-style: normal;
}

* {
  box-sizing: border-box;
}
html {
  cursor: url(images/cursor.cur), auto;
}
body {
  /* cursor: none; */
  margin: 0;
  background-image: url(images/Y.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#bg-music {
  display: none;
}

.page-title {
  color: aquamarine;
  font-family: "Sevillana", cursive;
  font-weight: normal;
  text-align: center;
  font-size: 3em;
}
.game-description {
  color: aquamarine;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  text-align: center;
  font-size: 2em;
  margin: 30px;
}
.game-info {
  font-family: "Allura", cursive;
  color: aquamarine;
  font-size: 2em;
  display: flex;
  justify-content: space-around;
  padding: 1%;
}

section {
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1%;
  grid-gap: 1%;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  perspective: 800px; /*This creates a 3D space for the card flip effect */
}

.card {
  position: relative;
  height: 200px;
  width: 125px;
  border-radius: 12px;
  transform-style: preserve-3d;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.back,
.face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 12px;
  border-width: 2px;
  border-style: solid;
  pointer-events: none;
  /* backface-visibility: hidden; */
  border-color: rgb(55, 157, 172);
}

.face {
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 2; */
  /* backface-visibility: hidden; */
  /* transition: transform 0.6s ease-in-out; */
  /* Smooth transition for the flip  */
}

.back {
  background-image: url(images/card.back.jpg);
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  position: relative; /* Position relative to contain the pseudo-element */
  overflow: hidden; /* Hide any overflow from the pseudo-element */
}
/* Adding the foggy cloud on top using a pseudo-element */
.back::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(images/backcard.fog.png);
  background-size: cover;
  background-position: center;
  opacity: 0.6; /* Adjust opacity for desired effect 
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Smooth transition 
  z-index: 1; /* Ensure it is above the back image */
}

/* Hover effect to enlarge the foggy cloud 
.back:hover::after {
  transform: scale(1.1); Scales the cloud when hovering 
  opacity: 1; Optional: make the cloud fully visible on hover 
}*/

.toggleCard {
  transform: rotateY(180deg);
}
/* Modal styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
}

.modal-content {
  background-color: rgb(55, 157, 172);
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  text-align: center;
  border-radius: 10px;
}

.close-btn {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#restartBtn {
  padding: 10px 20px;
  margin-top: 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#restartBtn:hover {
  background-color: #45a049;
}
#mute-btn {
  color: rgb(24, 47, 39);
  background-color: aquamarine;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  text-align: center;
  font-size: 2em;
  margin: 30px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  text-align: center;
}
