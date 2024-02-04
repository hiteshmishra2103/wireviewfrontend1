
import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/atoms/user";
import Custom404 from "./404";
import styles from '../styles/Addproduct.module.css'
import {  mounted } from "@/store/atoms/mounted";
import { CircularProgress } from "@mui/material";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState("");
  const isMounted = useRecoilValue(mounted);
  const handleThumbnailImageChange = (e) => {
    const files = e.target.files;
    setThumbnailPreview(URL.createObjectURL(files[0]));
    setThumbnailImage(files[0]);
  };

  const createProduct = async (props) => {
    try {
      const { published } = props;
      const thUrl = await uploadThumbnail();

      if (!thUrl) {
        return alert("Please select an image to upload for product thumbnail!");
      }

      if (!productName) {
        return alert("Please enter a product name!");
      }
      if (!productDescription) {
        return alert("Please enter a product description!");
      }
      if (!productPrice) {
        return alert("Please enter a product price!");
      }
      if (!productCategory) {
        return alert("Please select a product category!");
      }
      if (!productColor) {
        return alert("Please enter a product color!");
      }
      if (!productQuantity) {
        return alert("Please enter a product quantity!");
      }

      const productMediaUrl = [];

      const productData = {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productColor,
        productQuantity,
        productMediaUrl,
        thUrl,
        published,
      };
      console.log(productData);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(productData),
      });

      if (response.status === 201) {
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductCategory("");
        setProductColor("");
        setProductQuantity("");
        setThumbnailUrl("");

        if (published) {
          alert("Product created successfully!");
        } else {
          alert("Product saved as draft successfully!");
        }
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while creating the product. Please try again.");
    }
  };

  const uploadThumbnail = async () => {
    try {
      console.log(thumbnailImage);
      let imgUrl = "";
      if (
        thumbnailImage.type === "image/png" ||
        thumbnailImage.type === "image/jpeg" ||
        thumbnailImage.type === "image/jpg" ||
        thumbnailImage.type === "image/webp" ||
        thumbnailImage.type === "image/svg"
      ) {
        const image = new FormData();
        image.append("file", thumbnailImage);
        image.append("cloud_name", `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);
        image.append("upload_preset", `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`);
        console.log("Making request to cloudinary");
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: image,
          }
        );

        const imgData = await response.json();
        imgUrl = imgData.secure_url.toString();
      }
      // setThumbnailUrl(imgUrl);
      setThumbnailPreview("");
      setThumbnailImage("");
      return imgUrl;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const user = useRecoilValue(userState);
  if (!isMounted) {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
        }}
    >
        <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    </div>
        );
  } else if (!user.user) {
    return <Custom404 />;
  } else {
    if (!user?.user.isAdmin) {
      return <Custom404 />;
    } else {
      return (
        <div className={styles.addProductContainer}>
          <h2 className="text-4xl">NEW PRODUCT</h2>
          <div className={styles.addProductFormParentContainer}>
            <div className={styles.productThumbnail}>
              <div className={styles.productThumbnailCard}>
                <h4 className={styles.productTitle}>Product Thumbnail</h4>
                <p className={styles.productDescription}>
                  Only *.png, *.jpg, *.jpeg,*.svg, *.webp files are accepted
                </p>
                <form className={styles.uploadForm}>
                  {thumbnailPreview === "" ? (
                    <div className={styles.fileUploadContainer}>
                      <div className={styles.fileUpload}>
                        <p>Upload one file to set as the thumbnail...</p>
                        <input
                          type="file"
                          id="product-upload-input"
                          accept="image/png, image/jpeg, image/jpg, image/webp, image/svg+xml"
                          onChange={handleThumbnailImageChange}
                          className={styles.fileInput}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.thumbnailPreviewCard}>
                      {thumbnailPreview && (
                        <div>
                          <span
                            onClick={() => setThumbnailPreview("")}
                            className={styles.DeleteThumbnailBtn}
                          >
                            Upload another Image
                          </span>
                          <img
                            src={thumbnailPreview}
                            className={styles.previewThumbnail}
                            alt="thumbnail"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className={styles.addProductFormContainer}>
              <div className={styles.textField}>
                <input
                  type="text"
                  name="productname"
                  id="productname"
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                  value={productName}
                  required
                />
                <span></span>
                <label htmlFor="productname">Product Name</label>
              </div>
              <div className={styles.textarea}>
                <textarea
                  name="postContent"
                  autoComplete="true"
                  cols={10}
                  placeholder="Write your product description here..."
                  onChange={(e) => {
                    setProductDescription(e.target.value);
                  }}
                  value={productDescription}
                  rows={5}
                />
              </div>

              <div className={styles.textField}>
                <input
                  type="number"
                  name="price"
                  id="price"
                  required
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                <span></span>
                <label htmlFor="price">Price</label>
              </div>

              <div className={styles.dropdown}>
                <label htmlFor="categories">Choose a category:</label>
                <select
                  name="categories"
                  id="categories"
                  onChange={(e) => setProductCategory(e.target.value)}
                  value={productCategory}
                >
                  <option value="selectacategory">Select a category</option>
                  <option value="computer">Computer & Laptops</option>
                  <option value="cellphone">Cellphone</option>
                  <option value="accessories">Accessories</option>
                  <option value="watch">Watch</option>
                  <option value="audioVideo">Audio & Video</option>
                </select>
              </div>

              <div className={`${styles.textField}`}>
                <input
                  type="text"
                  name="color"
                  onChange={(e) => setProductColor(e.target.value)}
                  value={productColor}
                  required
                />
                <span></span>
                <label htmlFor="color">Color</label>
              </div>

              <div className={styles.textField}>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => setProductQuantity(e.target.value)}
                  value={productQuantity}
                  required
                />
                <span></span>
                <label htmlFor="quantity">Quantity</label>
              </div>
            </div>
          </div>
          <div className={styles.saveButtonContainer}>
            <div
              className={styles.saveButton}
              onClick={() => {
                createProduct({ published: false });
              }}
            >
              <p>Save as Draft</p>
            </div>
            <div
              className={styles.createButton}
              onClick={() => {
                createProduct({ published: true });
              }}
            >
              <p>Publish Product Live</p>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default AddProduct;

// import React, { useState } from 'react';
// import styles from '../styles/Addproduct.module.css';
// import { userState } from '@/store/atoms/user';
// import { useRecoilValue } from 'recoil';
// import Custom404 from './404';
// import { mounted } from '@/store/atoms/mounted';
// import { CircularProgress } from '@mui/material';

// //add the user.isadmin to the userState so that only admin can access this page
// const AddProduct = () => {
//     const user = useRecoilValue(userState)
//     const [Media, setMedia] = useState([]);
//     const [imagePreview, setImagePreview] = useState([]);
//     const [thumbnailPreview, setThumbnailPreview] = useState('');
//     const [thumbnailImage, setThumbnailImage] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productCategory, setProductCategory] = useState('');
//     const [productColor, setProductColor] = useState('');
//     const [productQuantity, setProductQuantity] = useState('');
//     const [thumbnailUrl, setThumbnailUrl] = useState('');
//     const [tags, setTags] = useState('');
//     const isMounted = useRecoilValue(mounted);

//     const handleImageChange = (e) => {

//         const files = e.target.files;
//         const filesArray = Array.from(files).map(file => URL.createObjectURL(file));

//         if (filesArray.length > 5) {
//             alert('You can only select up to 5 images.');
//             return;
//         }

//         setMedia(files); // Update the Media state here

//         if (imagePreview) {
//             setImagePreview((prevImages) => prevImages.concat(filesArray));
//         }

//         Array.from(files).map((f) => URL.revokeObjectURL(f));
//     }


//     const handleThumbnailImageChange = (e) => {
//         const files = e.target.files;
//         setThumbnailPreview(URL.createObjectURL(files[0]));
//         setThumbnailImage(files[0]);
//     }

//     const createProduct = async (props) => {
//         try {
//             const { published } = props;
//             const productMediaUrl = [];
//             const thUrl = await uploadThumbnail();
//             if (!thUrl) {
//                 return alert('Please select an image to upload for product thumbnail!');
//             }
//             // if (!(productMediaUrl.length === 0)) {
//             //     return alert('Please select an image to upload for product media!');
//             // }
//             if (!productName) {
//                 return alert('Please enter a product name!');
//             }
//             if (!productDescription) {
//                 return alert('Please enter a product description!');
//             }
//             if (!productPrice) {
//                 return alert('Please enter a product price!');
//             }
//             if (!productCategory) {
//                 return alert('Please select a product category!');
//             }
//             if (!productColor) {
//                 return alert('Please enter a product color!');
//             }
//             if (!productQuantity) {
//                 return alert('Please enter a product quantity!');
//             }


//             const productData = {
//                 productName,
//                 productDescription,
//                 productPrice,
//                 productCategory,
//                 productColor,
//                 productQuantity,
//                 productMediaUrl,
//                 thUrl,
//                 published
//             }
//             console.log(productData);
//             const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addproduct`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + localStorage.getItem('token'),
//                 },
//                 body: JSON.stringify(productData)
//             });

//             if (response.status === 201) {
//                 setProductName('');
//                 setProductDescription('');
//                 setProductPrice('');
//                 setProductCategory('');
//                 setProductColor('');
//                 setProductQuantity('');
//                 setThumbnailUrl('');

//                 if (published) {
//                     alert('Product created successfully!');
//                 } else {
//                     alert('Product saved as draft successfully!');
//                 }
//             } else {
//                 const data = await response.json();
//                 alert(data.message);
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//             alert('An error occurred while creating the product. Please try again.');
//         }
//     };

//     const uploadThumbnail = async () => {
//         try {
//             console.log(thumbnailImage)
//             let imgUrl = '';
//             if (thumbnailImage.type === 'image/png' ||
//                 thumbnailImage.type === 'image/jpeg' ||
//                 thumbnailImage.type === 'image/jpg' ||
//                 thumbnailImage.type === 'image/webp' ||
//                 thumbnailImage.type === 'image/svg') {
//                 const image = new FormData();
//                 image.append('file', thumbnailImage);
//                 image.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
//                 image.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);
//                 console.log("Making request to cloudinary")
//                 const response = await fetch(`https://api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
//                     method: "POST",
//                     body: image
//                 });

//                 const imgData = await response.json();
//                 imgUrl = imgData.secure_url.toString();
//             }
//             // setThumbnailUrl(imgUrl);
//             setThumbnailPreview('');
//             setThumbnailImage('');
//             return imgUrl;

//         } catch (error) {
//             console.log(error);
//         } finally {

//         }
//     }
//     // const uploadMediaImage = async () => {
//     //     try {
//     //         if (Media.length === 0) {
//     //             return alert('Please select an image to upload for product media!');
//     //         }
//     //         const mediaUrls = [];
//     //         for (let i = 0; i < Media.length; i++) {
//     //             if (Media[i].type === 'image/png' ||
//     //                 Media[i].type === 'image/jpeg' ||
//     //                 Media[i].type === 'image/jpg' ||
//     //                 Media[i].type === 'image/webp' ||
//     //                 Media[i].type === 'image/svg') {
//     //                 const formData = new FormData();
//     //                 formData.append('file', Media[i]);
//     //                 formData.append("cloud_name", "drzwpn4ub");
//     //                 formData.append('upload_preset', 'tvhygeek');

//     //                 const response = await fetch("https://api.cloudinary.com/v1_1/dt6z4zzug/upload", {
//     //                     method: "POST",
//     //                     body: formData
//     //                 });
//     //                 const imgData = await response.json();
//     //                 mediaUrls.push(imgData.secure_url.toString());
//     //             }
//     //         }
//     //         return mediaUrls;
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // }


//     if (!isMounted) {
//         return <CircularProgress />
//     } {

//         if (!user?.user.isAdmin) {
//             return (
//                 <Custom404 />
//             )

//         } else {


//             return (
//                 <div className={styles.addProductContainer}>
//                     <h2>NEW PRODUCT</h2>
//                     <div className={styles.addProductFormParentContainer}>

//                         <div className={styles.productThumbnail}>
//                             <div className={styles.productThumbnailCard}>
//                                 <h4 className={styles.productTitle}>Product Thumbnail</h4>
//                                 <p className={styles.productDescription}>
//                                     Only *.png, *.jpg, *.jpeg,*.svg, *.webp files are accepted
//                                 </p>
//                                 <form className={styles.uploadForm}>
//                                     {thumbnailPreview === '' ? <div className={styles.fileUploadContainer}>
//                                         <div className={styles.fileUpload}>
//                                             <p>Upload one file to set as the thumbnail...</p>
//                                             <input type="file" id='product-upload-input' accept='image/png, image/jpeg, image/jpg, image/webp, image/svg+xml' onChange={handleThumbnailImageChange} className={styles.fileInput} />
//                                         </div>
//                                     </div> : <div className={styles.thumbnailPreviewCard}>
//                                         {thumbnailPreview && <div><span onClick={() => setThumbnailPreview('')} className={styles.DeleteThumbnailBtn}>
//                                             Upload another Image</span><img src={thumbnailPreview} className={styles.previewThumbnail} alt="thumbnail" /></div>}
//                                     </div>}

//                                 </form>
//                             </div>
//                         </div>
//                         <div className={styles.addProductFormContainer}>
//                             <div className={styles.textField}>
//                                 <input type="text" name="productname" id="productname" onChange={(e) => { setProductName(e.target.value) }} value={productName} required />
//                                 <span></span>
//                                 <label htmlFor="productname">Product Name</label>
//                             </div>
//                             <div className={styles.textarea}>
//                                 <textarea name="postContent" autoComplete='true' cols={10} placeholder='Write your product description here...' onChange={(e) => { setProductDescription(e.target.value) }} value={productDescription}
//                                     rows={5} />
//                             </div>

//                             <div className={styles.textField}>
//                                 <input type="number" name="price" id="price" required value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//                                 <span></span>
//                                 <label htmlFor="price">Price</label>
//                             </div>

//                             <div className={styles.dropdown}>
//                                 <label htmlFor="categories">Choose a category:</label>
//                                 <select name="categories" id="categories" onChange={(e) => setProductCategory(e.target.value)} value={productCategory}>
//                                     <option value="selectacategory">Select a category</option>
//                                     <option value="computer">Computer & Laptops</option>
//                                     <option value="cellphone">Cellphone</option>
//                                     <option value="accessories">Accessories</option>
//                                     <option value="watch">Watch</option>
//                                     <option value="audioVideo">Audio & Video</option>
//                                 </select>
//                             </div>

//                             <div className={styles.textField}>
//                                 <input type="text" name="color" onChange={(e) => setProductColor(e.target.value)} value={productColor} required />
//                                 <span></span>
//                                 <label htmlFor="color">Color</label>
//                             </div>

//                             <div className={styles.textField}>
//                                 <input type="number" name="quantity" id="quantity" onChange={(e) => setProductQuantity(e.target.value)} value={productQuantity} required />
//                                 <span></span>
//                                 <label htmlFor="quantity">Quantity</label>
//                             </div>

//                             {/* <div className={styles.productMedia}>
//                                 <div className={styles.productMediaCard}>
//                                     <h4 className={styles.productTitle}>Product Media</h4>
//                                     <p className={styles.productDescription}>
//                                         Add product images. Only *.png, *.jpg, *.jpeg,*.svg, *.webp files are accepted
//                                     </p>
//                                     <form className={styles.uploadForm}>
//                                         {
//                                             imagePreview.length === 0 ? <div className={styles.fileUploadContainer}>
//                                                 <div className={styles.fileUpload}>
//                                                     <p>Select upto 5 files to set as the product media...</p>
//                                                     <input type="file" id='product-upload-input' accept='image/png, image/jpeg, image/jpg,image/webp, image/svg+xml' multiple onChange={handleImageChange} className={styles.fileInput} />
//                                                 </div>
//                                             </div> : <div className={styles.imagePreviewCard}>
//                                                 <span onClick={() => setImagePreview([])} className={styles.DeleteFilesBtn}>
//                                                     Select another Images</span>
//                                                 {
//                                                     imagePreview?.map((image, index) => {
//                                                         return <div className={styles.imagePreviewContainer}><img src={image} className={styles.previewThumbnail} alt="thumbnail" /></div>
//                                                     })
//                                                 }
//                                             </div>
//                                         }
    
    
//                                     </form>
//                                 </div>
//                             </div> */}

//                         </div>


//                     </div>
//                     <div className={styles.saveButtonContainer}>
//                         <div className={styles.saveButton} onClick={() => {

//                             createProduct({ published: false });
//                         }}>
//                             <p>Save as Draft</p>
//                         </div>
//                         <div className={styles.createButton} onClick={() => {

//                             createProduct({ published: true });
//                         }}>
//                             <p>Create Product</p>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     }

// }

// export default AddProduct;
