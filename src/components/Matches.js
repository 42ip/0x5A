import {Component} from 'react'
import Avatar from 'react-avatar';
import { AiFillHeart } from 'react-icons/ai'
import './css/Matches.css'
export default class Matches extends Component {
    render()
    {
        return (
            <div className="match-page">
                <h2>Your Matches <AiFillHeart /></h2>
                <Avatar name="Jennifer" size="100" textSizeRatio={1.75} />
                <Avatar name="Samantha" size="100" textSizeRatio={1.75}/>
                <Avatar name="Angelina" size="100" textSizeRatio={1.75}/>
            </div>
        );
    }
}
