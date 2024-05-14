/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PieCharts from "../../Utilities/Charts/PieCharts";
import { IoReloadCircleSharp } from "react-icons/io5";

const COLORS = [
  "#4CAF50", // Green
  "#FFC107", // Amber
  "#2196F3", // Blue
  "#FF5722", // Deep Orange
  "#9C27B0", // Purple
  "#F44336", // Red
  "#673AB7", // Deep Purple
  "#E91E63", // Pink
  "#795548", // Brown
  "#607D8B", // Blue Grey
];

const InsightChart = ({ trigger, setTrigger }) => {
  const [expensesDate, setData] = useState();
  const [categoryWiseExpense, setCatExp] = useState([
    {
      id: 1,
      name: "Food",
      value: 0,
    },
    {
      id: 2,
      name: "Travel",
      value: 0,
    },
    {
      id: 3,
      name: "Entertainment",
      value: 0,
    },
    {
      id: 4,
      name: "Gym / Hobbies",
      value: 0,
    },
  ]);

  const handleGrouping = async () => {
    expensesDate?.forEach((item) => {
      categoryWiseExpense.forEach((cat) => {
        if (cat.name === item.category) {
          cat.value = parseInt(cat.value) + parseInt(item.price);
        }
      });
    });
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("AllExpenseData")));
  }, [trigger]);

  useEffect(() => {
    setTimeout(() => {
      handleGrouping();
    }, 1000);
  }, []);

  return (
    <>
      <section
        className=""
        style={{
          width: "20%",
          height: "15rem",
          borderRadius: "8px",
          // border: "1px solid gray",
          margin: "2rem",
        }}
      >
        <article
          style={{ position: "absolute", right: "50px" }}
          onClick={() => setTrigger(!trigger)}
        >
          <IoReloadCircleSharp
            style={{
              fontSize: "2.5rem",
              color: "whitesmoke",
              cursor: "pointer",
            }}
          />
        </article>

        <article>
          <PieCharts
            expensesDate={expensesDate}
            trigger={trigger}
            setTrigger={setTrigger}
          />

          <article style={{ display: "flex", justifyContent: "space-evenly" }}>
            {categoryWiseExpense?.map((item, idx) => (
              <article
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "1rem",
                }}
              >
                <article
                  style={{
                    width: "rem",
                    height: "0.5rem",
                    padding: "0.25rem 0.5rem",
                    background: `${COLORS[idx]}`,
                  }}
                ></article>
                <p
                  key={item.id}
                  style={{ paddingLeft: "0.5rem", fontSize: "14px" }}
                >
                  {item.name}
                </p>
              </article>
            ))}
          </article>
        </article>
      </section>
    </>
  );
};

export default InsightChart;
