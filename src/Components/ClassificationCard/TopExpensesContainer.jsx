/* eslint-disable no-unused-vars */
import React from "react";

const expensesCategoryList = [
  {
    id: 1,
    title: "food",
    totalExpense: 500,
  },
  {
    id: 2,
    title: "entertainment",
    totalExpense: 300,
  },
  {
    id: 3,
    title: "travel",
    totalExpense: 150,
  },
];

const TopExpensesContainer = () => {
  return (
    <section
      style={{
        border: "1px solid white",
        height: "100%",
        background: "whitesmoke",
        borderRadius: "15px",
        marginTop: "1rem",
      }}
    >
      <article style={{ padding: "2rem" }}>
        {expensesCategoryList.map((item) => (
          <article
            key={item.id}
            style={{
              padding: "1rem 0",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                textTransform: "capitalize",
                width: "10rem",
              }}
            >
              {item.title}
            </p>

            <article
              style={{
                width: `${item.totalExpense / 10}%`,
                background: "#8784D2",
                border: "1px solid #9568ff",
                borderRadius: "0 15px 15px 0",
                height: "0.75rem",
              }}
            ></article>
          </article>
        ))}
      </article>
    </section>
  );
};

export default TopExpensesContainer;
