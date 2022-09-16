import React,{usestate} from "react";
 import styles from "./searchbar.module.css";

 const Searchbar =(props) => {
   const{ search, onSearchChange} =props;
   const onChangeSearch =(e) => {

const value =e.target.value;
onSearchChange(value);

   };
   
   return(
    <div className="styles.container">
        <input className={styles.input} placehoolder="searchusername" value={search} onChange={onChangeSearch} />
    </div>

   
   );
   


 };
 export default Searchbar;
