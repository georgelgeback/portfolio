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
      className={`relative transition-transform duration-700 ease-out transform 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      {children}
    </div>
  );
};

export default FadeInDown;
