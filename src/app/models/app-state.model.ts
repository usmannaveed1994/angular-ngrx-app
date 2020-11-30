import Post from './post.model';
import { PostState } from '../reducers/posts.reducer';

export default interface AppState {
    post: PostState;
}



// StoreModule.forRoot({
//     post: PostsReducer
//   }, {}),