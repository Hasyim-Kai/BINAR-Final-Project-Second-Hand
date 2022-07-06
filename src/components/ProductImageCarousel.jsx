import { useState, useEffect } from "react";

export default function ProductImageCarousel({ productImages = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnNextClick = () => {
        currentIndex === productImages.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    };

    const handleOnPrevClick = () => {
        const productsLength = productImages.length;
        setCurrentIndex((currentIndex + productsLength - 1) % productsLength);
    }; 

    return <><div id="controls-carousel" className="relative z-0 max-w-2xl h-96 mx-auto overflow-hidden rounded-lg hover:scale-110 transition-all duration-500">
        <div className="overflow-hidden">
            <img className="object-cover h-[25rem] w-full" src={productImages[currentIndex].img_url} alt="cat" />
        </div>

        {/* <!-- Slider controls --> */}
        {productImages.length > 1 && <button onClick={handleOnPrevClick} type="button" className="flex absolute top-0 left-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
            <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>}
        {productImages.length > 1 && <button onClick={handleOnNextClick} type="button" className="flex absolute top-0 right-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
            <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
        </button>}
    </div ></>
}