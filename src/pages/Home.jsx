import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { posts } from "../data/posts";

const Home = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = ["all", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" || category === "" ? true : post.category === category;
    return matchTitle && matchCategory;
  });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="max-w-full mx-auto p-6 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <Card key={post.id} post={post} />)
          ) : (
            <p className="col-span-full text-center dark:text-white">
              No Posts Found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
