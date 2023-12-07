import "./styles.css";
import {ReactComponent as Arrow} from "assets/images/Seta.svg";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
    return (
        <ReactPaginate
            pageCount={10}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName={"pagination-container"}
            pageLinkClassName={"pagination-item"}
            breakClassName={"pagination-item"}
            previousClassName={"arrow-previous"}
            previousLabel={<Arrow/>}
            nextClassName={"arrow-next"}
            nextLabel={<Arrow/>}
            activeLinkClassName={"pagination-link-active"}
            disabledClassName={"arrow-inactive"}
        />
        
    )
}