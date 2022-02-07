import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./Store/favourites-context";


function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>

        <Layout>

          <Routes>
            <Route path="/" element={<AllMeetups />} />
            <Route path="/new-meetup" element={<NewMeetup />} />
            <Route path="/favourites" element={<Favourites />} />


          </Routes>

        </Layout>

      </BrowserRouter>
    </FavoritesContextProvider>

  );
}

export default App;
