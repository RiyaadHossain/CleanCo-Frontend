/* eslint-disable @next/next/no-img-element */

export default function ServiceCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-md">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          //   width={100}
          //   height={100}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Washroom Cleaning
          <div className="badge badge-sm badge-secondary">Home Cleaning</div>
        </h2>
        <p>
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose?
        </p>
        <div className="flex justify-between">
          <p className="font-bold">Price:</p>
          <span>599tk</span>
        </div>
        <button className="btn btn-primary">See Details</button>
      </div>
    </div>
  );
}
