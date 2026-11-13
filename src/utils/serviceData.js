import MonitorIcon from "../icons/MonitorIcon";
import CodeIcon from "../icons/CodeIcon";
import PurseIcon from "../icons/PurseIcon";

export const serviceData = [
  {
    bg: "#fce4ec",
    icon: (
      <MonitorIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#E11D48"
      />
    ),
    title: "Design",
    desc: "Criamos interfaces modernas e intuitivas que encantam e geram resultados.",
  },
  {
    bg: "#ede7f6",
    icon: (
      <CodeIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#6D28D9"
      />
    ),
    title: "Desenvolvimento",
    desc: "Soluções digitais sob medida com performance, segurança e escalabilidade.",
  },
  {
    bg: "#def6ee",
    icon: (
      <PurseIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
        strokeWidth="1.5"
      />
    ),
    title: "Marketing Digital",
    desc: "Estratégias que atraem, engajam e convertem o público certo.",
  },
];
