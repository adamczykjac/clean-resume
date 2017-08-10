import { createContainer } from 'meteor/react-meteor-data';
import React               from 'react';
import connectField        from 'uniforms/connectField';
import Dropzone            from 'react-dropzone';
import Images              from '../../api/images/images';

class ImageField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: 'idle'
    }
  }

  getImageLink() {
    var link = ''
    const imgCursor = Images.findOne({ _id: this.props.value })
    if(imgCursor) link = imgCursor.link();
    return link
  }

  onDrop(files, fieldContext) {
    Images.insert({
      file: files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
      onStart: function () {
        console.log("Uploading...");
        fieldContext.setState({
          uploadStatus: 'uploading'
        });
      },
      onUploaded: function (error, file) {
        if (error) {
          console.log('Error during upload: ' + error);
          fieldContext.setState({
            uploadStatus: 'failed'
          });
        } else {
          console.log('File "' + file.name + '" successfully uploaded');
          fieldContext.props.onChange(file._id);
          fieldContext.setState({
            uploadStatus: 'uploaded'
          });
        }
      }
    })
  }

  render() {
    let dropzoneRef;
    let lastTokenCapitalized = (str) => {
      // form field from schema may utilize dot notation
      let fieldNameTokens = str.split('.')
      let lastToken = fieldNameTokens[fieldNameTokens.length - 1];
      return lastToken.charAt(0).toUpperCase() + lastToken.slice(1);
    }

    return (
      <section>
        <div>{ lastTokenCapitalized(this.props.name) }</div>
        <div>
          <Dropzone ref={(node) => { dropzoneRef = node; }}
            onDrop={ (files) => this.onDrop(files, this) }>
            { this.state.uploadStatus == 'idle' &&
              <p>Drop picture or click here to choose it.</p>
            }
            { this.state.uploadStatus == 'uploading' &&
              <p>Uploading...</p>
            }
            { this.state.uploadStatus == 'uploaded' &&
                !this.props.loading &&
                  <img src={ this.getImageLink() } />
            }
          </Dropzone>
        </div>
      </section>
    );
  }
};

export default ImageFieldContainer = createContainer(() => {
  var handle = Meteor.subscribe('files.images.all');
  var loading = !handle.ready()
  var images = Images.find().fetch()
  return { loading };
}, connectField(ImageField));
