# Citizen Assist AI — Energia residencial

Global Solution 2026.2 · FIAP · Ciência da Computação · Soluções em Energias Renováveis e Sustentáveis

| Integrante | RM |
| --- | --- |
| Rodger Costa Rios | 571438 |
| Kenichi Caio Yamamoto | 569815 |

## Público e problema

Jovens entrando no mercado de trabalho que estão começando a morar por conta própria, inclusive em imóveis alugados. O projeto ajuda a entender quanto custa reduzir a conta de luz e quais condições precisam ser verificadas antes de comprar lâmpadas ou assinar um serviço de geração compartilhada.

O assistente compara duas decisões independentes para a mesma residência durante os primeiros 12 meses. A primeira reduz o consumo com lâmpadas LED. A segunda usa créditos de geração solar fotovoltaica para reduzir o valor pago. As respostas apresentam os resultados, as premissas e referências que permitem conferir as orientações.

## Como abrir

1. Extraia o ZIP inteiro. No GitHub, use **Code → Download ZIP**.
2. Abra `index.html` no Chrome, Edge ou Firefox. A aplicação roda no navegador, sem instalar dependências. Os links externos de referência precisam de internet.
3. Clique em **Comparar opções** ou digite uma pergunta e pressione Enter. Use **Ver premissas e limites** e **Ver fontes** para explorar o cenário.

### Perguntas de exemplo

- Quanto eu economizo com LED e em quanto tempo a compra se paga?
- Como funciona a energia solar por assinatura para quem mora de aluguel?
- Qual alternativa compensa mais no primeiro ano?
- Quais são os impactos ambientais?
- Qual tarifa foi usada no cálculo?

O assistente identifica assuntos por palavras e expressões e gera respostas com base nas funções de cálculo em `energia.js`. O chat cobre iluminação LED, solar por assinatura, comparação, premissas e impactos. As mensagens ficam na página durante a sessão e são limpas ao recarregar. A aplicação não envia as perguntas a servidores.

## Análise e demonstração

- [Análise energética](docs/analise_energetica.md) — cenário, dados, fórmulas, tabela comparativa, viabilidade e fontes.
- [Testes com usuários](docs/testes_com_usuarios.md) — tarefas, perguntas de avaliação e ficha de registro a preencher após as sessões.

## Vídeo técnico

[Assistir à apresentação](https://youtu.be/4C7YulTINo0)
