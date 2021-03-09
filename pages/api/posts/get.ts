import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    try {
        const result = await db.collection('posts').find().toArray();        
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}