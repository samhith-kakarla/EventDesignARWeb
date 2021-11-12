import React from 'react';
import PropTypes from 'prop-types';

const EditDesignPage = ({ design }) => {
  return (
    <div>
      <h1>EDIT DESIGN</h1>
    </div>
  );
};

EditDesignPage.propTypes = {
  design: PropTypes.object.isRequired,
};

export default EditDesignPage;
