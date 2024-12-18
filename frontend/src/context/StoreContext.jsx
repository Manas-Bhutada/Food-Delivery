import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems]=useState({});

    const addToCart = (itemId)=>{
          if(!cartItems[itemId])//item id not available in the cart so we are setting
          {
            setCartItems((prev)=>({...prev,[itemId]:1}))
          }
          else{  //aur agar present hi h to bas increse kar rha hu
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }
    }
    const removeFromCart =(itemId)=>{  ///isme upar se ulta kar rhe h remove kar rhe h items
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))


    }

//     useEffect(()=>{
// console.log(cartItems);
//     },[cartItems]) //this thing is helping me to manage the cart for the items as they arfe being added (maine state ki jagah functions se kaam liya h joki mera storecontext sambhal raha h)

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){  //idhar maine for in loop li h kyuki constitem is an object and m isse items one one karke iterate karunga
if(cartItems[item]>0){
    let itemInfo=food_list.find((product)=>product._id===item); // this tellls that tthis product is available in the cart
    totalAmount+=itemInfo.price*cartItems[item];
}
       

    }
    return totalAmount;
}
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
