import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';

export default class Footer extends Component {  
  static styles() {
    return `
      html, body {
        margin: 1em 0.8em 0 0;
        padding: 0;
        font-family: "MontLt";
      }

      a, a:visited, a:active {
        font-family: "MontRgl";
        color: #EB5757;
      }

      a:hover {
        color: #EB5757;
        text-decoration: none;
      }

      p {
        text-align: justify;
        text-justify: inter-word;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'MontBld', "Helvetica Neue", Helvetica, Arial, sans-serif;
        letter-spacing: normal !important;
        text-transform: uppercase;
      }

      h5 {
        letter-spacing: normal !important;
      }

      .table > tbody > tr > td {
        line-height: normal;
        vertical-align: inherit;
        border-top: 0;
      }

      td {
        padding: 0.4em 0.5em;
      }

      tr:first-child>td {
        margin-top: 0;
        padding-top: 0;
      }

      .contact {
        position: relative;
        left: -4px;
      }

      .contact td:first-child {
        text-transform: uppercase;
        float: right;
        font-family: 'MontBld';
        font-size: 0.8em;
        vertical-align: text-bottom;
        margin-top: 0.28em;
      }

      .social {
        position: relative;
        left: 11px;
      }

      .social td:first-child {
        float: right;
        font-size: 1.5em;
      }

      .social td {
        vertical-align: middle;
        padding: 0.1em 0.375em;
      }

      h3 {
        padding-bottom: 1em !important;
      }

      h4, h5 {
        padding-bottom: 0.5em !important;
      }

      *[class^='flaticon-'].big {
        color: #EB5757;
      }

      *[class^='flaticon-'].big:before {
        font-size: 3.5em;
        margin-left: 0;
      }

      .col-xs-15,
      .col-sm-15,
      .col-md-15,
      .col-lg-15 {
        position: relative;
        min-height: 1px;
        padding-right: 5px;
        padding-left: 5px;
      }

      .col-xs-15 {
        width: 20%;
        float: left;
      }

      figure, figure figcaption {
        text-align: center;
      }

      figure span[class^="flaticon-"], figure span[class*=" flaticon-"] {
        vertical-align: top;
        display: inline-block;
        float: none;
        padding-right: 0
      }

      footer {
        text-align: center;
        font-size: 1em;
        margin-bottom: 0;
        padding: 0;
      }

      footer a.regular-text {
        color: inherit;
        font-family: 'MontRgl';
      }

      *, *:before, *:after {box-sizing:  border-box !important;}

      .content.row {
        -webkit-columns: 0 0;
                  /* This is the strange way to define the number of columns:
                     50% = 2 columns, 33% = 3 columns 25% = 4 columns */
        -webkit-column-gap: 30px;
        width: 50%;
        height: 1276px;
      }

      .menu-category {
        display: inline-block;
        padding: 1em 1.5em;
        width:  100%;
      }

      /* Header */
      .main-lead {
        color: #EB5757;
        margin: 0;
        letter-spacing: normal;
      }

      .sub-lead {
        font-family: 'MontLt';
        letter-spacing: 0.2em;
        color: #6b6d70;
        margin: 0.3em 0 0 0;
        text-transform: uppercase;
        font-size: 0.9em
      }

      .avatar {
        margin: 0;
        width: 6em;
        float: left;
      }

      /* Skills */
      #skills .list-group-item {
        border: 0;
        padding: 0.4em 0.5em 0.4em 0;
        background-color: transparent;
      }

      #skills .list-group-item .skill-caption {
        padding: 0;
      }

      /* Common Awards & Certifications section */

      #awards [class^="flaticon-"], #awards [class*=" flaticon-"],
      #certifications [class^="flaticon-"], #certifications [class*=" flaticon-"] {
        float: left;
      }

      #awards ul, #certifications ul {
        list-style: none;
        padding: 0;
      }

      #awards li, #certifications li {
        padding-bottom: 1em;
      }

      #awards li:last-child, #certifications li:last-child {
        padding-bottom: 0;
      }

      #awards .award-content, #certifications .certification-content {
        padding: 10px 0 0 80px;
      }

      #awards h4, #certifications h4 {
        margin-bottom: 20px !important;
      }

      /* Common Skills & Languages */

      .progress {
        background: transparent;
        border: 1px solid #aaa;
        border-radius: 0px;
        height: 13px;
        margin-top: 3px;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
        padding: 0;
      }

      .progress-bar-custom {
        background: rgba(66, 139, 202, 0);
        border: 1px solid #EB5757;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
      }

      /* Language section */
      #languages > [class*=' col-'] {
        padding: 15px;
      }

      #languages .lang-wrapper {
        position: relative;
      }

      #languages .lang-label-wrapper {
        position: absolute;
        top: 34%;
        left: 15%;
        height: 102px;
        width: 102px;
      }

      #languages .lang-label-wrapper label{
        text-transform: uppercase;
        text-align: center;
        font-size: 1em;
      }

      #languages .lang-label-wrapper label > span{
        display: block;
      }

      #languages svg #circular-progress-bar use {
        fill: #EB5757;
      }

      footer {
        text-align: center;
        color: #aaa;
        font-size: 0.8em;
        margin-bottom: 20px;
      }
    `
  }

  render() {
    return (
      <InlineCss stylesheet={ Footer.styles() }>
        <footer>
          <hr />
          &copy; Clean Resume, 2016 - Icon credits: <a href="http://flaticon.com" target="_blank">flaticon.com</a>
        </footer>
      </InlineCss>
    );
  }
};
