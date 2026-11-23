import { PAYMENT_METHOD } from "./checkoutData";

const NAME_PATTERN = /^\p{L}[\p{L}\s'.-]*$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/u;
const MAX_CARD_YEARS_AHEAD = 20;

const digitsOnly = (value) => String(value ?? "").replace(/\D/g, "");

const formatName = (value) =>
  String(value ?? "")
    .replace(/[^\p{L}\s'.-]/gu, "")
    .replace(/^\s+/, "")
    .replace(/\s{2,}/g, " ")
    .slice(0, 80);

const formatEmail = (value) =>
  String(value ?? "")
    .replace(/\s/g, "")
    .slice(0, 254);

const formatCpf = (value) => {
  const digits = digitsOnly(value).slice(0, 11);
  let output = digits.slice(0, 3);
  if (digits.length > 3) output += `.${digits.slice(3, 6)}`;
  if (digits.length > 6) output += `.${digits.slice(6, 9)}`;
  if (digits.length > 9) output += `-${digits.slice(9)}`;
  return output;
};

const formatPhone = (value) => {
  const digits = digitsOnly(value).slice(0, 11);
  let output = "";
  if (digits.length > 0) output = `(${digits.slice(0, 2)}`;
  if (digits.length > 2) output += `) ${digits.slice(2, 7)}`;
  if (digits.length > 7) output += `-${digits.slice(7)}`;
  return output;
};

const formatCardNumber = (value) =>
  digitsOnly(value)
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");

const formatCardName = (value) => formatName(value).toUpperCase().slice(0, 26);

const formatCardExpiry = (value) => {
  const digits = digitsOnly(value).slice(0, 4);
  return digits.length > 2
    ? `${digits.slice(0, 2)}/${digits.slice(2)}`
    : digits;
};

const formatCardCvv = (value) => digitsOnly(value).slice(0, 3);

export const checkoutFormatters = {
  name: formatName,
  email: formatEmail,
  cpf: formatCpf,
  phone: formatPhone,
  cardNumber: formatCardNumber,
  cardName: formatCardName,
  cardExpiry: formatCardExpiry,
  cardCvv: formatCardCvv,
};

const cpfCheckDigit = (base, factor) => {
  let sum = 0;
  for (let index = 0; index < base.length; index += 1) {
    sum += Number(base[index]) * (factor - index);
  }
  return ((sum * 10) % 11) % 10;
};

const isValidCpf = (value) => {
  const digits = digitsOnly(value);
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false;
  return (
    cpfCheckDigit(digits.slice(0, 9), 10) === Number(digits[9]) &&
    cpfCheckDigit(digits.slice(0, 10), 11) === Number(digits[10])
  );
};

const isValidPhone = (value) => {
  const digits = digitsOnly(value);
  return (
    digits.length === 11 &&
    Number(digits.slice(0, 2)) >= 11 &&
    digits[2] === "9"
  );
};

const passesLuhn = (value) => {
  const digits = digitsOnly(value);
  let sum = 0;
  let double = false;
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = Number(digits[index]);
    if (double) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    double = !double;
  }
  return digits.length > 0 && sum % 10 === 0;
};

const getExpiryError = (value) => {
  const match = /^(\d{2})\/(\d{2})$/.exec(value);
  if (!match) return "Informe a validade no formato MM/AA.";

  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);
  if (month < 1 || month > 12) return "Mês de validade inválido.";

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "Cartão vencido.";
  }
  if (year > currentYear + MAX_CARD_YEARS_AHEAD) {
    return "Ano de validade inválido.";
  }
  return null;
};

const validateName = (value) => {
  const name = String(value ?? "").trim();
  if (!name) return "Informe seu nome completo.";
  if (!NAME_PATTERN.test(name) || name.split(/\s+/).length < 2) {
    return "Informe nome e sobrenome, usando apenas letras.";
  }
  return null;
};

const validateEmail = (value) => {
  const email = String(value ?? "").trim();
  if (!email) return "Informe seu e-mail.";
  if (!EMAIL_PATTERN.test(email)) {
    return "Informe um e-mail válido, como voce@email.com.";
  }
  return null;
};

const validateCpf = (value) => {
  if (!digitsOnly(value)) return "Informe seu CPF.";
  if (!isValidCpf(value)) return "CPF inválido.";
  return null;
};

const validatePhone = (value) => {
  if (!digitsOnly(value)) return "Informe seu celular.";
  if (!isValidPhone(value)) {
    return "Informe um celular válido com DDD, como (11) 99999-9999.";
  }
  return null;
};

const validateCardNumber = (value) => {
  const digits = digitsOnly(value);
  if (!digits) return "Informe o número do cartão.";
  if (digits.length !== 16 || !passesLuhn(value)) {
    return "Número de cartão inválido.";
  }
  return null;
};

const validateCardName = (value) => {
  const cardName = String(value ?? "").trim();
  if (!cardName) return "Informe o nome impresso no cartão.";
  if (cardName.length < 3 || !NAME_PATTERN.test(cardName)) {
    return "Nome inválido. Use apenas letras.";
  }
  return null;
};

const validateCardExpiry = (value) => {
  if (!value) return "Informe a validade.";
  return getExpiryError(value); // já retorna null quando ok
};

const validateCardCvv = (value) => {
  if (!value) return "Informe o CVV.";
  if (!/^\d{3}$/.test(value)) return "O CVV deve ter 3 dígitos.";
  return null;
};

const validateAcceptedTerms = (accepted) =>
  accepted
    ? null
    : "Aceite os Termos de Uso e a Política de Privacidade para continuar.";

export const validateCheckoutForm = (values) => {
  const errors = {};

  const addError = (field, error) => {
    if (error) errors[field] = error;
  };

  addError("name", validateName(values.name));
  addError("email", validateEmail(values.email));
  addError("cpf", validateCpf(values.cpf));
  addError("phone", validatePhone(values.phone));

  if (values.paymentMethod === PAYMENT_METHOD.CARD) {
    addError("cardNumber", validateCardNumber(values.cardNumber));
    addError("cardName", validateCardName(values.cardName));
    addError("cardExpiry", validateCardExpiry(values.cardExpiry));
    addError("cardCvv", validateCardCvv(values.cardCvv));
  }

  addError("acceptedTerms", validateAcceptedTerms(values.acceptedTerms));

  return errors;
};
