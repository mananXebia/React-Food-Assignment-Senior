const Shimmer = () => {
  return (
    <div className="restaurant-list flex flex-wrap" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card w-40 h-40 m-2 bg-slate-200"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
