# QA de segurança e privacidade

## Segredos

- [ ] Não há `.env` real
- [ ] Não há token, API key, senha ou cookie
- [ ] Não há arquivo de autenticação ou sessão
- [ ] Não há `.mcp.json` pessoal
- [ ] Não há configuração pessoal de Claude, Codex, Gemini ou IDE
- [ ] Não há URL assinada ou parâmetro privado
- [ ] Histórico e logs não expõem segredos

## Dados e direitos

- [ ] Dados pessoais desnecessários foram removidos
- [ ] Conversas e prints foram anonimizados ou autorizados
- [ ] Fotografias possuem autorização adequada
- [ ] Logos parceiros possuem autorização
- [ ] Fontes e músicas possuem licença compatível
- [ ] Conteúdo de terceiros não foi copiado integralmente
- [ ] Geração de IA está declarada quando exigido

## Arquivos

- [ ] `node_modules`, `.next`, caches e temporários estão fora da entrega
- [ ] Não há arquivo de sistema ou backup pessoal
- [ ] Não há executável desconhecido
- [ ] Metadados sensíveis foram considerados
- [ ] Originais confidenciais não foram incluídos por engano
- [ ] Arquivos de exemplo não contêm valores reais

## Busca sugerida

Revise manualmente qualquer ocorrência de:

```text
token
secret
password
api_key
authorization
cookie
BEGIN PRIVATE KEY
file:///
```

Uma ocorrência não prova vazamento, mas precisa ser examinada.

## Resultado

- [ ] APROVADO
- [ ] BLOQUEADO POR SEGURANÇA

Observações:
