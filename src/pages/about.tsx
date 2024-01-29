import React from 'react'
import Image from 'next/image'

const about = () => {
    return (
        <div class="flex flex-col justify-around bg-white w-full py-24 sm:py-32">
            <div class="mx-auto grid text-center max-w-7xl gap-8 px-6 lg:px-8 xl:grid-cols-1">
                <div class="max-w-2xl">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Created by Hitesh Mishra.</p>
                </div>
                <ul role="list" >
                    <li>
                        <div class="flex  items-center gap-x-6">
                            {/* <img src='https://res.cloudinary.com/drzwpn4ub/image/upload/c_scale,h_100/v1705754402/about.png' /> */}
                            <a href='https://linkedin.com/in/hiteshmishra21' class="inline-block">
                            <img
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,h_100/v1705759000/linkedin4_1_ktdrmt.png`}
                  class="transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
                            </a>
                            <div>
                                <a href='https://linkedin.com/in/hiteshmishra21' class="inline-block">
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:text-blue-600 transition duration-400 hover:underline">
                                        Hitesh Mishra
                                    </h3>
                                </a>


                                <p class="text-sm font-semibold leading-6 text-blue-700">Full Stack Developer</p>


                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            <div className='py-8 mx-auto max-w-7xl'>
                <h2 className="py-8 text-center text-4xl font-extrabold text-gray-900 sm:text-4xl">
                    Project Details
                </h2>
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-10 py-8 mb-10 flex flex-col">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                            Advanced eCommerce Platform
                        </h1>
                        <p className="text-md text-gray-600">
                            Built with modern technologies including Next.js, JavaScript, Node.js, Mongoose, Recoiljs,MongoDB, and React.js, my platform ensures a frictionless shopping experience from start to finish.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            Key Features
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>
                                <strong>Effortless Navigation:</strong> Intuitive layout for easy browsing and purchasing.
                            </li>
                            <li>
                                <strong>Stripe Payments:</strong> Trustworthy and secure payment processing.
                            </li>
                            <li>
                                <strong>Admin Dashboard:</strong>Admins can manage orders with ease using a clear, convenient dashboard.
                            </li>
                            <li>
                                <strong>User Dashboard:</strong>Users can view their orders and order status with ease using a clear, convenient dashboard.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <p className="text-md text-gray-600">
                            I deployed this website on Vercel for the frontend and Cyclic.sh for the server. Styled using Tailwind CSS and inspired by Shopify's Woodstock theme.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default about