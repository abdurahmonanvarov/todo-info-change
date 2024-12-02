import { useEffect, useState } from "react";

function UbdateInfo({ todo, endedTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("Please fill out both fields!");
      return;
    }

    endedTodo({
      id: todo.id,
      title,
      desc,
    });

    document.getElementById("todom").close();
  };
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
    }
  }, [todo]);
  return (
    <dialog id="todom" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">What is your name?</span>
              <span className="label-text-alt">Top Right label</span>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Your bio</span>
            </div>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary mt-10 w-auto">
              Submit
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("todom").close()}
              className="btn mt-10 w-auto"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default UbdateInfo;
