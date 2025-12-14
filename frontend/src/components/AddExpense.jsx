import { useState } from "react";
import axios from "axios";

export default function AddExpense({ refresh }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    category: ""
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/expenses/add", expense);
    refresh();
  };

  const inputStyle = {
    padding: "12px",
    margin: "10px 0",
    width: "260px",
    borderRadius: "8px",
    border: "1px solid #3a3a3a",
    background: "#1b1b1b",
    color: "white",
    fontSize: "14px"
  };

  return (
    <div style={{
      padding: "25px",
      background: "#1b1b1b",
      borderRadius: "12px",
      width: "320px",
      boxShadow: "0 0 12px rgba(255,255,255,0.1)",
      color: "white"
    }}>
      <h2 style={{ marginBottom: "15px" }}>Add Expense</h2>

      <input placeholder="Title" style={inputStyle}
        onChange={e => setExpense({ ...expense, title: e.target.value })}
      />

      <input placeholder="Amount" type="number" style={inputStyle}
        onChange={e => setExpense({ ...expense, amount: e.target.value })}
      />

      <input type="date" style={inputStyle}
        onChange={e => setExpense({ ...expense, date: e.target.value })}
      />

      <input placeholder="Category" style={inputStyle}
        onChange={e => setExpense({ ...expense, category: e.target.value })}
      />

      <button 
        onClick={submit}
        style={{
          padding: "12px",
          borderRadius: "8px",
          background: "#4caf50",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
          width: "100%",
          fontSize: "15px",
          fontWeight: "bold"
        }}>
        Add Expense
      </button>
    </div>
  );
}
