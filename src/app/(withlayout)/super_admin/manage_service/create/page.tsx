"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  price: string;
  status: string;
  description: string;
};

export default function CreateService() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Create Service</h2>
      <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered"
              required
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered"
              required
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              placeholder="status"
              className="input input-bordered"
              required
              {...register("status", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered resize-none"
              placeholder="description"
              required
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
