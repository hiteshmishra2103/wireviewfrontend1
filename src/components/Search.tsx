import React, { useState } from 'react';
import styles from '../styles/Search.module.css';
import Image from 'next/image';
import searchIcon from '../../public/header/search-icon.png';

const Search = () => {
    const [borderClicked, setBorderClicked] = useState(false);

    return (
        <div
            className={`${styles.search}`}
        >
            <input type="text" name="box" placeholder="Search" />
            <Image src={searchIcon} alt="searchIcon" />
        </div>
    );
};

export default Search;