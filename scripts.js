var butenviar = document.querySelector("#butenviar");
var nome = document.querySelector("#nome");
var texto = document.querySelector("#texto");

function enviaremail() {
  var templateParams = {
    from_name: nome.value,
    message: texto.value,
  };
  if (!nome.value || !texto.value) {
    alert("Campos Obrigatórios");
    return;
  }
  const serviceID = "service_gu5ojj4";
  const templateID = "template_mzzf2uq";

  emailjs.send(serviceID, templateID, templateParams).then(
    function (response) {
      alert("Email enviado com sucesso!");
    },
    function (error) {
      alert("Ocorreu um erro. Tente novamente!", error);
    }
  );
}
