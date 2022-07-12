export function Test() {
  return (
    <div>
      {/* This inline gives more privillages to write 
      conditional statemetns in the jsfile */}
      <h5 style={{ color: Math.random() > 0.5 ? "green" : "red" }}>
        Hello this is Test component
      </h5>
    </div>
  );
}
