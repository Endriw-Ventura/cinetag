import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const VideosContext = createContext();
export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setVideos(response.data.videos);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VideosContext.Provider
      value={{ videos, setVideos, loading, error, fetchData }}
    >
      {children}
    </VideosContext.Provider>
  );
};
