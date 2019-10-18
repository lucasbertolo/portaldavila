/* eslint-disable array-callback-return */
import React, { Component } from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { db } from '../Helpers/ApiFetch';

// import { db } from '../Helpers/ApiFetch';
import DisplayImage from './DisplayImage';

class PropertyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // success: false,
      message: props.message || '',
      photos: props.data || [],
    };
  }

  componentWillUnmount() {
    const { handleComponent } = this.props;
    const { photos } = this.state;

    handleComponent('images', photos);
  }

  // TODO - IF IS EDIT STAGE - DELETE IN DB
  removePhoto = (e) => {
    const { photos } = this.state;

    if (Number(e.target.id)) {
      db.delete(`/property/photos/${e.target.id}`);
    }

    const newList = photos.filter((item) => {
      if (item.id) {
        return item.id !== Number(e.target.id);
      }
      return item.url !== e.target.id;
    });

    this.setState({
      photos: newList,
    });
  }

  setCover = (e) => {
    const { photos } = this.state;

    // TO DO - SET COVER ON UPDATE

    // if (Number(e.target.id)) {
    //   db.post(`/property/cover/${e.target.id}`);
    // }

    // eslint-disable-next-line no-param-reassign
    photos.map((el) => { el.active = false; });

    const index = photos.findIndex((x) => x.url === e.target.id);
    photos[index].active = true;

    this.setState({
      photos,
    });
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

  handleUpload = (ev) => {
    ev.preventDefault();

    const file = this.uploadInput.files[0];
    const maxSize = file.size / 1024 / 1024;
    const { photos } = this.state;

    // const fileParts = this.uploadInput.files[0].name.split('.');
    // const name = fileParts[0];
    // const type = fileParts[1];
    if (maxSize > 5 || photos.length > 5) {
      if (maxSize > 5) {
        this.setState({ message: 'Imagem muito grande, máximo de 10mb permitido' });
      } else {
        this.setState({ message: 'Máximo de 6 imagens permitidos' });
      }
    } else {
      // // AWS
      // db.post('/sign_s3', {
      //   fileName: name,
      //   fileType: type,
      // })
      //   .then((response) => {
      //     const { returnData } = response.data;
      //     const { signedRequest } = returnData;
      //     const { url } = returnData;


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
          // const { photos } = this.state;
          photos.push({ url });

          this.setState({
            photos,
          });
        })

        // TO DO
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }


  render() {
    const { message, photos } = this.state;

    return (
      <div>
        <DisplayImage
          photos={photos}
          handleChange={this.handleChange}
          removePhoto={this.removePhoto}
          setCover={this.setCover}
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
              icon={faUpload}
            />
            <br />
          </div>

        </div>

        {message}

      </div>
    );
  }
}

export default PropertyPhotos;
