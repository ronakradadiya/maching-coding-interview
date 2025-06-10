import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress));

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${animatedProgress}%`,
          transform: `translateX(${animatedProgress - 100}%)`
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin={"0"}
        aria-valuemax={"100"}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
