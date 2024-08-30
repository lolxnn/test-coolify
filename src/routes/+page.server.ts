import prisma from '$lib/db/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// 1.
	const response = await prisma.user.findMany();

	// 2.
	return { feed: response };
}) satisfies PageServerLoad;
