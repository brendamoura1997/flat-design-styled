import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { PIX_CODE } from "../../utils/checkoutData";

const DARK = "#0a0a1e";

const Svg = styled(QRCodeSVG)`
  display: block;
  max-width: 100%;
  height: auto;
`;

const PixQrCode = ({ size = 140, label }) => (
  <Svg
    value={PIX_CODE}
    size={size}
    level="M"
    marginSize={2}
    fgColor={DARK}
    bgColor="#ffffff"
    role="img"
    aria-label={label}
  />
);

export default PixQrCode;
