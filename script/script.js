// Puxando formulário 

const form = document.querySelector("form");

// Evento para o botão chamando uma função 

form.onsubmit = function(event){
  
  // previnir refresh na pagina 
  
  event.preventDefault();
  
  // puxando inputs
  
  const inputEmail = document.getElementById("input-email").value;
  
  const inputPassword = document.getElementById("input-password").value;
  
  // Informações improvisadas
  
  const emailData = "gustavo@gmail.com";
  
  const passwordData = "GG567@@@";
  
  // verificação 
  
  if(inputEmail === emailData && inputPassword === passwordData){
    
    window.open("https://github.com/GU-dasilva", "blank")
  }else{
    alert("por favor, tente novamente");
  }
}