/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = ({ expensesDate, trigger, setTrigger }) => {
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
    const updatedExpenses = expensesDate.map((item) => {
      return {
        ...item,
        value:
          categoryWiseExpense.find((cat) => cat.name === item.category)
            ?.value || 0,
      };
    });

    const updatedCategories = categoryWiseExpense.map((cat) => {
      const totalExpense = updatedExpenses
        .filter((item) => item.category === cat.name)
        .reduce((acc, item) => acc + parseInt(item.price), 0);

      return {
        ...cat,
        value: totalExpense,
      };
    });

    setCatExp(updatedCategories);
  };

  useEffect(() => {
    handleGrouping();

    setTrigger(!trigger);
  }, []);

  console.log(categoryWiseExpense);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={categoryWiseExpense}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {categoryWiseExpense?.map(
            (entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            )
            // console.log(entry)
          )}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SimplePieChart;
