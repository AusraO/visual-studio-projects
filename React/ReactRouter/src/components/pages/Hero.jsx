import styled from "styled-components";

const StyledMain = styled.main`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://mythsandmountains.com/wp-content/uploads/2018/09/myths-and-mountains-intro-slide3-1.jpg');
  background-size: cover;
  background-position: center;
`;

const Hero = () => {
  return (
    <StyledMain>
      <h1>Welcome to MY PAGE!</h1>
      <p>
        What this page is about... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid, ducimus maiores animi vero ipsam reiciendis molestias doloribus saepe quia suscipit fuga consequuntur consectetur ea explicabo, placeat pariatur vitae possimus.
      </p>
    </StyledMain>
  );
}
 
export default Hero;