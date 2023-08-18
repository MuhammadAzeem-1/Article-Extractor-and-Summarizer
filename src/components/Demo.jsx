import React, { useState, useEffect } from "react";
import { linkIcon, loader } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import History from "./History";
import Summary from "./Summary";

const Demo = () => {
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [previousSearchArticle, setPreviousSearchArticle] = useState([]);
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  // useEffect To Get data from local Storage
  useEffect(() => {
    const getUpdateArticle = JSON.parse(localStorage.getItem("article"));
    if (getUpdateArticle) {
      setPreviousSearchArticle(getUpdateArticle);
    }
  }, []);

  //Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default Browser Behaviour

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateArticle = [newArticle, ...previousSearchArticle];

      setArticle(newArticle);
      setPreviousSearchArticle(updateArticle);
      // Storing data in localStorage
      localStorage.setItem("article", JSON.stringify(updateArticle));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        {/*  Form */}
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter your Url..."
            value={article.url}
            className="url_input peer"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          <button
            type="button"
            className="submit_btn
           peer-focus:border-gray-700
            peer-focus:border-gray-700"
            onClick={handleSubmit}
          >
            ↵
          </button>
        </form>

        {/* History Section */}
        <History
          previousSearchArticle={previousSearchArticle}
          setArticle={setArticle}
        />

        {/* Summary Display */}
        <section className="my-10 max-w-full flex justify-center items-center">
          {isFetching ? (
            <img
              src={loader}
              alt="loading-icon"
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Well, That's wasn't is not supposed to happen
              <br />
              <span className="font-satoshi font-normal text-gray-700">
                {error?.date?.message}
              </span>
            </p>
          ) : (
            <Summary article={article} />
          )}
        </section>
      </div>
    </section>
  );
};

export default Demo;
