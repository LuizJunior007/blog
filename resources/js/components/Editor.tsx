import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Heading,
  Link,
  List,
  BlockQuote,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageResize,
  ImageUpload,
  Base64UploadAdapter,
  Table,
  TableToolbar,
  Alignment,
  Code,
  CodeBlock,
  Undo
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

export default function Editor({ value, onChange }: any) {
  return (
    <div className="mt-3">
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: 'GPL',
          plugins: [
            Essentials,
            Paragraph,
            Heading,
            Bold,
            Italic,
            Link,
            List,
            BlockQuote,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageResize,
            ImageUpload,
            Base64UploadAdapter, 
            Table,
            TableToolbar,
            Alignment,
            Code,
            CodeBlock,
            Undo
          ],
          toolbar: {
            items: [
              'undo', 'redo', '|',
              'heading', '|',
              'bold', 'italic', 'link', '|',
              'bulletedList', 'numberedList', '|',
              'alignment', '|',
              'insertTable', 'blockQuote', 'code', 'codeBlock', '|',
              'uploadImage'
            ]
          },
          image: {
            toolbar: [
              'imageTextAlternative',
              'toggleImageCaption',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side'
            ],
            resizeOptions: [
              { name: 'resizeImage:original', label: 'Original', value: null },
              { name: 'resizeImage:50', label: '50%', value: '50' },
              { name: 'resizeImage:75', label: '75%', value: '75' }
            ],
            upload: {
              types: ['jpeg', 'png', 'gif', 'bmp', 'webp'],
            },
          },
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
          },
        }}
        data={value || ''}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange?.(data);
        }}
      />
    </div>
  );
}
