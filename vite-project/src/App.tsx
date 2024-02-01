import './App.css'
import { useState } from 'react'
import OpenAI from 'openai'
import pdfParse from 'pdf-parse'

function App() {
  const [file, setFile]=useState(null);
  const handleFileUpload=(event: any)=>{
    setFile(event.target.files[0])
  }

  const processFile=()=>{
    if(file){
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8')
      reader.onloadend=()=>{
        const data = reader.result
        parseFile(data)
      }
    }
  }

  const parseFile=(data: string | ArrayBuffer | null)=>{
    const parsedText = pdfParse(data)
    console.log(parsedText)
  }

  return (
    <>
      <h1>Listen Now!</h1>
      <input type="file" accept=".pdf" onChange={handleFileUpload}/>
      <button onClick={processFile}>Upload</button>
    </>
  )
}

export default App
