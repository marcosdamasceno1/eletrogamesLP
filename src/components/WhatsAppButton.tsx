import { whatsappLink, whatsappMessages } from '@/lib/site';
import { IconWhatsApp } from './Icons';

/** Botão flutuante. Discreto no desktop, polegar-friendly no celular. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Eletrogames no WhatsApp"
      data-magnetic="0.25"
      className="group fixed bottom-5 right-5 z-40 flex h-14 min-h-[56px] w-14 items-center justify-center rounded-full bg-diag text-void shadow-xl shadow-black/50 transition-colors hover:bg-diag-soft sm:w-auto sm:gap-2.5 sm:px-5"
    >
      <IconWhatsApp className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
