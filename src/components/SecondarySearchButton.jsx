export default function SearchButton({ text = 'null', additionalStyles = ``, anyFunction = () => { } }) {
    return <button className={`flex items-center gap-2 bg-secondaryPurple rounded-lg h-10 py-2 px-5 text-sm ${additionalStyles}`} onClick={()=>anyFunction(text)}>
        <img src="/icons/fi_search.svg" alt="search" /> {text}
    </button>
}