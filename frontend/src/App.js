import { useState, useEffect } from "react";
import axios from "axios";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    const res = await axios.get("https://mern-expense-tracker-l5zv.onrender.com//api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div style={{
      background: "#0f0f0f",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "40px",
      color: "white"
    }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <AddExpense refresh={loadExpenses} />
        <ExpenseList expenses={expenses} refresh={loadExpenses} />
      </div>
    </div>
  );
}

export default App;
