import React from 'react';

import SocialFooter from '../Footer/SocialFooter';
import './TeamContainer.scss';

const managers = [
  {
    name: 'Guerino',
    position: 'Diretor Geral',
    about: 'guerino@remaxportal.com.br',
    image: 'https://ik.imagekit.io/2agnc6wu5cbty/images__2__VEH99b_3UN.jpeg',
  },
  {
    name: 'Rita',
    position: 'Diretora',
    about: 'rita@remaxportal.com.br',
    image: 'https://ik.imagekit.io/2agnc6wu5cbty/woman3_1idKIgSQvU.jpeg',
  },
  {
    name: 'Maria',
    position: 'Diretora',
    about: 'mariasocorro@remaxportalcom.br',
    image: 'https://ik.imagekit.io/2agnc6wu5cbty/women_1yPyQWAwj.jpeg',
  },
];

const agents = [
  {
    name: 'Armando',
    src: 'https://ik.imagekit.io/2agnc6wu5cbty/download_VHlXa-wxn.jpeg',
    phone: '(19) 993311233',
  },
  {
    name: 'Deivid',
    src: 'https://ik.imagekit.io/2agnc6wu5cbty/images__1__vn-myWPV6.jpeg',
    phone: '(19) 981721435',
  },
  {
    name: 'Joana',
    src: 'https://ik.imagekit.io/2agnc6wu5cbty/images__1__E5_WmAvFY.jpeg',
    phone: '(19) 99676243',
  },
  {
    name: 'Carlos',
    src: 'https://ik.imagekit.io/2agnc6wu5cbty/images_tCGQTlHenk.jpeg',
    phone: '(19) 999411238',
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
          <span>{ag.phone}</span>
        </div>
      ))}
    </section>
    <SocialFooter />
  </>
);

export default TeamContainer;
