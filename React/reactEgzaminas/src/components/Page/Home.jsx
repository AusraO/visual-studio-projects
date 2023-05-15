import styled from "styled-components";



const StyledMain = styled.main`
background-color: #F3CC9B;
text-align: center;
>h1{
    margin-top: 0px;
    padding-top: 10px;
}
`
const Home = () => {

    return (
        <StyledMain>
        <h1>Welcome to the dog world!</h1>
        <h3>To see more of our content please log in or register!</h3>
        <img src="https://www.thekennelclub.org.uk/media/3267/toy.jpg?mode=crop&width=800&height=600&rnd=132188804840000000" alt="dog"/>
        </StyledMain>
    );
}

export default Home;