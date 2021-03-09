import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    try {
        const result = await db.collection('posts').find().toArray();
        console.log(result);
        
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}