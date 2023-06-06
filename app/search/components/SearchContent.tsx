"use client";

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import useOnPlayer from "@/hooks/useOnPlayer";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div
        className="
              flex 
              flex-col 
              gap-y-2 
              w-full 
              px-6 
              text-neutral-400
            ">
        No songs found.
      </div>
    );
  }
  const onPlay = useOnPlayer(songs);

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song: Song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikedButton songId={song.id} />
          {/* AA */}
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
