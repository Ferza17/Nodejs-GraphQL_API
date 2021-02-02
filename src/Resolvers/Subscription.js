const Subscription = {
    comment: {
        subscribe(parent, {postId}, ctx, info) {
            const post = ctx.db.Post.find((post) => post.id === postId && post.published)

            if (!post) {
                throw new Error("Post Not Found!")
            }

            return ctx.pubsub.asyncIterator(`comment ${postId}`)
        }
    },
    post: {
        subscribe(parent, args, ctx, info) {
            return ctx.pubsub.asyncIterator("post")
        }
    }
}

export default Subscription