import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>SagoBooK</h5>
          <h1>Xin chào đến với SagoBooK</h1>
          <p>
            Xây dựng ứng dụng theo mô hình phân lớp - ĐH SaiGon<br />
            Thái Kiến Hào - Nguyễn Hữu Nhân - Âu Khánh Toàn{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
