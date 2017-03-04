import React, { Component, PropTypes } from 'react';

export default class CircularProgressBar extends Component {
  render() {
    return (
      <svg width="101" height="101" viewBox="0 0 102 102" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>CircularProgressBar</title>
        <g id="Canvas" transform="translate(-4199 -165)">
          <g id="circular-progress-bar">
            <g id="Ellipse">
              <use xlinkHref={"#path_stroke_" + this.props.id } transform={"translate(" + this.progress(this.props.level).translate_x + " 166)"} fill="#EB5757" />
            </g>
          </g>
        </g>
        <defs>
          <path id={"path_stroke_" + this.props.id } d={ this.progress(this.props.level).stroke }/>
        </defs>
      </svg>
    );
  }

  progress(level) {
    let progressMap = {
      // 1/8 -> 12.5%
      1: {
        translate_x: 4249,
        stroke: "M 0 -1C -0.552285 -1 -1 -0.552285 -1 0C -1 0.552285 -0.552285 1 0 1L 0 -1ZM 34.5059 15.21C 34.898 15.5989 35.5311 15.5963 35.9201 15.2042C 36.309 14.8121 36.3064 14.179 35.9143 13.79L 34.5059 15.21ZM 0 1C 13.459 1 25.649 6.42502 34.5059 15.21L 35.9143 13.79C 26.6981 4.64864 14.0078 -1 0 -1L 0 1Z"
      },
      // 2/8 -> 25%
      2: {
        translate_x: 4249,
        stroke: "M 0 -1C -0.552285 -1 -1 -0.552285 -1 0C -1 0.552285 -0.552285 1 0 1L 0 -1ZM 35.2101 14.5L 35.9143 13.79L 35.9143 13.79L 35.2101 14.5ZM 49 50C 49 50.5523 49.4477 51 50 51C 50.5523 51 51 50.5523 51 50L 49 50ZM 0 1C 13.459 1 25.649 6.42502 34.5059 15.21L 35.9143 13.79C 26.6981 4.64864 14.0078 -1 0 -1L 0 1ZM 34.5059 15.21C 43.4579 24.0893 49 36.3965 49 50L 51 50C 51 35.8418 45.2294 23.0295 35.9143 13.79L 34.5059 15.21Z"
      },
      // 3/8 -> 37.5%
      3: {
        translate_x: 4249,
        stroke: "M 34.5059 84.79C 34.1138 85.1789 34.1112 85.8121 34.5001 86.2042C 34.889 86.5963 35.5222 86.5989 35.9143 86.21L 34.5059 84.79ZM 0 -1C -0.552285 -1 -1 -0.552285 -1 0C -1 0.552285 -0.552285 1 0 1L 0 -1ZM 35.2101 14.5L 35.9143 13.79L 35.9143 13.79L 35.2101 14.5ZM 49 50C 49 63.6035 43.4579 75.9107 34.5059 84.79L 35.9143 86.21C 45.2294 76.9705 51 64.1582 51 50L 49 50ZM 0 1C 13.459 1 25.649 6.42502 34.5059 15.21L 35.9143 13.79C 26.6981 4.64864 14.0078 -1 0 -1L 0 1ZM 34.5059 15.21C 43.4579 24.0893 49 36.3965 49 50L 51 50C 51 35.8418 45.2294 23.0295 35.9143 13.79L 34.5059 15.21Z"
      },
      // 4/8 -> 50%
      4: {
        translate_x: 4249,
        stroke: "M 35.2101 85.5L 35.9143 86.21L 35.9143 86.21L 35.2101 85.5ZM 0 99C -0.552285 99 -1 99.4477 -1 100C -1 100.552 -0.552285 101 0 101L 0 99ZM 0 -1C -0.552285 -1 -1 -0.552285 -1 0C -1 0.552285 -0.552285 1 0 1L 0 -1ZM 35.2101 14.5L 35.9143 13.79L 35.9143 13.79L 35.2101 14.5ZM 49 50C 49 63.6035 43.4579 75.9107 34.5059 84.79L 35.9143 86.21C 45.2294 76.9705 51 64.1582 51 50L 49 50ZM 34.5059 84.79C 25.649 93.575 13.459 99 0 99L 0 101C 14.0078 101 26.6981 95.3514 35.9143 86.21L 34.5059 84.79ZM 0 1C 13.459 1 25.649 6.42502 34.5059 15.21L 35.9143 13.79C 26.6981 4.64864 14.0078 -1 0 -1L 0 1ZM 34.5059 15.21C 43.4579 24.0893 49 36.3965 49 50L 51 50C 51 35.8418 45.2294 23.0295 35.9143 13.79L 34.5059 15.21Z"
      },
      // 5/8 -> 62.5%
      5: {
        translate_x: 4214,
        stroke: "M 0.70422 84.79C 0.312108 84.4011 -0.321052 84.4037 -0.709982 84.7958C -1.09891 85.1879 -1.09633 85.8211 -0.70422 86.21L 0.70422 84.79ZM 70.4202 85.5L 71.1244 86.21L 71.1244 86.21L 70.4202 85.5ZM 35.2101 -1C 34.6578 -1 34.2101 -0.552285 34.2101 0C 34.2101 0.552285 34.6578 1 35.2101 1L 35.2101 -1ZM 70.4202 14.5L 71.1244 13.79L 71.1244 13.79L 70.4202 14.5ZM 35.2101 99C 21.7511 99 9.56107 93.575 0.70422 84.79L -0.70422 86.21C 8.51195 95.3514 21.2023 101 35.2101 101L 35.2101 99ZM 84.2101 50C 84.2101 63.6035 78.668 75.9107 69.716 84.79L 71.1244 86.21C 80.4395 76.9705 86.2101 64.1582 86.2101 50L 84.2101 50ZM 69.716 84.79C 60.8591 93.575 48.6691 99 35.2101 99L 35.2101 101C 49.2178 101 61.9082 95.3514 71.1244 86.21L 69.716 84.79ZM 35.2101 1C 48.6691 1 60.8591 6.42502 69.716 15.21L 71.1244 13.79C 61.9082 4.64864 49.2178 -1 35.2101 -1L 35.2101 1ZM 69.716 15.21C 78.668 24.0893 84.2101 36.3965 84.2101 50L 86.2101 50C 86.2101 35.8418 80.4395 23.0295 71.1244 13.79L 69.716 15.21Z"
      },
      // 6/8 -> 75%
      6: {
        translate_x: 4200,
        stroke: "M 14.7899 85.5L 14.0857 86.21L 14.0857 86.21L 14.7899 85.5ZM 1 50C 1 49.4477 0.552285 49 0 49C -0.552285 49 -1 49.4477 -1 50L 1 50ZM 85.2101 85.5L 85.9143 86.21L 85.9143 86.21L 85.2101 85.5ZM 50 -1C 49.4477 -1 49 -0.552285 49 0C 49 0.552285 49.4477 1 50 1L 50 -1ZM 85.2101 14.5L 84.5059 15.21L 84.5059 15.21L 85.2101 14.5ZM 50 99C 36.541 99 24.351 93.575 15.4941 84.79L 14.0857 86.21C 23.3019 95.3514 35.9922 101 50 101L 50 99ZM 15.4941 84.79C 6.54213 75.9107 1 63.6035 1 50L -1 50C -1 64.1582 4.77061 76.9705 14.0857 86.21L 15.4941 84.79ZM 99 50C 99 63.6035 93.4579 75.9107 84.5059 84.79L 85.9143 86.21C 95.2294 76.9705 101 64.1582 101 50L 99 50ZM 84.5059 84.79C 75.649 93.575 63.459 99 50 99L 50 101C 64.0078 101 76.6981 95.3514 85.9143 86.21L 84.5059 84.79ZM 50 1C 63.459 1 75.649 6.42502 84.5059 15.21L 85.9143 13.79C 76.6981 4.64864 64.0078 -1 50 -1L 50 1ZM 84.5059 15.21C 93.4579 24.0893 99 36.3965 99 50L 101 50C 101 35.8418 95.2294 23.0295 85.9143 13.79L 84.5059 15.21Z"
      },
      // 7/8 -> 87.5%
      7: {
        translate_x: 4200,
        stroke: "M 15.4941 15.21C 15.8862 14.8211 15.8888 14.1879 15.4999 13.7958C 15.111 13.4037 14.4778 13.4011 14.0857 13.79L 15.4941 15.21ZM 14.7899 85.5L 14.0857 86.21L 14.0857 86.21L 14.7899 85.5ZM 85.2101 85.5L 85.9143 86.21L 85.9143 86.21L 85.2101 85.5ZM 50 -1C 49.4477 -1 49 -0.552285 49 0C 49 0.552285 49.4477 1 50 1L 50 -1ZM 85.2101 14.5L 84.5059 15.21L 84.5059 15.21L 85.2101 14.5ZM 1 50C 1 36.3965 6.54213 24.0893 15.4941 15.21L 14.0857 13.79C 4.77061 23.0295 -1 35.8418 -1 50L 1 50ZM 50 99C 36.541 99 24.351 93.575 15.4941 84.79L 14.0857 86.21C 23.3019 95.3514 35.9922 101 50 101L 50 99ZM 15.4941 84.79C 6.54213 75.9107 1 63.6035 1 50L -1 50C -1 64.1582 4.77061 76.9705 14.0857 86.21L 15.4941 84.79ZM 99 50C 99 63.6035 93.4579 75.9107 84.5059 84.79L 85.9143 86.21C 95.2294 76.9705 101 64.1582 101 50L 99 50ZM 84.5059 84.79C 75.649 93.575 63.459 99 50 99L 50 101C 64.0078 101 76.6981 95.3514 85.9143 86.21L 84.5059 84.79ZM 50 1C 63.459 1 75.649 6.42502 84.5059 15.21L 85.9143 13.79C 76.6981 4.64864 64.0078 -1 50 -1L 50 1ZM 84.5059 15.21C 93.4579 24.0893 99 36.3965 99 50L 101 50C 101 35.8418 95.2294 23.0295 85.9143 13.79L 84.5059 15.21Z"
      },
      // 8/8 -> 100%
      8: {
        translate_x: 4200,
        stroke: "M 14.7899 14.5L 15.4941 15.21L 14.7899 14.5ZM 14.7899 85.5L 15.4941 84.79L 14.7899 85.5ZM 85.2101 85.5L 84.5059 84.79L 85.2101 85.5ZM 85.2101 14.5L 85.9143 13.79L 85.9143 13.79L 85.2101 14.5ZM 1 50C 1 36.3965 6.54213 24.0893 15.4941 15.21L 14.0857 13.79C 4.77061 23.0295 -1 35.8418 -1 50L 1 50ZM 15.4941 15.21C 24.351 6.42502 36.541 1 50 1L 50 -1C 35.9922 -1 23.3019 4.64864 14.0857 13.79L 15.4941 15.21ZM 50 99C 36.541 99 24.351 93.575 15.4941 84.79L 14.0857 86.21C 23.3019 95.3514 35.9922 101 50 101L 50 99ZM 15.4941 84.79C 6.54213 75.9107 1 63.6035 1 50L -1 50C -1 64.1582 4.77061 76.9705 14.0857 86.21L 15.4941 84.79ZM 99 50C 99 63.6035 93.4579 75.9107 84.5059 84.79L 85.9143 86.21C 95.2294 76.9705 101 64.1582 101 50L 99 50ZM 84.5059 84.79C 75.649 93.575 63.459 99 50 99L 50 101C 64.0078 101 76.6981 95.3514 85.9143 86.21L 84.5059 84.79ZM 50 1C 63.459 1 75.649 6.42502 84.5059 15.21L 85.9143 13.79C 76.6981 4.64864 64.0078 -1 50 -1L 50 1ZM 84.5059 15.21C 93.4579 24.0893 99 36.3965 99 50L 101 50C 101 35.8418 95.2294 23.0295 85.9143 13.79L 84.5059 15.21Z"
      }
    }

    return progressMap[level]
  }
}

CircularProgressBar.propTypes = {
  level: PropTypes.number.isRequired
};
