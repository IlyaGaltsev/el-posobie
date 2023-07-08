import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import './PdfViewer.scss'

const PdfViewer = ({ pdfFile }: any) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(3)

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  return (
    <Document
      file={pdfFile}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
  )
}

export default PdfViewer
