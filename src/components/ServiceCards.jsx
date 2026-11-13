import { theme } from "../styles/theme";
import styled from "styled-components";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;
const compactQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile}`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 16px;
  margin-top: 2vw;
  @media ${compactQueries} {
    flex-direction: column;
  }
  @media ${tabletQueries} {
    gap: 14px;
    margin-top: 28px;
  }
  @media ${theme.mediaQueries.mobile} {
    gap: 12px;
    margin-top: 20px;
  }
`;
const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.8vw 1vw;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  background: #fff;
  gap: 0;
  @media ${compactQueries} {
    flex: none;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    align-items: start;
    text-align: left;
  }
  @media ${tabletQueries} {
    column-gap: 20px;
    padding: 18px 22px;
  }
  @media ${theme.mediaQueries.mobile} {
    column-gap: 16px;
    padding: 14px 16px;
    border-radius: 12px;
  }
`;
const CardIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(p) => p.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  @media ${compactQueries} {
    grid-column: 1;
    grid-row: 1 / span 3;
    align-self: center;
    margin-bottom: 0;
    svg {
      width: 48%;
      height: 48%;
    }
  }
  @media ${tabletQueries} {
    width: clamp(48px, 6vw, 64px);
    height: clamp(48px, 6vw, 64px);
  }
  @media ${theme.mediaQueries.mobile} {
    width: clamp(46px, 13.5vw, 56px);
    height: clamp(46px, 13.5vw, 56px);
  }
`;
const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin: 0 0 7px 0;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 1;
    margin-bottom: 6px;
  }
  @media ${tabletQueries} {
    font-size: clamp(0.9375rem, 0.6rem + 1vw, 1.125rem);
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.9375rem, 0.85rem + 0.5vw, 1.0625rem);
  }
`;
const CardDivider = styled.div`
  width: 32px;
  height: 3px;
  background-color: #e91e63;
  border-radius: 2px;
  margin-bottom: 14px;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 2;
    margin-bottom: 10px;
  }
`;
const CardDesc = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: #777;
  margin: 0;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 3;
  }
  @media ${tabletQueries} {
    font-size: clamp(0.8125rem, 0.45rem + 0.85vw, 0.9rem);
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem);
  }
`;

const ServiceCard = ({ cards }) => {
  return (
    <CardContainer>
      {cards.map((card) => (
        <Card key={card.title}>
          <CardIconWrapper bg={card.bg}>{card.icon}</CardIconWrapper>
          <CardTitle>{card.title}</CardTitle>
          <CardDivider />
          <CardDesc>{card.desc}</CardDesc>
        </Card>
      ))}
    </CardContainer>
  );
};

export default ServiceCard;
