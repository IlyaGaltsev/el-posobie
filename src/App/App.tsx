import { FC } from 'react'
import Navigation from 'src/Navigation'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import PdfViewer  from '@/components/PdfViewer';
import './App.scss'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
    </div>
  )
}

export default App
