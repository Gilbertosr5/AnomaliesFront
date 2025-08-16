import React, { useState, useContext, useEffect } from "react";
import { PredictFile } from "../types/predictsTypes";
import { getPredictCSV, getPredictParquet } from "../services/getPredicties";

type FileTypes = "csv" | "parquet";

interface DashboardContextData {
	predictData: PredictFile[] | undefined;
  loading: boolean;
  getData: (type: FileTypes, file: File) => Promise<void>;
}

export const DashboardContext = React.createContext<DashboardContextData>(
  {} as DashboardContextData
);

export const DashboardProvider = ({ children })=>{
	const [predictData, setPredictData] = useState<PredictFile[]>();
  const [loading, setLoading] = useState<boolean>(false);

  async function getData(type: FileTypes, file: File){
    try{
      setLoading(true);
      const response = type === "csv"
      ? await getPredictCSV(file)
      : await getPredictParquet(file);

      setPredictData(response.data);
    }catch(error){
      console.log("getData error =>", error);
    }finally{
      setLoading(false);
    }
  }

	return (
		<DashboardContext.Provider
			value={{
				predictData,
        loading,
        getData,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
}