import "./ButtonComponent.scss";

export default function ButtonComponent({ btnClassName, btnContent, btnName }) {
  return (
    <button name={btnName} className={btnClassName}>
      {btnContent}
    </button>
  );
}
