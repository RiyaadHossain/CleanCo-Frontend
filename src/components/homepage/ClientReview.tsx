import React from "react";
import ReviewCard from "../reuseable/ReviewCard";

export default function ClientReview() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Client Reviews</h2>
      <div className="card_div">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
