import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList({ meetups, id, image, title, address, description }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
