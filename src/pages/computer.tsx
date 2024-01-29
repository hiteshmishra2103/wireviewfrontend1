import SubscribeToEmailSection from "@/components/SubscribeToEmailSection";
import React from "react";
import styles from "../styles/Category.module.css";
import ProductCard from "@/components/ProductCard";
import ProductsPage from "@/components/Productspage";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import FilterIcon from "@/components/FilterIcon";



const watch = ({ products }) => {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  let filteredProducts = products.products;
  if (selectedColor) {
    filteredProducts = products.products.filter(product => product.color === selectedColor);
  }
  return (
    <>


            <ProductsPage name={"Computer"} />


            <div className={styles.categoriesContainer}>

                <div className={styles.filterContainer}>
                    {selectedColor && <h1 className={styles.foundProducts}>{`${filteredProducts.length} products found!`}</h1>}
                    <div className={styles.filterContainer}>
                        <div className={styles.categoryFilterContainer}>
                            <h3>Category</h3>
                            <select className={styles.filterLink} onChange={async (event) => {
                                await router.push(`https://wireviewfrontend1.vercel.app//${event.target.value}`);
                                setShowFilter(false)
                            }}>
                                <option value="">Select a Category</option>
                                <option value="/watch">Watch</option>
                                <option value="/cellphones">Cellphone</option>
                                <option value="/computer">Computer & Laptops</option>
                                <option value="/accessories">Accessories</option>
                                <option value="/audioVideo">Audio & Video</option>
                            </select>
                        </div>

                        <div className={styles.colorFilter}>
                            <h3>Colors</h3>
                            <ul>
                                <div onClick={() => {
                                    setSelectedColor('');
                                }}>
                                    <span className={styles.allColor}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                            <circle cx="25" cy="25" r="20" fill="red" />
                                            <circle cx="25" cy="25" r="15" fill="green" />
                                            <circle cx="25" cy="25" r="10" fill="blue" />
                                        </svg>
                                    </span>
                                    <li className={styles.colorOption} >
                                        All
                                    </li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('gold');
                                }}>
                                    <span className={styles.goldColor}></span> <li className={styles.colorOption} >Gold</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('black');
                                }}>
                                    <span className={styles.blackColor}></span> <li className={styles.colorOption}>Black</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('blue');
                                }}>
                                    <span className={styles.bluecolor}></span><li className={styles.colorOption} >Blue</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('green');
                                }}>
                                    <span className={styles.greenColor}></span><li className={styles.colorOption}>Green</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('grey');
                                }}>
                                    <span className={styles.greyColor}></span><li className={styles.colorOption}>Grey</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('pink');
                                }}>
                                    <span className={styles.pinkColor}></span><li className={styles.colorOption}>Pink</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('silver');
                                }}>
                                    <span className={styles.silverColor}></span><li className={styles.colorOption}>Silver</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('white');
                                }}>
                                    <span className={styles.whiteColor}></span> <li className={styles.colorOption}>White</li>
                                </div>
                                <div onClick={() => {
                                    setSelectedColor('yellow');
                                }}>
                                    <span className={styles.yellowcolor}></span> <li className={styles.colorOption}>Yellow</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    filteredProducts.length === 0 ? (
                        <div className={styles.noProductFound}>
                            <h2>No Products Found</h2>
                            <p>{`We're sorry, but there are no products available for the`}
                                <b>{` ${selectedColor} `}</b>
                                color.
                            </p>
                            <p>Please try another color or check back later.</p>
                        </div>
                    ) :
                        <div className={styles.categoryProductContainer}>
                            <div className={styles.categoryProductGrid}>

                                {filteredProducts?.map((product) => (
                                    <div className={styles.categoryProductCard}>

                                        <ProductCard
                                            imgUrl={product.thumbnail}
                                            name={product.name}
                                            price={product.price}
                                            id={product._id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                }


            </div >
            <div className={styles.mobileCategoriesContainer}>
                {selectedColor && <h1 className={styles.mobileFoundProducts}>{`${filteredProducts.length} products found!`}</h1>}
                {showFilter &&
                    <>
                        <div className={styles.filterColorContainer}>

                            <div className={styles.filterContainer}>
                                <div className={styles.categoryFilterContainer}>
                                    <h3>Category</h3>
                                    <select className={styles.filterLink} onChange={(event) => {
                                        router.push(`https://wireviewfrontend1.vercel.app//${event.target.value}`);
                                    }}>
                                        <option value="">Select a Category</option>
                                        <option value="/watch">Watch</option>
                                        <option value="/cellphones">Cellphone</option>
                                        <option value="/computer">Computer & Laptops</option>
                                        <option value="/accessories">Accessories</option>
                                        <option value="/audioVideo">Audio & Video</option>
                                    </select>
                                </div>

                            </div>
                            <div className={styles.colorFilter}>
                                <h3>Colors</h3>
                                <ul>
                                    <div>
                                        <span className={styles.allColor}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                                <circle cx="25" cy="25" r="20" fill="red" />
                                                <circle cx="25" cy="25" r="15" fill="green" />
                                                <circle cx="25" cy="25" r="10" fill="blue" />
                                            </svg>
                                        </span>
                                        <li className={styles.colorOption} onClick={() => {
                                            setSelectedColor('');
                                            setShowFilter(false);

                                        }}>
                                            All
                                        </li>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedColor('gold');
                                        setShowFilter(false);

                                    }}>
                                        <span className={styles.goldColor}></span> <li className={styles.colorOption}>Gold</li>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedColor('black')
                                        setShowFilter(false);

                                    }}>
                                        <span className={styles.blackColor}></span> <li className={styles.colorOption}>Black</li>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedColor('blue');
                                        setShowFilter(false);

                                    }}>
                                        <span className={styles.bluecolor}></span><li className={styles.colorOption}>Blue</li>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedColor('green');
                                        setShowFilter(false);

                                    }}>
                                        <span className={styles.greenColor}></span><li className={styles.colorOption}>Green</li>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedColor('grey');
                                        setShowFilter(false);

                                    }}>
                                        <span className={styles.greyColor}></span><li className={styles.colorOption}>Grey</li>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setSelectedColor('pink');
                                            setShowFilter(false);

                                        }}>
                                        <span className={styles.pinkColor}></span><li className={styles.colorOption}>Pink</li>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setSelectedColor('silver');
                                            setShowFilter(false);

                                        }}>
                                        <span className={styles.silverColor}></span><li className={styles.colorOption}>Silver</li>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setSelectedColor('white');
                                            setShowFilter(false);
                                        }}>
                                        <span className={styles.whiteColor}></span> <li className={styles.colorOption}>White</li>
                                    </div>
                                    <div
                                        onClick={async () => {
                                            setSelectedColor('yellow');
                                            setShowFilter(false);
                                        }}>
                                        <span className={styles.yellowcolor}></span> <li className={styles.colorOption}>Yellow</li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </>


                }

                {
                    filteredProducts.length === 0 ? (
                        <div className={styles.noProductFound}>
                            <h2>No Products Found</h2>
                            <p>{`We're sorry, but there are no products available for the`}
                                <b>{` ${selectedColor} `}</b>
                                color.
                            </p>
                            <p>Please try another color or check back later.</p>
                        </div>
                    ) :
                        <div className={styles.categoryProductContainer}>
                            <div className={styles.categoryProductGrid}>
                                {filteredProducts?.map((product) => (
                                    <div className={styles.categoryProductCard}>
                                        <ProductCard
                                            imgUrl={product.thumbnail}
                                            name={product.name}
                                            price={product.price}
                                            id={product._id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                }


            </div >

            <svg className={styles.filterIcon} onClick={() => {
                setShowFilter(!showFilter);
            }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '', marginRight: '10px' }}>
                <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path></svg>



            <SubscribeToEmailSection />
        </>
  )
}

export default watch

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//category/computer`);
  const products = await res.json();
  //return the products which are in the category of cellphones
  return {
    props: {
      products: products,
    },
  };
}