import { PaginationItem } from '@material-ui/lab';
import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for( let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log("page number", i);
    };

    return(
        <div className="d-flex justify-content-center pt-5">
        <nav>
            <ul className = "pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={()=> paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;