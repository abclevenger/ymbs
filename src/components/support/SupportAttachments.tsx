// Attachment uploader for the Support form. Reads + validates selected files
// and surfaces structured metadata. No storage provider is configured in this
// frontend-only project, so files are captured as metadata (name/type/size)
// and serialized into a CRM custom field. When a hosted-upload provider is
// added, replace `captureAttachments` in src/lib/crm.ts to return URLs.
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { UploadCloud, AlertCircle, X } from "lucide-react";
import { captureAttachments, type CapturedAttachment } from "@/lib/crm";

interface Props {
  attachments: CapturedAttachment[];
  onAdd: (attachments: CapturedAttachment[]) => void;
  onRemove: (index: number) => void;
}

export function SupportAttachments({ attachments, onAdd, onRemove }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setError(null);
    const result = await captureAttachments(files);
    if (!result.ok) {
      setError(result.error || "File validation failed.");
      return;
    }
    if (result.attachments && result.attachments.length > 0) {
      onAdd(result.attachments);
    }
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2 pt-2">
      <Label>Attachments</Label>
      <input
        ref={inputRef}
        id="file-upload"
        name="attachments"
        type="file"
        multiple
        accept="image/png,image/jpeg,image/gif,image/webp,application/pdf,video/mp4,video/quicktime,video/webm"
        className="sr-only"
        onChange={handleChange}
      />
      <label
        htmlFor="file-upload"
        className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-zinc-50 transition-colors cursor-pointer block"
      >
        <UploadCloud className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
        <p className="text-sm font-medium text-zinc-700">
          Drag & drop files here, or click to browse
        </p>
        <p className="text-xs text-zinc-500 mt-1">
          Supports images, PDFs, videos (max 10 MB each, up to 5 files)
        </p>
      </label>
      {error && (
        <p className="text-sm text-red-500 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" /> {error}
        </p>
      )}
      {attachments.length > 0 && (
        <div className="space-y-2 mt-3">
          {attachments.map((att, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-zinc-50 border border-border rounded-lg px-4 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <UploadCloud className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-zinc-700 truncate">
                  {att.name}
                </span>
                <span className="text-xs text-zinc-400 shrink-0">
                  ({Math.round(att.size / 1024)} KB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="text-zinc-400 hover:text-red-500 shrink-0"
                aria-label="Remove attachment"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
