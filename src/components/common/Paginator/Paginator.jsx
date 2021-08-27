import s from './Paginator.module.css';
import React, {useState} from "react";

const Paginator = ({totalCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 ?
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button> :
                null
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span key={p} className={currentPage === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
            {portionNumber < portionCount ?
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button> :
                null
            }
        </div>
    );
}

export default Paginator;