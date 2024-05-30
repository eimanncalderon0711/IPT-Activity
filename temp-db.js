const UserList = [
  {
    id: "1",
    name: "Ej Calderon",
    username: "ej12234",
    age: "21",
    nationality: "Pinoy",
    post: [{ id: "1", content: "Asa ka" }],
  },
  {
    id: "2",
    name: "Ek Calderon",
    username: "ek12234",
    age: "21",
    nationality: "Amerkano",
    post: [],
  },
  {
    id: "3",
    name: "El Calderon",
    username: "el12234",
    age: "21",
    nationality: "Chinese",
    post: [],
  },
  {
    id: "4",
    name: "Em Calderon",
    username: "em12234",
    age: "21",
    nationality: "Japanese",
    post: [],
  },
];

const PostList = [
  {
    id: "1",
    title: "Asa mo?",
    comments: [
      { id: "1", content: "naa nako diri", time: Date() },
      { id: "2", content: "going pako bay", time: Date() },
      { id: "3", content: "naa pas balay", time: Date() },
    ],
  },
  {
    id: "2",
    title: "Naka amot namo?",
    comments: [
      { id: "4", content: "wala pa mi ka amot", time: Date() },
      { id: "5", content: "humana kog amot", time: Date() },
    ],
  },
  {
    id: "3",
    title: "Post sa mga ML teams",
    comments: [
      { id: "6", content: "BlackList for the win", time: Date() },
      { id: "7", content: "Onic for the win", time: Date() },
    ],
  },
  {
    id: "4",
    title: "Post sa mga NBA teams",
    comments: [
      { id: "8", content: "Dallas for the finals", time: Date() },
      { id: "9", content: "Lakers for the win", time: Date() },
    ],
  },
];

const CommentList = [
  { id: "1", content: "naa nako diri", time: Date() },
  { id: "2", content: "going pako bay", time: Date() },
  { id: "3", content: "naa pas balay", time: Date() },
  { id: "4", content: "wala pa mi ka amot", time: Date() },
  { id: "5", content: "humana kog amot", time: Date() },
  { id: "6", content: "BlackList for the win", time: Date() },
  { id: "7", content: "Onic for the win", time: Date() },
  { id: "8", content: "Dallas for the finals", time: Date() },
  { id: "9", content: "Lakers for the win", time: Date() },
];

module.exports = { UserList, PostList, CommentList };
