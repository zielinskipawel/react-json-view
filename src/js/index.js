import React from 'react';
import JsonObject from './components/JsonObject';
//global style
//TODO make this theme customizable
require('./../style/app-globals.scss');

//forward src through to JsonObject component
export default class extends React.Component {
    render() {
        const {props} = this;
        return (<div class="react-json-view">
            <JsonObject {...props} />
        </div>);
    }
}