import { VideosContext } from "context/VideosContext";
import { useContext } from "react";

export function useVideos() {
  const { videos, loading, error, fetchData } = useContext(VideosContext);
  return { videos, loading, error, fetchData };
}
