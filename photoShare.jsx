import React from 'react';
import ReactDOM from 'react-dom';
//React Router için gerekli importlar
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
//Material UI kütüphanesinden gerekli importlar
import {
  Grid, Typography, Paper
} from '@material-ui/core';
//Kendi oluşturduğumuz CSS dosyasının importu
import './styles/main.css';

// Oluşturulan komponentleri içeri aktar
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/userDetail';
import UserList from './components/userList/userList';
import UserPhotos from './components/userPhotos/userPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state=
    {
      title:"Welcome",
      currUser:null
    }
    this.changeTitle=this.changeTitle.bind(this);
    this.currentUser=this.currentUser.bind(this);
  }

  //Her bir komponent render edildiğinde TOPBAR title'ını güncelle
  changeTitle(newTitle)
  {
    this.setState({title:newTitle})
  }

  //Tıklanan kullanıcı verisini komponentler arasında yollamak için belirle
  currentUser(selectedUser)
  {
    this.setState({currUser:selectedUser});
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar title={this.state.title}/>
        </Grid>
        <div className="main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="main-grid-item">
            <UserList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="main-grid-item">
            <Switch>
              
            <Route exact path="/"
                render={() =>
                  <Typography variant="body1">
                    Please select an user from left side.
                  </Typography>}
              />
              <Route path="/users/:userId"
                render={ props => <UserDetail {...props} titleOnChange={this.changeTitle} setCurrentUser={this.currentUser} /> }
              />
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} titleOnChange={this.changeTitle} /> }
              />
              <Route path="/users" component={UserList}  />

            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
