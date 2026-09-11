# Biblioteca de ativos do projeto

Fluxo obrigatório:

```text
source/ ou real-photos/
→ raw-ai/
→ processed/
→ generated/
→ final/
```

`approved/` guarda arquivos oficiais já liberados para reutilização. Neste kit, ele contém a base iNexxus de exemplo: logos, fontes e template PowerPoint.

Nem todo projeto usa todas as etapas. O importante é nunca confundir original, geração bruta, arquivo tratado e composição final.

## Regras

- Nunca sobrescreva `source/`.
- Registre origem e direitos em `brand/ASSET_REGISTER.md`.
- Registre gerações com `templates/ASSET_MANIFEST_TEMPLATE.md`.
- Mantenha texto, logo e CTA fora das imagens geradas.
- Não envie a pasta inteira ao cliente sem executar `qa/QA_SEGURANCA.md`.
