import React from "react"

const Comment = ({ comments }) => (
  <div className="comment">
    <div className="comment-body">
      {comments.map((line, i) => (<p key={i}>{line}</p>))}
    </div>
  </div>
)

export default Comment
