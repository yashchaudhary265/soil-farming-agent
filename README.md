# 🌾 Soil Farming Agent

A comprehensive web application that helps farmers and distributors connect, providing soil information, crop recommendations, and distributor management features.

## 🚀 Live Demo

- **Frontend**: [https://soil-farming-agent-one.vercel.app](https://soil-farming-agent-one.vercel.app)
- **Backend API**: [https://soil-farming-agent-xkym.onrender.com](https://soil-farming-agent-xkym.onrender.com)

## 📋 Features

### 🌱 For Farmers
- **Soil Information**: Detailed information about different soil types (Sandy Loam, Clay, Silty, Peaty, etc.)
- **Crop Recommendations**: Best crops for each soil type with pH levels and fertility information
- **Distributor Directory**: Find distributors in your area for seeds, fertilizers, and farming supplies

### 🚛 For Distributors
- **Distributor Registration**: Register as a distributor with contact details and supplies
- **Supply Management**: List the products and services you provide
- **Location-based Listings**: Help farmers find you based on location

### 👨‍💼 Admin Features
- **User Management**: Register and manage users with role-based access
- **Content Management**: Admin dashboard for managing platform content

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **React Router DOM 6.26.0** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📁 Project Structure

```
soil-farming-agent/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── UserHome.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── SoilContext.js
│   │   ├── LocationContext.js
│   │   └── App.js
│   ├── package.json
│   └── .env
├── server/                 # Backend Node.js application
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── user.js
│   │   ├── distributor.js
│   │   └── AdminPost.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── admin.js
│   │   └── distributors.js
│   ├── controllers/
│   │   └── authController.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git


### Running the Application

1. **Start Backend Server**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start Frontend Development Server**
   ```bash
   cd client
   npm start
   # Frontend runs on http://localhost:3000
   ```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Distributors
- `GET /api/distributors` - Get all distributors
- `POST /api/distributors` - Create new distributor

### Admin
- `GET /api/admin` - Admin routes

## 🌍 Deployment

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically on git push

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set `REACT_APP_API_URL` to your deployed backend URL
3. Deploy automatically on git push

## 🎨 Soil Types Supported

- **Sandy Loam** - Wheat, Cotton, Sugarcane (pH: 6.5-7.5)
- **Clay** - Rice, Broccoli, Cabbage (pH: 5.5-6.5)
- **Silty** - Corn, Wheat, Peas (pH: 6.0-7.0)
- **Peaty** - Salad greens, Root vegetables (pH: 3.5-5.0)
- **Loamy** - Most crops, Vegetables, Grains (pH: 6.0-7.5)
- **Chalky** - Barley, Beets, Spinach (pH: 7.1-8.0)
- **Red Soil** - Groundnut, Millets, Cotton (pH: 5.5-6.5)
- **Black Soil** - Cotton, Soybean, Sunflower (pH: 6.2-8.5)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yash Chaudhary**
- GitHub: [@yashchaudhary265](https://github.com/yashchaudhary265)
- Email: yashchaudhary265@gmail.com

## 🙏 Acknowledgments

- Thanks to all farmers and agricultural experts who provided insights
- MongoDB Atlas for database hosting
- Vercel and Render for deployment platforms
- React and Node.js communities for excellent documentation

## 📞 Support

If you have any questions or need support, please:
1. Check existing [Issues](https://github.com/yashchaudhary265/soil-farming-agent/issues)
2. Create a new issue if your question isn't answered
3. Contact the author directly

---

**Happy Farming! 🌾**
