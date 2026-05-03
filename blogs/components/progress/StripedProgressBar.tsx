import React, { useState, useEffect } from "react";

export const StripedProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 10));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-4 bg-zinc-100 border border-zinc-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500 transition-all duration-500 ease-out flex items-center justify-center relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-stripes_1s_linear_infinite]" />
      </div>
      <style>{`
        @keyframes progress-stripes {
          from { background-position: 1rem 0; }
          to { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};
