import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid'; // Sử dụng alias để tránh nhầm lẫn với v4

require('dotenv').config();

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = async ({ phone, password, nameTK }) => {
    try {
        // Đảm bảo db được khởi tạo đúng cách và mô hình NguoiDung có sẵn
        if (!db || !db.KhachHang) {
            throw new Error('Cơ sở dữ liệu hoặc mô hình NguoiDung chưa được khởi tạo đúng cách');
        }

        const response = await db.KhachHang.findOrCreate({
            where: { phone },
            defaults: {
                phone,
                nameTK,
                password: hashPassword(password),
                id: uuidv4(),
            },
        });

        const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '2d' });

        return {
            err: token ? 0 : 2,
            msg: token ? 'Đăng ký thành công!' : 'Số điện thoại đã được sử dụng!',
            token: token || null,
        };

    } catch (error) {
        throw error; // Truyền lỗi đến người gọi
    }
};
export const loginService = async ({ phone, password}) => {
    try {

        const response = await db.KhachHang.findOne({
            where: { phone },
            raw: true
        });
        const isCorrectPassword = response && bcrypt.compareSync(password,response.password)
        const token = isCorrectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
        return {
            err: token ? 0 : 2,
            msg: token ? 'Đăng Nhập Thành công' : response ? 'Mật Khẩu Bạn đã sai ' : 'Số điện thoại của bạn không được đăng ký !',
            token: token || null,
        };

    } catch (error) {
        throw error; // Truyền lỗi đến người gọi
    }
};
