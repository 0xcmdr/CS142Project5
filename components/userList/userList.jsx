import React from 'react';
import {Divider, List, ListItem,ListItemText,Typography}
from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import './userList.css';
import fetchModel from '../../lib/fetchModelData';
/**
 * UserList Komponentini Tanımla
 */
class UserList extends React.Component {

  constructor(props) {
    super(props);
    //Kullanıcıları hazır veri modelinden çek
    this.state={users:[]}
    this.fetchUser=this.fetchUser.bind(this);
    this.createListItems=this.createListItems.bind(this);
  }

  fetchUser(){
    //kullanıcı listesini çek
    fetchModel('/user/list')
    .then(response => {
          //tüm kullanıcı verilerini çek
          this.setState({
            users:response.data
            });

    });
  }
  
    /* Komponent DOMA bağlandığında */
    componentDidMount(){
      //kullanıcıları çek
      this.fetchUser();
      
    }

  /* Kullanıcılara ait liste elemanlarını oluştur */
  createListItems(){
    
    //list itemlerini oluştur
    var listItems= this.state.users.map((element,index) => 
    
    <ListItem key={index}>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    {/* HER BİR KULLANICIYI DETAY SAYFASINA YÖNLENDİRECEK LİNK ATA */}
    <Link to={'/users/'+element._id}><ListItemText primary={element.first_name +' '+ element.last_name} secondary={element.location}/></Link>
    <Divider/>
     </ListItem>
    );

    //oluşturulan list itemlerini rendera yolla
     return listItems;
  }

  /* Komponent DOM'dan çıkarıldığında, kullanıcıları boşalt */
  componentWillUnmount(){
    //bellekten kullanıcıları boşalt
    this.users=null;
  }

  render() {
    return (
      
      <div>
        <Typography variant="body1">
      
        </Typography>
        <List component="nav">
          {/* HER BİR KULLANICIYI LİSTEDEN ÇEK VE OLUŞTUR */
           this.createListItems()
          }
          </List>
          
        <Typography variant="body1">
        
        </Typography>
      </div>
    );
  }

}

export default UserList;
