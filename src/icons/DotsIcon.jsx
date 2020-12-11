const StyleSelector = new Map([
  [false, { properties: { transition: "0.4s" }, class: "text-secondary" }],
  [
    true,
    {
      properties: { transform: "rotate(90deg)", transition: "0.4s" },
      class: "text-primary",
    },
  ],
]);

export const DotsIcon = ({ isRotate }) => {
  const style = StyleSelector.get(isRotate);

  return (
    <svg
      style={style.properties}
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      className={`bi bi-three-dots-vertical ${style.class}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
    </svg>
  );
};
