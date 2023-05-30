document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;

  var formData = new FormData();

  formData.append("name", name);
  formData.append("password", password);

  fetch("validation.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Error en la solicitud: " + response.status);
      }
    })
    .then((data) => {
      if (data.success) {
        Swal.fire({
          icon: "success",
          text: data,
        });
      } else {
        Swal.fire({
          icon: "success",
          text: data,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      console.log("Error al enviar");
    });
});

document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const repeatPassword = document.getElementById(
    "registerRepeatPassword"
  ).value;

  if (!name || !username || !email || !password || !repeatPassword) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Por favor, complete todos los campos del formulario",
    });

    return;
  }

  if (password != repeatPassword) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Las contraseñas no coinciden. Por favor, inténtelo nuevamente.",
    });

    return;
  }

  const formData = new FormData();

  formData.append("name", name);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  fetch("register.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Error en la solicitud: " + response.status);
      }
    })
    .then((data) => {
      Swal.fire("Usuario creado", data, "success");
    })
    .catch((error) => {
      console.error(error);
    });
});
