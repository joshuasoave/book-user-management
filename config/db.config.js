const password = process.env.DB_PASS;
const encodedPassword = encodeURIComponent(password);

module.exports = {
  DB_URI: `mongodb+srv://joshy:${encodedPassword}@cluster0.g8e1q.azure.mongodb.net/book-user-managements?retryWrites=true&w=majority`,
};
