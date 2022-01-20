import { useRef, useState } from "react";
import styles from "./AgregaImg.module.css";

const AnadirVideo = () => {
  const [source, setSource] = useState("");
  const inputRef = useRef<any>();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event: any) => {
    inputRef.current.click();
  };

  return (
    <div className={styles.VideoInput}>
      <input
        ref={inputRef}
        className={styles.VideoInput_video}
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
        style={{ display: "none" }}
      />
      {!source && <button onClick={handleChoose}>Seleccione un vídeo</button>}
      {source && (
        <video
          className={styles.VideoInput_video}
          width="100%"
          height={400}
          controls
          src={source}
        />
      )}
      <div className={styles.VideoInput_footer}>
        {source || "Seleccione un vídeo"}
      </div>
    </div>
  );
};

export default AnadirVideo;
