import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <Image
      className={`h-10 rounded-full w-auto cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile pic"
      loading="lazy"
    />
  );
}

export default Avatar;
