import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "startup") {
    window.open("https://pinnacle.co", "_blank");
  }

  return (
    <Wrapper>
      <span>Pinnacle is an AI personal trainer for your mind. Join the waitlist at www.pinnacle.co!</span>
    </Wrapper>
  );
};

export default Gui;
