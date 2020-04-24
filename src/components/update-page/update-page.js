import React from "react";
import "./update-page.css";

const UpdatePage = ({getNotes}) => {
  return (
    <div className="update-page-wrapper">
      <div>
        <h2>Notes</h2>
      </div>
      <div>
        {" "}
        <a href="!#" className="update-btn" onClick={getNotes}>
          Update
        </a>
      </div>
    </div>
  );
};

export default UpdatePage;
