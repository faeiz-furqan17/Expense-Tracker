import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SplashScreen.module.scss";

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
    <div className={style.SplashMain}>
      {currencySymbols.map((symbol, index) => (
        <p
          key={index}
          className={style.symbol}
          style={{
            animationDelay: `${index * 0.2}s`,
            top: `${(index % 10) * 10}%`, // Adjusts position for every 5th symbol
            left: `${(index % 5) * 20 + 10}%`, // Adjusts position for every 5th symbol with an offset
          }}
        >
          {symbol}
        </p>
      ))}
    </div>
  );
}

export default SplashScreen;
