import React from 'react';
import moment from 'moment';

export default ({post})=> {

  const dateTime = moment(post.publishDate);

  return (
        <article className="post type-post hentry">
          <header className="entry-header">
              <h1 className="entry-title"><a href="blog-single.html" title={post.title} rel="bookmark">{post.title}</a></h1>
          </header>

          <div className="entry-content" dangerouslySetInnerHTML={{__html:post.content}}></div>

          <footer className="entry-meta">
              posted in <a href="#" title={"View all posts in " + post.tags}>{post.tags}</a> on <a href="#" title={dateTime.format('h:mm a')} rel="bookmark"><time className="entry-date" datetime={post.publishDate}>{dateTime.format('LL')}</time></a>
              <span className="comments-link"><a href="blog-single.html#comments" title="Comment on Thinking About Responsive Design">5 Comments</a></span>
          </footer>

        </article>
  );
}
