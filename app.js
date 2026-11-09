// 1. Seleção dos elementos usando document.getElementById
const tituloPrincipal = document.getElementById('titulo-principal');
const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
const btnAlterarTexto = document.getElementById('btn-alterar-texto');

// 2. Evento de clique para escutar a ação do botão
btnAlterarTexto.addEventListener('click', () => {
  // Leitura prévia dos valores (usando textContent)
  console.log('Título antes:', tituloPrincipal.textContent);
  console.log('Parágrafo antes:', paragrafoBoasVindas.textContent);

  // Alteração dinâmica dos conteúdos (usando textContent)
  tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
  paragrafoBoasVindas.textContent = 'Este parágrafo teve seu conteúdo substituído dinamicamente através da propriedade textContent.';
});
// Seleção dos elementos do Módulo 2
const inputValor1 = document.getElementById('valor1');
const inputValor2 = document.getElementById('valor2');
const btnSomar = document.getElementById('btn-somar');
const spanResultado = document.getElementById('resultado-soma');

// Adição do evento de clique para realizar a soma
btnSomar.addEventListener('click', () => {
  // Conversão dos valores de string para número (Number ou parseFloat)
  const num1 = Number(inputValor1.value) || 0;
  const num2 = Number(inputValor2.value) || 0;

  // Cálculo e exibição do resultado usando textContent
  const soma = num1 + num2;
  spanResultado.textContent = soma;
});
// Seleção dos elementos do Módulo 3
const btnCriarAviso = document.getElementById('btn-criar-aviso');
const containerAvisos = document.getElementById('container-avisos');

// Contador para diferenciar os avisos criados
let contadorAvisos = 1;

btnCriarAviso.addEventListener('click', () => {
  // 1. Criação dinâmica do elemento div para o aviso
  const novoAviso = document.createElement('div');
  novoAviso.className = 'aviso-item';
  
  // 2. Definição do texto do aviso
  const textoAviso = document.createElement('span');
  textoAviso.textContent = `Aviso #${contadorAvisos++}: Esta é uma mensagem dinâmica! `;
  
  // 3. Criação do botão de remoção
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.style.marginLeft = '10px';
  
  // 4. Evento para remover este aviso específico ao clicar no botão
  btnRemover.addEventListener('click', () => {
    novoAviso.remove();
  });

  // 5. Inserção dos elementos no DOM
  novoAviso.appendChild(textoAviso);
  novoAviso.appendChild(btnRemover);
  containerAvisos.appendChild(novoAviso);
});
// Seleção dos elementos do Módulo 4
const btnToggleTema = document.getElementById('btn-toggle-tema');
const cardModulo4 = document.getElementById('modulo-4');
const celulasSituacao = document.querySelectorAll('.tabela-status .situacao');

// 1. Alternar tema do Card ao clicar no botão
btnToggleTema.addEventListener('click', () => {
  // Alterna a classe 'tema-escuro' (ou 'ativo') no card
  cardModulo4.classList.toggle('tema-escuro');
});

// 2. Destacar elementos da tabela com base no seu conteúdo texto
celulasSituacao.forEach(celula => {
  if (celula.textContent.trim() === 'Pendente') {
    celula.style.color = '#d9534f'; // Vermelho para pendente
    celula.style.fontWeight = 'bold';
  } else if (celula.textContent.trim() === 'Concluído') {
    celula.style.color = '#5cb85c'; // Verde para concluído
    celula.style.fontWeight = 'bold';
  }
});
// Seleção dos elementos do Módulo 5
const formCadastro = document.getElementById('form-cadastro');
const inputNomeUsuario = document.getElementById('nome-usuario');
const mensagemErro = document.getElementById('erro-nome');

// Esconde a mensagem de erro inicialmente
mensagemErro.style.display = 'none';

// Validação em tempo real (enquanto o usuário digita)
inputNomeUsuario.addEventListener('input', () => {
  const valor = inputNomeUsuario.value.trim();

  if (valor.length > 0 && valor.length < 5) {
    mensagemErro.style.display = 'block';
    inputNomeUsuario.style.borderColor = '#d9534f'; // Vermelho
  } else {
    mensagemErro.style.display = 'none';
    inputNomeUsuario.style.borderColor = '';
  }
});

// Impedir envio do formulário se o nome for inválido
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita a recarga da página

  const valor = inputNomeUsuario.value.trim();

  if (valor.length < 5) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'O nome de utilizador deve ter pelo menos 5 caracteres.';
    inputNomeUsuario.style.borderColor = '#d9534f';
  } else {
    alert('Formulário enviado com sucesso!');
    inputNomeUsuario.value = '';
    mensagemErro.style.display = 'none';
    inputNomeUsuario.style.borderColor = '';
  }
});
// Seleção dos elementos do Módulo 6
const painelBotoes = document.getElementById('painel-botoes');
const logBotao = document.getElementById('log-botao');

// Delegação de eventos no elemento pai (painel-botoes)
painelBotoes.addEventListener('click', (event) => {
  // Verifica se o elemento realmente clicado é um botão com a classe 'btn-acao'
  if (event.target && event.target.matches('button.btn-acao')) {
    // Captura o texto do botão clicado via textContent
    const textoBotao = event.target.textContent;
    const idBotao = event.target.id;
    
    // Atualiza o texto do elemento de log no DOM
    logBotao.textContent = `${textoBotao} (ID: ${idBotao})`;
  }
});
// Seleção dos elementos do Módulo 7
const caixaDestaque = document.getElementById('caixa-destaque');
const btnPrioridadeAlta = document.getElementById('btn-prioridade-alta');
const btnPrioridadeBaixa = document.getElementById('btn-prioridade-baixa');
const btnLimparAtributo = document.getElementById('btn-limpar-atributo');
const infoAtributo = document.getElementById('info-atributo');

// Função auxiliar para atualizar a interface
function atualizarStatusAtributo(prioridade) {
  if (prioridade) {
    // Define o atributo customizado via dataset (data-prioridade)
    caixaDestaque.dataset.prioridade = prioridade;
    infoAtributo.textContent = `data-prioridade = "${prioridade}"`;
  } else {
    // Remove o atributo de prioridade
    delete caixaDestaque.dataset.prioridade;
    infoAtributo.textContent = 'Nenhum';
  }
}

// Evento: Prioridade Alta
btnPrioridadeAlta.addEventListener('click', () => {
  atualizarStatusAtributo('alta');
  caixaDestaque.setAttribute('data-status', 'ativo');
});

// Evento: Prioridade Baixa
btnPrioridadeBaixa.addEventListener('click', () => {
  atualizarStatusAtributo('baixa');
  caixaDestaque.setAttribute('data-status', 'ativo');
});

// Evento: Remover Prioridade
btnLimparAtributo.addEventListener('click', () => {
  atualizarStatusAtributo(null);
  caixaDestaque.removeAttribute('data-status');
});
// Seleção dos elementos do Módulo 8
const formTarefa = document.getElementById('form-tarefa');
const inputTarefaTitulo = document.getElementById('input-tarefa-titulo');
const listaTarefas = document.getElementById('lista-tarefas');

// Array para armazenar o estado das tarefas
const tarefas = [];

// Função para renderizar as tarefas no DOM
function renderizarTarefas() {
  listaTarefas.innerHTML = ''; // Limpa a lista antes de re-renderizar

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = tarefa;

    // Botão para remover a tarefa do array
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = '✕';
    btnExcluir.style.marginLeft = '10px';
    btnExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1); // Remove o item do array
      renderizarTarefas();       // Atualiza a tela
    });

    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

// Evento de submissão do formulário
formTarefa.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recarregar a página

  const texto = inputTarefaTitulo.value.trim();

  if (texto !== '') {
    tarefas.push(texto);
    inputTarefaTitulo.value = '';
    renderizarTarefas();
  }
});