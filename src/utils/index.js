export {colors} from './colors';

import RNFS from 'react-native-fs';

export const saveToDisk = (name, data) => {
	const path = RNFS.DocumentDirectoryPath + `${name}.json`;
	RNFS.writeFile(path,JSON.stringify(data)).then(res => {
		console.log('data saved')
	}).catch(err => {
		console.log('save error', err.message)
	});
}

export const readData = (name, successCallBack) => {
	const path = RNFS.DocumentDirectoryPath + `${name}.json`;
	RNFS.readFile(path).then(res => {
		successCallBack(JSON.parse(res))
	}).catch(err => {
		console.log('read error', err.message)
	});
}
