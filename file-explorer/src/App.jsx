import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./App.css";
import json from "./data.json";

// Render list of objects
const List = ({
  list,
  deleteNodeFromList,
  setCurrentNodeData,
  setShowNodeInputForm,
}) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              role="button"
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev?.[node?.name],
                }))
              }
              className="icon-btn"
            >
              {isExpanded?.[node.name] ? <MdExpandLess /> : <MdExpandMore />}
            </span>
          )}
          <span>{node.name}</span>
          <span className="file-actions">
            {node.isFolder && (
              <>
                <span
                  role="button"
                  className="icon-btn"
                  onClick={() => {
                    setShowNodeInputForm(true);
                    setCurrentNodeData({
                      nodeId: node.id,
                      isFolder: true,
                    });
                  }}
                >
                  <FiFolderPlus />
                </span>
                <span
                  role="button"
                  className="icon-btn"
                  onClick={() => {
                    setShowNodeInputForm(true);
                    setCurrentNodeData({
                      nodeId: node.id,
                      isFolder: false,
                    });
                  }}
                >
                  <AiOutlineFileAdd />
                </span>
              </>
            )}
            <span
              role="button"
              className="icon-btn"
              onClick={() => deleteNodeFromList(node.id)}
            >
              <MdDeleteOutline />
            </span>
          </span>
          {isExpanded?.[node.name] && !!node?.children && (
            <List
              list={node.children}
              deleteNodeFromList={deleteNodeFromList}
              setCurrentNodeData={setCurrentNodeData}
              setShowNodeInputForm={setShowNodeInputForm}
            />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);
  const [showNodeInputForm, setShowNodeInputForm] = useState(false);
  const [currentNodeData, setCurrentNodeData] = useState({
    nodeId: null,
    isFolder: false,
  });
  const [nodeInputValue, setNodeInputValue] = useState("");

  const addNodeToList = (nodeData, name) => {
    // Tree traversal - DFS, BFS
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === nodeData.nodeId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now(),
                name,
                isFolder: nodeData.isFolder,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }

        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: updateTree(node.children),
            };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };

  const handleAddNode = () => {
    addNodeToList(currentNodeData, nodeInputValue);
    setShowNodeInputForm(false);
    setCurrentNodeData({
      nodeId: null,
      isFolder: false,
    });
    setNodeInputValue("");
  };

  const handleCancel = () => {
    setShowNodeInputForm(false);
    setCurrentNodeData({
      nodeId: null,
      isFolder: false,
    });
    setNodeInputValue("");
  };

  return (
    <>
      <h1>File Explorer</h1>
      <List
        list={data}
        deleteNodeFromList={deleteNodeFromList}
        setCurrentNodeData={setCurrentNodeData}
        setShowNodeInputForm={setShowNodeInputForm}
      />
      {showNodeInputForm && (
        <div>
          <h3>Enter {currentNodeData.isFolder ? "folder" : "file"} name</h3>
          <input
            value={nodeInputValue}
            onChange={(e) => setNodeInputValue(e.target.value)}
            name="node-input-value"
            className="node-input"
          />
          <div className="node-input-form-action-button">
            <button onClick={handleAddNode}>Add</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
