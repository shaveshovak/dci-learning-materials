import { useEffect, useState } from "react";
import type { Experiment } from "../../App";

type EditorProps = {
  selectedExperiment: Experiment | null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  updateExperiment: Function;
};

const Editor = (props: EditorProps) => {
  const [cssCode, setCssCode] = useState<string>("");
  const [htmlCode, setHtmlCode] = useState<string>("");
  const { selectedExperiment, updateExperiment } = props;

  useEffect(() => {
    if (selectedExperiment) {
      setCssCode(selectedExperiment.css);
      setHtmlCode(selectedExperiment.html);
    }
  }, [selectedExperiment]);

  const saveExperiment = () => {
    if (selectedExperiment) {
      updateExperiment({
        ...selectedExperiment,
        html: htmlCode,
        css: cssCode,
      });
    }
  };

  if (!selectedExperiment) {
    return <div className="Editor">Select an experiment to edit</div>;
  }

  return (
    <div className="Editor">
      <div className="actions">
        <h2>{selectedExperiment?.name}</h2>
        <button onClick={saveExperiment}>Save</button>
      </div>
      <textarea
        placeholder="CSS"
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
      />
      <textarea
        placeholder="HTML"
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
      />
      <iframe srcDoc={`<style>${cssCode}</style>${htmlCode}`}></iframe>
    </div>
  );
};

export default Editor;
