import {MdArrowLeft, MdArrowRight} from "react-icons/md"
import "./styles.css"
export default function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">
            <button className="dsmovie-pagination-button" disabled={true} >
                <MdArrowLeft />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="dsmovie-pagination-button" disabled={false} >
                <MdArrowRight  />
            </button>
        </div>
    </div>
    )
}