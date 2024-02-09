const fetchProfile = async (profileId: number) => {
  const res = await fetch(`http://localhost:5017/api/Profile?id=${profileId}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default fetchProfile;
