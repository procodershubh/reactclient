import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo ,Strikethrough,Underline } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

function Mytexteditor() {
  return (
    <CKEditor
    editor={ ClassicEditor }
    config={ {
        toolbar: {
            items: [ 'undo', 'redo', '|', 'bold', 'italic','underline','strikethrough'	 ],
        },
        plugins: [
            Bold, Essentials, Italic, Mention, Paragraph, Undo , Underline ,Strikethrough
        ],
       
        mention: {
            // Mention configuration
        },
        initialData: '<p>Hello </p>',
    } }
/>
  )
}

export default Mytexteditor