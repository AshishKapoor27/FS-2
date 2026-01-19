import {useState} from "react";

function App(){
  const[count, setCount]=useState(0);
  const[dark, setDark]=useState(false);
  const[name, setName]=useState("");

  const style = {
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: dark ? "#2b2b2b" : "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(226, 32, 32, 0.2)"
};

  const buttonStyle = {
  padding: "10px 15px",
  margin: "8px 0",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: dark ? "#912020" : "#333",
  color: "white",
  fontSize: "14px"
};

  const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "5px",
  border: "1px solid #410707",
  fontSize: "14px"
};


  return (
    <div style={style}>
      <h1 style={{textAlign:"center",color:"teal"}}>My First SPA</h1>
      <button style={buttonStyle} onClick={() => setDark(!dark)}>Change Theme</button>

      <hr />

      <h2 style={{marginTop:"20px",color:"purple"}}>Counter</h2>
      <p>{count}</p>
      <button style ={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />
      <h2 style={{marginTop:"20px",color:"red"}}>Simple Form</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        style={inputStyle}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}

export default App;