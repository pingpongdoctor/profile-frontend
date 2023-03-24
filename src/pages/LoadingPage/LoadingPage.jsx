import "./LoadingPage.scss";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { HeartSpinner } from "react-spinners-kit";

export default function LoadingPage({ windowSize, loadingPageState }) {
  //MANIPULATE THE WELCOMING TEXT FOR THE LOADING PAGE
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
    <div className={`loading-page ${loadingPageState}`}>
      {textContent && (
        <TypeAnimation
          sequence={[
            textContent,
            1000,
            () => {
              console.log("Done");
            },
          ]}
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
      <div className="loading-page__container">
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
        <HeartSpinner color="#fff" size={53} />
      </div>
    </div>
  );
}
