import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect()
    const post = req.body;
    
    try {
        const result = await db.collection('posts').insertOne({post});
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}