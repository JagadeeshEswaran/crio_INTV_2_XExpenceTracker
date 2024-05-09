import React from "react";

import "./Styles/DashboardStyles.css";

const AddIncome = () => {
  return (
    <>
      <section
        className="addIncome_card"
        style={{
          width: "28%",
          height: "15rem",
          borderRadius: "8px",
          border: "1px solid gray",
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <article style={{}}>
          <h1
            style={{
              fontSize: "2rem",
              margin: "0",
              fontWeight: "normal",
              color: "white",
            }}>
            Wallet Balance:{" "}
            <span style={{ color: "lawngreen", fontWeight: "700" }}>
              Rs. 4500
            </span>
          </h1>
        </article>

        <article style={{ marginTop: "1rem" }}>
          <button
            className="addIncomBtn"
            style={{
              fontSize: "1.2rem",
              border: "1px solid yellow",
              padding: "0.75rem 1.75rem",
              borderRadius: "20px",
              fontWeight: "500",
              color: "white",
              boxShadow: "0px 5px 10px yellowgreen",
              background: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
            }}>
            + Add Income
          </button>
        </article>
      </section>
    </>
  );
};

export default AddIncome;
