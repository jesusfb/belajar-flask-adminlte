function generateRandomNumber() {
  // Membuat angka acak antara 100000 dan 999999 (6 digit)
  var randomNumber = Math.floor(100000 + Math.random() * 900000);
  // Menampilkan angka acak di console
  console.log("Angka acak: " + randomNumber);
  // Menampilkan angka acak di halaman HTML
  document.getElementById("randomNumberDisplay").value = randomNumber;
}

// Add event listener to the form
// document
//   .getElementById("formRegister")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get the username value from the form
//     var emailAddress = document.getElementById("emailAddress").value;
//     var fullName = document.getElementById("fullName").value;
//     var programStudi = document.getElementById("programStudi").value;
//     var username = document.getElementById("nim").value;
//     var angkatan = document.getElementById("angkatan").value;

//     async
//     // Simulate form submission with AJAX
//     fetch("/tes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: username }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // If the response is successful, show success message
//           Swal.fire({
//             icon: "success",
//             title: "Success!",
//             text: "Username submitted successfully: " + username,
//           });
//         } else {
//           // If there is an error, show error message
//           Swal.fire({
//             icon: "error",
//             title: "Error!",
//             text: "Failed to submit username. gagal di database.",
//           });
//         }
//       })
//       .catch((error) => {
//         // If there is an error, show error message
//         Swal.fire({
//           icon: "error",
//           title: "Error!",
//           text: "Failed to submit username. gagal di promise.",
//         });
//       });
//   });

// function login() {
//   var username = document.getElementById("nim").value;
//   var password = document.getElementById("programStudi").value;

//   // Kirim data login ke server menggunakan AJAX
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "/tes", true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         if (response.success) {
//           // Jika login berhasil, tampilkan popup SweetAlert
//           Swal.fire({
//             icon: "success",
//             title: "Login Successful!",
//             text: "Welcome " + username,
//           });
//         } else {
//           // Jika login gagal, tampilkan popup SweetAlert
//           Swal.fire({
//             icon: "error",
//             title: "Login Failed!",
//             text: response.message,
//           });
//         }
//       } else {
//         console.error(xhr.responseText);
//       }
//     }
//   };
//   var data = JSON.stringify({ username: username, password: password });
//   xhr.send(data);
// }
