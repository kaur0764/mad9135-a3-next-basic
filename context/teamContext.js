import { createContext, useState, useContext, useEffect } from "react";

const TeamContext = createContext();

function TeamProvider(props) {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    doFetch();
  }, []);

  async function doFetch() {
    const res = await fetch("/api/team");
    const data = await res.json();
    setTeam(data);
  }
  return <TeamContext.Provider value={[team, setTeam]} {...props} />;
}

function useTeam() {
  const context = useContext(TeamContext);
  if (!context) throw new Error("Issue with the Provider");
  return context;
}

export { useTeam, TeamProvider };
