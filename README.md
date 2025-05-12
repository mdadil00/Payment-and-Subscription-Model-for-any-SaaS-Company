# Payment-Subscription-Model-for-any-SaaS-Company

A modular backend template for managing users, courses, and enrollments, designed for SaaS companies with payment/subscription models. Built with Node.js, TypeScript, Prisma, and MongoDB, this project supports GitHub OAuth and is easily extensible.

---

## Features

- **User Management:** Create, update, delete, and search users.
- **Course Management:** CRUD operations for courses.
- **Enrollment Management:** Manage course enrollments for users.
- **Authentication:** GitHub OAuth integration.
- **API-First:** Event-driven YAML-based API definitions.
- **Prisma ORM:** MongoDB support with Prisma schema.
- **Environment-based Configuration:** Secure `.env` usage.

---


## 🚀 Steps to run locally
### 1. **Clone the Repository**

```bash
git clone https://github.com/mdadil00/Payment-Subscription-Model-for-any-SaaS-Company.git
```
now open it in VS CODE

### 2. **Create a new .env File** 
-and copy the content from .env.example to it <br>
-update with your own mongoDB connection string and GITHUB auth credentials <br>
- MONGO_DB_URL= your-connection-string/any_name_for_your_database

### 3. **run with godspeed serve command**
```bash
godspeed serve
```
\dist folder and other packages/modules will get added into project

project should start in terminal with a live localhost link (it should appear in terminal)
for any issue refer :- https://godspeed.systems/docs/







