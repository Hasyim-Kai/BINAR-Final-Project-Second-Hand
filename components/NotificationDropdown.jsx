import NotificationItem from "../components/NotificationItem";
import { useState, useEffect, useRef } from 'react';

const NotificationDropdown = () => {
    const wrapperRef = useRef(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    function handleSetDropdownOpen(event) { setDropdownOpen(!isDropdownOpen); };

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return <div className="relative" ref={wrapperRef}>
        <button onClick={handleSetDropdownOpen}><img src="/icons/fi_bell.svg" alt="Notification" /></button>

        {/* <!-- dropdown menu --> */}
        <div className={`absolute -right-7 p-5 mt-1 bg-white rounded-xl border shadow-xl ${isDropdownOpen ? 'flex flex-col' : 'hidden'} z-50`}>
            <ul className="lg:w-96 w-72">
                <NotificationItem isBargained={true} />
                <NotificationItem />
            </ul>
        </div>
    </div>
}

export default NotificationDropdown