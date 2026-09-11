# AI Design Studio — Starter Kit Portátil

Este kit transforma um projeto de comunicação, campanha, apresentação ou site em um processo guiado, verificável e reutilizável por qualquer IA ou IDE.

Ele foi escrito para equipes de marketing e design, inclusive pessoas sem experiência em programação. Os arquivos Markdown funcionam como formulários e manuais: abra, preencha os campos indicados e peça para a IA seguir o fluxo numerado.

## O princípio do kit

```text
verdade do negócio
→ pesquisa e evidências
→ estratégia por público
→ conceito central
→ produção visual em camadas
→ adaptação por canal
→ revisão automática e humana
→ entrega versionada
```

Uma boa peça não começa no prompt de imagem. Começa em fatos confirmados, público definido e uma ideia central capaz de conectar todos os formatos.

## Comece em cinco passos

1. Duplique esta pasta para o projeto do cliente.
2. Preencha `PROJECT_BRIEF.md`, `PRODUCT_FACTS.md` e os arquivos de `brand/`.
3. Cole o conteúdo de `prompts/START_HERE.md` na IA escolhida.
4. Siga `workflows/00-INICIAR.md` até `workflows/08-ENTREGAR.md`.
5. Só publique depois de concluir `qa/QA_MASTER.md`.

## Ordem obrigatória de leitura para a IA

1. `AGENTS.md`
2. `brand/BRAND.md`
3. `PRODUCT_FACTS.md`
4. `PROJECT_BRIEF.md`
5. `brand/CLAIMS_REGISTER.md`
6. `research/SOURCES.md`
7. `strategy/CONCEPT.md`, quando existir
8. Workflow da etapa atual
9. Checklist de QA correspondente

## Pastas

| Pasta | Finalidade |
|---|---|
| `agents/` | Dez papéis que podem ser usados por uma ou várias IAs |
| `skills/` | Procedimentos repetíveis, independentes de ferramenta |
| `workflows/` | Processo completo, do briefing à entrega |
| `prompts/` | Prompts prontos para pesquisa, design e revisão |
| `brand/` | Fonte de verdade visual e verbal da marca |
| `assets/` | Originais, gerações, tratamentos e finais |
| `research/` | Fontes, concorrentes, mercado e evidências |
| `strategy/` | Públicos, posicionamento, conceito e matriz de conteúdo |
| `production/` | Arquivos editáveis de site, social, slides e motion |
| `qa/` | Checklists, capturas e relatórios de revisão |
| `templates/` | Modelos para documentos recorrentes |
| `examples/` | Exemplos curtos já preenchidos |
| `exports/` | Arquivos prontos para apresentação ou publicação |
| `archive/` | Versões superadas preservadas, sem apagar o histórico |

## Regras que não podem ser quebradas

- Material recebido fica preservado em `assets/source/`.
- A IA não inventa números, clientes, depoimentos, preços ou diferenciais.
- Logo, texto, preço, CTA e avisos legais são aplicados depois da geração visual.
- Cada recomendação importante deve ter um exemplo visual ou textual concreto.
- Nenhum arquivo é publicado sem revisão humana.
- Segredos, tokens, cookies, sessões e configurações pessoais nunca entram no projeto.
- A versão final não apaga as anteriores; ela recebe número ou data.

## Base iNexxus incluída

`assets/approved/` contém logos, fontes e o template PowerPoint da iNexxus como exemplo pronto. Use essa base nos projetos da iNexxus. Para qualquer outra marca, substitua pelos assets oficiais do cliente e atualize `brand/ASSET_REGISTER.md` antes de criar.

## Compatibilidade

- **Codex e agentes compatíveis:** leem `AGENTS.md`.
- **Claude:** `CLAUDE.md` importa `AGENTS.md`.
- **Gemini:** `GEMINI.md` importa `AGENTS.md`.
- **Cursor:** `.cursor/rules/00-project.mdc` aponta para a mesma fonte.
- **GitHub Copilot:** `.github/copilot-instructions.md` repete as regras essenciais.
- **Outras IAs:** use `prompts/START_HERE.md`.

## Entregáveis recomendados

Um projeto completo pode conter relatório estratégico, campanha, peças sociais, site, apresentação, PDF, PPTX editável, filmes, contact sheets, manifesto de geração e checklist de publicação. Produza apenas o que estiver aprovado no briefing.

## Próximo arquivo

Abra `PROJECT_BRIEF.md`. Quando ele estiver preenchido, siga para `workflows/00-INICIAR.md`.
