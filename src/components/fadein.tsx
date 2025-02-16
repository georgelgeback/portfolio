import { FC, ReactNode, useState, useEffect } from "react";

interface FadeInDownProps {
  children: ReactNode;
}

const FadeInDown: FC<FadeInDownProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`pointer-events-none relative transition-all duration-700 ease-out transform 
        ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } -z-10`}
      // Optionally, constrain dimensions if necessary:
      style={{ width: "100%", maxHeight: "300px" }}
    >
      {children}
    </div>
  );
};

export default FadeInDown;
