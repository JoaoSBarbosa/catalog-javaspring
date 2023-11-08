import "./styles.css";
import {ReactComponent as Arrow} from "assets/images/Seta.svg";

export const Pagination=()=>{
    return(
        <div className={"pagination-container"}>
            <Arrow/>
            <div className={"pagination-item"}>1</div>
            <div className={"pagination-item"}>2</div>
            <div className={"pagination-item"}>3</div>
            <div className={"pagination-item"}>...</div>
            <div className={"pagination-item"}>10</div>
            <Arrow/>

        </div>
    )
}