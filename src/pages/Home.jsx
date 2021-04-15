import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

const Home = props => {
  const { pageTitle, welcome, pageData } = props;
  useEffect(() => pageData(), []);
  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>{welcome}</p>
    </div>
  );
};

const mapStateToProps = ({ pageReducer }) => ({ ...pageReducer });
const mapDispatchToProps = dispatch => ({
  pageData: () => dispatch(ActionCreators.homepageData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
