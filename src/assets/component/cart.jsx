import axios from "axios";
import { useEffect, useState } from "react";



const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/cart")
            .then(response => setCart(response.data))
            .catch(err=>console.log(err))
    })
    return (
        <div>
             <div>
                {cart.map((item) => (
                       <div key={item.id}>
                        <img src={item.imageUrl}/>
                        <p> {item.name}</p>
                        <p>{item.price}</p>

                    </div>

                ))}
                </div>

        </div>
    )
}
export default Cart;