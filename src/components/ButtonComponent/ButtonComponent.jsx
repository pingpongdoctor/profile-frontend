import "./ButtonComponent.scss";

export default function ButtonComponent({
  btnClassName,
  btnContent,
  btnName,
  onClickHandler,
  onSubmitHandler,
  btnId,
  btnType,
}) {
  return (
    <button
      id={btnId}
      onClick={onClickHandler}
      onSubmit={onSubmitHandler}
      name={btnName}
      className={btnClassName}
      type={btnType}
    >
      {btnContent}
    </button>
  );
}
