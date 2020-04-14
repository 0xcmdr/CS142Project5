import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import './userList.css';

/**
 * UserList Komponentini Tanımla
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    //Kullanıcıları hazır veri modelinden çek
    this.users;
    this.createListItems=this.createListItems.bind(this);
  }


  /* Kullanıcılara ait liste elemanlarını oluştur */
  createListItems(){
    //kullanıcıları çek
    this.users=window.cs142models.userListModel();
    //list itemlerini oluştur
    var listItems= this.users.map((element,index) => 
    
    <ListItem key={index}>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    
    <Link to={'/users/'+element._id}><ListItemText primary={element.first_name +' '+ element.last_name} secondary={element.location}/></Link>
    <Divider/>
     </ListItem>
    );

    //oluşturulan list itemlerini rendera yolla
     return listItems;
  }

  /* Komponent DOM'dan çıkarıldığında, kullanıcıları boşalt */
  componentWillUnmount(){
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
