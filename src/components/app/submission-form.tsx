'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleSubmission } from '@/app/challenge/[id]/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { UploadCloud, LoaderCircle } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        'Submit for VibeCheck'
      )}
    </Button>
  );
}

export function SubmissionForm({ challengeId }: { challengeId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataUri, setFileDataUri] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);

      const dataUriReader = new FileReader();
      dataUriReader.onload = (loadEvent) => {
        setFileDataUri(loadEvent.target?.result as string);
      };
      dataUriReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <form action={handleSubmission} className="space-y-6">
      <input type="hidden" name="challengeId" value={challengeId} />
      <input type="hidden" name="fileDataUri" value={fileDataUri} />

      <div className="space-y-2">
        <Label htmlFor="file-upload">Upload File</Label>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors">
                {previewUrl ? (
                  <img src={previewUrl} alt="File preview" className="h-full w-full object-contain rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-muted-foreground">Image, GIF, Video, etc.</p>
                  </div>
                )}
                <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} required/>
              </label>
            </div> 
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe your submission's vibe... why does it deserve a badge?"
          className="min-h-[120px]"
          required
        />
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
