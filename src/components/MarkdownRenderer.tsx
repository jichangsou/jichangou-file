import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Helper to parse inline markdown text (images, bold, links, code)
  const renderInline = (text: string) => {
    // Process images first: ![alt](url "title") or ![alt](url)
    const imgRegex = /!\[([^\]]*)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = imgRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseLinksBoldCode(text.substring(lastIndex, match.index)));
      }
      const alt = match[1];
      const url = match[2];
      const title = match[3] || alt;
      parts.push(
        <figure key={match.index} className="my-6 space-y-2 select-none">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 max-w-xl mx-auto">
            <img
              src={url}
              alt={alt}
              title={title}
              className="w-full h-auto object-cover max-h-[650px] mx-auto block"
              loading="lazy"
            />
          </div>
          {alt && (
            <figcaption className="text-center font-suisse text-xs text-tan/70">
              {alt}
            </figcaption>
          )}
        </figure>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(parseLinksBoldCode(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : parseLinksBoldCode(text);
  };

  const parseLinksBoldCode = (str: string) => {
    // Process links [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseBoldAndCode(str.substring(lastIndex, match.index)));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-tan font-bold underline hover:text-cream transition-colors mx-1"
        >
          {label}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < str.length) {
      parts.push(parseBoldAndCode(str.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : parseBoldAndCode(str);
  };

  const parseBoldAndCode = (str: string) => {
    const boldRegex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.substring(lastIndex, match.index));
      }
      const chunk = match[0];
      if (chunk.startsWith('**') && chunk.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-bold text-cream">
            {chunk.slice(2, -2)}
          </strong>
        );
      } else if (chunk.startsWith('`') && chunk.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-white/10 text-tan font-mono text-xs">
            {chunk.slice(1, -1)}
          </code>
        );
      }
      lastIndex = match.index + chunk.length;
    }

    if (lastIndex < str.length) {
      parts.push(str.substring(lastIndex));
    }

    return parts;
  };

  // Helper to test if a row is a Markdown table divider line
  const isDividerLine = (line: string) => {
    const cells = line.split('|').map(c => c.trim()).filter(Boolean);
    return cells.length > 0 && cells.every(cell => /^[:\s-]+$/.test(cell));
  };

  // Extract fenced code blocks first (```yaml ... ```)
  const blocks: { type: 'code' | 'markdown'; content: string; lang?: string }[] = [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  let lastIdx = 0;
  let codeMatch;

  while ((codeMatch = codeBlockRegex.exec(content)) !== null) {
    if (codeMatch.index > lastIdx) {
      blocks.push({ type: 'markdown', content: content.substring(lastIdx, codeMatch.index) });
    }
    blocks.push({ type: 'code', lang: codeMatch[1], content: codeMatch[2] });
    lastIdx = codeMatch.index + codeMatch[0].length;
  }

  if (lastIdx < content.length) {
    blocks.push({ type: 'markdown', content: content.substring(lastIdx) });
  }

  return (
    <div className="space-y-4 font-suisse text-cream/80 text-xs sm:text-sm leading-relaxed select-text">
      {blocks.map((b, bIdx) => {
        if (b.type === 'code') {
          return (
            <div key={bIdx} className="my-4 rounded-xl bg-[#080A0C] border border-white/15 overflow-hidden shadow-2xl">
              {b.lang && (
                <div className="px-4 py-1.5 bg-white/5 border-b border-white/10 text-[10px] font-mono text-tan/70 uppercase font-medium">
                  {b.lang}
                </div>
              )}
              <pre className="p-4 font-mono text-xs sm:text-sm text-tan leading-relaxed overflow-x-auto whitespace-pre">
                <code>{b.content.trim()}</code>
              </pre>
            </div>
          );
        }

        const rawBlocks = b.content.split(/\n\s*\n/);
        return rawBlocks.map((block, subIdx) => {
          const trimmed = block.trim();
          if (!trimmed) return null;
          const key = `${bIdx}-${subIdx}`;

          // Headings
          if (trimmed.startsWith('# ')) {
            return (
              <h1 key={key} className="font-suisse text-lg sm:text-xl font-bold text-cream pt-4 pb-2 border-b border-white/10">
                {renderInline(trimmed.replace(/^#\s+/, ''))}
              </h1>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={key} className="font-suisse text-base sm:text-lg font-bold text-cream pt-4 pb-1 border-b border-white/10">
                {renderInline(trimmed.replace(/^##\s+/, ''))}
              </h2>
            );
          }
          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={key} className="font-suisse text-sm sm:text-base font-bold text-cream/90 pt-3 pb-1">
                {renderInline(trimmed.replace(/^###\s+/, ''))}
              </h3>
            );
          }
          if (trimmed.startsWith('#### ')) {
            return (
              <h4 key={key} className="font-suisse text-xs sm:text-sm font-bold text-tan pt-2">
                {renderInline(trimmed.replace(/^####\s+/, ''))}
              </h4>
            );
          }

          // Horizontal rule
          if (trimmed === '---' || trimmed === '***') {
            return <hr key={key} className="my-5 border-white/10" />;
          }

          // Blockquotes
          if (trimmed.startsWith('> ')) {
            const quoteText = trimmed.split('\n').map(l => l.replace(/^>\s*/, '')).join(' ');
            return (
              <blockquote key={key} className="p-4 my-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 text-xs leading-relaxed font-suisse">
                {renderInline(quoteText)}
              </blockquote>
            );
          }

          // Tables
          if (trimmed.startsWith('|')) {
            const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.startsWith('|'));
            if (lines.length >= 2) {
              const tableRows = lines.filter(line => !isDividerLine(line));
              if (tableRows.length > 0) {
                const headerRow = tableRows[0];
                const bodyRows = tableRows.slice(1);

                const parseCells = (rowStr: string) =>
                  rowStr.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

                const headerCells = parseCells(headerRow);

                return (
                  <div key={key} className="overflow-x-auto my-5 bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-xl shadow-xl">
                    <table className="w-full text-xs text-left border-collapse font-suisse">
                      <thead>
                        <tr className="bg-title-bar text-cream font-medium border-b border-white/10">
                          {headerCells.map((h, i) => (
                            <th key={i} className="p-3 whitespace-nowrap">{renderInline(h)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {bodyRows.map((rStr, rIdx) => {
                          const cells = parseCells(rStr);
                          return (
                            <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                              {cells.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3">{renderInline(cell)}</td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
          }

          // Unordered lists
          if (trimmed.split('\n').every(l => /^\s*[*|-]\s+/.test(l))) {
            const items = trimmed.split('\n').map(l => l.replace(/^\s*[*|-]\s+/, ''));
            return (
              <ul key={key} className="space-y-1.5 my-3 pl-5 list-disc text-cream/90">
                {items.map((it, iIdx) => (
                  <li key={iIdx}>{renderInline(it)}</li>
                ))}
              </ul>
            );
          }

          // Ordered lists
          if (trimmed.split('\n').every(l => /^\s*\d+\.\s+/.test(l))) {
            const items = trimmed.split('\n').map(l => l.replace(/^\s*\d+\.\s+/, ''));
            return (
              <ol key={key} className="space-y-1.5 my-3 pl-5 list-decimal text-cream/90">
                {items.map((it, iIdx) => (
                  <li key={iIdx}>{renderInline(it)}</li>
                ))}
              </ol>
            );
          }

          // Paragraphs with multiline support
          return (
            <p key={key} className="leading-relaxed">
              {trimmed.split('\n').map((line, lIdx) => (
                <React.Fragment key={lIdx}>
                  {lIdx > 0 && <br />}
                  {renderInline(line)}
                </React.Fragment>
              ))}
            </p>
          );
        });
      })}
    </div>
  );
}
