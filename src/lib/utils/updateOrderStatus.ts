import axios from "axios";

const updateOrderStatus = async (status, orderId, fetchOrders, setUpdating) => {
    setUpdating(true);
    try {
        const updateOrderStatus = async () => {
            const res = await axios.put(`https://ill-lingerie-bass.cyclic.app//updateOrderStatus/${orderId}`, {
                status: status
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            })
        }
        updateOrderStatus().then(() => setUpdating(false));
        fetchOrders();
    }
    catch (error) {
        console.error(error);
        setUpdating(false);
    }
}
export default updateOrderStatus;