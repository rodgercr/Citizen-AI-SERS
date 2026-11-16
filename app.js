'use strict';

const chat = document.querySelector('#chat');
const campo = document.querySelector('#question');

function criarLink(id) {
  const link = document.createElement('a');
  link.href = FONTES[id].url;
  link.textContent = FONTES[id].nome;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function adicionarMensagem(autor, texto, fontes = []) {
  const mensagem = document.createElement('div');
  mensagem.className = autor === 'Você' ? 'message user' : 'message';
  const nome = document.createElement('strong');
  nome.textContent = autor;
  const conteudo = document.createElement('p');
  conteudo.textContent = texto;
  mensagem.append(nome, conteudo);
  if (fontes.length) {
    const referencias = document.createElement('div');
    referencias.className = 'references';
    referencias.append(...fontes.map(criarLink));
    mensagem.append(referencias);
  }
  chat.append(mensagem);
  chat.scrollTop = mensagem.offsetHeight > chat.clientHeight ? mensagem.offsetTop : chat.scrollHeight;
}

function perguntar(texto) {
  const pergunta = texto.trim();
  if (!pergunta) return;
  adicionarMensagem('Você', pergunta);
  const resposta = responder(pergunta);
  adicionarMensagem('Assistente', resposta.texto, resposta.fontes);
}

function exibirCenario() {
  document.querySelector('#scenario-notes').textContent =
    `Consumo de ${CENARIO.consumoMensalKwh} kWh/mês por ${CENARIO.meses} meses. Valores simulados.`;
  for (const [rotulo, valor] of [['Troca por LED', totais.economiaLedAno], ['Solar por assinatura', totais.economiaSolarAno]]) {
    const linha = document.createElement('div');
    const termo = document.createElement('dt');
    termo.textContent = rotulo;
    const resultado = document.createElement('dd');
    resultado.textContent = reais(valor);
    linha.append(termo, resultado);
    document.querySelector('#results').append(linha);
  }
  document.querySelector('#assumptions').textContent =
    `Valor variável de ${reais(CENARIO.valorKwhRede)} por kWh, ${CENARIO.lampadas} lâmpadas usadas por ${CENARIO.horasPorDia} h/dia e ${CENARIO.creditoSolarMensalKwh} kWh/mês em créditos. Disponibilidade, tarifas e condições contratuais variam. A simulação cobre a parcela variável modelada e o custo das alternativas.`;
  for (const id of Object.keys(FONTES)) {
    const item = document.createElement('li');
    item.append(criarLink(id));
    document.querySelector('#sources').append(item);
  }
}

document.querySelector('#question-form').addEventListener('submit', evento => {
  evento.preventDefault();
  perguntar(campo.value);
  campo.value = '';
  campo.focus();
});

for (const botao of document.querySelectorAll('[data-question]')) {
  botao.addEventListener('click', () => perguntar(botao.dataset.question));
}

exibirCenario();
adicionarMensagem('Assistente', 'Olá! Posso estimar quanto a troca de lâmpadas por LED e a solar por assinatura economizam em uma residência simulada. Que opção você quer conhecer?');
