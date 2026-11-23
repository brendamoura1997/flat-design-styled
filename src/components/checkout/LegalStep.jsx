import styled from "styled-components";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import InfoIcon from "../../icons/InfoIcon";
import { theme } from "../../styles/theme";
import {
  LEGAL_TYPE,
  legalDocuments,
  legalLabels,
  legalNotices,
} from "../../utils/legalData";
import CheckoutButton from "./CheckoutButton";

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
`;
const Tabs = styled.div`
  display: flex;
  gap: 10px;

  @media ${theme.mediaQueries.smallMobile} {
    flex-direction: column;
  }
`;
const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1.5px solid
    ${({ $active }) =>
      $active
        ? `var(--ck-accent, ${theme.colors.primary.default})`
        : theme.colors.border.input};
  border-radius: 999px;
  background: ${({ $active }) =>
    $active
      ? `var(--ck-accent, ${theme.colors.primary.default})`
      : theme.colors.white};
  color: ${({ $active }) =>
    $active ? theme.colors.white : theme.colors.text.form};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;

  &:hover {
    background: ${({ $active }) =>
      $active
        ? `var(--ck-accent, ${theme.colors.primary.default})`
        : `var(--ck-hover-bg, ${theme.colors.secondary.second.soft})`};
  }

  &:focus-visible {
    outline: 2px solid var(--ck-accent, ${theme.colors.primary.default});
    outline-offset: 2px;
  }

  @media ${theme.mediaQueries.mobile} {
    flex: 1;
    padding: 8px 2px;
    font-size: 12.5px;
    gap: 6px;
  }
`;
const Doc = styled.div`
  max-height: 340px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid var(--ck-pix-border, #e3dcff);
  border-radius: 16px;
  background: var(--ck-confirm-panel, #f5f2ff);
  scrollbar-width: thin;
  scrollbar-color: var(--ck-pix-circle-small, #cec9fa) transparent;

  &:focus-visible {
    outline: 2px solid var(--ck-accent, ${theme.colors.primary.default});
    outline-offset: 2px;
  }

  @media ${theme.mediaQueries.mobile} {
    max-height: 52vh;
    padding: 12px;

    overflow-y: scroll;
  }
`;
const Notice = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--ck-pix-border, #e3dcff);
  border-radius: 12px;
  background: ${theme.colors.white};
  font-size: 13px;
  line-height: 1.4;
  color: ${theme.colors.text.form};

  svg {
    flex-shrink: 0;
  }
`;
const Section = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const Index = styled.span`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--ck-plan-icon, ${theme.colors.secondary.second.main});
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;
const SectionTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: ${theme.colors.text.form};
`;
const Paragraph = styled.p`
  font-size: 13px;
  line-height: 1.55;
  color: ${theme.colors.text.slate};
  hyphens: none;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ListItem = styled.li`
  position: relative;
  padding-left: 16px;
  font-size: 13px;
  line-height: 1.5;
  color: ${theme.colors.text.slate};

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ck-accent, ${theme.colors.primary.default});
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media ${theme.mediaQueries.mobile} {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
const Updated = styled.p`
  font-size: 12px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    text-align: center;
  }
`;
const BackButton = styled(CheckoutButton)`
  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    flex: none;
  }
`;

const LegalStep = ({ type, onSelect, onBack }) => {
  const sections = legalDocuments[type];

  return (
    <Wrapper>
      <Tabs role="tablist" aria-label={legalLabels.tabsAriaLabel}>
        {Object.values(LEGAL_TYPE).map((tabType) => {
          const active = tabType === type;

          return (
            <Tab
              key={tabType}
              type="button"
              role="tab"
              id={`legal-tab-${tabType}`}
              aria-selected={active}
              aria-controls="legal-panel"
              $active={active}
              onClick={() => onSelect(tabType)}
            >
              {legalLabels.tabs[tabType]}
            </Tab>
          );
        })}
      </Tabs>
      <Doc
        key={type}
        id="legal-panel"
        role="tabpanel"
        aria-labelledby={`legal-tab-${type}`}
        aria-label={legalLabels.scrollAriaLabel}
        tabIndex={0}
      >
        <Notice>
          <InfoIcon
            width={22}
            height={22}
            viewBox="0 0 24 24"
            color="none"
            stroke={theme.colors.text.form}
          />
          {legalNotices[type]}
        </Notice>
        {sections.map(({ title, paragraphs = [], items = [] }, index) => (
          <Section key={title}>
            <Index aria-hidden="true">{index + 1}</Index>
            <Body>
              <SectionTitle>{title}</SectionTitle>
              {paragraphs.map((text) => (
                <Paragraph key={text}>{text}</Paragraph>
              ))}
              {items.length > 0 && (
                <List>
                  {items.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              )}
            </Body>
          </Section>
        ))}
      </Doc>
      <Footer>
        <Updated>{legalLabels.updatedAt}</Updated>
        <BackButton
          size="medium"
          type="button"
          onClick={onBack}
          icon={
            <ChevronLeftIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.white}
            />
          }
        >
          {legalLabels.back}
        </BackButton>
      </Footer>
    </Wrapper>
  );
};

export default LegalStep;
