import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../profile';

const ProjectDetails = () => {
  const id = useParams();
  const matchedItem = projects.find((project) => project.id === id.id);
  console.log(matchedItem.img1);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 650,
          margin: '90px 10px 0 70px',
        }}
      >
        <h2 style={{ fontSize: '40px', marginBottom: '0px' }}>
          {' '}
          {matchedItem.name}
        </h2>
        <h5 style={{ fontSize: '20px', fontWeight: 'normal' }}>
          {' '}
          technology used : {matchedItem.skills}
        </h5>
        <h5 style={{ lineHeight: 2, lineBreak: 'loose', marginTop: 70 }}>
          - Implemented firebase for user authentication Utilized MongoDB to
          store the data and showed them in UI.
          <br />- you can use stripe payment gateway to order for your desired
          car. <br /> - Search for your dream cars including suv's, trucks,
          sports car and so on! <br />
          - It has a safe login authentication for both user and Admin. <br />
          - Used mongoDb to save products, users, reviews information in
          database It has admin login system . <br />
          - An admin can make another user admin
          <br /> - admin can manage all the producs and users from the
          dashborad. <br /> - an admin can remove something if needed <br /> -
          an admin can add a new product <br /> - You can choose any car and
          quickly place order from the purchase page
        </h5>
      </div>
      <div
        style={{
          position: 'relative',
          right: '0',
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          //   justifyContent: 'space-between',
          alignItems: 'end',
          marginRight: 60,
        }}
      >
        <img
          style={{ width: '55%', margin: '15px ' }}
          src={matchedItem.img1}
          alt=""
        />
        <img
          style={{ width: '55%', margin: '15px ' }}
          src={matchedItem.img2}
          alt=""
        />
        <img
          style={{ width: '55%', margin: '15px ' }}
          src={matchedItem.img3}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
