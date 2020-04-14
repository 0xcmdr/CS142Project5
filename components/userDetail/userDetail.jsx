import React from 'react';
import {
  Divider,
  Button ,
  TextField,
  Grid

} from '@material-ui/core';
import {Link} from 'react-router-dom'
import './userDetail.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
/**
 * UserDetail Componentini Tanımladık
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    //useri local state içerisinde tut
    this.state={user:{}}
    this.fetchUser=this.fetchUser.bind(this);
  }


  /* Komponent DOMA bağlandığında */
  componentDidMount(){
    //ilk açılışta çalıştır
    this.fetchUser()
    //geçmişteki değişikliği dinle, path değişirse kullanıcıyı güncelle
    this.unlisten=this.props.history.listen(() =>
      this.fetchUser()
    );
    //TOPBAR komponentine yeni title gönder
    this.props.titleOnChange("User Details");
    
  }

  //kullanıcı verilerini çek
  fetchUser(){
     //user id den user verilerini çek
     const {userId} =this.props.match.params;
     //veriyi çek ve state aktar
     const myUser=window.cs142models.userModel(userId);
     //statei güncelle
     this.setState(
       {user:myUser}
       );
       
  }
    
  //komponent DOM'dan çıkarılınca belleği serbest bırak
  componentWillUnmount(){
    this.setState(
      {user:null}
      );
      //listenerı DOM'dan kaldır
     this.unlisten();
  }

  render() {
   
    return (
      
        <Grid container className="gridItem" spacing={6} >
          <Grid item xs={12} className="gridItem" >
            <img src="./images/default_user_image.jpg" alt="Profile Image" className="useravatar" />
            <Divider/>
            <Link to={"/photos/"+this.state.user._id} >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PhotoLibraryIcon />}
                >
                  
                  SHOW USERS PHOTOS
          </Button>
            </Link>

          </Grid>

          <Grid item xs={6} className="gridItem">
          <TextField
                
                label="User ID"
                style={{ margin: 8 }}
                placeholder={this.state.user._id}
                defaultValue={this.state.user._id}
                helperText="ID of User"
                disabled
                
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>
   
          <Grid item xs={6} className="gridItem">
          <TextField
                
                label="Occupation"
                style={{ margin: 8 }}
                placeholder={this.state.user.occupation}
                defaultValue={this.state.user.occupation}
                helperText="Occupation of User"
                
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>

          <Grid item xs={6} className="gridItem">
                <TextField
                
                label="First Name"
                style={{ margin: 8 }}
                placeholder={this.state.user.first_name}
                defaultValue={this.state.user.first_name}
                helperText="First Name of User"
                fullWidth
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            
          </Grid>

          <Grid item xs={6} className="gridItem">
          <TextField
                
                label="Last Name"
                style={{ margin: 8 }}
                placeholder={this.state.user.last_name}
                defaultValue={this.state.user.last_name}
                helperText="Last Name of User"
                fullWidth
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>

          <Grid item xs={12} className="gridItem">
          <TextField
                
                label="Location"
                style={{ margin: 8 }}
                placeholder={this.state.user.location}
                defaultValue={this.state.user.location}
                helperText="Location of User"
                
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>
          <Grid item xs={12} className="gridItem">
          <TextField
                
                label="Description"
                style={{ margin: 8 }}
                placeholder={this.state.user.description}
                defaultValue={this.state.user.description}
                helperText="Description of User"
                fullWidth
                color="secondary"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
        
          </Grid>
        </Grid>
     
    );
  }


}

export default UserDetail;
