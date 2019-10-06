/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// import { db } from '../Helpers/ApiFetch';
import DisplayImage from '../Photos/DisplayImage';

import { Button } from '../Common/FormComponents';

class PropertyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   success: false,
      //   url: '',
      message: '',
      photos: [],
    };
  }

  forwardData = (e) => {
    e.preventDefault();
    this.props.handleComponent('images', this.state.photos);
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { photos } = this.state;

    photos[Number(e.target.id)].alt = value;

    this.setState((prevState) => ({
      ...prevState,
      photos,
    }));
  };

  //   handleChange = () => {
  //     this.setState({
  //     //   success: false,
  //       // url: ''
  //     });
  //   }

  handleUpload = (ev) => {
    ev.preventDefault();

    const file = this.uploadInput.files[0];
    const maxSize = file.size / 1024 / 1024;

    // const fileParts = this.uploadInput.files[0].name.split('.');
    // const name = fileParts[0];
    // const type = fileParts[1];
    if (maxSize > 10) {
      this.setState({ message: 'Imagem muito grande, máximo de 10mb permitido' });
    } else {
      // db.post('/sign_s3', {
      //   fileName: name,
      //   fileType: type,
      // })
      //   .then((response) => {
      //     const { returnData } = response.data;
      //     const { signedRequest } = returnData;
      //     const { url } = returnData;
      //     const { photos } = this.state;


      //     photos.push({ src: url });
      //     this.setState({
      //       url,
      //       photos,
      //     });

      //     const options = {
      //       headers: {
      //         'Content-Type': type,
      //         'x-amz-acl': 'authenticated-read',
      //       },
      //     };
      //     axios.put(signedRequest, file, options)
      //       .then(() => {
      //         this.setState({
      //           success: true,
      //         });
      //       })
      //       .catch((error) => {
      //         this.setState({ message: error });
      //       });
      //   })
      //   .catch((error) => {
      //     // eslint-disable-next-line no-console
      //     console.log(error);
      //   });


      // MOCK
      axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
          const url = res.data.message;
          const { photos } = this.state;
          photos.push({ src: url });

          this.setState({
            photos,
          });
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }


  render() {
    // const SuccessMessage = () => (
    //   <div style={{ padding: 50 }}>
    //     <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
    //     <a href={this.state.url}>Access the file here</a>
    //     <br />
    //   </div>
    // );
    const { message, photos } = this.state;

    return (
      <div>
        <DisplayImage
          photos={photos}
          handleChange={this.handleChange}
        />

        <div className="wrapper-upload">
          {/* {success ? <SuccessMessage /> : null } */}
          <div className="file-upload">
            <input
              onChange={this.handleUpload}
              ref={(ref) => { this.uploadInput = ref; }}
              type="file"
            />
            <FontAwesomeIcon
              icon={faArrowUp}
            />
            <br />
          </div>

          <Button text="Enviar" action={this.forwardData} />

        </div>
        {message}

      </div>
    );
  }
}

export default PropertyPhotos;
