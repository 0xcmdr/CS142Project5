import React from 'react';
import {
   Grid, Divider
} from '@material-ui/core';
import './userPhotos.css';
import PhotoCard from '../extras/photoCard'


/**
 * UserPhotos Komponentini Tanımladık
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    //state tanımla
    this.state={
      photos : window.cs142models.photoOfUserModel(this.props.match.params.userId),
      user : window.cs142models.userModel(this.props.match.params.userId)
    }
    //fotoğrafları çekecek fonksiyon
    this.fetchPhotos=this.fetchPhotos.bind(this);
  }

  /* Komponent DOMA bağlandığında */
  componentDidMount(){
    //geçmişteki değişikliği dinle, path değişirse kullanıcıyı güncelle
    this.unlisten=this.props.history.listen(() =>
      this.fetchPhotos()
    );
    /* this.currUser.photos.user.first_name +" "+this.state.photos.user.last_name */
      this.props.titleOnChange("Photos of " + this.state.user.first_name +" "+this.state.user.last_name );
    
  }


  fetchPhotos(){
     //URL den userID yi al
     const {userId} =this.props.match.params;
     //fotoğrafı ve userı çek
     const myPhotos=window.cs142models.photoOfUserModel(userId);
     const currUser =window.cs142models.userModel(userId);
     //statei güncelle
     this.setState(
       {photos:myPhotos,
        user:currUser}
       );
      
       
  }

  //Komponent DOM'dan çıkarıldığında
  componentWillUnmount(){
    //fotoğrafları boşalt.
    this.setState(
      {photos:null}
      );
      //history listenerı sil
      this.unlisten();
  }

  render() {
    return (

      <Grid container spacing={4}>
        <Divider/>
        {
          
            this.state.photos.map(
             (element,index) => <PhotoCard key={index} {...element} index={index}/>
             )
        }
      </Grid>

      

    );
  }
}

export default UserPhotos;
