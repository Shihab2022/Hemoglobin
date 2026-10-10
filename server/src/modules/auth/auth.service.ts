
import config from '../../config';
import { pool } from './../../utils/pg';

const createUserIntoDB = async (payload: any) => {
    const { email, password, userName, name } = payload;
    // Check existing user
    const existingUser = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [email],
    );



    const fullName = `${userName} ${name}`;

    // Insert user
    const insertQuery = `
    INSERT INTO users (name, email, password, status)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email
  `;

    const result = await pool.query(insertQuery, [
        fullName,
        email,
        password,
        "ACTIVE",
    ]);

    const createdUser = result.rows[0];
    // JWT
    const jwtPayload = {
        userId: createdUser.id,
    };



    return { data: createdUser };
};



const LoginUserIntoDB = async (payload: any) => {
    const { email } = payload;
    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1 LIMIT 1`,
        [email],
    );

    const user = result.rows[0];

    const { id, role } = user;
    const jwtPayload = {
        userId: id,
        role,
    };


    const { password, ...newData } = user;
    return { data: user };
};


export const AuthServices = {
    createUserIntoDB,
    LoginUserIntoDB,
};
