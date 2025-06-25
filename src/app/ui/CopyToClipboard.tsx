'use client'
import copy from 'clipboard-copy';
import { cn } from 'lib/utils';
import { toast } from "sonner"

interface CopyToClipboardProps {
  text: string;
  styles?: string;
}

export const CopyToClipboard = ({ text, styles }: CopyToClipboardProps) => {
  const handleCopyClick = async () => {
    try {
      await copy(text);
      toast("Skopiowano do schowka", { 
      });
    } 
    catch (error) {
      throw(error);
    }
  };

  return (
    <strong className={cn(styles, "font-normal hover:text-rose-900")} onClick={handleCopyClick}>
      {text}
    </strong>
  );
}