import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

interface ParsedBlock {
  type: 'h2' | 'h3' | 'h4' | 'hr' | 'quote' | 'table' | 'ul' | 'ol' | 'p' | 'code';
  lines: string[];
  lang?: string;
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
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 max-w-xl mx-auto">
            <img
              src={url}
              alt={alt}
              title={title}
              className="w-full h-auto object-cover max-h-[650px] mx-auto block"
              loading="lazy"
            />
          </div>
          {alt && (
            <figcaption className="text-center font-sans text-xs text-slate-500">
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
          className="text-blue-600 font-semibold underline hover:text-blue-700 transition-colors mx-0.5"
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
          <strong key={match.index} className="font-bold text-slate-900">
            {chunk.slice(2, -2)}
          </strong>
        );
      } else if (chunk.startsWith('`') && chunk.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 font-mono text-xs">
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

  // 1. Separate fenced code blocks from markdown text
  const rawSegments: { type: 'code' | 'text'; content: string; lang?: string }[] = [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  let lastIdx = 0;
  let codeMatch;

  while ((codeMatch = codeBlockRegex.exec(content)) !== null) {
    if (codeMatch.index > lastIdx) {
      rawSegments.push({ type: 'text', content: content.substring(lastIdx, codeMatch.index) });
    }
    rawSegments.push({ type: 'code', lang: codeMatch[1], content: codeMatch[2] });
    lastIdx = codeMatch.index + codeMatch[0].length;
  }

  if (lastIdx < content.length) {
    rawSegments.push({ type: 'text', content: content.substring(lastIdx) });
  }

  // 2. Parse text segments into structured blocks
  const blocks: ParsedBlock[] = [];

  rawSegments.forEach(segment => {
    if (segment.type === 'code') {
      blocks.push({ type: 'code', lang: segment.lang, lines: [segment.content] });
      return;
    }

    const lines = segment.content.split('\n');
    let currentBlock: ParsedBlock | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        if (currentBlock) {
          blocks.push(currentBlock);
          currentBlock = null;
        }
        continue;
      }

      // Horizontal Rule
      if (trimmed === '---' || trimmed === '***') {
        if (currentBlock) blocks.push(currentBlock);
        blocks.push({ type: 'hr', lines: [] });
        currentBlock = null;
        continue;
      }

      // Headings (Map `# ` to `h2` to enforce single H1 per page!)
      if (trimmed.startsWith('# ')) {
        if (currentBlock) blocks.push(currentBlock);
        blocks.push({ type: 'h2', lines: [trimmed.replace(/^#\s+/, '')] });
        currentBlock = null;
        continue;
      }
      if (trimmed.startsWith('## ')) {
        if (currentBlock) blocks.push(currentBlock);
        blocks.push({ type: 'h2', lines: [trimmed.replace(/^##\s+/, '')] });
        currentBlock = null;
        continue;
      }
      if (trimmed.startsWith('### ')) {
        if (currentBlock) blocks.push(currentBlock);
        blocks.push({ type: 'h3', lines: [trimmed.replace(/^###\s+/, '')] });
        currentBlock = null;
        continue;
      }
      if (trimmed.startsWith('#### ')) {
        if (currentBlock) blocks.push(currentBlock);
        blocks.push({ type: 'h4', lines: [trimmed.replace(/^####\s+/, '')] });
        currentBlock = null;
        continue;
      }

      // Blockquotes
      if (trimmed.startsWith('> ')) {
        const text = trimmed.replace(/^>\s*/, '');
        if (currentBlock && currentBlock.type === 'quote') {
          currentBlock.lines.push(text);
        } else {
          if (currentBlock) blocks.push(currentBlock);
          currentBlock = { type: 'quote', lines: [text] };
        }
        continue;
      }

      // Tables
      if (trimmed.startsWith('|')) {
        if (currentBlock && currentBlock.type === 'table') {
          currentBlock.lines.push(trimmed);
        } else {
          if (currentBlock) blocks.push(currentBlock);
          currentBlock = { type: 'table', lines: [trimmed] };
        }
        continue;
      }

      // Ordered list items
      if (/^\s*\d+\.\s+/.test(line)) {
        const text = line.replace(/^\s*\d+\.\s+/, '');
        if (currentBlock && currentBlock.type === 'ol') {
          currentBlock.lines.push(text);
        } else {
          if (currentBlock) blocks.push(currentBlock);
          currentBlock = { type: 'ol', lines: [text] };
        }
        continue;
      }

      // Unordered list items
      if (/^\s*[*|-]\s+/.test(line)) {
        const text = line.replace(/^\s*[*|-]\s+/, '');
        if (currentBlock && currentBlock.type === 'ul') {
          currentBlock.lines.push(text);
        } else {
          if (currentBlock) blocks.push(currentBlock);
          currentBlock = { type: 'ul', lines: [text] };
        }
        continue;
      }

      // Default: Paragraph line
      if (currentBlock && currentBlock.type === 'p') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'p', lines: [trimmed] };
      }
    }

    if (currentBlock) {
      blocks.push(currentBlock);
    }
  });

  return (
    <div className="space-y-4 font-sans text-slate-700 text-xs sm:text-sm leading-relaxed select-text">
      {blocks.map((block, idx) => {
        const key = `blk-${idx}`;

        switch (block.type) {
          case 'code':
            return (
              <div key={key} className="my-4 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-lg">
                {block.lang && (
                  <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase font-medium">
                    {block.lang}
                  </div>
                )}
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-100 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{block.lines[0]?.trim()}</code>
                </pre>
              </div>
            );

          case 'h2':
            return (
              <h2 key={key} className="font-sans text-base sm:text-lg font-bold text-slate-900 pt-5 pb-1.5 border-b border-slate-200/80 my-2">
                {renderInline(block.lines[0])}
              </h2>
            );

          case 'h3':
            return (
              <h3 key={key} className="font-sans text-sm sm:text-base font-bold text-slate-900 pt-4 pb-1 my-1">
                {renderInline(block.lines[0])}
              </h3>
            );

          case 'h4':
            return (
              <h4 key={key} className="font-sans text-xs sm:text-sm font-bold text-slate-800 pt-2 my-1">
                {renderInline(block.lines[0])}
              </h4>
            );

          case 'hr':
            return <hr key={key} className="my-6 border-slate-200" />;

          case 'quote':
            return (
              <blockquote key={key} className="p-4 my-4 rounded-xl bg-blue-50/80 border-l-4 border-blue-500 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans space-y-1">
                {block.lines.map((line, lIdx) => (
                  <p key={lIdx}>{renderInline(line)}</p>
                ))}
              </blockquote>
            );

          case 'table': {
            const tableRows = block.lines.filter(line => !isDividerLine(line));
            if (tableRows.length === 0) return null;
            const headerRow = tableRows[0];
            const bodyRows = tableRows.slice(1);

            const parseCells = (rowStr: string) =>
              rowStr.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);

            const headerCells = parseCells(headerRow);

            return (
              <div key={key} className="overflow-x-auto my-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse font-sans">
                  <thead>
                    <tr className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                      {headerCells.map((h, i) => (
                        <th key={i} className="p-3 whitespace-nowrap">{renderInline(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {bodyRows.map((rStr, rIdx) => {
                      const cells = parseCells(rStr);
                      return (
                        <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                          {cells.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-800">{renderInline(cell)}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }

          case 'ol':
            return (
              <ol key={key} className="space-y-2 my-3 pl-6 list-decimal text-slate-700">
                {block.lines.map((line, lIdx) => (
                  <li key={lIdx} className="pl-1 leading-relaxed">
                    {renderInline(line)}
                  </li>
                ))}
              </ol>
            );

          case 'ul':
            return (
              <ul key={key} className="space-y-1.5 my-3 pl-6 list-disc text-slate-700">
                {block.lines.map((line, lIdx) => (
                  <li key={lIdx} className="pl-1 leading-relaxed">
                    {renderInline(line)}
                  </li>
                ))}
              </ul>
            );

          case 'p':
          default:
            return (
              <p key={key} className="my-3 leading-relaxed">
                {block.lines.map((line, lIdx) => (
                  <React.Fragment key={lIdx}>
                    {lIdx > 0 && <br />}
                    {renderInline(line)}
                  </React.Fragment>
                ))}
              </p>
            );
        }
      })}
    </div>
  );
}
