import React from "react";
import "./styles.css";

function Cat() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`catContainer ${isOpen ? "active" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="left-ear" />
      <div className="right-ear" />
      <div className="face" />
    </div>
  );
}
export default Cat;
