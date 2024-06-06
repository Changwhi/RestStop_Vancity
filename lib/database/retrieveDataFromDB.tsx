import mySqlDatabase from "./databaseConnetionSQL";

export default async function test() {
  let sqlStatement = `INSERT INTO washrooms (name, description, lat, lon) 
    VALUES (:name, :description, :lat, :lon)`;

  let params = {
    name: "test",
    description: "test",
    lat: 0,
    lon: 0,
  };

  try {
    const result = await mySqlDatabase.query(sqlStatement, params);
    return result
  } catch (err:any) {
    throw new Error(err);
  }
}
