export default function PurpleButton({ text, onClickFunction = () => { }, additionalStyles = `` }) {
  return <button className={`${additionalStyles} h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl`} onClick={onClickFunction}>{text}</button>
}