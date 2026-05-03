import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Mail from "@/icons/Mail";
import Twitter from "@/icons/Twitter";

const FOOTER_NAV = [
  { label: "Home", href: "#", target: undefined },
  { label: "Work", href: "#experience", target: undefined },
  { label: "Projects", href: "#projects", target: undefined },
  {
    label: "Resume",
    href: "/Software-engineer_Bidyut-Kundu.pdf",
    target: "_blank",
  },
];
export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/bidyut10",
      icon: <Github />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/bidyut-kundu-4ba406242",
      icon: <LinkedIn />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/BidyutKundu12",
      icon: <Twitter />,
      label: "Twitter",
    },
    {
      href: "mailto:bidyut.kundu.dev@gmail.com",
      icon: <Mail />,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-170 mx-auto px-6 py-9 grid grid-cols-2 gap-8">
        <div>
          <div className="text-[11px] tracking-widest text-stone-400 mb-4">
            Navigate
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_NAV.map(({ label, href, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-widest text-stone-400 mb-4">
            Connect
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="text-stone-400 hover:text-stone-800 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-170 mx-auto px-6 py-4 border-t border-stone-200 flex justify-between items-center">
        <span className="text-[12px] text-stone-400">
          © 2026, Bidyut Kundu. All rights reserved.
        </span>
        <span className="text-[12px] text-stone-400">Kolkata, India</span>
      </div>
    </footer>
  );
}