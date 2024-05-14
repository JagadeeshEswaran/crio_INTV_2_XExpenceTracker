/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddIncome from "./Dashboard/AddIncome";
import AddExpenses from "./Dashboard/AddExpenses";
import InsightChart from "./Dashboard/InsightChart";

import "./style.css";
import RecentTransactionsContainer from "./TransactionsCard/RecentTransactionsContainer";
import TopExpensesContainer from "./ClassificationCard/TopExpensesContainer";

const HomePage = () => {
  const [trigger, setTrigger] = useState(true);

  return (
    <>
      <section
        className=""
        style={{
          height: "98svh",
        }}
      >
        {/* Dashboard */}
        <article style={{ margin: "0 1rem", height: "50%" }}>
          <h1
            style={{
              fontSize: "2rem",
              color: "whitesmoke",
              margin: "0",
              marginBottom: "0.5rem",
            }}
          >
            Expense Tracker
          </h1>

          <article
            className="dashboard_container"
            style={{
              width: "auto",
              height: "auto",
              minHeight: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              padding: "0 2rem",
            }}
          >
            <AddIncome setTrigger={setTrigger} trigger={trigger} />

            <AddExpenses setTrigger={setTrigger} trigger={trigger} />

            <InsightChart trigger={trigger} setTrigger={setTrigger} />
          </article>
        </article>

        {/* Transaction Container */}
        <article
          style={{
            margin: "0 1rem",
            height: "auto",
            width: "98%",
            background: "",
            maxHeight: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <article style={{ width: "64%", borderRadius: "10px" }}>
            <h1
              style={{
                padding: "0",
                margin: "0",
                fontSize: "28px",
                color: "white",
                fontFamily: "Ubuntu",
                fontStyle: "italic",
              }}
            >
              Recent Transations
            </h1>

            <RecentTransactionsContainer />
          </article>

          <article style={{ width: "34%", borderRadius: "10px" }}>
            <h1
              style={{
                padding: "0",
                margin: "0",
                fontSize: "28px",
                color: "white",
                fontFamily: "Ubuntu",
                fontStyle: "italic",
              }}
            >
              Top Expenses
            </h1>

            <TopExpensesContainer />
          </article>
        </article>
      </section>
    </>
  );
};

export default HomePage;
