import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
//import BannerOne from "../../wrappers/banner/BannerOne";
//import TextGridOne from "../../wrappers/text-grid/TextGridOne";
//import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
//import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const About = ({ location }) => {

  return (
    <Fragment>
      <MetaTags>
        <title>Sagobo | Về chúng tôi</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        <TeamMemberOne spaceBottomClass="pb-70" />
        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        {/* <TextGridOne spaceBottomClass="pb-70" /> */}

        {/* fun fact */}
        {/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="mb-70"
          bgClass="bg-gray-3"
        /> */}

        {/* team member */}
        

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
