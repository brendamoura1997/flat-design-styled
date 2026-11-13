import ClientIcon from "../icons/ClientIcon";
import DesignIcon from "../icons/DesignIcon";
import RocketIcon from "../icons/RocketIcon";

export const introData = [
  {
    bg: "#fde8ec",
    icon: (size) => (
      <ClientIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#f53b5a"
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
    bg: "#def6ee",
    icon: (size) => (
      <DesignIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
      />
    ),
    title: "Design criativo",
    desc: "Ideias que conectam e transformam",
  },
];
