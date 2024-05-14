/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { FaPizzaSlice } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { GiRollingSuitcase } from "react-icons/gi";

import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const trialExpensesData = [
  {
    id: 1,
    title: "test_01",
    date: "March 15, 2024",
    price: "15",
    category: "food",
  },
  {
    id: 2,
    title: "test_02",
    date: "March 16, 2024",
    price: "25",
    category: "travel",
  },
  {
    id: 3,
    title: "test_03",
    date: "March 10, 2024",
    price: "10",
    category: "entertainment",
  },
  {
    id: 3,
    title: "test_04",
    date: "March 13, 2024",
    price: "30",
    category: "food",
  },
];

const RecentTransactionsContainer = () => {
  const [pageNum, setPage] = useState(0);
  const [renderingList, setList] = useState(trialExpensesData.slice(0, 3));

  const handleRenderList = () => {
    const start = 3;

    let y = start * pageNum;
    setList(trialExpensesData.slice(y, y + start));
  };

  useEffect(() => {
    handleRenderList();
  }, [pageNum]);

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
      <article style={{ padding: "1.5rem 1rem 1rem 1rem" }}>
        {renderingList?.map((item) => (
          <>
            <article
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "2px solid gray",
                marginBottom: "1rem",
                padding: "0 1rem 0.5rem 0.5rem",
              }}
              type="button"
            >
              <article style={{ display: "flex" }}>
                <article
                  style={{
                    width: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    background: "#bfbfbf",
                    fontSize: "1.25rem",
                    color: "#4c4c4c",
                  }}
                >
                  {item.category === "travel" ? (
                    <GiRollingSuitcase />
                  ) : item.category === "food" ? (
                    <FaPizzaSlice />
                  ) : item.category === "entertainment" ? (
                    <IoIosGift />
                  ) : (
                    <></>
                  )}
                </article>

                <article style={{ paddingLeft: "1rem" }}>
                  <h6
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.date}
                  </p>
                </article>
              </article>

              <article
                style={{
                  display: "flex",
                  // border: "1px solid grey",
                  width: "20%",
                  height: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "1.1rem",
                    color: "#F4BB4A",
                    fontWeight: 700,
                  }}
                >
                  $ {item.price}
                </p>

                <article
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "red",
                    borderRadius: "15px",
                    width: "2rem",
                    height: "2rem",
                    padding: "0.25rem",
                  }}
                >
                  <IoCloseCircleOutline
                    style={{ fontSize: "2rem", color: "white" }}
                  />
                </article>

                <article
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#F4BB4A",
                    borderRadius: "12px",
                    width: "2rem",
                    height: "2rem",
                    padding: "0.25rem",
                  }}
                >
                  <MdOutlineEdit style={{ fontSize: "2rem", color: "white" }} />
                </article>
              </article>
            </article>
          </>
        ))}
      </article>

      <article
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid grey",
        }}
      >
        <article
          style={{
            padding: "1rem",
            background: "aliceblue",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px grey",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={() =>
            setPage((prevPage) => (prevPage >= 1 ? prevPage - 1 : 0))
          }
        >
          <FaArrowLeft
            style={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </article>

        <article
          style={{
            background: "#43967B",
            padding: "0.5rem 1rem",
            color: "white",
            fontSize: "1.5rem",
            borderRadius: "15px",
            fontWeight: 400,
          }}
        >
          {pageNum + 1}
        </article>

        <article
          style={{
            padding: "1rem",
            background: "aliceblue",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px grey",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          onClick={() =>
            setPage((prevPage) => renderingList.length >= 3 && prevPage + 1)
          }
        >
          <FaArrowRight
            style={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </article>
      </article>
    </section>
  );
};

export default RecentTransactionsContainer;
