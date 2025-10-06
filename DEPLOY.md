# Deploy no Render - BGS Messier App

## Configuração do Projeto

Este projeto foi configurado para deploy no Render com as seguintes características:

### Estrutura
- **Backend**: Node.js com Express servindo arquivos estáticos do frontend
- **Frontend**: HTML/CSS/JS estático servido pelo Express
- **Banco de Dados**: Supabase

### Variáveis de Ambiente Necessárias

Configure as seguintes variáveis de ambiente no Render:

```
SUPABASE_URL=sua_url_do_supabase
SUPABASE_SERVICE_KEY=sua_chave_de_serviço_do_supabase
NODE_ENV=production
```

### Como Fazer o Deploy

1. **Conecte seu repositório GitHub ao Render**
2. **Configure as variáveis de ambiente** no painel do Render
3. **O Render usará automaticamente o arquivo `render.yaml`** para configurar o deploy
4. **Build Command**: `cd backend && npm install`
5. **Start Command**: `cd backend && npm start`

### Funcionalidades

- ✅ Servidor Express configurado para produção
- ✅ Porta dinâmica (Render define automaticamente)
- ✅ Servindo arquivos estáticos do frontend
- ✅ URLs dinâmicas no frontend (não hardcoded)
- ✅ CORS configurado
- ✅ Integração com Supabase

### Endpoints da API

- `GET /confirmarUser` - Autenticação de usuário
- `POST /criarContatos` - Criação de novos contatos

### Arquivos de Configuração

- `render.yaml` - Configuração do Render
- `backend/package.json` - Dependências e scripts
- `.gitignore` - Arquivos ignorados pelo Git

### Notas Importantes

- O frontend é servido estaticamente pelo Express
- As URLs do frontend são dinâmicas e se adaptam ao domínio do Render
- Certifique-se de configurar as variáveis de ambiente do Supabase corretamente
