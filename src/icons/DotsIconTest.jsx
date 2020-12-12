import { DotIcon } from "./DotIcon";

const style = {
  icon: {
    width: "25px",
    height: "25px",
  },
};

const StyleSelector = new Map([
  [
    false,
    {
      up: {
        height: "10px",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        transition: "0.3s",
      },
      down: { height: "10px", alignItems: "flexStart" },
    },
  ],
  [
    true,
    {
      up: {
        height: "15px",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
      },
      down: { height: "10px", alignItems: "flexEnd" },
    },
  ],
]);

export const DotsIconTest = ({ isOpen = false }) => {
  return (
    <div style={style.icon} className="d-flex flex-column align-items-center">
      <div style={StyleSelector.get(isOpen)} class="d-flex w-100">
        <DotIcon />
        <DotIcon />
      </div>
      <div style={StyleSelector.get(isOpen)} class="dots-icon__down">
        <DotIcon />
      </div>
    </div>
  );
};
