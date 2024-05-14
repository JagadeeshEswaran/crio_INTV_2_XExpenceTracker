/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Modal, DatePicker, Dropdown, message } from "antd";

import "./Styles/DashboardStyles.css";

const items = [
  {
    key: "1",
    label: "Food",
  },
  {
    key: "2",
    label: "Entertainment",
  },
  {
    key: "3",
    label: "Travel",
  },
  {
    key: "4",
    label: "Gym / Hobbies",
  },
];

const AddIncome = ({ trigger, setTrigger }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [addingAmount, setAddningAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const prevWalletBal = await localStorage.getItem("walletBal");

    if (!prevWalletBal) {
      await localStorage.setItem("walletBal", parseInt(addingAmount));
    } else {
      let newWalletBal = parseInt(prevWalletBal) + parseInt(addingAmount);

      await localStorage.setItem("walletBal", newWalletBal);
    }

    setTrigger(!trigger);

    message.info(
      `Wallet balance updated, New Balance is $ ${localStorage.getItem(
        "walletBal"
      )}`
    );

    setIsModalOpen(false);
    setAddningAmount(0);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    setAddningAmount(e.target.value);
  };

  useEffect(() => {
    const existingWalletBalance = localStorage.getItem("walletBal");
    if (existingWalletBalance) {
      setWalletBalance(existingWalletBalance);
    } else {
      setWalletBalance(0);
    }
  }, [handleOk, trigger]);

  return (
    <>
      <section
        className="addIncome_card"
        style={{
          width: "32%",
          height: "15rem",
          borderRadius: "8px",
          border: "1px solid gray",
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <article style={{}}>
          <h1
            style={{
              fontSize: "2rem",
              margin: "0",
              fontWeight: "normal",
              color: "white",
            }}
          >
            Wallet Balance:{" "}
            <span style={{ color: "lawngreen", fontWeight: "700" }}>
              Rs. {walletBalance ? walletBalance : 0}
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
              fontWeight: "600",
              color: "steelblue",
              boxShadow: "0px 5px 10px yellowgreen",
              background: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
              cursor: "pointer",
            }}
            onClick={showModal}
          >
            + Add Income
          </button>
        </article>

        <Modal
          title="Add Income"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <article>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
              placeholder="Add Income / Top up Wallet"
              style={{
                border: "none",
                background: "whitesmoke",
                borderRadius: "12px",
                width: "100%",
                height: "3rem",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
                padding: "0 0 0 1rem",
              }}
              value={addingAmount > 0 ? addingAmount : ""}
              onChange={onChange}
            />
          </article>
        </Modal>
      </section>
    </>
  );
};

export default AddIncome;
