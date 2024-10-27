import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProjectAdmin = () => {
  const navigate = useNavigate()
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    gitRepo: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("category", project.category);
    formData.append("description", project.description);
    formData.append("gitRepo", project.gitRepo);
    formData.append("image", imageFile);

    try {
      const response = await axios.post("/admin/project/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Project added successfully!");
      console.log("Response:", response.data);
      setProject({ title: "", category: "", description: "", gitRepo: "" });
      setImageFile(null);
      navigate('/admin')
    } catch (error) {
      setMessage("Failed to add project.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-semibold">Title</span>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Category</span>
          <input
            type="text"
            name="category"
            value={project.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Description</span>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">
            GitHub Repository URL
          </span>
          <input
            type="text"
            name="gitRepo"
            value={project.gitRepo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Project Image</span>
          <input
            type="file"
            name="image"
            accept="image/*" // Only accept image files
            onChange={handleImageChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Project
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddProjectAdmin;
