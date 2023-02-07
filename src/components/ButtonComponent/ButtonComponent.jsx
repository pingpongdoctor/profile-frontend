import "./ButtonComponent.scss";

export default function ButtonComponent({
  btnClassName,
  btnContent,
  btnName,
  onClickHandler,
  btnId,
}) {
  return (
    <button
      id={btnId}
      onClick={onClickHandler}
      name={btnName}
      className={btnClassName}
    >
      {btnContent}
    </button>
  );
}
