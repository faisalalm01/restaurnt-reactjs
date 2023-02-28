import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        menus: [],
    }

    componentDidMount() {
        axios.get("http://localhost:3002/menu").then((res) => {
            console.log(res.data.data);
            this.setState({
                menus: (res.data.data)
            })
        })
    }

    render() {
        const { menus } = this.state
        return (
            <section className="text-gray-600 body-font flex">
                {menus.map((menus, index) => {
                    return (
                        <div className="container py-9 mx-auto" key={index}>
                                <Link to={`/detail/${menus.id}`}>
                                <div className="flex justify-center">
                                    <div className="xl:w-11/12 md:w-11/12 rounded-xl shadow-md hover:shadow-xl hover:text-white hover:w-96">
                                        <div className="bg-gray-100 rounded-lg h-full pb-6 hover:bg-black">
                                            <img className="h-40 rounded w-full object-cover mb-6" src={`${menus.Image}`} alt="content" />
                                            <p className='fixed -mt-16 px-5 bg-red-800 shadow-2xl text-white'>Rp. {menus.harga},-</p>
                                            <div className='px-5'>
                                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">{menus.kategoris.nama_kategori}</h3>
                                                <h2 className="text-xl font-bold title-font">{menus.nama}</h2>
                                                <p className="leading-relaxed text-base">{menus.deskripsi.slice(0, 90)}...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Link>
                            </div>
                    )
                })}
                {/* // <div className='bg-red-500'>
                            //     <h1>TEST</h1>
                            // </div> */}
            </section>

        )
    }
}