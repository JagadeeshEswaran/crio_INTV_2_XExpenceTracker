import React from 'react'

const AddExpenses = () => {
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
            Expenses:{" "}
            <span style={{ color: "orange", fontWeight: "700" }}>
              Rs. 500
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
              background: "linear-gradient(90deg, rgba(250,128,137,1) 0%, rgba(253,29,29,1) 50%, rgba(200,0,0,1) 100%)"
            }}>
            + Add Expenses
          </button>
        </article>
      </section>
    </>
  )
}

export default AddExpenses