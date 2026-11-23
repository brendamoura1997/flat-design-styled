export const LEGAL_TYPE = { TERMS: "terms", PRIVACY: "privacy" };

export const legalHeaders = {
  [LEGAL_TYPE.TERMS]: {
    title: "Termos de",
    highlight: "Uso",
    subtitle: "Leia com atenção as condições para utilizar nossos serviços.",
  },
  [LEGAL_TYPE.PRIVACY]: {
    title: "Política de",
    highlight: "Privacidade",
    subtitle: "Entenda como coletamos, usamos e protegemos seus dados.",
  },
};

export const legalLabels = {
  tabsAriaLabel: "Documentos legais",
  scrollAriaLabel: "Conteúdo do documento",
  updatedAt: "Última atualização: 23 de novembro de 2026",
  back: "Voltar para meus dados",
  tabs: {
    [LEGAL_TYPE.TERMS]: "Termos de Uso",
    [LEGAL_TYPE.PRIVACY]: "Política de Privacidade",
  },
};

export const legalNotices = {
  [LEGAL_TYPE.TERMS]:
    "Este site é um projeto de demonstração desenvolvido para fins de portfólio. Nenhum pagamento real é processado.",
  [LEGAL_TYPE.PRIVACY]:
    "Este site é um projeto de demonstração. Os dados informados no checkout permanecem apenas no seu navegador e não são enviados nem armazenados.",
};

export const legalDocuments = {
  [LEGAL_TYPE.TERMS]: [
    {
      title: "Aceitação dos termos",
      paragraphs: [
        "Ao contratar um plano da Flat Design Styled, você declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com alguma condição, não prossiga com a assinatura.",
      ],
    },
    {
      title: "Sobre o serviço",
      paragraphs: [
        "Oferecemos serviços de design, desenvolvimento e marketing digital, além de modelos prontos, sites pré-construídos e plugins, conforme as características de cada plano.",
        "Os recursos disponíveis variam de acordo com o plano contratado e podem ser atualizados para melhorar a experiência de uso.",
      ],
    },
    {
      title: "Cadastro e responsabilidades",
      paragraphs: ["Para contratar um plano, você se compromete a:"],
      items: [
        "Fornecer informações verdadeiras, completas e atualizadas.",
        "Manter a confidencialidade dos seus dados de acesso.",
        "Utilizar os serviços de forma lícita, sem violar direitos de terceiros.",
      ],
    },
    {
      title: "Planos, pagamento e renovação",
      paragraphs: [
        "Os planos são cobrados mensalmente, de forma recorrente, nos valores exibidos no momento da contratação, sem taxas ocultas.",
        "O pagamento pode ser realizado por cartão de crédito ou PIX Automático, mediante autorização única do titular.",
      ],
    },
    {
      title: "Cancelamento",
      paragraphs: [
        "Você pode cancelar a assinatura quando quiser, sem multa. Após o cancelamento, não haverá novas cobranças e o acesso aos recursos do plano permanece até o fim do período já pago.",
      ],
    },
    {
      title: "Propriedade intelectual",
      paragraphs: [
        "Modelos, layouts, textos, marcas e demais conteúdos disponibilizados são protegidos por direitos autorais. É permitido utilizá-los nos seus projetos conforme o plano contratado, sendo vedada a revenda ou a redistribuição isolada.",
      ],
    },
    {
      title: "Limitação de responsabilidade",
      paragraphs: [
        "Empregamos esforços para manter o serviço disponível e seguro, mas não garantimos a ausência de interrupções ou falhas. Não nos responsabilizamos por danos decorrentes do uso indevido da plataforma ou de indisponibilidades fora do nosso controle.",
      ],
    },
    {
      title: "Alterações destes termos",
      paragraphs: [
        "Podemos atualizar estes Termos de Uso a qualquer momento. Alterações relevantes serão comunicadas por e-mail e a continuidade do uso após a comunicação representa a aceitação da nova versão.",
      ],
    },
    {
      title: "Contato e foro",
      paragraphs: [
        "Dúvidas podem ser enviadas para faleconosco@example.com. Fica eleito o foro da comarca de São Paulo/SP para resolver eventuais controvérsias.",
      ],
    },
  ],
  [LEGAL_TYPE.PRIVACY]: [
    {
      title: "Quem somos",
      paragraphs: [
        "A Flat Design Styled é a controladora dos dados pessoais tratados nesta plataforma, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
      ],
    },
    {
      title: "Dados que coletamos",
      paragraphs: ["Para realizar a assinatura, podemos tratar:"],
      items: [
        "Dados de identificação: nome completo e CPF.",
        "Dados de contato: e-mail e celular.",
        "Dados de pagamento: informações do cartão ou a autorização do PIX Automático.",
        "Dados de navegação: tipo de dispositivo, navegador e páginas acessadas.",
      ],
    },
    {
      title: "Como usamos seus dados",
      paragraphs: ["Utilizamos suas informações para:"],
      items: [
        "Processar a assinatura e as cobranças mensais.",
        "Enviar confirmações e comunicações sobre o seu plano.",
        "Prestar suporte e responder às suas solicitações.",
        "Cumprir obrigações legais e prevenir fraudes.",
      ],
    },
    {
      title: "Compartilhamento",
      paragraphs: [
        "Não vendemos seus dados. O compartilhamento ocorre apenas com operadoras de pagamento, instituições financeiras e prestadores essenciais à execução do serviço, ou quando exigido por lei.",
      ],
    },
    {
      title: "Armazenamento e segurança",
      paragraphs: [
        "Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda e alteração, como criptografia e controle de acesso. Os dados são mantidos pelo tempo necessário para as finalidades descritas ou conforme exigido por lei.",
      ],
    },
    {
      title: "Seus direitos",
      paragraphs: [
        "Nos termos da LGPD, você pode solicitar a qualquer momento:",
      ],
      items: [
        "Confirmação da existência de tratamento e acesso aos seus dados.",
        "Correção de dados incompletos, inexatos ou desatualizados.",
        "Anonimização, bloqueio ou eliminação de dados desnecessários.",
        "Portabilidade dos dados e revogação do consentimento.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Utilizamos cookies e tecnologias semelhantes para lembrar preferências e entender como o site é utilizado. Você pode gerenciá-los nas configurações do seu navegador.",
      ],
    },
    {
      title: "Contato do encarregado",
      paragraphs: [
        "Para exercer seus direitos ou tirar dúvidas sobre esta política, escreva para faleconosco@example.com.",
      ],
    },
  ],
};
