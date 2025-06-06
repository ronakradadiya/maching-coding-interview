import { useState } from "react";
import Profile from "./profile";
import Interests from "./interests";
import Settings from "./settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Ronak",
    age: 26,
    email: "raradadi@asu.edu",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};

        if (!data.name || data.name.length < 2) {
          error.name = "Name is not valid";
        }

        if (!data.age || data.age < 18) {
          error.age = "Age is not valid";
        }

        if (!data.email || data.email.length < 2) {
          error.email = "Email is not valid";
        }

        setErrors(error);
        return error.name || error.age || error.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const error = {};

        if (!data.interests.length) {
          error.interests = "Interests is not valid";
        }

        setErrors(error);
        return error.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePreviousClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tabItem, index) => (
          <div
            key={tabItem.name}
            className="heading"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            role="button"
          >
            {tabItem.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default TabForm;
