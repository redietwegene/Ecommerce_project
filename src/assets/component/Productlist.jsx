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
    
    return(
        <div> 
            <div>
                {products.map((item) => (
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

export default Prodcutlist;