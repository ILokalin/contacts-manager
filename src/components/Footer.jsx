export const Footer = () => {
  const style = {
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  };

  return (
    <footer style={style} className="container pt-4">
      <p className="text-center">
        <a href="https://github.com/ILokalin" rel="noreferrer" target="_blank">
          Ilya Lokalin.
        </a>
        &nbsp;2020
      </p>
    </footer>
  );
};
