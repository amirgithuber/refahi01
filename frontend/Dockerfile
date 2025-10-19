# Port is set dynamically by Render's PORT environment variable
# مرحله اول: نصب وابستگی‌ها و بیلد پروژه
FROM node:18-alpine AS base

# نصب وابستگی‌ها
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# مرحله دوم: بیلد کردن اپلیکیشن
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# این دستور کلیدی است: پروژه را بیلد می‌کند
RUN npm run build

# RUN ls -la /app

# مرحله سوم: آماده‌سازی ایمیج نهایی برای اجرا
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# این کپی کردن فایل‌های بیلد شده بسیار مهم است
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000


# این دستور سرور تولید را اجرا می‌کند
CMD ["node", "server.js"]
