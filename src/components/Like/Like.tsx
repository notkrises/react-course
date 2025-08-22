import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked)
    return <AiFillHeart color="pink" size={50} onClick={toggle}></AiFillHeart>;
  return (
    <AiOutlineHeart color="pink" size={50} onClick={toggle}></AiOutlineHeart>
  );
};

export default Like;
