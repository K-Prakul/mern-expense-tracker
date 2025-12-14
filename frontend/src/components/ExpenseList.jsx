import axios from "axios";

export default function ExpenseList({ expenses, refresh }) {

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    refresh();
  };

  const card = {
    background: "#1b1b1b",
    borderRadius: "12px",
    padding: "18px",
    boxShadow: "0 0 12px rgba(255,255,255,0.1)",
    marginBottom: "15px",
    width: "320px",
    color: "white"
  };

  return (
  <div>
    <h2 style={{ marginBottom: "15px" }}>All Expenses</h2>

    <div style={{
      height: "500px",
      overflowY: "auto",
      paddingRight: "5px"
    }}>
      {expenses.map(exp => (
        <div key={exp._id} style={card}>
          <h3 style={{ margin: 0 }}>{exp.title}</h3>
          <p style={{ margin: "5px 0" }}>💰 ₹{exp.amount}</p>
          <p style={{ margin: "5px 0" }}>📅 {exp.date}</p>
          <p style={{ margin: "5px 0" }}>🏷 {exp.category}</p>

          <button
            onClick={() => deleteExpense(exp._id)}
            style={{
              marginTop: "10px",
              padding: "10px 14px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              boxShadow: "0 0 8px rgba(255,50,50,0.5)"
            }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);
}
