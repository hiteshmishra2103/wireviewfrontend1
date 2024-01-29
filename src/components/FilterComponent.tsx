import React from 'react'

const FilterComponent = () => {
    return (
        <div className={styles.filterContainer}>
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
                            setColor('all');
                        }}>
                            All
                        </li>
                    </div>
                    <div onClick={() => {
                        setColor('gold');
                    }}>
                        <span className={styles.goldColor}></span> <li className={styles.colorOption}>Gold</li>
                    </div>
                    <div onClick={() => {
                        setColor('black')
                    }}>
                        <span className={styles.blackColor}></span> <li className={styles.colorOption}>Black</li>
                    </div>
                    <div onClick={() => {
                        setColor('blue');
                    }}>
                        <span className={styles.bluecolor}></span><li className={styles.colorOption}>Blue</li>
                    </div>
                    <div onClick={() => {
                        setColor('green');
                    }}>
                        <span className={styles.greenColor}></span><li className={styles.colorOption}>Green</li>
                    </div>
                    <div onClick={() => {
                        setColor('grey');
                    }}>
                        <span className={styles.greyColor}></span><li className={styles.colorOption}>Grey</li>
                    </div>
                    <div
                        onClick={() => {
                            setColor('pink');
                        }}>
                        <span className={styles.pinkColor}></span><li className={styles.colorOption}>Pink</li>
                    </div>
                    <div
                        onClick={() => {
                            setColor('silver');
                        }}>
                        <span className={styles.silverColor}></span><li className={styles.colorOption}>Silver</li>
                    </div>
                    <div
                        onClick={() => {
                            setColor('white');
                        }}>
                        <span className={styles.whiteColor}></span> <li className={styles.colorOption}>White</li>
                    </div>
                    <div
                        onClick={() => {
                            setColor('yellow');
                        }}>
                        <span className={styles.yellowcolor}></span> <li className={styles.colorOption}>Yellow</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default FilterComponent