import React from 'react'
import ProductCard from '../../src/components/ProductCard'
import styles from '../styles/TopProducts.module.css'


const TopComputers = ({ products }) => {
    return (
        <div className={styles.topComputersParentContainer}>
            <div className={styles.topComputersContentContainer}>
                <h1 className='uppercase'>
                    Wireview Choice
                </h1>
                <div>
                    <div className={styles.topComputersContent}>
                        {products?.map((product) => (
                            <ProductCard
                                imgUrl={product.thumbnail}
                                name={product.name}
                                price={product.price}
                                id={product._id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopComputers;

//create a get static props function which will fetch the product data with category of computer
//and pass it to the top computers component as props



