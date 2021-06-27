import React, { Component } from 'react'
import './BaiTapGlasses.css'

export default class BaiTapGlasses extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glasses: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    showSanPham = () => {
        return this.arrGlasses.map((item, index) => {
            return <img src={item.url} style={{width:'125px', border:'1px solid black', padding:'1rem', margin:'5px'}} key={index} onClick={()=>{
                this.xemChiTiet(item);
            }}/>
        })
    }

    xemChiTiet = (sanPhamDuocClick) => {
        this.setState({
            glasses: sanPhamDuocClick
        })
    }

    
    render() {
        let {glasses} = this.state;

        return (
            <>
                <div className="fashion">
                    <div className="overlay">
                        <div className="header">
                            <h3>Try glasses app online</h3>
                        </div>
                        <div className="body d-flex justify-content-between">
                            <div className="model_changed">
                                <img src={glasses.url} style={{ width: '128px', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '75px', opacity: '0.7' }} />
                                <div className="description position-absolute">
                                    <h5 style={{ color: 'blue', fontSize: '16px' }}>{glasses.name}</h5>
                                    <p style={{ color: 'white', fontSize: '12px' }}>{glasses.desc}</p>
                                </div>
                            </div>
                            <div className="model">

                            </div>
                        </div>
                        <div className="footer">
                            {this.showSanPham()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
