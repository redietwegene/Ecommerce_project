import axios from "axios";
import React, { useEffect, useState } from "react";


function Prodcutlist(){
    const [products,setProducts]=useState([])

    useEffect(() => {
        axios
          .get("http://localhost:3000/products")
          .then(response => setProducts(response.data.products))
          .catch(error => console.log("Error in fetching items", error));
    }, []);
 const handleCart = (product) => {
    axios.post("http://localhost:3000/cart", product)
        .then(response => {
            console.log("Product added to cart successfully");
        })
        .catch(e => {
            if (e.response && e.response.status === 400) {
                console.log("Error adding product to cart:", e.response.data.message);
                alert(e.response.data.message); // Display the server message to the user
            } else {
                console.log("An unexpected error occurred:", e);
            }
        });
};


    
    return(
        <div> 
            <div>
                {products.map((item) => (
                       <div key={item.id}>
                        <img src={item.imageUrl}/>
                        <p> {item.name}</p>
                        <p>{item.price}</p>
                        <button type="button" onClick={() => handleCart(item)}>
                            Add to cart
                        </button>

                    </div>

                ))}

            </div>
            
       
        </div>

    )
}

export default Prodcutlist;