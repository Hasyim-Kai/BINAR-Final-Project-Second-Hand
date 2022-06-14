export default function SearchButton({ text = 'null', additionalStyles = ``, anyFunction = () => { } }) {
    return <button className={`flex items-center gap-2 bg-primaryPurple rounded-lg h-10 py-2 px-5 text-white text-sm ${additionalStyles}`} onClick={()=>anyFunction(text)}>
        <img src="/icons/white_fi_search.svg" alt="search" /> {text}
    </button>
}