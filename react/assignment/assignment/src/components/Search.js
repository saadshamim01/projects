import React, { useState, useEffect } from "react";
// import axios from "../axios";
import axios from "axios";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("Users");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //   setLoading(true);
      try {
        const response = await axios.get(
          "https://www.google.com/search?q=hooks+axios&sxsrf=APq-WBvLSrua-qh-X-hnr5DPuiQzZjZRNA%3A1650199044063&source=hp&ei=BApcYpylAvKflwSR17q4CA&iflsig=AHkkrS4AAAAAYlwYFLPUhc6XrzZMRRWJaNg4V_E27pWH&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg2A5oAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz"
        );
        setData(response);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
      //   setLoading(false);
    };

    fetchData();
  }, []);

  const search_submit = (e) => {
    e.preventDefault();

    console.log(search);
    console.log(searchType);
  };

  return (
    <div className="login">
      <div className="login__header">
        <img
          className="login__logo"
          src="data:image/png;base64,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"
          alt=""
        />
        <h1 className="login__title">GitFinder</h1>
      </div>

      <div className="search__container">
        <h1>GitFinder</h1>
        <h5>
          GitFinder allows you to search for users and repositories on Github
        </h5>
        <form>
          <h5>Enter the name and select the search type</h5>
          <div className="login__form">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setSearchType(e.target.value)}>
              <option value="users">Users</option>
              <option value="repositories">Repositories</option>
            </select>
          </div>
          <button
            type="submit"
            className="login__signInButton"
            onClick={search_submit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
