import express from "express";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send('VIDEOS'));
videoRouter.get(routes.upload, (req, res) => res.send('UPLOAD'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('VIDEOS_DETAIL'));
videoRouter.get(routes.editVideo, (req, res) => res.send('EDIT_VIDEO'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('DELETE_VIDEO'));

export default videoRouter;