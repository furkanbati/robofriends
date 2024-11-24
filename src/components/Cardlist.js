import React from "react";
import Card from "./Card.js"


const Cardlist = ({robots}) => {
    return(
        <>{robots.map((user) => {
            return <Card 
                key= {user.id}
                id={user.id} 
                name={user.name}
                email={user.email}
                />
            })
        }
    </>    
    );
}
 export default Cardlist;