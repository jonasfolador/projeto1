import React from 'react';

import Comment from "./comment";

export default class Post extends React.Components {
    constructor(props) {

        super(props);
        this.state = {
            comments: [],
            newCommentText: ""
        };
        this.handlesubmit = this.handlesubmit.bind(this);

    }


    handlesubmit(e) {

        this.setState({

            comments: [

                ...this.state.comments, {
                    text: this.state.newCommentText
                }
            ]



        });

        this.setState({ newCommentText: '' });
        e.preventDefault();

    }


    handleTextChange = (e) => {
        this.setState({ newCommentText: e.target.value })

    }



    render() {
        return (
            <div>

                <h2>{this.props.title}</h2>

                <form onSubmit={this.handlesubmit}>
                    <input value={this.state.newCommentText}
                        onChange={this.handleTextChange} />
                    < button type="submit">comentar</button>
                </form>
                {this.state.comments.map((Comments, index) => {
                    return <comments key={index} text={Comments.text} />
                })}

            </div>
        );


    }



}