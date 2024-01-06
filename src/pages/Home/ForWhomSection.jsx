import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Heading from "./Heading";
import Button from "../../ui/Button";

import sectionImg from "/src/assets/services/forWhom-img.png";
import businessIcon from "/src/assets/services/business.svg";
import educationIcon from "/src/assets/services/education.svg";
import supportIcon from "/src/assets/services/support.svg";
import contentIcon from "/src/assets/services/content.svg";
import freelancersIcon from "/src/assets/services/freelancers.svg";
import specializedIcon from "/src/assets/services/specialized.svg";

const StyledForWhomSection = styled.section`
  height: 100vh;
  border-bottom: 1px solid #fff;
  background: no-repeat 0% 50%/100% url("/forWhom-bg.jpg");

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionContent = styled.div`
  width: 78%;
  height: 45rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const SectionImage = styled.div`
  grid-column: 2/3;
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  button {
    width: 80%;
    transform: translateX(2rem);
  }
`;

const StyledItem = styled.div`
  grid-column: ${(props) => `${props.gCol || "1/1"}`};
  grid-row: ${(props) => `${props.gRow || "1/1"}`};

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ItemImg = styled.div`
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.21);
  background: #1e313b;

  img {
    width: 4rem;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemHeading = styled.div`
  padding: 1rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
`;

const ItemList = styled.ul`
  padding-left: 1rem;
  list-style-type: disc;
`;

const ItemLi = styled.li`
  color: var(--color-grey-200);
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: left;
`;

function ForWhomSection() {
  const navigate = useNavigate();

  return (
    <StyledForWhomSection id="forWhomSection">
      <Heading boldText="service suitable for">Who is the</Heading>

      <StyledSectionContent>
        <SectionImage>
          <img src={sectionImg} alt="Section image" />
          <Button size="large" onClick={() => navigate("/signup")}>
            Begin using
          </Button>
        </SectionImage>

        <StyledItem>
          <ItemImg>
            <img src={businessIcon} alt="Business icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Business and Marketing</ItemHeading>
            <ItemList>
              <ItemLi>Business Owners</ItemLi>
              <ItemLi>Managers</ItemLi>
              <ItemLi>Marketers</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gCol="3/-1">
          <ItemImg>
            <img src={educationIcon} alt="Education icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Education and Training</ItemHeading>
            <ItemList>
              <ItemLi>Teachers and Educational Institutions</ItemLi>
              <ItemLi>Training Professionals</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gRow="3/4">
          <ItemImg>
            <img src={supportIcon} alt="Support icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>IT and Technical Support</ItemHeading>
            <ItemList>
              <ItemLi>Traffic Arbitrage</ItemLi>
              <ItemLi>Developers and Technical Experts</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gCol="3/-1" gRow="3/4">
          <ItemImg>
            <img src={contentIcon} alt="Content icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Content Management</ItemHeading>
            <ItemList>
              <ItemLi>Blog Owners and Content Managers</ItemLi>
              <ItemLi>Creative Personalities</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gRow="5/-1">
          <ItemImg>
            <img src={freelancersIcon} alt="Freelancers icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Freelancers</ItemHeading>
            <ItemList>
              <ItemLi>Self-Employed Individuals</ItemLi>
              <ItemLi>
                People with Individual Entrepreneurial Activity (IEA)
              </ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gCol="3/4" gRow="5/-1">
          <ItemImg>
            <img src={specializedIcon} alt="Specialized icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Specialized Niches</ItemHeading>
            <ItemList>
              <ItemLi>HR, Financial Analysts</ItemLi>
              <ItemLi>Media Agencies, Event Organizers</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
      </StyledSectionContent>
    </StyledForWhomSection>
  );
}

export default ForWhomSection;
