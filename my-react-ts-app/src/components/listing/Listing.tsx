import { useState } from "react";
import type { Experiment } from "../../App";
import { v4 as uuid } from "uuid";

type ListingProps = {
  experiments: Experiment[] | null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setExperiments: Function;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setSelectedExperiments: Function;
};

const Listing = (props: ListingProps) => {
  const [name, setName] = useState<string>("");
  const { experiments, setExperiments, setSelectedExperiments } = props;

  const addExperiments = () => {
    const newExperiment = {
      id: uuid(),
      name,
      css: "",
      html: "",
    };
    if (experiments) {
      setExperiments([...experiments, newExperiment]);
    } else {
      setExperiments([newExperiment]);
    }
    setName("");
  };

  return (
    <aside className="Listing">
      <h1>Experiments</h1>
      {experiments?.map((experiment) => {
        return (
          <div key={experiment.id}>
            <button onClick={() => setSelectedExperiments(experiment)}>
              {experiment.name}
            </button>
          </div>
        );
      })}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addExperiments}>Add</button>
    </aside>
  );
};

export default Listing;
