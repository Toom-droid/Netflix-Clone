import NavBar from "../components/NavBar";
import { useProfiles } from "../context/ProfilesContext";

function Profile() {
  const { profiles } = useProfiles()

  if (profiles)
    return (
      <>
        <NavBar />
        <div className="flex justify-center items-center h-[calc(90vh)]">
          <div className="bg-zinc-950 p-10 text-white w-[calc(25vw)] rounded-lg shadow-md shadow-zinc-950 flex justify-center">
            <pre>
              User = &#123;
              <br />
              &nbsp;&nbsp;Username: {user.username}, <br />
              &nbsp;&nbsp;Email: {user.email}, <br />
              &nbsp;&nbsp;ID: {user.id}
              <br />
              &#125;
              <br />
            </pre>

          </div>
        </div>
      </>
    );

  return <div>Profile</div>;
}

export default Profile;
