# 🌤️ React Native Weather App

A simple, scalable, and fully cross-platform weather application built with **React Native**, using **Redux**, **OpenWeatherMap API**, and **AsyncStorage** for persistence. Supports **Dark Mode**, clean architecture, and unit testing.

---

## 🚀 Features

- 🔍 Search weather by city
- 📍 Displays:
  - City name
  - Current temperature
  - Weather condition
  - Weather icon
- 🌓 Dark Mode Toggle
- 💾 Last searched city is auto-loaded on app restart
- 🚫 Error handling for invalid city or network issues
- ⚛️ State Management with Redux Toolkit
- 💡 Custom Hooks & Modular Architecture
- ✅ Unit tested with Jest and Testing Library

---

## 📁 Folder Structure

src/
│
├── components/ # Reusable UI components (e.g., WeatherCard)
├── context/ # ThemeContext for Dark/Light mode
├── hooks/ # Custom hooks (e.g., useWeather)
├── redux/ # Redux store, actions, reducers
│ ├── weather/
│ └── store.ts
├── screens/ # App screens (e.g., HomeScreen)
├── services/ # API services (e.g., weatherService.ts)
├── theme/ # Theme color definitions
└── tests/ # Unit tests

---

## 🧠 Architectural Decisions

- **Redux Toolkit** simplifies state logic and improves scalability.
- **Custom Hooks** separate logic from components (`useWeather.ts`).
- **Service Layer** centralizes API interactions (`weatherService.ts`).
- **ThemeContext** for flexible theme switching across the app.
- **AsyncStorage** handles persistent user preferences and last city.
- **Separation of Concerns** ensures components follow SRP.

---

## 📦 Installation

git clone https://github.com/your-username/react-native-weather-app.git
cd react-native-weather-app
npm install

📱 Running the App

# Start Metro

# For android

npx react-native run-android

# For IOS

npx react-native run-ios

🔑 OpenWeatherMap Setup

Go to https://openweathermap.org/api

# Sign up and get your API key

Replace the API key inside src/config/apiConfig.ts:

const API_KEY = 'YOUR_API_KEY_HERE';

🧪 Running Unit Tests

npm test

Uses Jest and @testing-library/react-native for component and logic testing.

✨ Bonus Features

✅ Auto fetch last city on startup

✅ Dark mode support with toggle

✅ Modular & scalable codebase


👨‍💻 Author
S. Palvin Muthesh
Sr. Software Developer | spalvinmuthesh@gmail.com | +91 9629317140

Let me know if you'd like to include screenshots or badges (build passing, platform support, etc.)!
