import { whatsappLink, whatsappMessages } from '@/lib/site';
import { IconWhatsApp } from './Icons';

/** Botão flutuante discreto, presente em todas as páginas. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Eletrogames no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink-950 shadow-xl shadow-black/40 transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-auto sm:gap-2 sm:rounded-full sm:px-5"
    >
      <IconWhatsApp className="h-7 w-7 sm:h-5 sm:w-5" />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
