import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const ResumeView: React.FC = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/pdf/AnhVu_Resume.pdf';

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      <a href={pdfUrl} download>
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default ResumeView;
