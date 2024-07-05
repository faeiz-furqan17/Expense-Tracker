import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div>
      <footer>
        <div className={style.footercontainer}>
          <p>Copyright &copy; 2021</p>
          <p>All right reserved</p>
          <p>Made with ❤️ by 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
