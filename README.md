# E-commerce + Firebase

A full-stack E-commerce application built with React 19, Redux Toolkit, Tailwind CSS, and Firebase. This project features a comprehensive shopping experience with user authentication, product management, and an admin dashboard.

## 🚀 Features

### User Side
- **Authentication**: Secure Login and Signup using Firebase Authentication.
- **Product Browsing**: Explore products by categories and search functionality.
- **Product Details**: View detailed information about each product.
- **Shopping Cart**: Add/remove items, update quantities, and persistent state using Redux Toolkit.
- **Checkout**: Integrated "Buy Now" functionality.
- **User Profile**: Access order history and user details.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and Material Tailwind.

### Admin Side
- **Admin Dashboard**: Overview of products, orders, and users.
- **Product Management**: Add, update, and delete products from the Firestore database.
- **Order Management**: Track and manage customer orders.
- **User Management**: View registered users.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Material Tailwind](https://www.material-tailwind.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Backend/Database**: [Firebase](https://firebase.google.com/) (Firestore & Auth)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🏁 Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abubakarcodeer/E-Commerce-Website.git
   cd E-Commerce-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new project on [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (Email/Password).
   - Create a **Cloud Firestore** database.
   - Register a new Web App to get your configuration.

4. **Environment Variables**
   Create a `.env` file in the root directory and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Hero, etc.).
- `src/pages`: Main application pages (Home, All Products, Admin Dashboard, etc.).
- `src/redux`: Redux slices and store configuration.
- `src/firebase`: Firebase configuration and initialization.
- `src/protectedRoute`: Route guards for authenticated users and admins.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build locally.

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.


