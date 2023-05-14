import { useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../contexts/UsersContext";
import PostsContext from "../../contexts/PostsContext";
import Post from "../UI/Molecules/Post";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 50px;
  > h1{
    text-align: center;
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const UserPage = () => {

  const { posts } = useContext(PostsContext);
  const { currentUser } = useContext(UsersContext);

  return (
    <StyledMain>
      <Link to="/posts/newPost">
        <button>Add New Post</button>
      </Link>
      <h1>{currentUser.userName} Posts</h1>
      <div>
        {
          posts.map(post => 
            post.userId === currentUser.id && 
              <Post 
                key={post.id}
                data={post}
              />
          )
        }
      </div>
    </StyledMain>
  );
}
 
export default UserPage;