const Avatar = ({ src, alt = "" }) => {
  return (
    <div className="size-24 rounded-full overflow-hidden bg-border">
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <svg viewBox="0 0 100 100" className="fill-white">
          <circle cx="50" cy="38" r="18" />
          <ellipse cx="50" cy="95" rx="34" ry="30" />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
