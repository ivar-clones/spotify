import React, { useContext } from "react";
import { Root } from "./Root";
import { SpotifyContext } from "@/providers/SpotifyProvider";
import { Login } from "./Login";

const Main: React.FC = () => {
  const { client } = useContext(SpotifyContext);

  if (!client) {
    return <Login />;
  }

  return <Root />;
};

export default Main;
