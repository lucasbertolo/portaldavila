/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import { db } from '../Helpers/ApiFetch';

class PropertyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      url: '',
    };
  }

  handleChange = (ev) => {
    this.setState({ success: false, url: '' });
  }

  // Perform the upload
  handleUpload = (ev) => {
    ev.preventDefault();
    const file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    const fileParts = this.uploadInput.files[0].name.split('.');
    const name = fileParts[0];
    const type = fileParts[1];

    console.log('Preparing the upload');
    db.post('/sign_s3', {
      fileName: name,
      fileType: type,
    })
      .then((response) => {
        const { returnData } = response.data.data;
        const { signedRequest } = returnData;
        const { url } = returnData;
        this.setState({ url });
        console.log(`Recieved a signed request ${signedRequest}`);
        // Put the fileType in the headers for the upload
        const options = {
          headers: {
            'Content-Type': type,
            'x-amz-acl': 'authenticated-read',
          },
        };
        axios.put(signedRequest, file, options)
          .then((result) => {
            console.log('Response from s3');
            this.setState({ success: true });
          })
          .catch((error) => {
            alert(`ERROR ${error}`);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br />
      </div>
    );
    return (
      <div className="App">
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? <SuccessMessage /> : null }
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
          <br />
          <button onClick={this.handleUpload}>UPLOAD</button>
        </center>
      </div>
    );
  }
}

export default PropertyPhotos;
