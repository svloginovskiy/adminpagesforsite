import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    {pagesArray.map(p =>
                        <li key={p}
                            onClick={() => changePage(p)}
                            className={p === page ? "page-item active" : "page-item"}
                        >
                            <button className="page-link" href="">{p}</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;