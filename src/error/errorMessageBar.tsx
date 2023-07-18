// ErrorMessageBar.tsx
import React, { useEffect, useState } from "react";
import "./ErrorMessageBar.css";

type ErrorMessageBarProps = {
  message: string;
  onClose: () => void;
};

const ErrorMessageBar: React.FC<ErrorMessageBarProps> = ({
  message,
  onClose,
}) => {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const timerId = setInterval(() => {
      setWidth((width) => (width > 0 ? width - 2 : 0));
    }, 100); // decreases width by 2% every 100ms, which gives us a 5s total for 100% to 0%

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (width === 0) {
      onClose();
    }
  }, [width, onClose]);

  return (
    <div className="errorBar">
      <span>{message}</span>
      <button onClick={onClose}>X</button>
      <div className="progressBar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ErrorMessageBar;
