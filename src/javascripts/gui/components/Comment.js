import React from "react"

const Comment = ({ comments }) => (
  <div className="comment">
    <div className="comment-body">
      {comments.map(line => (<p>{line}</p>))}
    </div>
  </div>
)

export default Comment
