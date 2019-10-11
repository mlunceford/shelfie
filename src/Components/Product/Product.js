import React from 'react'

class Product extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="Product">product
                <div className="productImg"></div>
                <div className="productText">
                    <div><p>name</p></div>  
                    <div><p>$$$</p></div> 
                </div>
            </div>
        )
    }
}
export default Product;