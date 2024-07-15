import React from "react";
import style from "./Footer.module.scss";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div>
      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.footercontainer}>
            <h1
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              About us
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                marginTop: "20px",
                marginBottom: "20px",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  width: "700px",
                }}
              >
                <h2>what we provide?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo cumque provident quasi odio quidem placeat
                  inventore? Rerum iste, optio magnam quibusdam adipisci quas
                  ab, numquam nobis amet praesentium suscipit?
                </p>
                <h2>Customers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem in illum dolorum earum distinctio hic
                  eaque alias numquam esse, praesentium, maiores aliquam
                  incidunt aspernatur animi molestias ea, iste veniam.
                </p>
                <h2>what we provide?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo cumque provident quasi odio quidem placeat
                  inventore? Rerum iste, optio magnam quibusdam adipisci quas
                  ab, numquam nobis amet praesentium suscipit?
                </p>
                <h2>Customers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem in illum dolorum earum distinctio hic
                  eaque alias numquam esse, praesentium, maiores aliquam
                  incidunt aspernatur animi molestias ea, iste veniam.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  width: "700px",
                }}
              >
                <h2>expenses?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, ipsum, possimus placeat labore quod ducimus debitis ea
                  optio at sint rem dolorem omnis odit est eius eaque animi
                  aliquid quo.
                </p>
                <h2>Easy To Use</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae voluptates dolores iusto vitae! Aperiam fugiat illum
                  tempore sit non ipsum quisquam? Nam a molestiae incidunt
                  perferendis, assumenda perspiciatis. Ratione, neque?
                </p>
                <h2>what we provide?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo cumque provident quasi odio quidem placeat
                  inventore? Rerum iste, optio magnam quibusdam adipisci quas
                  ab, numquam nobis amet praesentium suscipit?
                </p>
                <h2>Customers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem in illum dolorum earum distinctio hic
                  eaque alias numquam esse, praesentium, maiores aliquam
                  incidunt aspernatur animi molestias ea, iste veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
