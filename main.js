const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax3 = document.getElementById("parallax3");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset;
  offset-=800;
  parallax3.style.backgroundPositionY = offset*(-0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);
function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById('myForm'));
  const data = Object.fromEntries(formData.entries());

  fetch('https://seu-endpoint-json-server.herokuapp.com/presencas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:',   
 data);
    // Limpar o formulário
    document.getElementById('myForm').reset();
    // Fechar a modal
    toggleModal();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

  function mostrarCamposAdicionais() {
    document.getElementById('camposAdicionais').style.display = 'block';
  }
