import Chat from "../components/Chat";
import LoginPage from "./LoginPage";

 function HomePage () {
  return (
    <div className="relative min-h-screen">
      {
        localStorage.getItem('user') ?(  <div className="absolute bottom-0 right-0 w-full">
        <Chat/>
        </div>): <LoginPage/>
      
      }
    </div>
  )
}

export default HomePage;
