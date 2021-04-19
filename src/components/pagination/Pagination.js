import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = props => {
  const { tasks, pagination } = props;
  let prev = pagination.currentPage - 1;
  let next = pagination.currentPage + 1;
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h4>Pagination info:</h4>
      <p>Current page: {pagination.currentPage}</p>
      <p>Tasks on page: {tasks.length}</p>
      <p>Pages: {pagination.pagesCount}</p>
      <p>Page size: {pagination.pageSize}</p>
      <p>Tasks total: {pagination.tasksCount}</p>
      <nav>
        <ul className={styles.pageList}>
          {/* <li>
            <button>Prev</button>
          </li> */}
          {prev > 0 && (
            <li>
              <Link to={`${url}?page=${prev}&size=${pagination.pageSize}`}>
                {prev}
              </Link>
            </li>
          )}
          <li className={styles.currentPage}>
            <Link
              to={`${url}?page=${pagination.currentPage}&size=${pagination.pageSize}`}
            >
              {pagination.currentPage}
            </Link>
          </li>
          {next <= pagination.pagesCount && (
            <li>
              <Link to={`${url}?page=${next}&size=${pagination.pageSize}`}>
                {next}
              </Link>
            </li>
          )}
          {/* <li>
            <button>Next</button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
