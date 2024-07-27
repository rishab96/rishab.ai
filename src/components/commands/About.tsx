import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Rishab Mehra</HighlightSpan>!
      </p>
      <p>
        I am the CTO and co-founder of <HighlightAlt>Pinnacle</HighlightAlt>, a London based AI venture.
      </p>
      <p>
      My objective in life is to innovate and develop products <br />
      that can directly impact significant populations. I am particularly <br />
      interested in Computer Vision, Natural Language Processing and <br />
      their consumer applications. In the past, I have researched in <br />
      these fields at Stanford, and published in Nature, MLHC and NeurIPS. <br />
      I have also delivered multiple features at Apple in these fields, which <br />
      billions use daily, and filed patents related to them.
      </p>
    </AboutWrapper>
  );
};

export default About;
