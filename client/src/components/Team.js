import React from "react";

import TeamInfo from "./TeamInfo";

export default props => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-panel blue-grey">
          <span className="white-text">
            <div>
              <TeamInfo team={props.team} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
