import axios from "axios";
import { useEffect, useState } from "react";



const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/cart")
            .then(response => setCart(response.data))
            .catch(err=>console.log(err))
    },[])
    const handleDelete = (product) => {
        try {
            axios.post(`http://localhost:3000/delete/${product}`)
        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div>
             <div>
                {cart.map((item) => (
                       <div key={item.id}>
                        <img src={item.imageUrl}/>
                        <p> {item.name}</p>
                        <p>{item.price}</p>
                        <button onClick={()=>handleDelete(item._id)}>Delete</button>

                    </div>

                ))}
                </div>

        </div>
    )
}
export default Cart;