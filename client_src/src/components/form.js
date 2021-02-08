document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    let telefono = "51974263772";
  
    let cliente = document.querySelector("#cliente").value;
    let apellido = document.querySelector("#apellido").value;
    let correo = document.querySelector("#correo").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Reservas*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *Ingrese su apellido completo*%0A
          ${apellido}%0A
          *Escriba su correo electrónico*%0A
          ${correo}`;
  
    if (cliente === "" || apellido === "" || correo === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  