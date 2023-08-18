import React, { useState } from "react";
import { tick, copy } from "../assets";

const History = ({ previousSearchArticle, setArticle }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = (url) => {
    setCopied(url);
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {previousSearchArticle.map((item, index) => (
        <div
          key={`link-${index}`}
          onClick={() => setArticle(item)}
          className="link_card"
        >
          <div className="copy_btn" onClick={() => handleCopy(item.url)}>
            <img
              src={copied === item.url ? tick : copy}
              alt="copy-icon"
              className="w-[40%] object-contain"
            />
          </div>
          <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
            {item.url}
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
