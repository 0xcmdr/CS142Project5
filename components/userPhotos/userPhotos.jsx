import React from 'react';
import {
   Grid, Divider
} from '@material-ui/core';
import './userPhotos.css';
import PhotoCard from '../extras/photoCard'
//Web serverdan GET ile datayı çekmek için
import fetchModel from "../../lib/fetchModelData"


/**
 * UserPhotos Komponentini Tanımladık
 */
class UserPhotos extends React.Component {
  _isMounted=false;

  constructor(props) {
    super(props);
    //state tanımla
    this.state={
      photos :[],
      user : {}
    }
    //fotoğrafları çekecek fonksiyon
    this.fetchPhotos=this.fetchPhotos.bind(this);
    this.fetchUser=this.fetchUser.bind(this);
    
  }

  /* Komponent DOMA bağlandığında */
  componentDidMount(){
    //Komponent bağlandı
    this._isMounted=true;
    //ilk state değerlerini ata
    this.fetchPhotos();
    this.fetchUser();
    //geçmişteki değişikliği dinle, path değişirse kullanıcıyı güncelle
    this.unlisten=this.props.history.listen(() =>{
      this.fetchPhotos();
      this.fetchUser();
    }
    );
      
    
  }

/* Fotoğrafları çek */
  fetchPhotos(){
     //fotoğrafı çek
     fetchModel('/photosOfUser/'+this.props.match.params.userId)
      .then((response) =>{
        if(this._isMounted){
            //statei güncelle
            this.setState({photos : response.data})
        }})
      .catch((error)=>console.log(error));
      
  }

 /*  Kullanıcıları Çek */
  fetchUser(){
    //kullanıcıyı verilerini ID'den çek
    fetchModel('/user/'+this.props.match.params.userId)
    .then(response => {
      if(this._isMounted){
        //Topbara title gönder
          this.props.titleOnChange("User Details of " + response.data.first_name +" "+response.data.last_name );
          //state güncelle
        this.setState({
          user:response.data
        });
      }

    });
  }

  //Komponent DOM'dan çıkarıldığında
  componentWillUnmount(){
    this._isMounted=false;

    //fotoğrafları boşalt.
    this.setState(
      {photos:null,
      user:null}
      );
      //history listenerı sil
      this.unlisten();
  }

  render() {
    return (

      <Grid container spacing={4}>
        <Divider/>
        {
            /* Kullanıcının her bir fotoğrafını oluştur */
            this.state.photos.map(
             (element,index) => <PhotoCard key={index} {...element} index={index}/>
             )
        }
      </Grid>

      

    );
  }
}

export default UserPhotos;
