import styled from 'styled-components';

export const CardWrapper = styled.article`
  display: block;
  min-width: 0;
  width: 100%;
  position: relative;
`;

export const Thumbnail = styled.div`
  position: relative;
  margin-bottom: 0.5rem;

  &::before {
    display: block;
    content: '';
    padding-top: calc(230 / 350 * 100 * 1%);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
`;

export const Info = styled.div`
  color: #484848;
  word-wrap: break-word;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled(Info)`
  font-weight: 700;
  font-size: 16px;
`;

export const Address = styled(Info)`
  font-size: 14px;
`;
