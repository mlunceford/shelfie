import React from 'react'
import Product from '../Product/Product'
class Dashboard extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="Dashboard">
                <Product/>
            </div>
        )
    }
}
export default Dashboard;