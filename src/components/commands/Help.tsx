import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";

import {
  Seperator,
} from "../styles/Welcome.styled";

import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  return (
    // <div className="info-section">
    //   <div>Welcome to Rishab's AI portfolio.</div>
    //   <Seperator>----</Seperator>
    //   <div>
    //     Soon I'll be able to answer any of your questions in natural language.
    //     But until then, you can type one of the following commands:
    //   </div>
    //   <Seperator>----</Seperator>
    //   <div>
    //     For a list of available commands, type `<Cmd>help</Cmd>`.
    //   </div>
    // </div>

    <HelpWrapper data-testid="help">
    <div>Welcome to Rishab's AI portfolio.</div>
    <Seperator>----</Seperator>
    <div>
      Soon I'll be able to answer any of your questions in natural language.
    </div>
    <div>
      But until then, you can type the commands below for details.
    </div>
    <Seperator>----</Seperator>
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>Tab {generateTabs(10)} =&gt; autocompletes the command</div>
        <div>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
        <div>Ctrl/Cmd + k {generateTabs(1)} =&gt; clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
