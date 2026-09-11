# Comandos seguros para Windows PowerShell

Este guia é opcional. O kit pode ser usado apenas editando arquivos e conversando com uma IA. Quando precisar executar um comando, copie uma seção por vez e confirme o caminho antes de pressionar Enter.

## 1. Abrir o kit

```powershell
$kitPath = 'C:\caminho\para\AI-Design-Studio-Starter-Kit'
Set-Location -LiteralPath $kitPath
Get-Location
```

Não use `$HOME` ou `~` para operações de arquivo do projeto.

## 2. Ver a estrutura

```powershell
Get-ChildItem -LiteralPath . -Force
Get-ChildItem -LiteralPath . -Recurse -File | Select-Object FullName
```

## 3. Encontrar instruções

Se `rg` estiver instalado:

```powershell
rg --files . -g '*.md'
rg -n 'PENDENTE|VALIDAR|APROVAR' . -g '*.md'
```

Alternativa nativa do PowerShell:

```powershell
Get-ChildItem -LiteralPath . -Recurse -Filter *.md |
    Select-String -Pattern 'PENDENTE|VALIDAR|APROVAR'
```

## 4. Visualizar um site local

```powershell
py -m http.server 8080 --directory '.\production\website'
```

Abra `http://localhost:8080`. Para encerrar, pressione `Ctrl+C`.

Este servidor é somente para visualização local durante o trabalho; não o use como hospedagem pública ou de produção.

## 5. Preparar Python, quando o projeto tiver requirements.txt

```powershell
py -m venv .venv
& .\.venv\Scripts\Activate.ps1
py -m pip install --upgrade pip
py -m pip install -r .\requirements.txt
```

## 6. Preparar Node, quando o projeto tiver package.json

```powershell
npm install
npx playwright install chromium
```

## 7. Executar um render documentado

Use somente nomes de scripts que realmente existirem no projeto:

```powershell
if (Test-Path -LiteralPath '.\render.mjs') {
    node .\render.mjs
}
```

Quando o projeto fornecer auditorias:

```powershell
if (Test-Path -LiteralPath '.\audit-layout.mjs') {
    node .\audit-layout.mjs
}

if (Test-Path -LiteralPath '.\qa.mjs') {
    node .\qa.mjs
}
```

Opções como `--clean` só devem ser usadas quando o README do projeto confirmar que apagam exclusivamente exportações regeneráveis.

## 8. Servir uma pasta de entrega

```powershell
py -m http.server 8081 --directory '.\exports\web'
```

## 9. Conferir integridade de um arquivo

```powershell
Get-Item -LiteralPath '.\exports\arquivo-final.pdf'
Get-FileHash -LiteralPath '.\exports\arquivo-final.pdf' -Algorithm SHA256
```

## 10. Higgsfield

Autenticação é sempre interativa. Nunca cole token em script ou arquivo do projeto.

```powershell
higgsfield account status
higgsfield auth login
higgsfield model list --json
higgsfield model get gpt_image_2 --json
```

Se o status informar que a sessão expirou, execute o login e conclua a autorização no navegador. Nunca use `higgsfield auth token` em uma gravação, prompt ou arquivo compartilhado.

### 10.1 Imagem sem texto final

```powershell
higgsfield generate create gpt_image_2 `
    --prompt 'fotografia editorial, sem texto, sem logo, área negativa para composição' `
    --aspect_ratio 4:5 `
    --resolution 2k `
    --wait
```

### 10.2 Imagem com referência

```powershell
higgsfield generate create gpt_image_2 `
    --prompt 'preservar o produto e criar uma nova cena editorial, sem texto' `
    --image '.\assets\source\referencia.png' `
    --aspect_ratio 4:5 `
    --resolution 2k `
    --wait
```

### 10.3 Vídeo vertical a partir de uma imagem

Confira primeiro os parâmetros atuais do modelo:

```powershell
higgsfield model get seedance_2_0 --json
```

Depois gere uma cena curta. Produza o filme em planos, não em um único clipe longo.

```powershell
higgsfield generate create seedance_2_0 `
    --prompt 'câmera avança lentamente; movimento natural; preservar personagem, roupa, cenário e luz' `
    --start-image '.\assets\processed\frame-01.png' `
    --duration 8 `
    --aspect_ratio 9:16 `
    --resolution 1080p `
    --wait
```

### 10.4 Analisar o potencial de um vídeo pronto

```powershell
higgsfield generate create brain_activity `
    --video '.\exports\video\criativo-final.mp4' `
    --wait
```

O relatório é uma referência de atenção e retenção, não uma garantia de resultado comercial. Interprete junto de dados reais da campanha.

## 11. Regras de segurança

Não execute comandos de exclusão recursiva copiados de uma IA. Não mova ou sobrescreva `assets/source/`. Antes de compactar ou enviar qualquer pasta, conclua `qa/QA_SEGURANCA.md`.
