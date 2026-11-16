# Análise energética

## Cenário e origem dos dados

Residência simulada de uma pessoa no início da vida profissional, com consumo de 150 kWh/mês. A necessidade é reduzir o gasto anual com eletricidade mantendo os serviços da casa, inclusive iluminação equivalente. Avaliamos as opções separadamente, com a mesma referência de 12 meses de 30 dias. Os demais equipamentos e hábitos são mantidos constantes.

| Dado | Valor | Origem e premissa |
| --- | --- | --- |
| Consumo total de referência | 150 kWh/mês | Hipótese didática que já inclui a iluminação atual. |
| Valor variável para a rede | R$ 1,00/kWh | Hipótese didática arredondada. A ANEEL informa que a tarifa homologada e o custo final da fatura podem diferir [1]. |
| Uso das lâmpadas | 4 unidades, 4 h/dia cada | Hipótese de uso. O resultado varia linearmente com as horas e a quantidade. |
| Lâmpada antiga e LED | 42 W e 8 W | Valores de referência com fluxo luminoso próximo (630 e 640 lm nos exemplos [4] e [5]). Os exemplos fundamentam ordens de grandeza. A substituição em um imóvel requer confirmar distribuição da luz, lúmens, tensão e soquete [3]. |
| Compra dos LEDs | R$ 12/unidade | Preço hipotético para o cálculo. Considere cotação e eventual frete ao aplicar ao seu caso. |
| Crédito solar aplicado | 100 kWh/mês | Hipótese para uma usina compartilhada. A ANEEL descreve as modalidades e condições [2]. Adotamos R$ 1,00 de abatimento efetivo por kWh creditado após as regras aplicáveis, como hipótese didática. |
| Preço do plano solar | R$ 0,85/kWh creditado | Hipótese de contrato sem taxa de adesão, mensalidade fixa separada ou multa no período. A diferença de R$ 0,15 é sobre cada kWh efetivamente compensado. |
| Unidade consumidora | Baixa tensão, ligação monofásica | Cenário assume 50 kWh equivalentes remanescentes após os 100 kWh de créditos, acima da referência monofásica de 30 kWh para disponibilidade [2]. A conta real precisa ser conferida conforme as regras e o contrato aplicáveis. |

O modelo abrange a parcela variável estimada e os desembolsos das alternativas. Mantém os preços constantes e deixa fora contribuição de iluminação pública, bandeiras, variações tributárias, reposição, frete, mudança de residência e outros itens específicos. Não há oferta solar local cotada. Os valores simulados não representam tarifa oficial nem promessa de economia.

## Cálculos

**Referência.** 150 kWh/mês × R$ 1,00/kWh × 12 = **R$ 1.800,00 no ano**.

**A — Trocar quatro lâmpadas por LED**

1. Cada lâmpada funciona 4 × 30 = 120 horas por mês.
2. Iluminação atual: 4 × 42 W × 120 h ÷ 1.000 = **20,16 kWh/mês**.
3. Iluminação com LED: 4 × 8 W × 120 h ÷ 1.000 = **3,84 kWh/mês**.
4. Redução: 20,16 − 3,84 = **16,32 kWh/mês**, ou **195,84 kWh/ano**. A iluminação usa cerca de 81% menos energia. A residência passa a 133,68 kWh/mês neste cenário.
5. Compra: 4 × R$ 12,00 = **R$ 48,00**. A economia mensal bruta é 16,32 × R$ 1,00 = **R$ 16,32**. O retorno simples é 48 ÷ 16,32 = **2,94 meses**.
6. Economia no primeiro ano: 12 × R$ 16,32 − R$ 48,00 = **R$ 147,84**. Custo anual modelado com compra incluída: **R$ 1.652,16**.

**B — Assinar energia solar de geração compartilhada**

1. Abatimento mensal hipotético: 100 kWh × R$ 1,00/kWh = **R$ 100,00**.
2. Cobrança mensal do plano: 100 kWh × R$ 0,85/kWh = **R$ 85,00**.
3. Custo mensal modelado: (R$ 150,00 − R$ 100,00) da distribuidora + R$ 85,00 do plano = **R$ 135,00**. A economia líquida mensal é **R$ 15,00**.
4. Economia no primeiro ano: 12 × R$ 15,00 = **R$ 180,00**. Custo anual modelado: **R$ 1.620,00**. A residência continua consumindo **150 kWh/mês**.

## Comparação e recomendação

| Critério | Lâmpadas LED | Solar por assinatura |
| --- | --- | --- |
| Custo anual modelado | R$ 1.652,16 | R$ 1.620,00 |
| Economia líquida no primeiro ano | R$ 147,84 | R$ 180,00 |
| Redução física do consumo na casa | 195,84 kWh/ano | 0 kWh/ano. São aplicados créditos de energia renovável. |
| Viabilidade | Comprar lâmpadas compatíveis. Faz mais sentido trocar pontos antigos com maior uso. | Verificar cobertura da distribuidora, titularidade, créditos efetivos, valores, prazo de início e regras de saída. Dispensa instalar painéis no imóvel para a modalidade estudada. |
| Impacto ambiental | Menor demanda de eletricidade. A fabricação e o descarte das lâmpadas também têm impactos. | Geração renovável com impactos associados à fabricação e ao fim de vida dos módulos [6]. Créditos compensados, por si só, não quantificam emissões evitadas. |

A assinatura gera R$ 32,16 a mais de economia no primeiro ano **nas hipóteses do estudo**. Uma taxa anual de R$ 40,00, por exemplo, reduziria a economia solar para R$ 140,00 e inverteria a comparação. Se houver proposta para o endereço, compare o valor total da distribuidora somado ao plano com a média da sua fatura sem adesão. Para o LED, confira se alguma lâmpada antiga fica ligada por várias horas e compare a iluminação entregue. Se a residência já usa LED, o potencial de redução pode ser menor. O estudo não soma os resultados das alternativas, pois usar as duas juntas pode mudar os créditos efetivamente aproveitados.

## Referências

1. [ANEEL — Ranking das tarifas e componentes excluídos](https://www.gov.br/aneel/pt-br/assuntos/tarifas/ranking-das-tarifas).
2. [ANEEL — Micro e minigeração distribuída](https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida).
3. [Inmetro — Eficácia luminosa e etiqueta de eficiência](https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/lampadas-e-luminarias-led-portaria-inmetro-no-231-2026-consumidores/para-pagar-uma-conta-de-energia-mais-barata-devo-comprar-lampadas-e-luminarias-de-luz-201cfria201d).
4. [Philips/Signify — Ficha de referência de halógena de 42 W e 630 lm](https://www.assets.lighting.philips.com/is/content/PhilipsLighting/8718291202769-pss-pt_pt).
5. [Leroy Merlin — Especificação de exemplo publicado de LED de 8 W e 640 lm](https://www.leroymerlin.com.br/lampada-led-r63-8w-6500k-bivolt_1568415973).
6. [EPE/MME — Premissas e custos da oferta de energia no horizonte 2050, seção de geração fotovoltaica](https://www.gov.br/mme/pt-br/assuntos/secretarias/sntep/publicacoes/plano-nacional-de-energia/plano-nacional-de-energia-2050/estudos-do-pne-2050/02-relatorios-epe/04-premissas-e-custos-da-oferta-de-energia-eletrica-no-horizonte-2050-nt-pr-007-2018.pdf).
