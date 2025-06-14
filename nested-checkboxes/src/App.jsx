import { useState } from "react";
import "./App.css";
import { checkboxesData } from "./data";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = {
        ...prev,
        [node.id]: isChecked,
      };

      const updateChildren = (node) => {
        if (node.children) {
          node.children.forEach((child) => {
            newState[child?.id] = isChecked;
            updateChildren(child);
          });
        }
      };

      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const areAllChildrenChecked = node.children.map((child) =>
          verifyChecked(child)
        );
        const allChildrenChecked = areAllChildrenChecked.every(Boolean);
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="parent">
          <input
            type="checkbox"
            checked={checked?.[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <label>{node.label}</label>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [checked, setChecked] = useState({});
  return (
    <>
      <h1>Nested Checkbox</h1>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}

export default App;
