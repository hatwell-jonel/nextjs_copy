'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import  { type New } from './validations';

export async function createUser(data: New) {
    await db.insert(users).values(data);
    revalidatePath("/");

    return {
      message: "Successfully created",
      success: true,
    };
}