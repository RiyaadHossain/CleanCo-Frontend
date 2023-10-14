export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661690569941-e87b71d91dda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Welcome to CleanCo</h1>
          <p className="mb-5">
            We provide quality service to our customer to clean their home,
            garden and offices. Ensuring quality is our first and foremost duty.
          </p>
          <button className="btn btn-primary">Clean Now</button>
        </div>
      </div>
    </div>
  );
}
