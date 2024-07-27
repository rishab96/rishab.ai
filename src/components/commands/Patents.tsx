import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "patents") {
    window.open("https://www.patentguru.com/search?inventor=%22Mehra+rishab%22&status=pat&SortBy=pubdate_newest", "_blank");
  }

  return <span></span>;
};

export default Gui;
