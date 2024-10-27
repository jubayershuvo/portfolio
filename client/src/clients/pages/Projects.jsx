import React, { useEffect, useState } from "react";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import axios from 'axios'

function Projects({ handleScroll }) {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get('/user/projects');
        setProjects(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])
  

  useEffect(() => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const uniqueCategories = [
      ...new Set(projects.map((project) => capitalize(project.category))),
    ];
    setCategories(uniqueCategories);
  }, [projects]);

 

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProjects = selectedCategory
    ? projects.filter(
        (project) =>
          project.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : projects;

  return (
    <div className="w-screen">
      <div className="min-h-screen bg-gray-100 bg-opacity-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-3 h-20 max-w-4xl w-full bg-purple-500 rounded fixed z-50">
          <div className="col-span-2">
            <h1 className="font-sans text-lg md:text-xl p-6">My Projects</h1>
          </div>
          <div className="col-span-1 text-end mr-4 mt-5">
            <select
              onChange={handleCategoryChange}
              className="border text-sm md:text-base bg-transparent border-gray-300 rounded-md p-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-20 w-full" />
        <div
          onScroll={handleScroll}
          className="grid grid-cols-1 h-[90vh] w-full custom-scrollbar overflow-auto md:grid-cols-3 gap-6 p-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-300 h-80 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="w-full flex">
                  <p className="text-gray-600 max-w-[65%] flex h-7 overflow-hidden mt-2">{project.description}</p>
                  <button className="ml-1 mt-1 text-gray-600 underline hover:text-blue-400 text-sm">Read more..</button>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex text-xs md:text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      <MdPreview size={20} className="pr-1" />
                      Live demo
                    </a>
                    <a
                      href={project.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex text-xs md:text-sm bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                      <FaGithub size={20} className="pr-1" />
                      Git Repo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ):(
            <div className="md:col-span-3 text-center translate-y-32">
              <h1 className="text-2xl md:text-3xl text-white">No projects</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
