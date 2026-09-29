function Rose({
  className = "",
  delay = "0s",
  variant = "rose",
}) {
  const petals = Array.from({ length: 18 }, (_, index) => index + 1);

  return (
    <div
      className={`rose ${className} ${variant === "bud" ? "rose-bud" : ""}`}
      style={{ "--delay": delay }}
      aria-hidden="true"
    >
      <div className="rose-stem">
        <span className="leaf leaf-left leaf-left-top">
          <span className="leaf-vein" />
        </span>

        <span className="leaf leaf-right leaf-right-middle">
          <span className="leaf-vein" />
        </span>

        <span className="leaf leaf-left leaf-left-bottom">
          <span className="leaf-vein" />
        </span>
      </div>

      <div className="rose-head">
        <span className="rose-sepal rose-sepal-1" />
        <span className="rose-sepal rose-sepal-2" />
        <span className="rose-sepal rose-sepal-3" />

        <div className="rose-flower">
          {petals.map((petal) => (
            <span
              key={petal}
              className={`petal petal-${petal}`}
            />
          ))}

          <span className="rose-core" />
        </div>
      </div>
    </div>
  );
}

export default Rose;