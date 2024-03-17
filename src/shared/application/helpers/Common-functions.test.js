import { importFiles } from './common-functions';

describe('importFiles', () => {
	test('it should import the files correctly', async () => {
		const importPaths = {
			path1: () => Promise.resolve('Result 1'),
			path2: () => Promise.resolve('Result 2'),
			path3: () => Promise.resolve('Result 3'),
		};
		const result = await importFiles(importPaths);

		expect(result).toEqual(['Result 1', 'Result 2', 'Result 3']);
	});

	test('should handle empty importPaths', async () => {
		const importPaths = {};
		const result = await importFiles(importPaths);
		expect(result).toEqual([]);
	});
});
