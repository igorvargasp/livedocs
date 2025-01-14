import { useOthers } from "@liveblocks/react";
import Image from "next/image";
import React from "react";

const ActiveCollaborators = () => {
  const others = useOthers();
  const collaborators = others.map((user) => user.info);

  return (
    <ul className="collaborators-list">
      {collaborators.map((collaborator) => (
        <li key={collaborator.id}>
          <Image
            src={collaborator.avatar}
            alt="Avatar"
            width={100}
            height={100}
            className="inline-block rounded-full size-8 ring-2 ring-dark-100"
            style={{
              border: `3px solid ${collaborator.color}`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
