import {MdArrowLeft, MdArrowRight} from "react-icons/md"
import { MoviePage } from "types/movies"
import "./styles.css"
type Props = {
    page:MoviePage;
    onChange: Function;
}

export default function Pagination({page, onChange}: Props) {
    
    return (
        <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">
            <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                <MdArrowLeft />
            </button>
            <p>{`${page.number + 1} de ${page.totalPages}`}</p>
            <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                <MdArrowRight  />
            </button>
        </div>
    </div>
    )
}