
function generateBio() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const tone = document.getElementById("tone").value;
  const preview = document.getElementById("preview").value;

  if (!name || !profession) {
    document.getElementById("output").innerText = "Please enter your name and profession.";
    return;
  }

  let bio = "";

  switch (tone) {
    case "Friendly":
      bio = `Hi, I'm ${name}, a ${profession} who loves helping people and making connections.`;
      break;
    case "Luxury":
      bio = `${name} | Curating refined ${profession} experiences for premium clients.`;
      break;
    case "Corporate":
      bio = `${name}, a results-driven ${profession} with a focus on efficiency and impact.`;
      break;
    case "Bold":
      bio = `I'm ${name}, a fearless ${profession} challenging the ordinary with every move.`;
      break;
    case "Youthful":
      bio = `Hey there! I'm ${name}, a ${profession} bringing fresh vibes and creative energy.`;
      break;
    case "Spiritual":
      bio = `I'm ${name}, a purpose-led ${profession} devoted to meaningful impact and inner growth.`;
      break;
    default:
      bio = `Hi, I'm ${name}, a ${profession} delivering value with passion.`;
  }

  switch (preview) {
    case "LinkedIn":
      bio = `🔹 ${bio}\n🔹 Let’s connect!`;
      break;
    case "Fiverr":
      bio = `${bio} Ready to help you with your next project.`;
      break;
    case "WhatsApp":
      bio = bio.split(".")[0] + "."; // Shorter version
      break;
  }

  document.getElementById("output").innerText = bio;
}

function copyBio() {
  const text = document.getElementById("output").innerText;
  if (!text) {
    alert("Nothing to copy!");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    alert("Bio copied to clipboard!");
  });
}
