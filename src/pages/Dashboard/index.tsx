import { useContext } from "react";
import { DashboardContext } from "../../contexts/Dashboard";
import { Activity, CircleStop, LayoutList, ServerOff, TriangleAlert, Zap } from "lucide-react";
import "./style.css"
import { HomeButton } from "../../components";
import { 
  AreaChartExemple, 
  BarChartExemple, 
  LineBarExemple, 
  LineChartExemple,
  PieChartExemple
} from "../../utils/graphsExemples";
import { Shield, LucideIcon } from "lucide-react";

export function Dashboard(){
  const { predictData } = useContext(DashboardContext);
  const emptyContent = false;

  if(emptyContent){
    return <NoContent />
  }

  function renderCard(
    title: string, 
    Icon: LucideIcon, 
    color: string, 
    value: number | string, 
    subtitle?: string
  ){
    return(
      <div className="card">
        <div className="card-title">
          <p>{title}</p>
          <Icon size={15} color={color} />
        </div>
        <h1 className="card-value" style={{color: color}}>{value}</h1>
        <p className="card-subtitle" style={{opacity: subtitle? 1 : 0}}>{subtitle}</p>
      </div>
    )
  }

  return(
    <div className="container-board">
      <h1 className="title">Dashboard</h1>
      <div className="cards-area">
        {renderCard('Total de conexões', LayoutList, 'white', "10", "Total de conexões monitoradas")}
        {renderCard('Conexões Normais', Shield, '#4CAF50', "10", "100% do total")}
        {renderCard('Anomalias', TriangleAlert, '#D64550', "0", "Ameaças detectadas")}
        {renderCard('Confiança Média', Activity, 'var(--primary)', "91%", "Precisão do modelo")}
        {renderCard('Nível de Ameaça', CircleStop, 'var(--primary)', "9%", "Risco médio detectado")}
        {renderCard('Alto Risco', Zap, '#E53935', "0", "Conexões suspeitas")}
      </div>
      <div className="tab-container">
        <button className="tab-item active">Teste</button>
        <button className="tab-item">Teste 2</button>
        <button className="tab-item">Teste 3</button>
      </div>
      <div className="container-dash">
        <AreaChartExemple />
        <LineChartExemple />
        <BarChartExemple />
      </div>
      {/* <LineBarExemple /> */}
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