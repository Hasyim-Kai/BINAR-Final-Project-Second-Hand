import NotificationItem from "../components/NotificationItem";
import { useDispatch, useSelector } from "react-redux";
import { getSellerNotif, getBuyerNotif } from "../redux/action/transactionAction";
import { useState, useEffect, useRef } from 'react';

const NotificationDropdown = () => {
  const dispatch = useDispatch();
  const { sellerNotification, buyerNotification } = useSelector((state) => state.interestReducer);
  const wrapperRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  function handleSetDropdownOpen(event) { 
    setDropdownOpen(!isDropdownOpen);
    dispatch(getSellerNotif());
    dispatch(getBuyerNotif());
  };

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
        <button onClick={handleSetDropdownOpen}>
            {sellerNotification.length > 0 ? <img src="/icons/fi_bell_dot.svg" alt="New Notification" />
            : <img src="/icons/fi_bell.svg" alt="Notification" />}
        </button>

        {/* <!-- dropdown menu --> */}
        <div className={`absolute -right-7 p-5 mt-1 bg-white rounded-xl border shadow-xl ${isDropdownOpen ? 'flex flex-col' : 'hidden'} z-50`}>
            <ul className="lg:w-96 w-72">
                {/* IF NO NOTIF, SHOW EMPTY */}
                {sellerNotification.length < 1 && buyerNotification.length < 1 && <h1 className="text-center">Currently Empty</h1>}
                
                {/* SELLER NOTIFICATION */}
                {sellerNotification.length < 1 && sellerNotification.map( item => <NotificationItem productName = {item.product.nama}
                productPrice = {item.product.harga} productBargainedPrice = {item.harga_tawar} dateBargained = {item.createdAt}
                productImg={item.product.pictures[0].img_url} isBargained={true} key={item.id}/>)}

                {/* BUYER NOTIFICATION */}
                {buyerNotification.length < 1 && buyerNotification.map( item => <NotificationItem productName = {item.product.nama}
                productPrice = {item.product.harga} productBargainedPrice = {item.harga_tawar} dateBargained = {item.createdAt}
                productImg={item.product.pictures[0].img_url} isBargained={true} key={item.id}/>)}
            </ul>
        </div>
    </div>
}

export default NotificationDropdown