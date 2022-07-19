export default function PurpleButton({
  text,
  onClickFunction = () => {},
  additionalStyles = ``,
  disable,
}) {
  if (disable) {
    return (
      <button
        disabled={true}
        className={`${additionalStyles} h-10 py-2 px-3 text-white bg-[#D0D0D0] rounded-xl`}
        onClick={onClickFunction}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className={`${additionalStyles} h-10 py-2 px-3 text-white bg-primaryPurple  rounded-xl`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
