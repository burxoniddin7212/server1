import fs from 'fs';
import path from 'path';
import sha256 from 'sha256';
import jwt from 'jsonwebtoken';

const secret = 'real';

let messageController = {
	POST: (req, res) => {
		try {
			let { text, userId } = req.body;

			if (text && userId) {
				let allMessages = fs.readFileSync(
					path.resolve(process.cwd(), 'database', 'db.messages.json'),
					'utf-8',
				);
				allMessages = JSON.parse(allMessages) || [];

				let message = {
					messageId: allMessages.at(-1)?.messageId + 1 || 1,
					time: new Data(),
					text: text,
					userId: userId
				};

				allMessages.push(message);
				fs.writeFileSync(
					path.resolve(process.cwd(), 'database', 'db.massages.json'),
					JSON.stringify(allMessages, null, 4),
				);

				res.send(message);
			}
		} catch (error) {
			console.log(error.message);
		}
	},
};

export default messageController;
