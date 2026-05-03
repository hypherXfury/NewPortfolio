import React, { useState, useEffect } from "react";

export const GlowingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-3 bg-zinc-800 rounded-full overflow-hidden relative shadow-inner">
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_3px_rgba(59,130,246,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
