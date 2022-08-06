const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "React",
  "React JS",
  "git",
  "Node.js",
  "MySQL",
  "jQuery",
  "PHP",
  "Bootstrap",
  "Material-UI",
];
const tagCloud = TagCloud(".text-sphere", myTags, {
  // radius in px
  radius: 200,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});
