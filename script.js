// --- 1. LÓGICA DO MODO ESCURO ---
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️ Modo Claro';
  } else {
    btnTema.textContent = '🌙 Modo Escuro';
  }
});

// --- 2. LÓGICA DE CURTIDAS ---
let totalCurtidas = 0;
const btnCurtir = document.getElementById('btnCurtir');
const numCurtidas = document.getElementById('numCurtidas');

btnCurtir.addEventListener('click', () => {
  totalCurtidas++;
  numCurtidas.textContent = totalCurtidas;
});

// --- 3. LÓGICA DE COMENTÁRIOS ---
const formComentario = document.getElementById('formComentario');
const nomeInput = document.getElementById('nomeUsuario');
const textoInput = document.getElementById('textoComentario');
const listaComentarios = document.getElementById('listaComentarios');

formComentario.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede a página de recarregar

  const nome = nomeInput.value;
  const texto = textoInput.value;

  // Cria um elemento <li> novo para o comentário
  const novoComentario = document.createElement('li');
  novoComentario.innerHTML = `<strong>${nome}:</strong> ${texto}`;

  // Adiciona o novo comentário na lista
  listaComentarios.appendChild(novoComentario);

  // Limpa os campos do formulário
  nomeInput.value = '';
  textoInput.value = '';
});
