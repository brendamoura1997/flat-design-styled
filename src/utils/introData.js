import ClientIcon from "../icons/ClientIcon";
import DesignIcon from "../icons/DesignIcon";
import RocketIcon from "../icons/RocketIcon";
import { theme } from "../styles/theme";

export const introData = [
  {
    bg: theme.colors.secondary.first.soft,
    icon: (size) => (
      <ClientIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.secondary.first.main}
      />
    ),
    title: "Foco no cliente",
    desc: "Soluções pensadas para o seu negócio",
  },
  {
    bg: "#edeeff",
    icon: (size) => (
      <RocketIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#5b5bd6"
        strokeWidth="1.5"
      />
    ),
    title: "Resultados reais",
    desc: "Estratégias que geram impacto de verdade",
  },
  {
    bg: theme.colors.secondary.third.soft,
    icon: (size) => (
      <DesignIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.secondary.third.main}
      />
    ),
    title: "Design criativo",
    desc: "Ideias que conectam e transformam",
  },
];
