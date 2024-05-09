import React from 'react'
import AddIncome from './Dashboard/AddIncome'
import AddExpenses from './Dashboard/AddExpenses'
import InsightChart from './Dashboard/InsightChart'

import "./style.css"

const HomePage = () => {
    return (
        <>
            <section className='' style={{ height: "100svh" }}>
                {/* Dashboard */}
                <article style={{ margin: "1rem", height: "50%" }}>
                    <h1 style={{ fontSize: "2rem", color: "whitesmoke", margin: "0", marginBottom: "1rem" }}>Expense Tracker</h1>

                    <article className='dashboard_container' style={{
                        width: "auto", height: "auto", minHeight: "80%", display: 'flex',
                        justifyContent: 'between',
                        alignItems: 'center',
                        borderRadius: "8px",
                        padding: "0 2rem"
                    }}>
                        <AddIncome />

                        <AddExpenses />

                        <InsightChart />
                    </article>
                </article>

                {/* Transaction Container */}
                <article style={{ margin: "1rem", height: "auto", width: "98%", background: "white", minHeight: "43%" }}>
                    <article></article>
                    <article></article>
                </article>
            </section>
        </>
    )
}

export default HomePage