window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    console.log("Cargando el perfil de", username);
    // Aquí puedes cargar los datos del usuario usando el username
    const text = document.getElementById("h1");
    if (text instanceof HTMLHeadingElement) {
      text.innerText = `Hola ${username}`;
      
    }
  } else {
    console.log("No se ha encontrado el usuario");
    window.location.href = "/src/login/login.html"; // Redirigir al login si no está autenticado
  }
};
