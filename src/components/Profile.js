import {Component} from 'react'
import Avatar from 'react-avatar';
import './Profile.css'
export default class Profile extends Component {
    render()
    {
        return (
            <div className="match-page">
                <Avatar name="Jennifer" size="150" textSizeRatio={1.75} />
                <Avatar name="Ben" size="150" textSizeRatio={1.75} />
            </div>
        );
    }
}
