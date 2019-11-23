import React from 'react';
import './UserCard.scss';

const UserCard = () => (
  <div className="user-card">
    <table>
      <tbody>
        <tr>
          <td>
            <div className="name">Terry Wilson</div>
          </td>
        </tr>
        {' '}
        <tr>
          <td className="details-td">
            <div className="label">Phone</div>
            {' '}
:
            {' '}
            <div className="phone">+91 9876 543 210</div>
            <br />
            <div className="label">Mobile</div>
            {' '}
:
            {' '}
            <div className="mobile">+91 1234 567 890</div>
            <br />
            <div className="label">Email</div>
            {' '}
:
            {' '}
            <div className="email">user@domain.com</div>
          </td>
          <td className="description-td">
            <div className="description" spellCheck="false">This is a Short Description of the Client</div>

            <input type="button" value="Update" className="update" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default UserCard;
