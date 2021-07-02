import React, { Component } from 'react'
import ProductDetail from './ProductDetail';

export default class BaiTapCarStore extends Component {
    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];

    state = {
        car: {id: 3, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
        
    }

    xemXe = (xeClick) => {
        this.setState({
            car: xeClick
        })
    }

    renderProductList = () => {
        return this.products.map((item, index) => {
            return <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                            <a href="#" className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={()=>{
                                this.xemXe(item)
                            }}>Xem chi tiết</a>
                            <ProductDetail chiTietXe={this.state.car}/>
                        </div>
                    </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 style={{marginLeft: '1rem' }}>Danh sách xe</h3>
                <div className="d-flex">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
