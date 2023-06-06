"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlayer from "@/hooks/useOnPlayer";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import SubscribeModal from "./SubscribeModal";

interface LibraryProps {
  songs: Song[];
}
const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const subcribeModal = useSubscribeModal();
  const { user, subscription } = useUser();
  const onPlay = useOnPlayer(songs);
  const uploadModal = useUploadModal();
  const OnClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subcribeModal.onOpen();
    }
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={OnClick}
          size={20}
          className="text-neutral-400 cursor-pointer transition hover:text-white"
        />
      </div>
      <div className="flex flex-col gap-8 mt-4 px-3 gap-y-2">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
