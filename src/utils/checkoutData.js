import CardIcon from "../icons/CardIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PixIcon from "../icons/PixIcon";
import UserIcon from "../icons/UserIcon";
import { theme } from "../styles/theme";
import { cardLabels } from "./priceData";

export const CHECKOUT_STEP = { DATA: 0, CONFIRM: 1, PIX: 2, SUCCESS: 3 };

export const PAYMENT_METHOD = { CARD: "card", PIX: "pix" };

export const PIX_PAYMENT_DELAY = 6000;

export const PIX_CODE =
  "00020101021226900014br.gov.bcb.pix0136flatdesign-exemplo-0000-0000-000000000000520400005303986540520.005802BR5913FLAT DESIGN6009SAO PAULO62070503***6304EXMP";

const fieldIconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  color: "none",
  stroke: theme.colors.form.iconStroke,
};

export const checkoutSteps = [
  { id: CHECKOUT_STEP.DATA, label: "Dados e pagamento" },
  { id: CHECKOUT_STEP.CONFIRM, label: "Confirmação\ndos dados" },
  { id: CHECKOUT_STEP.PIX, label: "Finalização" },
];

export const checkoutHeaders = {
  [CHECKOUT_STEP.DATA]: {
    title: "Finalize sua",
    highlight: "assinatura",
    subtitle: "Só falta preencher seus dados para começar.",
  },
  [CHECKOUT_STEP.CONFIRM]: {
    title: "Confirme sua",
    highlight: "assinatura",
    subtitle: "Confira os dados abaixo antes de finalizar seu plano.",
  },
  [CHECKOUT_STEP.PIX]: {
    title: "Confirme sua",
    highlight: "assinatura",
    subtitle: "Estamos quase lá!",
  },
  [CHECKOUT_STEP.SUCCESS]: {
    title: "Confirme sua",
    highlight: "assinatura",
    subtitle: "Assinatura concluída! Aproveite os nossos serviços.",
  },
};

export const checkoutLabels = {
  secureBadge: "Pagamento seguro",
  close: "Fechar",
  stepsAriaLabel: "Etapas da assinatura",
  emptyValue: "—",
  summary: {
    order: "Resumo do pedido",
    chosenPlan: "Plano escolhido",
    total: "Total",
    billing: "Cobrança mensal recorrente",
    cancellation: "Você pode cancelar quando quiser.",
  },
  pix: {
    title: "PIX Automático",
    badge: "Recorrente",
    description:
      "Autorize uma única vez e tenha suas mensalidades pagas automaticamente.",
    monthlyCharge: "Cobrança mensal de",
    security: "Autorização segura pelo app do seu banco",
  },
  data: {
    personalTitle: "Seus dados",
    paymentTitle: "Forma de pagamento",
    terms: {
      prefix: "Li e aceito os ",
      termsOfUse: "Termos de Uso",
      conjunction: " e a ",
      privacyPolicy: "Política de Privacidade",
      suffix: ".",
    },
    security: "Seus dados são protegidos e criptografados.",
    next: "Confirmar dados",
  },
  confirm: {
    personalTitle: "Seus dados",
    paymentTitle: "Forma de pagamento",
    cardMask: "**** **** **** ",
    edit: "Editar",
    notice:
      "Você será cobrado mensalmente, podendo cancelar a qualquer momento.",
    pixNotice:
      "Após a confirmação, você verá o QR Code para realizar o pagamento.",
    back: "Voltar",
    confirm: "Confirmar assinatura",
    pixConfirm: "Confirmar dados e gerar QR Code",
  },
  pixStep: {
    title: "Pague com PIX",
    message:
      "Escaneie o QR Code abaixo ou copie o código para realizar o pagamento pelo app do seu banco.",
    qrAlt: "QR Code PIX",
    scanHint: "Aponte a câmera do seu banco para o QR Code",
    copyTitle: "Ou copie o código PIX",
    copy: "Copiar código PIX",
    copied: "Código PIX copiado",
    waiting: "Aguardando confirmação do pagamento [SIMULAÇÃO]...",
    redirect: "Você será redirecionado automaticamente após a confirmação.",
  },
  success: {
    title: "Tudo certo!",
    message:
      "Sua assinatura foi confirmada com sucesso.\nAgora você já pode aproveitar todos os benefícios do seu plano.",
    emailNotice: "Um e-mail de confirmação foi enviado para",
    close: "Fechar",
  },
};

export const checkoutInitialValues = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
  paymentMethod: PAYMENT_METHOD.PIX,
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvv: "",
  acceptedTerms: false,
};

export const personalFields = [
  {
    name: "name",
    title: "Nome completo",
    type: "text",
    autoComplete: "name",
    placeholder: "Nome Completo",
    icon: <UserIcon {...fieldIconProps} />,
  },
  {
    name: "email",
    title: "E-mail",
    type: "email",
    autoComplete: "email",
    placeholder: "Email: voce@email.com",
    icon: <EmailIcon {...fieldIconProps} />,
  },
  {
    name: "cpf",
    title: "CPF",
    type: "text",
    inputMode: "numeric",
    placeholder: "CPF: 000.000.000-00",
    icon: <CardIcon {...fieldIconProps} />,
  },
  {
    name: "phone",
    title: "Celular",
    type: "tel",
    autoComplete: "tel",
    placeholder: "Tel: (11) 99999-9999",
    icon: <PhoneIcon {...fieldIconProps} />,
  },
];

export const cardFields = [
  {
    name: "cardNumber",
    label: "Número do cartão",
    type: "text",
    inputMode: "numeric",
    autoComplete: "cc-number",
    placeholder: "0000 0000 0000 0000",
  },
  {
    name: "cardName",
    label: "Nome impresso no cartão",
    type: "text",
    autoComplete: "cc-name",
    placeholder: "NOME COMO NO CARTÃO",
  },
  {
    name: "cardExpiry",
    label: "Validade",
    type: "text",
    inputMode: "numeric",
    autoComplete: "cc-exp",
    placeholder: "MM/AA",
  },
  {
    name: "cardCvv",
    label: "CVV",
    type: "text",
    inputMode: "numeric",
    autoComplete: "cc-csc",
    placeholder: "000",
  },
];

export const paymentMethods = [
  {
    value: PAYMENT_METHOD.CARD,
    label: "Cartão de credito",
    icon: (
      <CardIcon
        width={24}
        height={24}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.primary.default}
      />
    ),
  },
  {
    value: PAYMENT_METHOD.PIX,
    label: "PIX",
    badge: checkoutLabels.pix.badge,
    icon: (
      <PixIcon width={24} height={24} viewBox="0 0 24 24" color="#32bcad" />
    ),
  },
];

export const formatPlanTotal = (price) => `${cardLabels.currency} ${price},00`;
