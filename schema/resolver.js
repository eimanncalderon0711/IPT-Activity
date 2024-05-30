const {UserList, PostList, CommentList} = require("../temp-db");

const resolvers = {
    Query:{
        users : () => {
            return UserList
        },

        user: (_, args) => {
            const userId = args.id
            return UserList.find((users) => users.id === userId);
        },

        posts: () =>{
            return PostList;
        },

        comments: () => {
            return CommentList;
        },

        comment: (_, args) => {
            const commentId = args.id

            return CommentList.find((comments) => comments.id === commentId);

        }
    }
};

module.exports = {resolvers};