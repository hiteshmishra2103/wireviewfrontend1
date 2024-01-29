
# Wireview Frontend

This is the frontend for my full stack E-commerce website hosted at https://wireviewfrontend1.vercel.app/  
The design inspiration for this project was drawn from the Shopify **[Woodstock](https://themes.shopify.com/themes/woodstock/styles/light)** theme.




## Tech Stack:

* **[Next.js](https://nextjs.org/)**
* **[React](https://reactjs.org/)**
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
* **[Recoiljs](https://recoiljs.org/)**
* **[Tailwind CSS](https://tailwindcss.com/)**
* **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**
* **[Cloudinary](https://cloudinary.com/)**
* **[Visual Studio Code](https://code.visualstudio.com/download)**





## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/hiteshmishra2103/wireviewfrontend1.git 
```


2. Navigate to the project directory
```bash 
cd nextjs-page-router-app
```

3. Install Dependencies
```bash
npm install
```     

**Environment Variables:**

**1. Create a `.env` file:**

- Create a file titled `.env` at the root of your project directory.


**2. Replace placeholders with your values:**


| Variable           | Description                         | Example                         |
|--------------------|------------------------------------|--------------------------------|
| `NEXT_PUBLIC_SERVER_URL` | URL of Wireview server        | `http://localhost:3000` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name    | `your-cloud-name`             |
| `NEXT_PUBLIC_PUBLISHABLE_KEY` | Stripe key          | `your-publishable-key`        |
| `NEXT_PUBLIC_UPLOAD_PRESET` | Cloudinary upload preset      | `your-upload-preset`          |

Replace these placeholders with your actual values within the `.env` file.

## Usage


1. Start the development server:

```bash
npm run dev
```
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.
