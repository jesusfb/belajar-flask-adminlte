const emailAddress = document.getElementById("emailAddress");
const fullName = document.getElementById("fullName");
const nim = document.getElementById("nim");
const programStudi = document.getElementById("programStudi");
const angkatan = document.getElementById("angkatan");
const formRegister = document.getElementById("formRegister");

async function sendToServer() {
  const formData = new FormData();
  formData.append("emailAddress", emailAddress.value);
  formData.append("fullName", fullName.value);
  formData.append("programStudi", programStudi.value);
  formData.append("nim", nim.value);
  formData.append("angkatan", angkatan.value);

  const response = await fetch("/registerwajah", {
    method: "POST",
    body: formData,
  });
  try {
    const result = await response.json();
    if (response.ok) {
      // If the response is successful, show success message
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "berhasil di submit",
      });
    } else {
      // If there is an error in the response, show error message
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "respon dari server false. gagal di submit.",
      });
    }
  } catch (error) {
    // If there is an error in fetching or parsing the response, show error message
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "GAGAL MANGGIL API BE. gagal di submit.",
    });
  }
}

formRegister.addEventListener("submit", function (event) {
  event.preventDefault();

  const tes = fullName.value;
  console.log(tes);
  sendToServer();
});
