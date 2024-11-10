import PropTypes from "prop-types";
const SiteLogo = ({
  fill = "fill-blue-500",
  stroke = "stroke-blue-500",
  hoverFill = "blue",
  hoverStroke = "blue",
}) => {
  return (
    <svg
      width="142"
      height="29"
      viewBox="0 0 142 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      style={{
        "--hover-fill": hoverFill,
        "--hover-stroke": hoverStroke,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelectorAll(".fill-element").forEach((el) => {
          el.style.fill = `var(--hover-fill)`;
        });
        e.currentTarget.querySelectorAll(".stroke-element").forEach((el) => {
          el.style.stroke = `var(--hover-stroke)`;
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelectorAll(".fill-element").forEach((el) => {
          el.style.fill = "";
        });
        e.currentTarget.querySelectorAll(".stroke-element").forEach((el) => {
          el.style.stroke = stroke;
        });
      }}
    >
      <rect
        x="4.40741"
        y="4.40741"
        width="47.1852"
        height="19.3927"
        rx="9.69633"
        className="stroke-element" // Stroke-only element
        stroke={stroke}
        strokeWidth="8.81483"
      />
      <path
        d="M77.8125 16.5491H80.7422C80.6484 17.6663 80.3359 18.6624 79.8047 19.5374C79.2734 20.4045 78.5273 21.0881 77.5664 21.5881C76.6055 22.0881 75.4375 22.3381 74.0625 22.3381C73.0078 22.3381 72.0586 22.1506 71.2148 21.7756C70.3711 21.3928 69.6484 20.8538 69.0469 20.1584C68.4453 19.4553 67.9844 18.6077 67.6641 17.6155C67.3516 16.6233 67.1953 15.5139 67.1953 14.2874V12.8694C67.1953 11.6428 67.3555 10.5334 67.6758 9.54126C68.0039 8.54907 68.4727 7.70142 69.082 6.99829C69.6914 6.28735 70.4219 5.74438 71.2734 5.36938C72.1328 4.99438 73.0977 4.80688 74.168 4.80688C75.5273 4.80688 76.6758 5.05688 77.6133 5.55688C78.5508 6.05688 79.2773 6.74829 79.793 7.6311C80.3164 8.51392 80.6367 9.52563 80.7539 10.6663H77.8242C77.7461 9.93188 77.5742 9.30298 77.3086 8.77954C77.0508 8.2561 76.668 7.85767 76.1602 7.58423C75.6523 7.30298 74.9883 7.16235 74.168 7.16235C73.4961 7.16235 72.9102 7.28735 72.4102 7.53735C71.9102 7.78735 71.4922 8.15454 71.1562 8.63892C70.8203 9.12329 70.5664 9.72095 70.3945 10.4319C70.2305 11.135 70.1484 11.9397 70.1484 12.8459V14.2874C70.1484 15.1467 70.2227 15.928 70.3711 16.6311C70.5273 17.3264 70.7617 17.9241 71.0742 18.4241C71.3945 18.9241 71.8008 19.3108 72.293 19.5842C72.7852 19.8577 73.375 19.9944 74.0625 19.9944C74.8984 19.9944 75.5742 19.8616 76.0898 19.5959C76.6133 19.3303 77.0078 18.9436 77.2734 18.4358C77.5469 17.9202 77.7266 17.2913 77.8125 16.5491ZM85.9219 4.10376V22.1038H83.1094V4.10376H85.9219ZM85.4297 15.2952L84.5156 15.2834C84.5234 14.4084 84.6445 13.5999 84.8789 12.8577C85.1211 12.1155 85.457 11.4709 85.8867 10.9241C86.3242 10.3694 86.8477 9.9436 87.457 9.64673C88.0664 9.34204 88.7422 9.1897 89.4844 9.1897C90.1094 9.1897 90.6719 9.27563 91.1719 9.44751C91.6797 9.61938 92.1172 9.89673 92.4844 10.2795C92.8516 10.6545 93.1289 11.1467 93.3164 11.7561C93.5117 12.3577 93.6094 13.092 93.6094 13.9592V22.1038H90.7734V13.9358C90.7734 13.3264 90.6836 12.842 90.5039 12.4827C90.332 12.1233 90.0781 11.8655 89.7422 11.7092C89.4062 11.5452 88.9961 11.4631 88.5117 11.4631C88.0039 11.4631 87.5547 11.5647 87.1641 11.7678C86.7812 11.9709 86.4609 12.2483 86.2031 12.5999C85.9453 12.9514 85.75 13.3577 85.6172 13.8186C85.4922 14.2795 85.4297 14.7717 85.4297 15.2952ZM103.617 19.5608V13.5139C103.617 13.0608 103.535 12.6702 103.371 12.342C103.207 12.0139 102.957 11.76 102.621 11.5803C102.293 11.4006 101.879 11.3108 101.379 11.3108C100.918 11.3108 100.52 11.3889 100.184 11.5452C99.8477 11.7014 99.5859 11.9124 99.3984 12.178C99.2109 12.4436 99.1172 12.7444 99.1172 13.0803H96.3047C96.3047 12.5803 96.4258 12.0959 96.668 11.6272C96.9102 11.1584 97.2617 10.7405 97.7227 10.3733C98.1836 10.0061 98.7344 9.71704 99.375 9.5061C100.016 9.29517 100.734 9.1897 101.531 9.1897C102.484 9.1897 103.328 9.34985 104.062 9.67017C104.805 9.99048 105.387 10.4749 105.809 11.1233C106.238 11.7639 106.453 12.5686 106.453 13.5374V19.1741C106.453 19.7522 106.492 20.2717 106.57 20.7327C106.656 21.1858 106.777 21.5803 106.934 21.9163V22.1038H104.039C103.906 21.7991 103.801 21.4124 103.723 20.9436C103.652 20.467 103.617 20.0061 103.617 19.5608ZM104.027 14.3928L104.051 16.1389H102.023C101.5 16.1389 101.039 16.1897 100.641 16.2913C100.242 16.385 99.9102 16.5256 99.6445 16.7131C99.3789 16.9006 99.1797 17.1272 99.0469 17.3928C98.9141 17.6584 98.8477 17.9592 98.8477 18.2952C98.8477 18.6311 98.9258 18.9397 99.082 19.2209C99.2383 19.4944 99.4648 19.7092 99.7617 19.8655C100.066 20.0217 100.434 20.0999 100.863 20.0999C101.441 20.0999 101.945 19.9827 102.375 19.7483C102.812 19.5061 103.156 19.2131 103.406 18.8694C103.656 18.5178 103.789 18.1858 103.805 17.8733L104.719 19.1272C104.625 19.4475 104.465 19.7913 104.238 20.1584C104.012 20.5256 103.715 20.8772 103.348 21.2131C102.988 21.5413 102.555 21.8108 102.047 22.0217C101.547 22.2327 100.969 22.3381 100.312 22.3381C99.4844 22.3381 98.7461 22.1741 98.0977 21.8459C97.4492 21.51 96.9414 21.0608 96.5742 20.4983C96.207 19.928 96.0234 19.2834 96.0234 18.5647C96.0234 17.8928 96.1484 17.2991 96.3984 16.7834C96.6562 16.26 97.0312 15.8225 97.5234 15.4709C98.0234 15.1194 98.6328 14.8538 99.3516 14.6741C100.07 14.4866 100.891 14.3928 101.812 14.3928H104.027ZM112.242 11.8381V22.1038H109.418V9.42407H112.113L112.242 11.8381ZM116.121 9.34204L116.098 11.967C115.926 11.9358 115.738 11.9124 115.535 11.8967C115.34 11.8811 115.145 11.8733 114.949 11.8733C114.465 11.8733 114.039 11.9436 113.672 12.0842C113.305 12.217 112.996 12.4124 112.746 12.6702C112.504 12.9202 112.316 13.2249 112.184 13.5842C112.051 13.9436 111.973 14.3459 111.949 14.7913L111.305 14.8381C111.305 14.0413 111.383 13.303 111.539 12.6233C111.695 11.9436 111.93 11.3459 112.242 10.8303C112.562 10.3147 112.961 9.91235 113.438 9.62329C113.922 9.33423 114.48 9.1897 115.113 9.1897C115.285 9.1897 115.469 9.20532 115.664 9.23657C115.867 9.26782 116.02 9.30298 116.121 9.34204ZM120.914 4.10376V22.1038H118.078V4.10376H120.914ZM127.031 9.42407V22.1038H124.195V9.42407H127.031ZM124.008 6.09595C124.008 5.66626 124.148 5.31079 124.43 5.02954C124.719 4.74048 125.117 4.59595 125.625 4.59595C126.125 4.59595 126.52 4.74048 126.809 5.02954C127.098 5.31079 127.242 5.66626 127.242 6.09595C127.242 6.51782 127.098 6.86938 126.809 7.15063C126.52 7.43188 126.125 7.57251 125.625 7.57251C125.117 7.57251 124.719 7.43188 124.43 7.15063C124.148 6.86938 124.008 6.51782 124.008 6.09595ZM135.715 22.3381C134.777 22.3381 133.93 22.1858 133.172 21.8811C132.422 21.5686 131.781 21.135 131.25 20.5803C130.727 20.0256 130.324 19.3733 130.043 18.6233C129.762 17.8733 129.621 17.0647 129.621 16.1975V15.7288C129.621 14.7366 129.766 13.8381 130.055 13.0334C130.344 12.2288 130.746 11.5413 131.262 10.9709C131.777 10.3928 132.387 9.95142 133.09 9.64673C133.793 9.34204 134.555 9.1897 135.375 9.1897C136.281 9.1897 137.074 9.34204 137.754 9.64673C138.434 9.95142 138.996 10.3811 139.441 10.9358C139.895 11.4827 140.23 12.135 140.449 12.8928C140.676 13.6506 140.789 14.4866 140.789 15.4006V16.6077H130.992V14.5803H138V14.3577C137.984 13.8499 137.883 13.3733 137.695 12.928C137.516 12.4827 137.238 12.1233 136.863 11.8499C136.488 11.5764 135.988 11.4397 135.363 11.4397C134.895 11.4397 134.477 11.5413 134.109 11.7444C133.75 11.9397 133.449 12.2249 133.207 12.5999C132.965 12.9749 132.777 13.428 132.645 13.9592C132.52 14.4827 132.457 15.0725 132.457 15.7288V16.1975C132.457 16.7522 132.531 17.2678 132.68 17.7444C132.836 18.2131 133.062 18.6233 133.359 18.9749C133.656 19.3264 134.016 19.6038 134.438 19.8069C134.859 20.0022 135.34 20.0999 135.879 20.0999C136.559 20.0999 137.164 19.9631 137.695 19.6897C138.227 19.4163 138.688 19.0295 139.078 18.5295L140.566 19.9709C140.293 20.3694 139.938 20.7522 139.5 21.1194C139.062 21.4788 138.527 21.7717 137.895 21.9983C137.27 22.2249 136.543 22.3381 135.715 22.3381Z"
        className="fill-element" // Fill-only element
        fill={fill}
      />
    </svg>
  );
};

SiteLogo.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  hoverFill: PropTypes.string,
  hoverStroke: PropTypes.string,
};

export default SiteLogo;
