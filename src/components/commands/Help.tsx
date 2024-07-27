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
        <div>Tab {generateTabs(9)} =&gt; autocompletes the command</div>
        <div>Up Arrow {generateTabs(4)} =&gt; go back to previous command</div>
        <div>Ctrl/Cmd + k {generateTabs(0)} =&gt; clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
