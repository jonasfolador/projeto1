import React from 'react';

import Post from './post';
export default class App extends React.Component {
    render() {
        return (
            <div>

                <Post title="filmes" />
                <Post title="Os vingadores " />
                <Post title="a coisa" />


            </div>
        );


    }
}