import React, { useState, useEffect } from 'react';
import { createHighlighter } from 'shiki';

export const CodeBlock: React.FC<{ code: string; lang: string }> = ({ code, lang }) => {
  const [html, setHtml] = useState<string>('');
  const theme = 'github-dark';

  useEffect(() => {
    const init = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [theme],
          langs: [lang]
        });
        const highlighted = highlighter.codeToHtml(code, { lang, theme });
        setHtml(highlighted);
      } catch (e) {
        setHtml(`<pre>${code}</pre>`);
      }
    };
    init();
  }, [code, lang, theme]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};