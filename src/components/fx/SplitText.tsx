import type { ReactNode } from 'react';

/**
 * Divide o texto em palavras e sobe cada uma por trás de uma máscara.
 *
 * Roda no servidor: o texto vai inteiro no HTML e o leitor de tela lê a
 * frase normalmente. A divisão é por palavra, nunca por letra, justamente
 * para não picotar a leitura.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  id,
  delay = 0,
  highlight,
  highlightClass = 'text-phosphor',
}: {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  id?: string;
  delay?: number;
  /** Palavra (ou trecho) que recebe a cor de destaque. */
  highlight?: string;
  highlightClass?: string;
}) {
  const words = text.split(' ');

  return (
    <Tag id={id} className={className} data-reveal="split">
      {words.map((word, index) => {
        const isHighlighted = highlight ? word.replace(/[.,!?]/g, '') === highlight : false;
        return (
          <span key={`${word}-${index}`}>
            <span className="split-word">
              <span
                style={{ ['--i' as string]: index + delay }}
                className={isHighlighted ? highlightClass : undefined}
              >
                {word}
              </span>
            </span>
            {index < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </Tag>
  );
}

/** Variante para quando o destaque não é uma palavra isolada. */
export function SplitLines({
  lines,
  className = '',
}: {
  lines: ReactNode[];
  className?: string;
}) {
  return (
    <span className={className} data-reveal="split">
      {lines.map((line, index) => (
        <span key={index} className="split-word block">
          <span style={{ ['--i' as string]: index }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
