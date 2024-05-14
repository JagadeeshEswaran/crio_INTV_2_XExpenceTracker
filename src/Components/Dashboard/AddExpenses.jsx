/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { message, Modal, DatePicker, Dropdown } from "antd";

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

const AddExpenses = ({ trigger, setTrigger }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: 0,
    category: "",
    date: "",
  });
  const [allExpenseData, setAllExpenseData] = useState([]);
  const [totalExpAmount, setTotalAmount] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const walletBalance = localStorage.getItem("walletBal");

    if (parseInt(walletBalance) < parseInt(expenseData.price)) {
      message.error("Wallet Balance is too low");
      return setExpenseData({ ...expenseData, price: 0 });
    } else {
      localStorage.setItem(
        "walletBal",
        parseInt(walletBalance) - parseInt(expenseData.price)
      );
      setTrigger(!trigger);
    }

    if (allExpenseData) {
      allExpenseData.push(expenseData);
    } else {
      localStorage.setItem("AllExpenseData", JSON.stringify(expenseData));
    }

    localStorage.setItem("AllExpenseData", JSON.stringify(allExpenseData));

    setIsModalOpen(false);
    setExpenseData({
      title: "",
      price: "",
      category: "",
      date: "",
    });
  };

  const handleCancel = () => {
    setExpenseData({
      title: "",
      price: "",
      category: "",
      date: "",
    });
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleDateChange = (date, dateString) => {
    setExpenseData({ ...expenseData, date: dateString });

    console.log(allExpenseData);
  };

  const onClick = ({ key }) => {
    const selectedCat = items.find((item) => item.key == key);
    setExpenseData({ ...expenseData, category: selectedCat.label });
  };

  useEffect(() => {
    const allExpenseData = JSON.parse(localStorage.getItem("AllExpenseData"));

    if (allExpenseData?.length > 0) {
      setAllExpenseData(allExpenseData);

      let totalExpValue = 0;

      allExpenseData.forEach((item) => {
        totalExpValue += parseInt(item.price);
      });

      setTotalAmount(parseInt(totalExpValue));
    }
  }, [isModalOpen, trigger]);

  // console.log(allExpenseData);

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
            Expenses:{" "}
            <span style={{ color: "red", fontWeight: "700" }}>
              Rs. {totalExpAmount}
            </span>
          </h1>
        </article>

        <article style={{ marginTop: "1rem" }}>
          <button
            className="addIncomBtn"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              border: "1px solid magenta",
              padding: "0.75rem 1.75rem",
              borderRadius: "20px",
              fontWeight: "500",
              color: "white",
              boxShadow: "0px 5px 10px salmon",
              background:
                "linear-gradient(90deg, rgba(250,128,137,1) 0%, rgba(253,29,29,1) 50%, rgba(200,0,0,1) 100%)",
            }}
            onClick={showModal}
          >
            + Add Expenses
          </button>
        </article>

        <Modal
          title="Add Expense"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <article>
            <input
              type="text"
              placeholder="Title"
              style={{
                border: "none",
                background: "whitesmoke",
                borderRadius: "12px",
                width: "45%",
                height: "2.5rem",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
                padding: "0 0 0 0.5rem",
              }}
              name="title"
              value={expenseData.title}
              onChange={handleChange}
            />

            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
              placeholder="Please Enter the Price / cost"
              style={{
                border: "none",
                background: "whitesmoke",
                borderRadius: "12px",
                width: "45%",
                height: "2.5rem",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
                padding: "0 0 0 0.5rem",
              }}
              name="price"
              value={expenseData.price > 0 ? expenseData.price : ""}
              onChange={handleChange}
            />

            <Dropdown
              menu={{
                items,
                onClick,
              }}
              placement="bottomLeft"
              arrow
            >
              <input
                type="text"
                placeholder="Category"
                style={{
                  border: "none",
                  background: "whitesmoke",
                  borderRadius: "12px",
                  width: "45%",
                  height: "2.5rem",
                  marginBottom: "0.5rem",
                  marginRight: "0.5rem",
                  padding: "0 0 0 0.5rem",
                }}
                name="category"
                value={expenseData.category}
                onChange={handleChange}
              />
            </Dropdown>

            <DatePicker
              onChange={handleDateChange}
              name="date"
              style={{
                border: "none",
                background: "whitesmoke",
                borderRadius: "12px",
                width: "45%",
                height: "2.5rem",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
                padding: "0 0.5rem 0 0.5rem",
              }}
              // value={expenseData.date}
            />
          </article>
        </Modal>
      </section>
    </>
  );
};

export default AddExpenses;
