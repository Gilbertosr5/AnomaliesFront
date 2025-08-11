import { CloudUpload, File } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 
import { ActivityIndicator, Input } from "../../components";
import { getPredictCSV, getPredictJSON } from "../../services/getPredicties";

interface valuesTypes{
  proto: string,
  state: string,
  dur: number | null,
  sbytes: number | null,
  dbytes: number | null,
}

export function Upload(){
  const [file, setFile] = useState<File | null>(null);
  const [isFileInput, setIsFileInput] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    proto: "",
    state: "",
    dur: null,
    sbytes: null,
    dbytes: null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };
  
  // Função para atualizar qualquer campo do objeto
  const handleInputChange = (key: string, value: string | number | null, type: "string" | "number" = "string") => {
    if(type === "number"){
      setValues(prev => ({ ...prev, [key]: Number(value) }));
    }else{
      setValues(prev => ({ ...prev, [key]: value }));
    }
  };

  async function submitJSON(){
    try{
      setLoading(true);
      const allFilled = Object.values(values).every(v => v !== null && v !== "" && !!v);
      if(allFilled){
        const response = await getPredictJSON(values);
        console.log("Response =>", response);
        navigate('/dashboard');
      }else{
        window.alert("Preencha todos os campos!");
      }
    }catch(error){
      console.log("Submit JSON ERROR =>", error)
    }finally{
      setLoading(false);
    }
  }
  
  async function submitFile(){
    try{
      setLoading(true);
      if(file){
        const response = await getPredictCSV(file);
        console.log("Response =>", response);
        navigate('/dashboard');
      }else{
        window.alert("Selecione um arquivo!");
      }
    }catch(error){
      console.log("Submit JSON ERROR =>", error)
    }finally{
      setLoading(false);
    }
  }

  return(
    <div className="container">
      <h1>Envie sua Rede abaixo</h1>
      <div className="buttonArea">
        <button 
          onClick={()=> setIsFileInput(true)}
          className={`select-button ${isFileInput && 'active'}`}
        >Arquivo CSV</button>
        <button 
          onClick={()=> setIsFileInput(false)}
          className={`select-button ${!isFileInput && 'active'}`}
        >Conexão individual</button>
      </div>
      {!isFileInput && (
        <div className="input-area">
          <Input
            placeholder="Digite o Protocolo..."
            label="Protocolo"
            value={values.proto}
            onChange={text => handleInputChange("proto", text)}
          />
          <Input
            placeholder="Digite o Estado..."
            label="Estado"
            value={values.state}
            onChange={text => handleInputChange("state", text)}
          />
          <Input
            placeholder="Digite o Duração..."
            label="Duração"
            value={String(values.dur)}
            onChange={text => handleInputChange("dur", text)}
            type="number"
          />
          <Input
            placeholder="Digite os Bytes enviados..."
            label="Bytes enviados"
            value={String(values.sbytes)}
            onChange={text => handleInputChange("sbytes", text)}
            type="number"
          />
          <Input
            placeholder="Digite os Bytes recebidos..."
            label="Bytes recebidos"
            value={String(values.dbytes)}
            onChange={text => handleInputChange("dbytes", text)}
            type="number"
          />
          <button 
            onClick={()=> submitJSON()} 
            className='submit-btn-input'
          >Enviar</button>

        </div>
      )}

      {isFileInput && <div
        className="file-upload"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className='file-upload-label'>
          {!file? (
            <div>
              <CloudUpload size={50} style={{width:"100%"}} color="#8B949E" />
              <strong style={{fontSize:20}}>Arraste e solte o dataset aqui</strong>
              <p>ou</p>
              <strong>clique para selecionar</strong>
            </div>
          ) : (
            <div>
              <File size={40} style={{width:"100%"}} color="#238636" />
              <p><strong>Arquivo selecionado</strong></p>
              <p>{file.name}</p>
            </div>
          )}
        </label>
      </div>}

      <button onClick={()=> submitFile()} className='submit-btn' style={{opacity: file? 1:0}}>
        {loading? <ActivityIndicator /> : "Enviar"}
      </button>
    </div>
  )
}