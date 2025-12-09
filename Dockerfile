FROM node:22-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file khai báo dependency
COPY package*.json ./

# Cài đặt dependencies (chế độ production nếu cần)
RUN npm ci

# Copy toàn bộ source code
COPY . .

ENV NODE_ENV=production

# Build ứng dụng
RUN npm run build

# Expose cổng ứng dụng (tùy theo bạn dùng port nào, ở đây là Strapi mặc định)
EXPOSE 1337

# Chạy ứng dụng ở production mode
CMD ["npm", "run", "start"]