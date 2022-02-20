import { Content, Ring, Wrapper } from './Loading.styled';

const Loading = () => {
  return (
    <Wrapper>
      <Ring></Ring>
      <Content>loading...</Content>
    </Wrapper>
  );
};

export default Loading;
