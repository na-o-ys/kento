import * as React from "react"

export const Comment = ({ comments }: { comments: string[] }) => (
    <div className="comment">
        <div className="comment-body">
            {comments.map((line, i) => (<p key={i} style={commentStyle}>{line}</p>))}
        </div>
    </div>
)

export default Comment

const commentStyle = {
    margin: 0
}
