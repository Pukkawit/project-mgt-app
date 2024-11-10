import PropTypes from "prop-types";

const DashboardIcon = ({ fill, stroke }) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={fill}
    >
      <path
        d="M0.916748 8.64846L9.6244 2.19945C10.4336 1.60018 11.5666 1.60018 12.3758 2.19945L21.0834 8.64846M4.27786 6.15918V16.1163C4.27786 17.2947 5.28107 18.25 6.5186 18.25H7.63897H14.3612H15.4816C16.7191 18.25 17.7223 17.2947 17.7223 16.1163V6.15918M8.75934 18.25V11.849C8.75934 11.2598 9.26095 10.7821 9.87971 10.7821H12.1205C12.7392 10.7821 13.2408 11.2598 13.2408 11.849V18.25"
        stroke="currentColor" /* "#5F6D7E" */
        strokeWidth="1.67"
        strokeLinecap="round"
        className={stroke}
      />
    </svg>
  );
};

DashboardIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
export default DashboardIcon;
