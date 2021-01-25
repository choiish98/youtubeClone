//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USER_DETAIL ="/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//videos
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    upload: UPLOAD,
    videoDetail: VIDEOS_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;