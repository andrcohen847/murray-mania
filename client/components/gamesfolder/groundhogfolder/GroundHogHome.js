import React from "react";
import GroundHogGame from "./GroundHogGame";
import GroundHogInstructions from "./GroundHogInstructions";

class GroundHogHome extends React.Component {
  render() {
    return (
      <div className="gameParent">
        <GroundHogInstructions />
      </div>
    );
  }
}

export default GroundHogHome;
