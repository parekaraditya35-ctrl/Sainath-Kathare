// document.getElementById("contactForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const formData = new FormData(this);

//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     subject: formData.get("subject"),
//     message: formData.get("message")
//   };

//   fetch("https://script.google.com/macros/s/AKfycbwxhq_vUwAr04nrznOvvRIOQqpoN_D69ewM2cULKzlN9xD-e6tVEE763OK1O1Rz1-TUsQ/exec", {
//     method: "POST",
//     body: JSON.stringify(data)
//   })
//   .then(res => res.text())
//   .then(response => {
//     alert("Form submitted successfully!");
//     document.getElementById("contactForm").reset();
//   })
//   .catch(error => console.error("Error:", error));
// });