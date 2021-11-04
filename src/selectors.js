
export const getPostsState = store => store.Posts;

export const getPostsList = store => 
    getPostsState(store) ? getPostsState(store).allPosts: [];

export const getPostByID = (store, id) => 
    getPostsState(store) ? {...getPostsState(store).byIds[id], id } : {};

export const getPosts = store => 
    getPostsList(store).map(id => getPostByID(store, id));

export const getPostsByFilter = store =>{
    const allTodos = store.Posts.byIds;
    return allTodos;
}

export const getInfo = store => {
    return store.Info.info;
}
    