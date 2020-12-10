export const Footer = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <footer style={style} className="container pt-4">
      <p className="text-center text-muted">
        <a href="https://github.com/ILokalin" rel="noreferrer" target="_blank">
          Ilya Lokalin.
        </a>
        &nbsp;2020
      </p>
    </footer>
  );
};
