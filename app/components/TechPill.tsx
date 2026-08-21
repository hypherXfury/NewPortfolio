import type { ReactNode } from "react";
import {
  SiC,
  SiCplusplus,
  SiSharp,
  SiOpenjdk,
  SiDotnet,
  SiUnity,
  SiUnrealengine,
  SiGit,
  SiGithub,
  SiJson,
  SiBlender,
} from "react-icons/si";

const iconMap: Record<string, { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  C: { Icon: SiC, color: "#a8b9cc" },
  "C++": { Icon: SiCplusplus, color: "#00599c" },
  "C#": { Icon: SiSharp, color: "#a179dc" },
  Java: { Icon: SiOpenjdk, color: "#f89820" },
  ".NET": { Icon: SiDotnet, color: "#512bd4" },
  Unity: { Icon: SiUnity, color: "#222c37" },
  "Unreal Engine": { Icon: SiUnrealengine, color: "#0e1128" },
  Git: { Icon: SiGit, color: "#f05032" },
  GitHub: { Icon: SiGithub, color: "#181717" },
  JSON: { Icon: SiJson, color: "#5b5b5b" },
  Blender: { Icon: SiBlender, color: "#e87d0d" },
};

export function TechPill({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const entry = iconMap[name];

  let glyph: ReactNode = null;
  if (entry) {
    const { Icon, color } = entry;
    glyph = <Icon className="size-4 shrink-0" style={{ color }} />;
  }

  return (
    <span className={`tech-pill ${className}`}>
      {glyph}
      {name}
    </span>
  );
}
