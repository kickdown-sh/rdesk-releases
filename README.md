# rdesk — downloads

Acesso remoto simples para **Windows** (parecido com o AnyDesk). Baixe, abra e pronto: cada máquina ganha um **ID** e uma **senha**; quem vai acessar digita o ID + a senha e vê a tela ao vivo, com mouse e teclado.

> O **código-fonte** fica em um repositório privado. Este repositório guarda apenas os **downloads** (binários prontos).

## Baixar

Vá em **[Releases](../../releases/latest)** e escolha:

| Arquivo | O que é |
|---|---|
| **rdesk-setup.exe** | Instalador (recomendado) — cria atalhos, firewall e opção de PATH. |
| **rdesk-windows-x64.zip** | Versão portátil — descompacte e rode `rdesk-gui.exe`, sem instalar. |

Windows 10/11 (64 bits). Os binários são autossuficientes.

> Na primeira execução o Windows SmartScreen pode avisar "editor desconhecido" (o app ainda não é assinado). Clique em **Mais informações → Executar assim mesmo**.

## Como usar (por ID, pela internet)

1. **Na máquina que será acessada:** abra o rdesk. Na 1ª vez ele já **gera uma senha** e deixa o **Serviço ativo** sozinho. Anote o **ID** (número grande) e, em *Senha de acesso*, clique em **Mostrar**. Passe o **ID + a senha** para quem vai acessar.
2. **Na máquina que acessa:** abra o rdesk, digite o **ID**, a **senha**, e clique em **Conectar**.

O acesso por ID pela internet **já vem pronto** — há um servidor relay público embutido, não precisa configurar nada. Quando possível o vídeo vai direto (P2P); senão, passa pelo relay.

**Na mesma rede (LAN)**, dá para conectar direto pelo `IP:5900` no lugar do ID.

## Segurança

Conexões são autenticadas por senha (SPAKE2) e criptografadas (Noise + ChaCha20-Poly1305). Use apenas em máquinas suas ou com autorização explícita do dono.

## Verificação (opcional)

Cada release traz `checksums-sha256.txt`. Para conferir um arquivo baixado no PowerShell:

```powershell
Get-FileHash .\rdesk-gui.exe -Algorithm SHA256
```
