import { useEffect, useState } from "react";
import "./App.css";
import Listing from "./components/listing/Listing";
import Editor from "./components/editor/Editor";

export type Experiment = {
  id: string;
  name: string;
  css: string;
  html: string;
};

const App = () => {
  const [experiments, setExperiments] = useState<Experiment[] | null>(null);
  const [selectedExperiment, setSelectedExperiment] =
    useState<Experiment | null>(null);

  useEffect(() => {
    if (experiments === null) {
      const storedExperiments = localStorage.getItem("experiments");

      if (storedExperiments) {
        setExperiments(JSON.parse(storedExperiments));
      } else {
        setExperiments([]);
      }
    } else {
      localStorage.setItem("experiments", JSON.stringify(experiments));
    }
  }, [experiments]);

  const updateExperiment = (updatedExperiment: Experiment): void => {
    if (experiments === null) return;

    const updatedExperiments = experiments.map((experiment) => {
      if (experiment.id === updatedExperiment.id) {
        return updatedExperiment;
      } else {
        return experiment;
      }
    });

    setExperiments(updatedExperiments);
  };

  return (
    <main>
      <Listing
        experiments={experiments}
        setExperiments={setExperiments}
        setSelectedExperiments={setSelectedExperiment}
      />

      <Editor
        selectedExperiment={selectedExperiment}
        updateExperiment={updateExperiment}
      />
    </main>
  );
};

export default App;
