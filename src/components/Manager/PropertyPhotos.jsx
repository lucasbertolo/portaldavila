/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-promise-reject-errors */

import React, { Component } from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import db from '../Helpers/ApiFetch';

import DisplayImage from './DisplayImage';

import { OverlayLoading } from '../Helpers/Loading';
import config from '../../content/config';
import Toast from '../Helpers/Toast';


class PropertyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.data || [],
      isLoading: false,
      toast: false,
      msg: '',
      status: 'info',
    };
  }

  onSubmit = () => {
    const { handleComponent } = this.props;
    const { photos } = this.state;

    if (photos.length === 0) {
      return Promise.reject('É necessário adicionar ao menos uma foto');
    }
    const coverCheck = photos.filter((item) => item.iscover === true);
    if (coverCheck.length === 0) {
      return Promise.reject('Selecione ao menos uma foto como capa');
    }

    handleComponent('images', photos);
    return Promise.resolve();
  }

  removePhoto = (e) => {
    const { photos } = this.state;

    // eslint-disable-next-line no-alert
    const result = confirm('Want to delete?');

    if (result) {
      if (Number(e.target.id)) {
        db.delete(`/property/photos/${e.target.id}`)
          .then(() => this.setState({
            msg: 'Excluída com sucesso',
            toast: true,
            status: 'success',
          }))
          .catch(() => {
            this.setState({
              msg: 'Erro ao excluir',
              toast: true,
              status: 'error',
            });
          });
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
  }

  setCover = (e) => {
    const { photos } = this.state;
    // eslint-disable-next-line no-param-reassign
    photos.map((el) => { el.iscover = false; });

    const index = photos.findIndex((x) => x.url === e.target.id);
    photos[index].iscover = true;

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

    this.setState({ isLoading: true });
    if (file) {
      const maxSize = file.size / 1024 / 1024;
      const { photos } = this.state;
      const fileParts = this.uploadInput.files[0].name.split('.');
      const name = fileParts[0];
      const type = fileParts[1];

      if (maxSize > 5 || photos.length > 4) {
        if (maxSize > 5) {
          this.setState({
            msg: 'Tamanho máximo permitido é de 5mb',
            toast: true,
            status: 'error',
          });
        } else {
          this.setState({
            msg: 'Só é permitido adicionar 5 fotos por imóvel',
            toast: true,
            status: 'error',
          });
        }
      } else {
        db.post('/sign_s3', {
          fileName: name,
          fileType: type,
        })
          .then((response) => {
            const { returnData } = response.data;
            const { signedRequest } = returnData;
            const { url } = returnData;

            const options = {
              headers: {
                'Content-Type': type,
                'x-amz-acl': 'authenticated-read',
              },
            };
            axios.put(signedRequest, file, options)
              .then((item) => {
                const cdn = `${config.cdn}${name}`;

                photos.push({ url: item.config.url, fileName: name, cdn });
                this.setState({
                  url,
                  photos,
                  success: true,
                  isLoading: false,
                });
              })
              .catch(() => {
                this.setState({
                  isLoading: false,
                  toast: true,
                  msg: 'Erro ao adicionar foto',
                  status: 'error',
                });
              });
          })
          .catch(() => {
            this.setState({
              isLoading: false,
              toast: true,
              msg: 'Erro ao adicionar foto',
              status: 'error',
            });
          });
      }
    }
  }

  closeToast = () => {
    this.setState({
      toast: false,
    });
  }

  render() {
    const {
      photos, isLoading, toast, msg, status,
    } = this.state;
    const { bindSubmitForm } = this.props;

    bindSubmitForm(this.onSubmit);

    return (
      <>
        { isLoading && <OverlayLoading />}
        <Toast
          open={toast}
          handleClose={this.closeToast}
          status={status}
          msg={msg}
        />
        <DisplayImage
          photos={photos}
          handleChange={this.handleChange}
          removePhoto={this.removePhoto}
          setCover={this.setCover}
        />

        <div className="wrapper-upload">
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
      </>
    );
  }
}

export default PropertyPhotos;
