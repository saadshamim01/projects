import React, { useEffect, useState } from "react";
// import { getGithubUser, getUserData, getUserRepositories } from "../axios";
import axios from "axios";

function PersonList() {
  const [username, setUsername] = useState("");
  const [person, setPerson] = useState([]);
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);

  const URL_BASE = "https://api.github.com";

  const search_submit = (e) => {
    e.preventDefault();

    console.log(username);
  };

  useEffect(() => {
    async function getUserData() {
      const response = await axios.get(`${URL_BASE}/users/${username}`);
      console.log("User data is >>>", response.data);
      //   setPerson(response.data);
    }

    // async function getRepositoryData() {
    //   const response = await axios.get(`${URL_BASE}/users/${username}/repos`);

    //   // setRepositories(data);
    //   console.log("Repo data is >>>", response);
    // }
    getUserData();
    // getRepositoryData();
  });

  // async function fetchUser() {
  //   const { data } = await getUserData(person);
  //   setUser(data);
  //   console.log("User data is >>>", user);
  // }
  // async function fetchRepositories() {
  //   const { data } = await getUserRepositories(person);
  //   setRepositories(data);
  //   console.log("User data is >>>", repositories);
  // }

  return (
    <div>
      <h1></h1>
      <h1>GitFinder</h1>
      <h5>
        GitFinder allows you to search for users and repositories on Github
      </h5>
      <form>
        <input
          label="Enter username"
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" onClick={search_submit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default PersonList;
