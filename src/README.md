# Modelagem Calculo Futebol Feminino

Aplicação React que demonstra a aplicação de conceitos de funções, limites e derivadas em dois contextos do futebol feminino: Marketing digital e Desempenho físico.

## Funcionalidades

### Crescimento de Seguidores
- Modelo Exponencial: f(t) = 5000 * 1.08^t
- Modelo Logístico: f(t) = 100000 / (1 + e^(-0.3(t-10)))
- Gráficos interativos comparando os dois modelos
- Interpretação dos limites e comportamentos

### Desempenho Físico
- **Posição**: s(t) = 0.9t² + 1.6t - 0.03t³
- **Velocidade**: v(t) = 1.8t + 1.6 - 0.09t²
- **Aceleração**: a(t) = 1.8 - 0.18t

## Requisitos para Rodar o Código

Para rodar este projeto, você precisará ter o **Node.js** e o **pnpm** instalados em seu sistema.

### 1. Instalar Node.js e npm

Se você ainda não tem o Node.js instalado, baixe e instale a versão LTS (Long Term Support) do site oficial: [https://nodejs.org/](https://nodejs.org/)

O `npm` é instalado automaticamente com o Node.js.

### 2. Habilitar Execução de Scripts no PowerShell (Apenas Windows)

Se você estiver usando Windows e encontrar erros como "O arquivo npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema", você precisará habilitar a execução de scripts no PowerShell:

1.  Abra o PowerShell **como administrador**.
2.  Execute o comando:
    ```powershell
    Set-ExecutionPolicy RemoteSigned
    ```
3.  Digite `S` e pressione Enter para confirmar.

### 3. Instalar pnpm

Após instalar o Node.js e, se necessário, habilitar a execução de scripts, **feche e reabra seu terminal** para que as alterações no PATH sejam aplicadas. Em seguida, instale o `pnpm` globalmente usando o `npm`:

```bash
npm install -g pnpm
```

### 4. Verificar Instalações

Para confirmar que tudo está instalado corretamente, execute no terminal:

bash
node -v
npm -v
pnpm -v

Todos devem retornar um número de versão.

## Como Rodar o Código

1.  **Extraia o arquivo `.zip`** do projeto para uma pasta de sua preferência.
2.  **Navegue até o diretório do projeto** no terminal:
    bash
    cd caminho/para/futebol-feminino-matematica

3.  Instale as dependências do projeto:
    bash
    pnpm install
    
4.  *nicie o servidor de desenvolvimento:
    bash
    pnpm run dev
    

Após iniciar o servidor, acesse `http://localhost:****` no seu navegador. O projeto será carregado automaticamente

## Autores

- Davi Munhoz
- Vinicius Mafra
- Mariana França
- Larissa Shiba
- Gabriel Ciriaco

