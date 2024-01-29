export default async function addToCartFn(id, price, setCartQuantity, setAddToCart, quantity) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                productId: `${id}`,
                quantity: +quantity,
                price: price,
            }),
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        setAddToCart(true);
        setTimeout(() => {
            setAddToCart(false);
        }, 2000);

        setCartQuantity(oldQuantity => oldQuantity + quantity);
    } catch (error) {
        console.error(`Error: ${error}`);
        alert('Login to add to cart');
    }
}
