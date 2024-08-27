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
      <span>Elevate your mind with Pinnacle, your AI personal trainer. Learn more at www.pinnacle.co and start your journey today.</span>
    </Wrapper>
  );
};

export default Gui;
