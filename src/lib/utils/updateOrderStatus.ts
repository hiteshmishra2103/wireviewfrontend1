import axios from "axios";

const updateOrderStatus = async (status, orderId, fetchOrders, setUpdating) => {
    setUpdating(true);
    try {
        const updateOrderStatus = async () => {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}//updateOrderStatus/${orderId}`, {
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