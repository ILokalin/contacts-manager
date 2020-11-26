export const Footer = () => {
  const style = {
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  };

  return (
    <footer style={style} className="container">
      <p className="text-center">Ilya Lokalin.</p>
    </footer>
  );
};
