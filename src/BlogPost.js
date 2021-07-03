import React, { Component } from 'react';
import Comment from './Comment';

export default class BlogPost extends Component {
  render() {
    
    const comments = [
      "blah blah blah", 
      "blah blah blah",
      "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie"
    ]
    
    return (
      <div id="blog-post" className="wrapper">
        Just like moons and like suns,<br/>
        With the certainty of tides,<br/>
        Just like hopes springing high,<br/>
        Still I'll rise.<br/>
        -Maya Angelou<br/>

        <Comment commentText={comments[0]} />
        <Comment commentText={comments[1]} />
        <Comment commentText={comments[2]} />
      </div>
    );
  }
}
