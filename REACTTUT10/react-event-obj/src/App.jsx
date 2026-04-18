function Football() {
  const shoot = (event) => {
    alert(event.type);
  };

  return (
    <button onClick={shoot}>
      Take the shot!
    </button>
  );
}

export default Football;