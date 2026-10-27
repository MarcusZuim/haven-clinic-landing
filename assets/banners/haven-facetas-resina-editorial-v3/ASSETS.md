# HAVEN Clinic ? Facetas de resina ? Criativo comercial

Vers?o solicitada em 27/10/2026. Formato: 1080 ? 1350 px. Topo sem c?psula ou logo; isologo branca oficial completa no canto inferior direito, caixa de 340 ? 340, right: 0 e bottom: 0. Sem fundos atr?s da marca.

## Copy

- Chamada: FACETAS PRECISAM PARECER ARTIFICIAIS?
- Apoio: Tire suas d?vidas antes de decidir.
- CTA: FALE COM A NOSSA EQUIPE.

A pergunta aborda uma poss?vel d?vida sobre apar?ncia; ? hip?tese de mensagem para teste, n?o promessa de resultado ou convers?o.

## Arquivos e origem

- `creative.html` e `styles.css`: fonte edit?vel isolada, com apresenta??o responsiva e modo `?export` em 1080 ? 1350.
- `../../../website/public/images/campaigns/faceta-3/haven-facetas-editorial-1080x1350.png`: ?nica imagem de entrega desta campanha.
- `media/smile-editorial-generated.png`: novo asset sint?tico gerado em 26/10/2026 com a ferramenta nativa image_gen do Codex, sob autoriza??o expressa do usu?rio; 1254 ? 1254 px. Sem reutiliza??o da foto da landing page. Prompt integral em `PHOTO_PROMPT.md`.
- `media/haven-isologo-official-white.png`: c?pia id?ntica de `AI-Design-Studio-Starter-Kit/assets/source/isologo2.png`, 2000 ? 2000 RGBA. Arquivo oficial completo com s?mbolo, nome e assinatura; sem redesenho, recolora??o, filtro ou distor??o.
- `media/Inter-SemiBold.otf`: c?pia da fonte local j? existente em `AI-Design-Studio-Starter-Kit/assets/approved/fonts/Inter-SemiBold.otf`.

A fotografia ? ilustrativa, gerada por IA, e n?o representa paciente, depoimento, antes/depois ou resultado cl?nico. A origem ilustrativa aparece no alt text e no aviso externo da apresenta??o HTML. Nenhum an?ncio foi publicado por esta implementa??o.

## Paleta e composi??o

Puce #7E5B51 no CTA, White Rock #EAE7DF no texto do CTA e Puce Dark #392824 na chamada e apoio. Cores conferidas no BRAND.md e nos tokens do site. Foto sem filtro, m?scara, n?voa ou overlay colorido. CTA de 640 ? 100 px e isologo com margem transparente original, sem sobreposi??o dos elementos vis?veis.

Foto quadrada aplicada com object-fit: cover em 1080 ? 1350; corte lateral e escala aproximada de 1,077?. Ambos os cantos da boca e os dentes permanecem vis?veis.

## Estrat?gia pesquisada

- WordStream: https://www.wordstream.com/blog/ws/2022/02/07/facebook-ad-copy-examples ? perguntas, clareza da mensagem e a??o expl?cita.
- Google Ads: https://support.google.com/google-ads/answer/14783551?hl=en-1 ? aten??o, mensagem focada e CTA claro. Fonte sobre v?deo; aplica??o a esta imagem ? uma adapta??o criativa, n?o comprova??o de desempenho em an?ncios est?ticos.

## Reprodu??o

Servir o reposit?rio localmente, abrir `creative.html?export`, aguardar document.fonts.ready e a decodifica??o das imagens. Capturar viewport 1080 ? 1350, escala 1. O par?metro oculta somente o aviso externo de avalia??o. A vers?o sem par?metro adapta a escala de visualiza??o sem alterar a composi??o.

## Verifica??o e revis?o

- Render em navegador real; dimens?es de exporta??o 1080 ? 1350 confirmadas. P?gina de apresenta??o conferida anteriormente em desktop 1440, tablet 768 e celular 390 px, sem overflow.
- Isologo branca restaurada e arquivo final novamente renderizado; hash do asset oficial conferido.
- `npm run build` em website/: aprovado.
- Seguran?a ? risco de entradas e recursos externos: sem formul?rios, envio de dados ou recursos remotos; export seleciona apenas o modo de apresenta??o. Sem achados.
- Corre??o ? risco de depend?ncias e dimens?es: todos os arquivos usados pelo HTML/CSS est?o inclu?dos, foto preservada e canvas conferido. Sem achados bloqueantes.
- UI ? risco de leitura e fidelidade de marca: sem c?psula no topo; isologo branca oficial na posi??o solicitada. CTA leg?vel e sorriso desobstru?do. Sem achados bloqueantes.

Landing page, demais campanhas, rascunhos e pesquisa de pr?tese protocolo n?o fazem parte desta entrega.
