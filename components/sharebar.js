import { Twitter, Facebook, Mail } from "react-feather";

export const Sharebar = ({ subject, message, url }) => {
  return (
    <div className="mb-8 flex gap-2 justify-content-start">
      <a
        href={"https://twitter.com/intent/tweet?text=" + message + " " + url}
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        href={`https://facebook.com/sharer.php?display=page&u=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <Facebook />
      </a>
      <a
        href={`mailto:?subject=${subject}&body=${message}\n${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <Mail />
      </a>
    </div>
  );
};
