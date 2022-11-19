const path = require("path");
console.log(
  path.dirname(
    "C:UsersNikhil ChhabraDocumentsGitHublearning-nodejsPathModulepath.js"
  )
);
console.log(
  path.extname(
    "C:UsersNikhil ChhabraDocumentsGitHublearning-nodejsPathModulepath.js"
  )
);
console.log(
  path.basename(
    "C:UsersNikhil ChhabraDocumentsGitHublearning-nodejsPathModulepath.js"
  )
);
const myPath = path.parse(
  "C:UsersNikhil ChhabraDocumentsGitHublearning-nodejsPathModulepath.js"
);
console.log(myPath.ext);
