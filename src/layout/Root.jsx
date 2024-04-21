import React from "react";

const Root = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const chef = form.chef.value;
    const name = form.name.value;
    const coffee = { name, chef };

    console.log(coffee)

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert("success")
    })
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddCoffee} className="card-body">
              <h1 className="text-3xl font-bold text-center">Add a coffee</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">chef</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  name="chef"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
