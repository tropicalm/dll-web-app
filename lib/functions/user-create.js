import fetch from "isomorphic-unfetch";

const userCreate = async (userdata) => {
  // This function gets called at fetch on server-side.
  // It won't be called on client-side.
  // Get user query with context.query.uid

  // Call an external API endpoint to get users.
  const res = await fetch(
    `http://localhost:3000/api/db/db?collection=users&doc=${userdata.uid}`
  );
  const data = await res.json();

  if (data === false) {
    // Create user
    console.log("user not exsist, creating user");
    const res = await fetch(
      `http://localhost:3000/api/db/db?collection=users&doc=${userdata.uid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

// By returning { props: data }
// will receive `data` as a prop at build time
// return { props: { data } };

export default userCreate;
