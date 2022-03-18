import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const ResponsiveHeader = () => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <div>
        <i
          onClick={() => setMostrar(!mostrar)}
          className={`${styles.listIcon}  ${
            mostrar ? "bi bi-list" : "bi bi-x-lg"
          }`}
        />
      </div>
      <div
        className={`container my-2 d-flex ${
          mostrar ? "justify-content-center" : "justify-content-end"
        }`}
      >
        <Link href="/">
          <img
            src="/images/logos/red1-color.png"
            alt="Red 1 a 1"
            className="pointer"
          />
        </Link>
      </div>
      {!mostrar ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            backgroundColor: "red",
            zIndex: 9,
          }}
        >
          Menú
        </div>
      ) : null}
    </div>
  );
};

export default ResponsiveHeader;
