'use strict';

const CENARIO = Object.freeze({
  meses: 12,
  diasPorMes: 30,
  consumoMensalKwh: 150,
  valorKwhRede: 1,
  lampadas: 4,
  horasPorDia: 4,
  potenciaAtualW: 42,
  potenciaLedW: 8,
  custoLedUnitario: 12,
  creditoSolarMensalKwh: 100,
  abatimentoEfetivoPorKwh: 1,
  custoPlanoPorKwh: 0.85,
});

const FONTES = Object.freeze({
  tarifa: { nome: 'ANEEL · Tarifa e fatura', url: 'https://www.gov.br/aneel/pt-br/assuntos/tarifas/ranking-das-tarifas' },
  solar: { nome: 'ANEEL · Geração distribuída', url: 'https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida' },
  led: { nome: 'Inmetro · Eficiência das lâmpadas', url: 'https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/lampadas-e-luminarias-led-portaria-inmetro-no-231-2026-consumidores/para-pagar-uma-conta-de-energia-mais-barata-devo-comprar-lampadas-e-luminarias-de-luz-201cfria201d' },
  ambiente: { nome: 'EPE/MME · Ciclo de vida da energia solar', url: 'https://www.gov.br/mme/pt-br/assuntos/secretarias/sntep/publicacoes/plano-nacional-de-energia/plano-nacional-de-energia-2050/estudos-do-pne-2050/02-relatorios-epe/04-premissas-e-custos-da-oferta-de-energia-eletrica-no-horizonte-2050-nt-pr-007-2018.pdf' },
});

function calcular(cenario = CENARIO) {
  const horasLampadasMes = cenario.lampadas * cenario.horasPorDia * cenario.diasPorMes;
  const iluminacaoAtualMes = cenario.potenciaAtualW * horasLampadasMes / 1000;
  const iluminacaoLedMes = cenario.potenciaLedW * horasLampadasMes / 1000;
  const reducaoLedMes = iluminacaoAtualMes - iluminacaoLedMes;
  const custoInicialLed = cenario.lampadas * cenario.custoLedUnitario;
  const reducaoLedAno = reducaoLedMes * cenario.meses;
  const economiaLedMes = reducaoLedMes * cenario.valorKwhRede;
  const economiaLedAno = economiaLedMes * cenario.meses - custoInicialLed;
  const abatimentoSolarMes = cenario.creditoSolarMensalKwh * cenario.abatimentoEfetivoPorKwh;
  const custoPlanoMes = cenario.creditoSolarMensalKwh * cenario.custoPlanoPorKwh;
  const economiaSolarMes = abatimentoSolarMes - custoPlanoMes;
  const economiaSolarAno = economiaSolarMes * cenario.meses;
  const custoBaseAno = cenario.consumoMensalKwh * cenario.valorKwhRede * cenario.meses;
  return {
    iluminacaoAtualMes, iluminacaoLedMes, reducaoLedMes, reducaoLedAno, custoInicialLed,
    economiaLedMes, economiaLedAno, retornoLedMeses: custoInicialLed / economiaLedMes,
    abatimentoSolarMes, custoPlanoMes, economiaSolarMes, economiaSolarAno, custoBaseAno,
    custoLedAno: custoBaseAno - economiaLedAno, custoSolarAno: custoBaseAno - economiaSolarAno,
    vantagemSolarAno: economiaSolarAno - economiaLedAno,
  };
}

const totais = calcular();
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const numero = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
const reais = valor => moeda.format(valor);
const num = valor => numero.format(valor);

function responder(pergunta) {
  const texto = pergunta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const led = /\bled\b|lampada|iluminacao|halogena|lumens|se paga|retorno|potencia/.test(texto);
  const solar = /solar|assinatura|credito|aluguel|placa|telhado|fotovolta/.test(texto);

  if (/ambient|emiss|carbono|descarte|sustenta/.test(texto)) {
    return {
      texto: `No cenário simulado, o LED reduz o consumo físico da casa em ${num(totais.reducaoLedAno)} kWh ao ano. A substituição também envolve a fabricação e o descarte das lâmpadas.\nA solar por assinatura atribui créditos de geração renovável à fatura e mantém o consumo da casa em ${CENARIO.consumoMensalKwh} kWh/mês. Painéis têm impactos de fabricação e descarte. Para estimar CO₂ evitado seriam necessários outros dados sobre a geração que seria substituída.`,
      fontes: ['led', 'solar', 'ambiente'],
    };
  }
  if ((led && solar) || /compar|melhor|qual (opcao|alternativa)|\b(diferenca|ambas|duas)\b|o que compensa|vale mais a pena|taxa (anual|extra)|taxa.*40/.test(texto)) {
    return {
      texto: `No primeiro ano do cenário simulado, trocar as lâmpadas por LED economiza ${reais(totais.economiaLedAno)} após comprar as lâmpadas. A solar por assinatura economiza ${reais(totais.economiaSolarAno)} com abatimento de ${reais(totais.abatimentoSolarMes)}/mês e cobrança de ${reais(totais.custoPlanoMes)}/mês.\nA assinatura fica ${reais(totais.vantagemSolarAno)} à frente nesse período. Uma taxa anual de ${reais(40)}, por exemplo, reduziria a economia solar para ${reais(totais.economiaSolarAno - 40)} e faria o LED ficar à frente. Antes de contratar, some a cobrança do plano à fatura da distribuidora e confira a cobertura, as taxas e as condições de saída.`,
      fontes: ['tarifa', 'solar', 'led'],
    };
  }
  if (solar) {
    return {
      texto: `Na geração solar compartilhada, uma usina gera energia e a distribuidora aplica créditos na fatura. A assinatura pode servir a quem mora de aluguel porque dispensa painéis no imóvel. Confirme a cobertura na sua distribuidora, os requisitos de titularidade e o que acontece se você se mudar.\nNesta simulação, ${CENARIO.creditoSolarMensalKwh} kWh de créditos por mês abatem ${reais(totais.abatimentoSolarMes)} da fatura. Somando a cobrança do plano de ${reais(totais.custoPlanoMes)}, sobram ${reais(totais.economiaSolarMes)} de economia por mês, ou ${reais(totais.economiaSolarAno)} no primeiro ano. A distribuidora segue cobrando a parte restante da fatura e a economia depende dos créditos efetivos e do contrato.`,
      fontes: ['solar', 'tarifa'],
    };
  }
  if (led) {
    return {
      texto: `No cenário simulado, ${CENARIO.lampadas} lâmpadas de ${CENARIO.potenciaAtualW} W ligadas por ${CENARIO.horasPorDia} horas ao dia consomem ${num(totais.iluminacaoAtualMes)} kWh/mês. Com LEDs de ${CENARIO.potenciaLedW} W, passam a consumir ${num(totais.iluminacaoLedMes)} kWh/mês. A conta é quantidade × potência (W) × horas de uso no mês ÷ 1.000.\nA redução é de ${num(totais.reducaoLedMes)} kWh/mês, ou ${reais(totais.economiaLedMes)} ao valor simulado por kWh. A compra custa ${reais(totais.custoInicialLed)}, com retorno em cerca de ${num(totais.retornoLedMeses)} meses e economia líquida de ${reais(totais.economiaLedAno)} no primeiro ano. Confira lúmens (quantidade de luz), soquete e tensão antes de trocar.`,
      fontes: ['led', 'tarifa'],
    };
  }
  if (/tarifa|premissa|fonte|cenario|fatura|conta de luz|consumo|kwh|calculo/.test(texto)) {
    return {
      texto: `A simulação usa ${CENARIO.consumoMensalKwh} kWh/mês, com valor variável de ${reais(CENARIO.valorKwhRede)} por kWh, durante ${CENARIO.meses} meses de ${CENARIO.diasPorMes} dias. O custo de referência é ${reais(totais.custoBaseAno)} no ano para a parte modelada da fatura.\nOs valores são hipóteses didáticas. Na conta real, confira o consumo em kWh e os itens cobrados. Tributos, bandeiras, contribuição de iluminação pública e outras parcelas podem mudar o valor final.`,
      fontes: ['tarifa', 'solar'],
    };
  }
  return {
    texto: 'Posso explicar o cenário residencial de iluminação LED e energia solar por assinatura. Experimente perguntar quanto o LED economiza, como funcionam os créditos solares ou qual alternativa tem menor custo no primeiro ano.',
    fontes: [],
  };
}

if (typeof module !== 'undefined') module.exports = { CENARIO, calcular, responder };
