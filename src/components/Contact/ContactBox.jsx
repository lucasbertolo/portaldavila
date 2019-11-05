import React from 'react';
import { DocumentIcon, ContactIcon } from '../Common/Icons';
import Maps from '../Common/Maps';
import './ContactBox.scss';

const ContactBox = () => (
  <div className="info-box">
    <Maps />

    <div className="box-contact-container">
      <div className="docs-wrapper">
        <span className="box-document-icon sm-shadow">
          <DocumentIcon />
        </span>
      </div>
      <div className="contact-wrapper">
        <span className="box-contact-icon sm-shadow">
          <ContactIcon />
        </span>
      </div>
    </div>
  </div>
);

export default ContactBox;
