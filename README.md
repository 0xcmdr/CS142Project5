# Introduction

This repository is included Project #5 skeleton files of CS142 Course of Standford University and it completed using React and Material UI.

## Installation

```bash
git clone https://github.com/0xcmdr/CS142Project5.git
```

```bash
npm install #install node_modules
```

```bash
npm run serve #start web server for http://localhost:3000 and build-watch files
```

## Project Summary
In this project we used ReactJS (https://reactjs.org/) with Material-UI (https://material-ui.com) to create the
beginnings of a photo-sharing web application. In the second half of this project, we also explored retrieving
data from a server.

## Description
1. /users is routed to the component UserList in components/userList/ (List All Users)
2. /users/:userId is routed to the component UserDetail in components/userDetail/ (Show details of specified user)
3. /photos/:userId is routed to the component UserPhotos in components/userPhotos/ (Show photos of specified user)

See the use of HashRouter (https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md), and Route (https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md) in photoShare.jsx for details. 

[For More Details](project5.pdf)


## License
[MIT](https://choosealicense.com/licenses/mit/)
