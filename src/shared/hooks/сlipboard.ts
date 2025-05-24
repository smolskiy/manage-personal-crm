import { useState, useCallback } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout((): void => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  }, []);

  return { copyToClipboard, isCopied };
};

export default useClipboard;
