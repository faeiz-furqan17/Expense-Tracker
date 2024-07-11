import React from "react";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const currencySymbols = [
    "$",
    "¢",
    "£",
    "€",
    "¥",
    "元",
    "₩",
    "₽",
    "₫",
    "₹",
    "฿",
    "₴",
    "₦",
    "₪",
    "₱",
    "₲",
    "₺",
    "₡",
    "₵",
    "₣",
    "₤",
    "₭",
    "₳",
    "₯",
    "៛",
    "؋",
    "₼",
    "₸",
    "₦",
    "د.إ",
    "د.ب",
    "د.ج",
    "د.ك",
    "د.ل",
    "د.م",
    "د.ت",
    "ر.س",
    "ر.ع",
    "ل.س",
    ".ރ",
    "₨",
    "S/.",
    "₮",
    "₺",
    "Лв",
    "₤",
    "ƒ",
    "￠",
    "圓",
    "円",
    "៛",
    "ລ",
    "៛",
    "₭",
    "₦",
    "₨",
    "₵",
    "₡",
    "₤",
    "₣",
    "₮",
    "₯",
    "₭",
    "₳",
    "₺",
    "₴",
    "₸",
    "₼",
    "ƒ",
    "֏",
    "៛",
    "₭",
    "лв",
    "ден",
    "د.ج",
    "ج.م",
    "د.ا",
    "د.م",
    "ر.س",
    "ع.د",
    "س.ر",
    ".ރ",
    "ރ",
    "ك.م",
  ];
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 5000);

  return (
    <div className="mainContainer">
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text" key={index}>
          {symbol}
        </p>
      ))}{" "}
      {currencySymbols.map((symbol, index) => (
        <p className="splash-text2" key={index}>
          {symbol}
        </p>
      ))}
    </div>
  );
}

export default SplashScreen;
