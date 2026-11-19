const NAME_PATTERN = /^[\p{L}][\p{L}\s'.-]*$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  subject: 100,
  message: 1000,
};

export const contactInitialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validateContactForm = ({ name, email, subject, message }) => {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) {
    errors.name = "Informe seu nome.";
  } else if (trimmedName.length < 2) {
    errors.name = "O nome deve ter pelo menos 2 caracteres.";
  } else if (!NAME_PATTERN.test(trimmedName)) {
    errors.name = "Use apenas letras no nome.";
  }

  if (!trimmedEmail) {
    errors.email = "Informe seu email.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Informe um email válido, como nome@exemplo.com.";
  }

  if (!trimmedSubject) {
    errors.subject = "Informe o assunto.";
  } else if (trimmedSubject.length < 3) {
    errors.subject = "O assunto deve ter pelo menos 3 caracteres.";
  }

  if (!trimmedMessage) {
    errors.message = "Escreva sua mensagem.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";
  }

  return errors;
};
