import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    handleChangeUrl = (event) => {
        console.log(event.target.value);
        this.setState({ imgUrl: event.target.value })
    }
    handleChangeProductName = (event) => {
        console.log(event.target.value);
        this.setState({ name: event.target.value })
    }
    handleChangePrice = (event) => {
        console.log(event.target.value);
        this.setState({ price: event.target.value })
    }
    cancelBtn = (event) => {
        this.setState({
            imgUrl: '',
            name: '',
            price: 0
        })
    }

    render() {
        return (
            <div className="Form">
                <div className='formBox'>
                    <div className="formImgPreview">

                    </div>
                    <p>image URL:</p>
                    <input type="text"
                        value={this.state.imgUrl}
                        onChange={this.handleChangeUrl} />
                    <p>Product Name:</p>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handleChangeProductName} />
                    <p>Price:</p>
                    <input type="number"
                        pattern='[0-9]*'
                        placeholder='0'
                        value={this.state.price}
                        onChange={this.handleChangePrice} />
                    <div className="formButtons">
                        <button onClick={() => this.cancelBtn()}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;