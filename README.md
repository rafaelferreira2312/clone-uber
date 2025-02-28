# Uber Clone

Este projeto é uma plataforma de mobilidade semelhante ao Uber, incluindo um aplicativo para passageiros, um aplicativo para motoristas e um painel de administração. O sistema permite solicitações de corrida, rastreamento em tempo real, pagamentos integrados e um sistema de avaliação.

---

## **Funcionalidades Principais**

### **Autenticação e Perfis**
- Cadastro e login de usuários (motoristas e passageiros).
- Validação de identidade para motoristas.
- Perfis com informações, histórico de viagens e avaliações.

### **Solicitação e Gerenciamento de Corridas**
- Entrada e confirmação de destino.
- Algoritmo de pareamento de motoristas e passageiros.
- Tempo estimado de chegada (ETA).
- Cancelamento de corridas.

### **Mapa e Rastreamento em Tempo Real**
- Integração com APIs de mapas (Google Maps, Mapbox).
- Rastreamento GPS da corrida em tempo real.

### **Pagamentos e Faturamento**
- Pagamentos via cartão de crédito, PayPal e Pix.
- Cálculo automático de tarifas.
- Emissão de recibos.

### **Sistema de Avaliação e Feedback**
- Passageiros podem avaliar motoristas e vice-versa.
- Relatórios para administração de qualidade.

### **Painel Administrativo**
- Gerenciamento de usuários e transações.
- Análises e relatórios de desempenho.
- Moderação de feedbacks e suporte.

---

## **Tecnologias Utilizadas**

### **Front-end**
- React Native (para aplicativos móveis de passageiros e motoristas).
- React ou Next.js (para o painel administrativo).

### **Back-end**
- Node.js com NestJS ou Express.
- PostgreSQL (banco de dados).
- Firebase (autenticação e hospedagem).

### **APIs Externas**
- Google Maps API ou Mapbox (geolocalização e rotas).
- Stripe, PayPal e Mercado Pago (pagamentos).

### **Infraestrutura**
- Docker (para containerização).
- Firebase Hosting (hospedagem).
- Google Cloud ou AWS (escalabilidade).

---

## **Requisitos do Sistema**

### **Requisitos Funcionais**
1. **Autenticação**:
   - Cadastro e login de usuários.
   - Validação de identidade para motoristas.

2. **Corridas**:
   - Solicitação de corridas com destino e ETA.
   - Pareamento de motoristas e passageiros.
   - Cancelamento de corridas.

3. **Pagamentos**:
   - Integração com múltiplos gateways de pagamento.
   - Cálculo automático de tarifas.

4. **Avaliações**:
   - Sistema de feedback para passageiros e motoristas.

5. **Painel Administrativo**:
   - Gerenciamento de usuários, transações e feedbacks.

### **Requisitos Não Funcionais**
1. **Segurança**:
   - Proteção contra fraudes e acessos não autorizados.
   - Criptografia de dados sensíveis.

2. **Escalabilidade**:
   - Arquitetura capaz de suportar aumento de usuários.

3. **Desempenho**:
   - Tempo de resposta rápido para solicitações de corridas e rastreamento.

4. **Usabilidade**:
   - Interface intuitiva e responsiva.

---

## **Como Executar o Projeto**

### **Pré-requisitos**
- Docker e Docker Compose instalados.
- Node.js (v16 ou superior).
- Contas nas APIs externas (Google Maps, Stripe, PayPal, etc.).

### **Passos para Execução**
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/uber-clone.git
cd uber-clone
```
2. Configure as variáveis de ambiente:

 - Crie um arquivo .env na pasta backend/ com as credenciais necessárias.

3. Inicie os containers com Docker Compose:
```bash
docker-compose up --build
```

4. Acesse os aplicativos:

- Passageiro: http://localhost:3000

- Motorista: http://localhost:3001

- Painel Administrativo: http://localhost:3002

## Contribuição

### Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.

2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).

3. Commit suas mudanças (git commit -m 'Adiciona nova feature').

4. Push para a branch (git push origin feature/nova-feature).

5. Abra um Pull Request.