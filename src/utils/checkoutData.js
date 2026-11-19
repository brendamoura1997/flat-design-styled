import CardIcon from "../icons/CardIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PixIcon from "../icons/PixIcon";
import UserIcon from "../icons/UserIcon";
import { theme } from "../styles/theme";
import { cardLabels } from "./priceData";

export const CHECKOUT_STEP = { DATA: 0, CONFIRM: 1, SUCCESS: 2 };

export const PAYMENT_METHOD = { CARD: "card", PIX: "pix" };

const fieldIconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  color: "none",
  stroke: theme.colors.form.iconStroke,
};

export const checkoutSteps = [
  { id: CHECKOUT_STEP.DATA, label: "Dados e pagamento" },
  { id: CHECKOUT_STEP.CONFIRM, label: "Confirmação\ndos dados" },
  { id: CHECKOUT_STEP.SUCCESS, label: "Finalização" },
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
    pixNotice:
      "Ao confirmar, as instruções de pagamento via Pix serão enviadas para o seu e-mail.",
    next: "Confirmar dados",
  },
  confirm: {
    personalTitle: "Seus dados",
    paymentTitle: "Forma de pagamento",
    cardMask: "**** **** **** ",
    edit: "Editar",
    notice:
      "Você será cobrado mensalmente, podendo cancelar a qualquer momento.",
    back: "Voltar",
    confirm: "Confirmar assinatura",
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
  paymentMethod: PAYMENT_METHOD.CARD,
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
    placeholder: "Comece preenchendo seu nome",
    icon: <UserIcon {...fieldIconProps} />,
  },
  {
    name: "email",
    title: "E-mail",
    type: "email",
    autoComplete: "email",
    placeholder: "voce@email.com",
    icon: <EmailIcon {...fieldIconProps} />,
  },
  {
    name: "cpf",
    title: "CPF",
    type: "text",
    inputMode: "numeric",
    placeholder: "000.000.000-00",
    icon: <CardIcon {...fieldIconProps} />,
  },
  {
    name: "phone",
    title: "Celular",
    type: "tel",
    autoComplete: "tel",
    placeholder: "(11) 99999-9999",
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
    label: "Cartão de crédito",
    icon: (
      <CardIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.primary.default}
      />
    ),
  },
  {
    value: PAYMENT_METHOD.PIX,
    label: "Pix",
    icon: (
      <PixIcon width={28} height={28} viewBox="0 0 24 24" color="#32bcad" />
    ),
  },
];

export const formatPlanTotal = (price) => `${cardLabels.currency} ${price},00`;
