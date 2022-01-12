import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"
import "./styles.css"
export default function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <BsStarFill color="yellow"/>
            <BsStarFill color="yellow"/>
            <BsStarFill color="yellow"/>
            <BsStarHalf color="yellow"/>
            <BsStar color="yellow"/>
        </div>
    );
}