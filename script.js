
function generateBio() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const tone = document.getElementById("tone").value;

  const bio = `Hi, I'm ${name}, a ${profession} delivering value with a ${tone} tone.`;
  document.getElementById("output").innerText = bio;
}

function copyBio() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Bio copied to clipboard!");
  });
}
