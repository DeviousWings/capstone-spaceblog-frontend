import { React, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../blog/editor";

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  //   const [cover, setCover] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // fetch("http://localhost:4000/post/" + id)
    fetch("http://localhost:127.0.0.1:5000/post/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }
        return response.json();
      })
      .then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error appropriately
      });
  }, [id]);

  async function updatedPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    // const response = await fetch("http://localhost:4000/post", {
    const response = await fetch("http://localhost:127.0.0.1:5000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <form onSubmit={updatedPost}>
      <div className="create-title">
        <h1>Edit Post</h1>
      </div>
      <input
        className="title"
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        className="summary"
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        className="file"
        type="file"
        // value={files}
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <Editor onChange={setContent} value={content} />
      <button>Update Post</button>
    </form>
  );
}
