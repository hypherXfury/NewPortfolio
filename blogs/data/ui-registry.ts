export type UIRegistryEntry = {
  slug: string;
  name: string;
  category: string;
  file: string;
  description: string;
  howItWorks: string;
};

export const UI_REGISTRY: UIRegistryEntry[] = [
  {
    slug: "accordions-bordered-accordion",
    name: "BorderedAccordion",
    category: "accordions",
    file: "blogs/components/accordions/BorderedAccordion.tsx",
    description: "Expand/collapse panels for FAQs and dense settings.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "accordions-minimal-accordion",
    name: "MinimalAccordion",
    category: "accordions",
    file: "blogs/components/accordions/MinimalAccordion.tsx",
    description: "Expand/collapse panels for FAQs and dense settings.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "avatars-avatar-stack",
    name: "AvatarStack",
    category: "avatars",
    file: "blogs/components/avatars/AvatarStack.tsx",
    description: "Circular user imagery with status, stacks, or glow accents.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "avatars-glowing-avatar",
    name: "GlowingAvatar",
    category: "avatars",
    file: "blogs/components/avatars/GlowingAvatar.tsx",
    description: "Circular user imagery with status, stacks, or glow accents.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "avatars-status-avatar",
    name: "StatusAvatar",
    category: "avatars",
    file: "blogs/components/avatars/StatusAvatar.tsx",
    description: "Circular user imagery with status, stacks, or glow accents.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-blueprint",
    name: "Blueprint",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Blueprint.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-circles",
    name: "Circles",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Circles.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-cross",
    name: "Cross",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Cross.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-grids",
    name: "Grids",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Grids.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-horizontal",
    name: "Horizontal",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Horizontal.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-rings",
    name: "Rings",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Rings.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-sparse",
    name: "Sparse",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Sparse.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "backgrounds-stripes",
    name: "Stripes",
    category: "backgrounds",
    file: "blogs/components/backgrounds/Stripes.tsx",
    description: "Full-width decorative patterns for hero sections and empty states.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "badges-glassmorphism-badge",
    name: "GlassmorphismBadge",
    category: "badges",
    file: "blogs/components/badges/GlassmorphismBadge.tsx",
    description: "Small labels for status, tags, and metadata.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "badges-pulsing-status-badge",
    name: "PulsingStatusBadge",
    category: "badges",
    file: "blogs/components/badges/PulsingStatusBadge.tsx",
    description: "Small labels for status, tags, and metadata.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "badges-soft-tag",
    name: "SoftTag",
    category: "badges",
    file: "blogs/components/badges/SoftTag.tsx",
    description: "Small labels for status, tags, and metadata.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-bento-expand",
    name: "BentoExpand",
    category: "buttons",
    file: "blogs/components/buttons/BentoExpand.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-glass-inset",
    name: "GlassInset",
    category: "buttons",
    file: "blogs/components/buttons/GlassInset.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-ink-bleed",
    name: "InkBleed",
    category: "buttons",
    file: "blogs/components/buttons/InkBleed.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-liquid-border",
    name: "LiquidBorder",
    category: "buttons",
    file: "blogs/components/buttons/LiquidBorder.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-magnetic-pull",
    name: "MagneticPull",
    category: "buttons",
    file: "blogs/components/buttons/MagneticPull.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-minimalist-ripple",
    name: "MinimalistRipple",
    category: "buttons",
    file: "blogs/components/buttons/MinimalistRipple.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-soft-float",
    name: "SoftFloat",
    category: "buttons",
    file: "blogs/components/buttons/SoftFloat.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-solid-button",
    name: "SolidButton",
    category: "buttons",
    file: "blogs/components/buttons/SolidButton.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "buttons-velvet-border",
    name: "VelvetBorder",
    category: "buttons",
    file: "blogs/components/buttons/VelvetBorder.tsx",
    description: "Interactive controls with motion, glass, or ink-style treatments.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-business-card",
    name: "BusinessCard",
    category: "cards",
    file: "blogs/components/cards/BusinessCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-facebook-post-card",
    name: "FacebookPostCard",
    category: "cards",
    file: "blogs/components/cards/FacebookPostCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-facebook-profile-card",
    name: "FacebookProfileCard",
    category: "cards",
    file: "blogs/components/cards/FacebookProfileCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-github-contribution-card",
    name: "GithubContributionCard",
    category: "cards",
    file: "blogs/components/cards/GithubContributionCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-github-profile-card",
    name: "GithubProfileCard",
    category: "cards",
    file: "blogs/components/cards/GithubProfileCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-google-profile-card",
    name: "GoogleProfileCard",
    category: "cards",
    file: "blogs/components/cards/GoogleProfileCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-instagram-post-card",
    name: "InstagramPostCard",
    category: "cards",
    file: "blogs/components/cards/InstagramPostCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-linked-in-post-card",
    name: "LinkedInPostCard",
    category: "cards",
    file: "blogs/components/cards/LinkedInPostCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-linked-in-profile-card",
    name: "LinkedInProfileCard",
    category: "cards",
    file: "blogs/components/cards/LinkedInProfileCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-notepad-card",
    name: "NotepadCard",
    category: "cards",
    file: "blogs/components/cards/NotepadCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-twitter-post-card",
    name: "TwitterPostCard",
    category: "cards",
    file: "blogs/components/cards/TwitterPostCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "blogs/components/cards/. It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "cards-twitter-profile-card",
    name: "TwitterProfileCard",
    category: "cards",
    file: "blogs/components/cards/TwitterProfileCard.tsx",
    description: "Social and product-style profile or post layouts for dashboards.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "checkbox-checkbox",
    name: "Checkbox",
    category: "checkbox",
    file: "blogs/components/checkbox/Checkbox.tsx",
    description: "Binary inputs: toggles, radios, and multi-select checkboxes.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "checkbox-radio-group",
    name: "RadioGroup",
    category: "checkbox",
    file: "blogs/components/checkbox/RadioGroup.tsx",
    description: "Binary inputs: toggles, radios, and multi-select checkboxes.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "checkbox-toggle",
    name: "Toggle",
    category: "checkbox",
    file: "blogs/components/checkbox/Toggle.tsx",
    description: "Binary inputs: toggles, radios, and multi-select checkboxes.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "dropdowns-dropdown",
    name: "Dropdown",
    category: "dropdowns",
    file: "blogs/components/dropdowns/Dropdown.tsx",
    description: "Menus anchored to triggers for actions and navigation.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "dropdowns-home-dropdown",
    name: "HomeDropdown",
    category: "dropdowns",
    file: "blogs/components/dropdowns/HomeDropdown.tsx",
    description: "Menus anchored to triggers for actions and navigation.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-disabled-input",
    name: "DisabledInput",
    category: "inputs",
    file: "blogs/components/inputs/DisabledInput.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-email-input",
    name: "EmailInput",
    category: "inputs",
    file: "blogs/components/inputs/EmailInput.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-input-validated",
    name: "InputValidated",
    category: "inputs",
    file: "blogs/components/inputs/InputValidated.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-input-with-error",
    name: "InputWithError",
    category: "inputs",
    file: "blogs/components/inputs/InputWithError.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-password-input",
    name: "PasswordInput",
    category: "inputs",
    file: "blogs/components/inputs/PasswordInput.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-text-input",
    name: "TextInput",
    category: "inputs",
    file: "blogs/components/inputs/TextInput.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "inputs-textarea-input",
    name: "TextareaInput",
    category: "inputs",
    file: "blogs/components/inputs/TextareaInput.tsx",
    description: "Text fields with validation, hints, and password visibility.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "menubar-home-menu-bar",
    name: "HomeMenuBar",
    category: "menubar",
    file: "blogs/components/menubar/HomeMenuBar.tsx",
    description: "Horizontal tab-like navigation with icons and badges.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "menubar-menu-bar",
    name: "MenuBar",
    category: "menubar",
    file: "blogs/components/menubar/MenuBar.tsx",
    description: "Horizontal tab-like navigation with icons and badges.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "progress-glowing-progress-bar",
    name: "GlowingProgressBar",
    category: "progress",
    file: "blogs/components/progress/GlowingProgressBar.tsx",
    description: "Determinate and animated progress indicators.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "progress-striped-progress-bar",
    name: "StripedProgressBar",
    category: "progress",
    file: "blogs/components/progress/StripedProgressBar.tsx",
    description: "Determinate and animated progress indicators.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "searchbar-search-bar",
    name: "SearchBar",
    category: "searchbar",
    file: "blogs/components/searchbar/SearchBar.tsx",
    description: "Search fields with optional inline results.",
    howItWorks: "It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "searchbar-search-bar-with-results",
    name: "SearchBarWithResults",
    category: "searchbar",
    file: "blogs/components/searchbar/SearchBarWithResults.tsx",
    description: "Search fields with optional inline results.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "skeletons-card-skeleton",
    name: "CardSkeleton",
    category: "skeletons",
    file: "blogs/components/skeletons/CardSkeleton.tsx",
    description: "Loading placeholders shaped like cards and profiles.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "skeletons-profile-skeleton",
    name: "ProfileSkeleton",
    category: "skeletons",
    file: "blogs/components/skeletons/ProfileSkeleton.tsx",
    description: "Loading placeholders shaped like cards and profiles.",
    howItWorks: "  It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  },
  {
    slug: "tabs-tabs",
    name: "Tabs",
    category: "tabs",
    file: "blogs/components/tabs/Tabs.tsx",
    description: "Tabbed panels swapping content without route changes.",
    howItWorks: " It is a React component (often forwardRef) styled with Tailwind utility classes so you can drop it into layouts or compose it with other kit pieces."
  }
];

export function getUIEntry(slug: string) {
  return UI_REGISTRY.find((e) => e.slug === slug);
}

export function getAllUISlugs() {
  return UI_REGISTRY.map((e) => e.slug);
}

export function uiEntriesByCategory(): Record<string, UIRegistryEntry[]> {
  return UI_REGISTRY.reduce<Record<string, UIRegistryEntry[]>>((acc, e) => {
    (acc[e.category] ??= []).push(e);
    return acc;
  }, {});
}
