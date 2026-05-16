import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Ankit" age={20} img='https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332' />
      <Card user="Vikash" age={30} img='https://images.unsplash.com/photo-1760434685862-5f2b29748cb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'/>
      <Card user='Soni' age={25} img='https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'/>
    </div>
  );
};

export default App;
