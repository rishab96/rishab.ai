import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "patents") {
    window.open("https://www.patentguru.com/inventor/mehra-rishab", "_blank");
  }

  return (
    <Wrapper>
      <span>patentguru.com/inventor/mehra-rishab</span>
    </Wrapper>
  );
};

export default Gui;
