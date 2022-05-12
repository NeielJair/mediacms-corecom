Originally in MediaCMS, once you provided a subtitle for a video, it stores it locally and in DB it stores the filename in the table `file_subtitle`
- See [files/views.py@79](https://github.com/mediacms-io/mediacms/blob/1ddfae7c956e6d3c70a026847a5606ccf8638d10/files/views.py#L79)

Frontend video player is defined at `frontend/packages/player/dist/` and is used at `frontend/src/static/js/components/video-player`.
It is based on [video.js](https://www.npmjs.com/package/video.js?activeTab=readme)
