import { Action } from '@ngrx/store';
import Post from '../models/post.model';

export enum PostActionTypes {
    ADD_POST = '[POST] Add Post',
    ADD_POST_SUCCESS = '[POST] Add Post Success',
    ADD_POST_FAIL = '[POST] Add Post Fail',
    
    GET_POSTS = '[POST] Get Posts',
    GET_POSTS_SUCCESS = '[POST] Get Posts Success',
    GET_POSTS_FAIL = '[POST] Get Posts Fail',

    DELETE_POST = '[POST] Delete Post',
    DELETE_POST_SUCCESS = '[POST] Delete Post Success',
    DELETE_POST_FAIL = '[POST] Delete Post Fail',
}

/*
** Get Posts
**/
export class GetPostsAction implements Action {
    readonly type = PostActionTypes.GET_POSTS;
}

export class GetPostsSuccessAction implements Action {
    readonly type = PostActionTypes.GET_POSTS_SUCCESS;
    constructor(public payload: Post[]){}
}

export class GetPostsFailAction implements Action {
    readonly type = PostActionTypes.GET_POSTS_FAIL;
    constructor(public payload: any) {}
}

/*
** End - Get Posts
**/


/*
** Add Post
**/
export class AddPostAction implements Action {
    readonly type = PostActionTypes.ADD_POST;
    constructor(public payload: Post){}
}

export class AddPostSuccessAction implements Action {
    readonly type = PostActionTypes.ADD_POST_SUCCESS;
    constructor(public payload: Post){}
}

export class AddPostFailAction implements Action {
    readonly type = PostActionTypes.ADD_POST_FAIL;
    constructor(public payload: any){}
}

/*
** End - Add Post
**/


/*
** Delete Post
**/
export class DeletePostAction implements Action {
    readonly type = PostActionTypes.DELETE_POST;
    constructor(public payload: number){}
}

export class DeletePostSuccessAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;
    constructor(public payload: string | any){}
}

export class DeletePostFailAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAIL;
    constructor(public payload: any){}
}

/*
** End - Delete Post
**/

export type PostAction = 
    AddPostAction | 
    AddPostSuccessAction |
    AddPostFailAction |
    DeletePostAction |
    DeletePostSuccessAction |
    DeletePostFailAction |
    GetPostsAction |
    GetPostsSuccessAction |
    GetPostsFailAction;