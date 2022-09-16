import { ClassNames } from "@emotion/react";
import React from "react";
import style from "./list.module.css";
 


const Listitem =(props) =>{
const{user,SelectedUser, onSelectUser } = props;
return(
<li className={`${style.listitem}
${

    SelectedUser != null &&
    SelectedUser.id === user.id &&
    style.selectedItem

}`}
onClick={() => onSelectUser(user)}
>
    <span>
    {user.firstName} {user.lastName}
    </span>
</li>
   
    

);

};
 export default Listitem;
