import "./LoadingComponent.scss";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { HeartSpinner } from "react-spinners-kit";

export default function LoadingComponent({
  windowSize,
  loadingComponentState,
}) {
  //MANIPULATE THE WELCOMING TEXT FOR THE LOADING COMPONENT
  const [textContent, SetTextContent] = useState("");
  useEffect(() => {
    if (windowSize.width < 500) {
      SetTextContent("WELCOME!");
    }
    if (windowSize.width >= 500) {
      SetTextContent("WELCOME TO MY PAGE!");
    }
  });
  return (
    <div className={`loading-component ${loadingComponentState}`}>
      {textContent && (
        <TypeAnimation
          sequence={[textContent, 1000]}
          wrapper="div"
          speed={75}
          cursor={false}
          style={{
            margin: "0",
            color: "#fff",
            fontSize: "2.5rem",
          }}
        />
      )}
      <div className="loading-component__container">
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
      </div>
    </div>
  );
}
