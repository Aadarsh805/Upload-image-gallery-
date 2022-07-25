import { useEffect } from "react";
import useStorage from "../useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if(url){
        setFile(null)
    }
  }, [url, setFile])
  return <div className="progressBar" style={{width: progress + '%'}}>

  </div>;
};
