import {Component} from 'react'
import Avatar from 'react-avatar';
import './css/Profile.css'

export default class Profile extends Component {
    render()
    {
        return (
            <div className="profile-page">
                <Avatar name="Ben" size="150" textSizeRatio={1.75} />
                <h2>BEN THOMPSON</h2>
                <h3>Details</h3>
                <h3>MALE</h3>
                <h3>BIO: I'm kinda cool so hmu</h3>
            </div>
        );
    }
}
