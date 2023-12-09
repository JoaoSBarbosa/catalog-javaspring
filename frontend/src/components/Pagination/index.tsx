import "./styles.css";
import {ReactComponent as Arrow} from "assets/images/Seta.svg";
import ReactPaginate from "react-paginate";
import React from "react";

type PaginationProps = {
    pageCount: number;
    range: number;
    pageDisplay:number;
    onChange?: (pageNumber: number) => void;
}
export const Pagination: React.FC<PaginationProps> = (
    {
        pageCount,
        range,
        pageDisplay,
        onChange
    }) => {

    return (
        <ReactPaginate

            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={pageDisplay}
            containerClassName={"pagination-container"}
            pageLinkClassName={"pagination-item"}
            breakClassName={"pagination-item"}
            previousClassName={"arrow-previous"}
            previousLabel={
                <div className={"pagination_arrow-container"}>
                    <Arrow/>
                </div>
            }
            nextClassName={"arrow-next"}
            nextLabel={
            <div className={"pagination_arrow-container"}>
            <Arrow/>
            </div>}
            activeLinkClassName={"pagination-link-active"}
            disabledClassName={"arrow-inactive"}
            onPageChange={
                (items) =>
                    (onChange) ?
                        onChange(items.selected) :
                        {}
            }
        />

    )
}