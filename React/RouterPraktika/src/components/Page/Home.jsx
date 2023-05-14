import styled from "styled-components";

const StyledDogMain=styled.main`
    background-color: #f3cc9b;;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >img{
    width: 100%;
    position: relative;
    
    }
    >p{
        position: absolute;
        top: 400px;
        font-size: 1.3rem;
        color: white;
    }
    >div{
        text-align: center;
       
    }
 
`

const Home = () => {
    return (
         <StyledDogMain>
<img src="https://sothebys-com.brightspotcdn.com/dims4/default/f5e1093/2147483647/strip/true/crop/2000x1131+0+120/resize/1156x654!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F50%2Fa8%2F38c8c9134aeab57773755a0b8111%2Fomp-dogs-9.jpg" alt="dog painting"/>
<p>You are my pup of tea, so pour some lovin' sugar over me. </p>
<div>
<h1>Welcome to Dog World!</h1>
<p>If you are paw-ssionate about dogs, here you can see best dog breeds and even add your favourites to the list! </p>
</div>
         </StyledDogMain>
         );
}
 
export default Home;