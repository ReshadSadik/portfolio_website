import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, name, url, skills, gitUrl, url2 }) => {
  return (
    <div>
      <div className="  project-card">
        <div className="image-project">
          <div className={`img-pro ${id}`}></div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* <a
            title={url}
            className="project-name"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {name}
          </a> */}
          <a
            title={url}
            className="project-name"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            style={{
              textDecoration: 'none',
              color: 'tomato',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Live Site
          </a>
          {/* <a
            title={url2}
            className="project-name"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            style={{
              textDecoration: 'none',
              color: 'tomato',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Github
          </a> */}
          <Link to={`/project/${id}`}>
            <button className="btn btn-success" style={{}}>
              details
            </button>
          </Link>
        </div>
        {skills && <h3>{skills.map((skill) => skill)}</h3>}
      </div>
    </div>
  );
};

export default Project;

// data-aos="fade-up"
