import React from 'react';
import './TeamContainer.scss';

const managers = [
  {
    name: 'Guerino',
    position: 'Diretor',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.`,
    image: 'http://itsthe.space/codepen/samuel.jpg',
  },
  {
    name: 'Rita',
    position: 'Diretora',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.`,
    image: 'http://itsthe.space/codepen/samuel.jpg',
  },
  {
    name: 'Maria',
    position: 'Diretora',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.`,
    image: 'http://itsthe.space/codepen/samuel.jpg',
  },
  {
    name: 'Salete',
    position: 'Administradora',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.`,
    image: 'http://itsthe.space/codepen/samuel.jpg',
  },
];

const agents = [
  {
    name: 'Armando',
    src: 'http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    phone: '999123123',
  },
  {
    name: 'Armando',
    src: 'http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    phone: '999123123',
  },
  {
    name: 'Armando',
    src: 'http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    phone: '999123123',
  },
  {
    name: 'Armando',
    src: 'http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    phone: '999123123',
  },
];

const generateStyle = (src) => {
  const style = {
    background: `url(${src})`,
    height: '200px',
    width: '200px',
    backgroundSize: 'cover',
    borderRadius: '60%',
  };

  return style;
};

const TeamContainer = () => (
  <>
    <div>
      {managers.map((person, i) => {
        const styles = generateStyle(person.image);
        return i % 2 ? (
          <div className="c_50_50 c_50_50_first sm-shadow">
            <div className="c_50_50_image">
              <div className="profile">
                <div style={styles} />
              </div>
            </div>
            <div className="c_50_50_content">
              <div className="c_50_50_content_info">
                <h2 className="c_50_50_content_info--heading">{person.name}</h2>
                <h2 className="c_50_50_content_info--subtitle">
                  {person.position}
                </h2>
                <p className="c_50_50_content_info--body">{person.about}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="c_50_50 c_50_50_first sm-shadow">
            <div className="c_50_50_content">
              <div className="c_50_50_content_info">
                <h2 className="c_50_50_content_info--heading">{person.name}</h2>
                <h2 className="c_50_50_content_info--subtitle">
                  {person.position}
                </h2>
                <p className="c_50_50_content_info--body">{person.about}</p>
              </div>
            </div>
            <div className="c_50_50_image">
              <div className="profile prof-right">
                <div style={styles} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <section className="cf team-container">
      <h1 className="team-h1">Nossos corretores</h1>
      {agents.map((ag) => (
        <div className="team-member">
          <img className="team-photo" src={ag.src} alt="agent" />
          <h3>{ag.name}</h3>
          <span>{ag.about}</span>
          <span>{ag.phone}</span>
        </div>
      ))}
    </section>
  </>
);

export default TeamContainer;
