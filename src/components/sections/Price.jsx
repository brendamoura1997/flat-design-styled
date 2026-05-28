import styled, { keyframes } from "styled-components";
// import Bg from "../../assets/images/double-bubble-outline.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  position: relative;
  height: 120vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-family: "Nunito", "Segoe UI", sans-serif;
`;

const DotsGrid = styled.div`
  position: absolute;
  top: 48px;
  left: 40px;
  display: grid;
  grid-template-columns: repeat(7, 6px);
  gap: 9px;
  z-index: 0;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #e8002d;
    opacity: 0.35;
    display: block;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffeaed;
  color: #e8002d;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 999px;
  margin-bottom: 24px;

  svg {
    flex-shrink: 0;
  }
`;

const Headline = styled.h2`
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  color: #0d0d0d;
  line-height: 1.15;
  margin: 0 0 16px;

  span {
    color: #e8002d;
  }
`;

const Sub = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0 0 56px;
`;

const Cards = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 22px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1.5px solid ${({ featured }) => (featured ? "#c7b8f7" : "#ebebeb")};
  border-radius: 18px;
  padding: 24px 26px 22px;
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: ${({ featured }) =>
    featured
      ? "0 8px 32px rgba(138,99,255,0.10)"
      : "0 4px 16px rgba(0,0,0,0.05)"};
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: #e43d5d;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: 6px;
  white-space: nowrap;
`;

const IconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const PlanName = styled.h3`
  font-size: 17px;
  font-weight: 800;
  color: ${({ color }) => color};
  margin: 0 0 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  margin-bottom: 2px;
`;

const Currency = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #333;
  margin-bottom: 7px;
`;

const Amount = styled.span`
  font-size: 42px;
  font-weight: 900;
  color: #0d0d0d;
  line-height: 1;
`;

const Period = styled.span`
  font-size: 13px;
  color: #888;
  margin-bottom: 7px;
`;

const Divider = styled.div`
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background: ${({ color }) => color};
  margin: 8px 0 16px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  color: #333;
`;

const CheckIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.8px solid ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${({ color }) => color};
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 11px;
  background: #1a1aad;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
  margin-top: auto;

  &:hover {
    background: #1212c2;
  }

  &:active {
    background: #3131de;
    transform: scale(0.98);
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
  font-size: 13.5px;
  color: #888;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ccc;
  }
`;

const features = [
  "200 Modelos Feitos à Mão",
  "Suporte Exclusivo",
  "50+ Sites Pré-Construídos",
  "Plugins Premium",
];

const plans = [
  {
    type: "Basic",
    price: "10",
    color: "#e8002d",
    iconBg: "#ffeaed",
    divider: "#e8002d",
    featured: false,
    delay: "0.1s",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e8002d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    type: "Premium",
    price: "20",
    color: "#7c5cbf",
    iconBg: "#f0ebff",
    divider: "#7c5cbf",
    featured: true,
    delay: "0.2s",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7c5cbf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    type: "Advanced",
    price: "30",
    color: "#2eaa7a",
    iconBg: "#e6f9f3",
    divider: "#2eaa7a",
    featured: false,
    delay: "0.3s",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2eaa7a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

const Price = () => (
  <Section>
    <DotsGrid>
      {Array.from({ length: 35 }).map((_, i) => (
        <span key={i} />
      ))}
    </DotsGrid>

    <Inner>
      <div style={{ textAlign: "center" }}>
        <Badge>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8002d"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Planos que se adaptam ao seu momento
        </Badge>
        <Headline>
          Escolha o plano ideal
          <br />
          para o seu <span>projeto</span>
        </Headline>
        <Sub>
          Soluções completas para transformar ideias em resultados reais.
        </Sub>
      </div>

      <Cards>
        {plans.map((plan) => (
          <Card key={plan.type} featured={plan.featured} delay={plan.delay}>
            {plan.featured && <FeaturedBadge>Mais Escolhido</FeaturedBadge>}
            <IconWrap bg={plan.iconBg}>{plan.icon}</IconWrap>
            <PlanName color={plan.color}>Plano {plan.type}</PlanName>
            <PriceRow>
              <Currency>R$</Currency>
              <Amount>{plan.price}</Amount>
              <Period>/mês</Period>
            </PriceRow>
            <Divider color={plan.divider} />
            <FeatureList>
              {features.map((f) => (
                <Feature key={f}>
                  <CheckIcon color={plan.color}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </CheckIcon>
                  {f}
                </Feature>
              ))}
            </FeatureList>
            <Btn>Assine Agora</Btn>
          </Card>
        ))}
      </Cards>

      <Footer>
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8002d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Pagamento seguro
        </span>
        <span className="dot" />
        <span>Cancele quando quiser</span>
        <span className="dot" />
        <span>Sem taxas ocultas</span>
      </Footer>
    </Inner>
  </Section>
);

export default Price;
