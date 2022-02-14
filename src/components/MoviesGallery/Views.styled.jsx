import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  margin: 0;
  padding: 40px 0px;
`;

export const GalleryItem = styled.li`
  display: inline-block;
  width: calc((100% - 30px) / 2);
  margin-bottom: 30px;
  border-radius: 4px;

  * > &:not(:nth-of-type(2n)) {
    margin-right: 30px;
  }

  &:nth-of-type(n + 18) {
    margin-bottom: 0px;
  }
`;

export const Images = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  padding: 20px 0;
  margin: 0;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const TopWrap = styled.div`
  text-align: center;
  margin: 20px 0;
`;
export const TopImg = styled.img`
  display: block;
  width: 100%;
  margin: 0;
`;

export const TopDes = styled.div`
  padding: 20px 0;
  font-size: 18px;
`;
