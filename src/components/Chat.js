import {Component} from 'react'
import { Widget } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
export default class Chat extends Component {
    render()
    {
        return (
            <div>
            <Widget />
            </div>
        );
    }
}
