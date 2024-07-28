import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "papers")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
      <Usage cmd="papers" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="papers" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "A computer vision system for deep learning-based detection of patient mobilization activities in the ICU",
    desc: "Published in Nature",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=689fJZQAAAAJ&citation_for_view=689fJZQAAAAJ:qjMakFHDy7sC",
  },
  {
    id: 2,
    title: "3d point cloud-based visual prediction of icu mobility care activities",
    desc: "Published in MLHC",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=689fJZQAAAAJ&citation_for_view=689fJZQAAAAJ:u5HHmVD_uO8C"
  },
  {
    id: 3,
    title: "Vision-based prediction of ICU mobility care activities using recurrent neural networks",
    desc: "Published in NeurIPS",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=689fJZQAAAAJ&citation_for_view=689fJZQAAAAJ:u-x6o8ySG0sC",
  },
];

export default Projects;
