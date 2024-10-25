# Restaurant Table Reservation App

This is a full-stack restaurant table reservation application designed to allow customers to reserve tables online. Admins can manage restaurant menus, reservations, and customer details through their accounts.

## Project Structure
This app is built as a **monorepo** with the following structure:

- **Frontend**: Built using **React** (for web) and **React Native** (for mobile).
- **Backend**: Powered by **Next.js** API routes for backend services.
  
## Technologies Used

### Frontend
- **React**: Used for building the web application interface.
- **React Native**: Used for building the mobile app interface for iOS and Android.

### Backend
- **Next.js**: Utilized for the backend API routes, handling server-side functions, and managing RESTful APIs.

### Database
- **Database System**: Can be integrated with databases such as **PostgreSQL** or **MySQL** (or any other SQL database).
  
## Project Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** and **npm** or **yarn**
- **Git**
- **React Native CLI** (for mobile development)
- **Android Studio** (for Android development) or **Xcode** (for iOS development)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:your-username/restaurant-reservation-app.git
   cd restaurant-reservation-app
   ```

2. Install dependencies for all parts of the project:
   - **Web app** (React):
     ```bash
     cd web
     npm install
     ```
   - **Mobile app** (React Native):
     ```bash
     cd mobile
     npm install
     ```
   - **Backend** (Next.js):
     ```bash
     cd backend
     npm install
     ```

### Running the Project

#### 1. Start the Web Application (React)
```bash
cd web
npm start
```
This will start the web application on `http://localhost:3000`.

#### 2. Start the Mobile Application (React Native)
To run the mobile app, make sure an Android/iOS emulator is running or a device is connected:
```bash
cd mobile
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
```

#### 3. Start the Backend Server (Next.js)
```bash
cd backend
npm run dev
```
This will start the backend server on `http://localhost:5000`.

### Commands Summary
Here are all the commands you'll need for developing each part of the application.

| Command                 | Description                                |
|-------------------------|--------------------------------------------|
| `npm start`             | Start the React web app                   |
| `npx react-native run-android` / `npx react-native run-ios` | Start the mobile app   |
| `npm run dev`           | Start the Next.js backend server          |

---

## Contributing
If you’d like to contribute, feel free to fork the repository and make changes. Pull requests are welcome!

## License
[MIT](LICENSE)
