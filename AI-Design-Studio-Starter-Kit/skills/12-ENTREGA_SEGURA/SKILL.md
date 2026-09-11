---
name: entrega-segura
description: Organizar, sanitizar, validar e entregar arquivos sem perder editabilidade ou expor dados sensíveis.
---

# Entrega segura

## Quando usar

Antes de enviar ao cliente, publicar, subir no servidor ou compactar uma pasta.

## Entradas

Arquivos aprovados, escopo, licenças, inventário e checklists concluídos.

## Procedimento

1. Separe fonte editável, alta qualidade e versão web leve.
2. Nomeie por cliente, entregável, formato, versão e data.
3. Remova caches, temporários e dependências desnecessárias.
4. Procure `.env`, tokens, cookies, sessões, links assinados e configurações pessoais.
5. Confirme licenças, direitos, claims e parceiros.
6. Abra os arquivos a partir da pasta final.
7. Gere hash quando a integridade for importante.
8. Registre o inventário e o handoff em `MEMORY.md`.

## Saída

Pasta final organizada, inventário, versão leve quando necessária e parecer de entrega.

## Critério de conclusão

Uma pessoa consegue abrir a entrega em outro computador sem receber segredos, caches ou arquivos faltantes.

## Erros a evitar

Enviar `node_modules`; compactar a pasta pessoal; apagar fontes; entregar link local `file:///`; depender de URL temporária.
