import type { SVGProps } from 'react';

/**
 * Ícones inline (sem biblioteca externa) — mantém o bundle leve.
 * Todos decorativos por padrão: aria-hidden, com o significado no texto ao lado.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconConsole(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 8h12a4 4 0 0 1 3.9 3.1l1 4.4A2.9 2.9 0 0 1 18 18.6L16 16H8l-2 2.6a2.9 2.9 0 0 1-4.9-3.1l1-4.4A4 4 0 0 1 6 8Z" />
      <path d="M7.5 11v3M6 12.5h3M16 11.5h.01M18 13.5h.01" />
    </Svg>
  );
}

export function IconGamepad(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 4h6a5 5 0 0 1 5 5v7a3 3 0 0 1-5.4 1.8L13 16h-2l-1.6 1.8A3 3 0 0 1 4 16V9a5 5 0 0 1 5-5Z" />
      <path d="M8 10v3M6.5 11.5h3M15.5 10.5h.01M17.5 12.5h.01" />
    </Svg>
  );
}

export function IconHeadset(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h2.5a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 6.5 19H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M20 14h-2.5a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5H18a2 2 0 0 0 2-2v-3Z" />
    </Svg>
  );
}

export function IconCable(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 4v5a4 4 0 0 0 4 4h1a4 4 0 0 1 4 4v3" />
      <path d="M2.5 4h3M18.5 20h3M20 13v3M17 13v3M15.5 10h6v3h-6z" />
    </Svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M15.5 3.5a5.5 5.5 0 0 0-5 7.7L3.9 17.8a2 2 0 0 0 2.8 2.8l6.6-6.6a5.5 5.5 0 0 0 6.9-7.2l-3 3-2.6-.6-.6-2.6 3-3a5.5 5.5 0 0 0-1.5-.1Z" />
    </Svg>
  );
}

export function IconStethoscope(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 3v5a4 4 0 0 0 8 0V3" />
      <path d="M4.5 3H6M12.5 3H14M10 12v2a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-2" />
      <circle cx="19" cy="12" r="2" />
    </Svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function IconStore(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 4h16l1.2 4.2A3 3 0 0 1 18.3 12 3 3 0 0 1 15 9.6 3 3 0 0 1 12 12a3 3 0 0 1-3-2.4A3 3 0 0 1 5.7 12 3 3 0 0 1 2.8 8.2L4 4Z" />
      <path d="M5 12v7h14v-7M10 19v-4h4v4" />
    </Svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </Svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M19 16.5 19.7 18l1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z" />
    </Svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19a6 6 0 0 1 12 0M16.5 5.4a3.2 3.2 0 0 1 0 5.2M18 19a6 6 0 0 0-2.2-4.6" />
    </Svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 4.5 2.8 20h18.4L12 4.5Z" />
      <path d="M12 10v4M12 17.2h.01" />
    </Svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 3h3l1.6 4-2 1.4a12 12 0 0 0 5 5L15 11.4 19 13v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    </Svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.8 7.2h.01" />
    </Svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.4 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5Z" />
    </svg>
  );
}

/** Console de mesa com leitor de disco. */
export function IconDisc(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
      <circle cx="8" cy="12" r="3" />
      <path d="M14 10h4M14 14h4" />
    </Svg>
  );
}

/** Portátil com controles nas laterais. */
export function IconHandheld(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="6.5" y="4.5" width="11" height="15" rx="1.6" />
      <path d="M6.5 6.5H5A1.5 1.5 0 0 0 3.5 8v8A1.5 1.5 0 0 0 5 17.5h1.5M17.5 6.5H19A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-1.5 1.5h-1.5" />
      <path d="M5 10v2M18 12v.01M18 14.5v.01" />
    </Svg>
  );
}

/** Cartucho, a mídia das gerações que a loja atravessou. */
export function IconCartridge(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3.5h14v13l-4 4H5z" />
      <path d="M8.5 7h7v4h-7zM9 20.5v-4h6" />
    </Svg>
  );
}

/** Controle acoplado ao celular, a categoria "controles mobile" da loja. */
export function IconMobilePad(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="8.5" y="4" width="7" height="16" rx="1.4" />
      <path d="M8.5 8H6a2.5 2.5 0 0 0-2.5 2.5v3A2.5 2.5 0 0 0 6 16h2.5M15.5 8H18a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 18 16h-2.5" />
      <path d="M5.2 11.2v1.6M4.4 12h1.6M18.4 11.4v.01M19.4 12.8v.01" />
    </Svg>
  );
}
