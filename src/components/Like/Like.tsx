import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onLike: () => void;
  onDislike: () => void;
}

const Like = ({ onLike, onDislike }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    if (!status) onLike();
    if (status) onDislike();
  };

  if (status) return <AiFillHeart color="#ff6b81" size="30" onClick={toggle} />;
  return <AiOutlineHeart size="30" onClick={toggle} />;
};

export default Like;
