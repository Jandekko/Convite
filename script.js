// Controle das etapas
document.getElementById("start-btn").addEventListener("click", function() {
  document.getElementById("password-step").classList.remove("hidden");
  document.getElementById("start-btn").classList.add("hidden");
});

// Senha correta
const correctPassword = "Mucilon"; // Senha esperada

document.getElementById("check-password-btn").addEventListener("click", function() {
  const passwordInput = document.getElementById("password-input").value;
  if (passwordInput === correctPassword) {
    document.getElementById("password-step").classList.add("hidden");
    document.getElementById("text-stage").classList.remove("hidden");
    loadTextStage(0);
  } else {
    document.getElementById("error-message").classList.remove("hidden");
  }
});

// Textos e imagens para as etapas

const stages = [
  { text:[
    "A melhor parte do meu dia é o seu sorriso. 😊",
    "🎼Seu sorriso é tão resplandescente Que deixou meu coração alegre🎼"
  ], 
  image: "images/img1.png" },

  { text: "Sua presença é como uma sinfonia bem orquestrada, onde cada nota ressoa com harmonia e beleza inigualáveis. 😃", image: "images/img2.png" },

  { text:"A sua capacidade de ver o mundo por ângulos únicos transforma até os momentos mais comuns em experiências extraordinárias.", image: "images/img3.png" },

  { text: "Se a sabedoria tivesse um rosto, com certeza seria o seu, refletindo um brilho que ilumina até os pensamentos mais obscuros.", image: "images/img4.png" },

  { text: "A forma como você ilumina uma sala com a sua presença é algo que sempre aprecio; parece que o mundo ganha mais cor quando você esta por perto.", image: "images/img5.png" },

  { text: "Seus comentários sempre trazem uma nova perspectiva que faz meu dia parecer mais interessante é impressionante. Como você consegue isso?", image: "images/img6.png" },
  
  { text: "É fascinate como sua risada tem o poder de transformar até os dias mais cinzentos em momentos de alegria genuína.", image: "images/img7.png" },
  
  { text: "Seu sorriso é a minha canção favorita.", image: "images/img1.png" },
  
  { text: "Conversar com você é como ler um livro fascinante; sempre há algo novo e intrigante a ser descoberto em suas palavras", image: "images/img7.png" },
  
  { text: "Você é a pessoa mais interessante que já passou pelo meu caminho. Adoraria conhecer muito mais sobre você.", image: "images/img10.png" }
];

let currentStage = 0;

// Função para carregar o conteúdo dinâmico (textos e imagens)
function loadTextStage(index) {
  document.getElementById("dynamic-text").textContent = stages[index].text;
  document.getElementById("dynamic-image").src = stages[index].image;
  
  currentStage = index;

  // Esconder o botão "Próximo" no último texto
  if (index === stages.length - 1) {
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("final-step-button").classList.remove("hidden");
  } else {
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("final-step-button").classList.add("hidden");
  }

  // Esconder ou mostrar o botão de "Voltar"
  document.getElementById("prev-btn").classList.toggle("hidden", index === 0);
}

// Navegar para o próximo texto
document.getElementById("next-btn").addEventListener("click", function() {
  if (currentStage < stages.length - 1) {
    loadTextStage(currentStage + 1);
  }
});

// Navegar para o texto anterior
document.getElementById("prev-btn").addEventListener("click", function() {
  if (currentStage > 0) {
    loadTextStage(currentStage - 1);
  }
});

// Quando clicar em "Etapa Final", revela a última pergunta
document.getElementById("final-btn").addEventListener("click", function() {
  document.getElementById("text-stage").classList.add("hidden");
  document.getElementById("final-step-button").classList.add("hidden");
  document.getElementById("final-step").classList.remove("hidden");
});

// Quando clicar em "Revelar Pergunta", mostra a pergunta final com os botões "Sim" e "Não"
document.getElementById("reveal-question-btn").addEventListener("click", function() {
  document.getElementById("final-step").classList.add("hidden");
  document.getElementById("question-step").classList.remove("hidden");
});

// Pergunta final: sim ou não
document.getElementById("yes-btn").addEventListener("click", function() {
  var response = document.getElementById("response");
  response.classList.remove("hidden");
  response.innerHTML = "😍 Que incrível!";
   // Criar uma tag <img>
   var img = document.createElement("img");
   img.src = "images/img15.png"; // Caminho da imagem
   img.alt = "Coração";
   img.style.width = "50px"; // Definir o tamanho da imagem
   img.style.height = "50px";
   img.style.marginLeft = "10px"; // Margem opcional para espaçamento
 
   // Adicionar a imagem ao conteúdo de 'response'
   response.appendChild(img);
 
   // Adicionar classe de estilo (se houver)
   response.classList.add("happy");
  

  setTimeout(function() {
    window.location.href = "https://api.whatsapp.com/send?phone=5562981240493&text=Oi%2C%20gostaria%20muito%20de%20sair%20com%20você%21";
  }, 2000);
});

document.getElementById("no-btn").addEventListener("click", function() {
  var response = document.getElementById("response");
  response.classList.remove("hidden");
  response.innerHTML = "😢 Poxa, que pena!";
  response.classList.add("sad");

  setTimeout(function() {
    window.location.href = "https://api.whatsapp.com/send?phone=5562981240493&text=Oi%2C%20Vou%20ter%20que%20recusar%21";
  }, 2000);
});

document.getElementById("yes-btn").classList.add("pulsing");
