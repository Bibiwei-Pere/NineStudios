import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
// team member images

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="team__title">
              The best team available
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img="https://raw.githubusercontent.com/Adrenaline9/P1/main/src/assets/images/image3.jpg"
              name="Stacy Lincoln"
              title="CEO"
            />
            <TeamMemberItem
              img="https://raw.githubusercontent.com/Adrenaline9/P1/main/src/assets/images/image5.jpg"
              name="Jeremy Bibiwei"
              title="Photo Editor"
            />
            <TeamMemberItem
              img="https://raw.githubusercontent.com/Adrenaline9/P1/main/src/assets/images/image6.jpg"
              name="Manuel Etim"
              title="Photographer"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
