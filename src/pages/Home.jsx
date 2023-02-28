import React from 'react'
import Product from '../component/Product'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='pt-5 font-serif text-center'>
          <p className='text-4xl'>Menu Resto</p>
        </div>
        <Product />
      </div>
    )
  }
}
