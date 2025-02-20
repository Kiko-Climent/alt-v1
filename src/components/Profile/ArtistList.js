import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoster } from "../Features/Roster/rosterActions";

const ArtistList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.roster);

  useEffect(() => {
    dispatch(fetchRoster());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((artist) => (
        <li key={artist.id}>
          <h2>{artist.artist_name}</h2>
          <p>{artist.artist_bio}</p>
          <p>{artist.booking_embed}</p>
          <p>{artist.social_link}</p>
          <p>{artist.profile_pic}</p>
        </li>
      ))}
    </ul>
    
  );
};

export default ArtistList;
