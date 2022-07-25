import useStorage from "../useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  return <div className="progressBar" style={{width: progress + '%'}}>

  </div>;
};
