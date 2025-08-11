import { ServerOff } from "lucide-react";
import "./style.css"
import { HomeButton } from "../../components";
import { 
  AreaChartExemple, 
  BarChartExemple, 
  LineBarExemple, 
  LineChartExemple 
} from "../../utils/graphsExemples";

export function Dashboard(){
  const emptyContent = false;

  if(emptyContent){
    return <NoContent />
  }

  return(
    <div className="container-dash">
      <h1 className="title">Dashboard</h1>
      <AreaChartExemple />
      <LineChartExemple />
      <BarChartExemple />
      <LineBarExemple />
      {/* <PieChartExemple /> */}
    </div>
  )
}

function NoContent(){
  return(
    <div className="container-empty">
      <div className="empty-centered">
        <ServerOff size={50} color="#F0883E
        " style={{marginBottom:30}} />
        <h1 className="empty-title">Sem dados</h1>
        <p className="empty-text">Clique no botão abaixo para poder voltar à tela inicial e poder realizar o upload do Dataset.</p>
        <HomeButton />
      </div>
    </div>
  )
}