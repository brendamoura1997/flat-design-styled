import MonitorIcon from "../icons/MonitorIcon";
import CodeIcon from "../icons/CodeIcon";
import PurseIcon from "../icons/PurseIcon";
import { theme } from "../styles/theme";

export const serviceData = [
  {
    bg: theme.colors.secondary.first.soft,
    icon: (
      <MonitorIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        // stroke="#E11D48"
        stroke={theme.colors.secondary.first.main}
      />
    ),
    title: "Design",
    desc: "Criamos interfaces modernas e intuitivas que encantam e geram resultados.",
  },
  {
    bg: theme.colors.secondary.second.soft,
    icon: (
      <CodeIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.secondary.second.main}
      />
    ),
    title: "Desenvolvimento",
    desc: "Soluções digitais sob medida com performance, segurança e escalabilidade.",
  },
  {
    bg: theme.colors.secondary.third.soft,
    icon: (
      <PurseIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke={theme.colors.secondary.third.main}
        strokeWidth="1.5"
      />
    ),
    title: "Marketing Digital",
    desc: "Estratégias que atraem, engajam e convertem o público certo.",
  },
];
