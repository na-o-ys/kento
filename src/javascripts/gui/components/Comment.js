// @flow
import React from "react"

export const Comment = ({ comments }: { comments: string[]}) => (
  <div className="comment">
    <div className="comment-body">
      {comments.map((line, i) => (<p key={i}>{line}</p>))}
    </div>
  </div>
)
