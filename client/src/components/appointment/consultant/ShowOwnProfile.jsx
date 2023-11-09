import React from "react";

const ShowOwnProfile = ({ profile }) => {
  return (
    <div>
      <h3>ShowOwnProfile</h3>
      <div>
        {profile ? (
          <div>
            <p>Username: {profile.tutor.username}</p>
            <p>Bio: {profile.bio}</p>
            <p>Hourly Rate: {profile.hourlyRate}</p>
            <p>Subject: {profile.keywords[0].keyword.keyword}</p>
            <p>Per session minutes: {profile.minutesPerSession}</p>
            <div>
              {Object.keys(profile.availability).map((day, key) => {
                if (profile.availability[day])
                  return (
                    <p key={key}>
                      {day} {profile.availability[day].startTime} -{" "}
                      {profile.availability[day].endTime}
                    </p>
                  );
              })}
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default ShowOwnProfile;
