import React from "react";
import { MdClose } from "react-icons/lib/md";

export default props => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-panel red">
          <span className="white-text">{props.message}</span>
          <MdClose
            style={{
              fontSize: "30",
              color: "white",
              float: "right",
              marginTop: "-20px",
              marginRight: "-20px"
            }}
            onClick={() => props.handleClose(props.index, props.closeError)}
          />
        </div>
      </div>
    </div>
  );
};
