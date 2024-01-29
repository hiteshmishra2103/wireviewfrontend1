import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '../styles/SearchBar.module.css';
import searchIcon from '../../public/header/search-icon.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();


    const searchProducts = async (query) => {


        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}//search`, {
                params: {
                    q: query
                }
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        searchProducts(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };




    return (
        <div className={styles.search}>
            <input
                type="text"
                name="box"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchInputChange}
                onFocus={handleFocus}
                onBlur={() => {
                    return isFocused;
                }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.searchIcon}>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            {isFocused && searchInput.length >= 1 && searchResults.length > 0 && (
                <ul>
                    {searchResults.map((product, index) => (
                        <Link href={`https://wireviewfrontend1.vercel.app/product/${product._id}`}>
                            <li key={index} onClick={() => {
                                setSearchInput('');
                                setIsFocused(false);
                                router.push(`https://wireviewfrontend1.vercel.app/product/${product._id}`);
                            }}>
                                {/* Display product details here */}
                                <Image src={product.thumbnail}
                                    alt={product.name + "image"}
                                    width={100}
                                    height={100}
                                />
                                <p>{product.name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )


};

export default SearchBar;
