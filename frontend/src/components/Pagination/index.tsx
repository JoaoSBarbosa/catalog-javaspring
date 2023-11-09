import "./styles.css";
import {ReactComponent as Arrow} from "assets/images/Seta.svg";

export const Pagination=()=>{
    return(
        <div className={"pagination-container"}>
            <Arrow className={"arrow-inactive arrow-previous"}/>
            <div className={"pagination-item active"}>1</div>
            <div className={"pagination-item"}>2</div>
            <div className={"pagination-item"}>3</div>
            <div className={"pagination-item"}>...</div>
            <div className={"pagination-item"}>10</div>
            <Arrow className={"arrow-active arrow-next"}/>

        </div>
    )
}