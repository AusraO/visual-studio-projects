import { createContext, useReducer } from "react";

const WatchlistContext = createContext();

const WatchlistActionTypes = {
    add: 'add_new_movie_to_watchlist'
}

const reducer = (state, action) => {
    switch (action.type) {
      case WatchlistActionTypes.add:
        const { movie } = action.data;
        const { userId, watchlist } = state;
        const updatedWatchlist = [...watchlist, movie.id];
  
        fetch(`http://localhost:8080/users/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ watchlist: updatedWatchlist })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update user's watchlist.");
            }
            return response.json();
          })
          .then((updatedUser) => {
            return {
              ...state,
              watchlist: updatedUser.watchlist
            };
          })
          .catch((error) => {
            console.error(error);
            return state;
          });
  
        // Return the existing state while waiting for the fetch request to complete
        return state;
  
      default:
        return state;
    }
  };

const WatchlistProvider = ({ children }) => {

    const [watchlist, setWatchlist] = useReducer(reducer, []);


    return (
        <WatchlistContext.Provider
            value={{
                watchlist,
                WatchlistActionTypes,
                setWatchlist
            }}
        >
            {children}
        </WatchlistContext.Provider>
    )
}

export { NewUsersProvider };
export default NewUsersContext;