import { IconType } from 'react-icons';
import { 
  FaApple, FaCat, FaStar, FaCar, FaGuitar, 
  FaRainbow, FaPizzaSlice, FaGamepad, FaDog, 
  FaGlobe, FaLemon, FaSmile, FaPlug, FaAd, FaAirbnb, FaAngry,
  FaBath, FaCalculator, FaDatabase, FaChess, FaSteam, FaAngular, 
  FaAccusoft, FaAddressCard, FaAirFreshener, FaMoneyBill, FaApplePay,
  FaAmazonPay, FaAndroid, FaAppStore, FaCarAlt, FaAdn
} from 'react-icons/fa';

export const generateCardValues = (gridSize: "4" | "6" | "8", theme: "Numbers" | "Icons") => {
  const size = parseInt(gridSize);
  const pairCount = (size * size) / 2;
  let values: (number | IconType)[];
  
  if (theme === "Numbers") {
    values = Array.from({ length: pairCount }, (_, i) => i + 1);
  } else {
    values = [
      FaApple, FaCat, FaStar, FaCar, FaGuitar, FaRainbow, 
      FaPizzaSlice, FaGamepad, FaDog, FaGlobe, FaLemon, FaSmile, 
      FaPlug, FaAd, FaAirbnb, FaAngry, FaBath, FaCalculator, FaDatabase,
      FaChess, FaSteam, FaAngular, FaAccusoft, FaAddressCard, FaAirFreshener, 
      FaMoneyBill, FaApplePay, FaAmazonPay, FaAndroid, FaAppStore, 
      FaCarAlt, FaAdn
    ].slice(0, pairCount);
  }
  
  return [...values, ...values].sort(() => Math.random() - 0.5);
};