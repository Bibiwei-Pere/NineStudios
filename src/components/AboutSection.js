import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {    
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .about__img {     
    img {      
      object-fit: contain;
}
      }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img
              src="https://github.com/Adrenaline9/NineStudios/blob/main/src/assets/images/image2.png?raw=true"
              alt="NineStudios"
            />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Who are we
            </ParagraphText>
            <SectionTitle className="about__title">
              Capturing life as it happens
            </SectionTitle>
            <ParagraphText className="about__desc">
              “NineStudio®” is not just a studio but also an escape from reality
              through photography.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
