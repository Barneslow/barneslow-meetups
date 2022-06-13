import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://Barneslow:lDwcpwEys5UqEvqU@cluster0.s6ypi.mongodb.net/?retryWrites=true&w=majority"
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      client.close();
    } catch (error) {
      console.log(error);
    }

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
