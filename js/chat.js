let userData = window.localStorage.getItem('chat-tipo-login');

let chatbotTOKEN = '8OUQDQLMtizZSpd3Ge0uf4E';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';

let chatbotURL = `${hostURL}${chatbotTOKEN}&extraparam=${userData}`;

let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);