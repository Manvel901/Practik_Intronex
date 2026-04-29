import React from "react";
import css from "../../form/form.css";

const {Button} = css;

const ButtonComponent =()=>{
   
    return(
        <React.Fragment>
            <Button >
                Сохранить транзакцию
            </Button>

        </React.Fragment>
    );
}

export default ButtonComponent;