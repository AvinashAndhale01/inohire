# Backend + Admin Dashboard Setup Guide

## ✅ Complete Implementation

Your Next.js app now has a **full backend + admin dashboard** with:
- MongoDB Atlas integration
- JWT authentication
- Admin login/signup
- Protected admin dashboard
- Form submission API
- Ant Design UI

---

## 📦 Step 1: Install Dependencies

```bash
npm install
```

---

## 🔐 Step 2: Configure Environment Variables

Edit `.env.local` and add your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/inohire?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Important:** Replace `MONGODB_URI` with your actual MongoDB Atlas connection string.

---

## 🚀 Step 3: Start Development Server

```bash
npm run dev
```

---

## 👤 Step 4: Create First Admin User

### Option 1: Using API (Recommended)

Use Postman or curl to create the first admin:

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@inohire.com",
    "password": "SecurePassword123!",
    "name": "Admin User"
  }'
```

### Option 2: Create Signup Page (Temporary)

Create `src/app/admin/signup/page.js` (delete after creating admin):

```javascript
'use client';
import { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';

export default function AdminSignup() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.success) {
        message.success('Admin created successfully!');
      } else {
        message.error(data.error);
      }
    } catch (error) {
      message.error('Error creating admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: 400 }}>
        <h1>Create Admin</h1>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Admin
          </Button>
        </Form>
      </Card>
    </div>
  );
}
```

Visit: `http://localhost:3000/admin/signup`

**⚠️ Delete this file after creating your admin account!**

---

## 🎯 Usage

### Public Routes (No Auth Required)
- **Homepage**: `http://localhost:3000`
- **Contact Form**: `http://localhost:3000/contact`
- All other public pages work normally

### Admin Routes (Auth Required)
- **Admin Login**: `http://localhost:3000/admin/login`
- **Admin Dashboard**: `http://localhost:3000/admin/dashboard`

### API Endpoints

#### Public APIs
- `POST /api/submissions` - Submit student/client form
- `POST /api/auth/login` - Admin login
- `POST /api/auth/signup` - Admin signup (disable in production)

#### Protected APIs (Requires JWT Token)
- `GET /api/admin/submissions` - Fetch all submissions

---

## 🗂️ File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.js          # Admin login
│   │   │   └── signup/route.js         # Admin signup
│   │   ├── submissions/route.js        # Form submission
│   │   └── admin/
│   │       └── submissions/route.js    # Protected: Get submissions
│   ├── admin/
│   │   ├── layout.js                   # Ant Design config
│   │   ├── login/page.js               # Login page
│   │   └── dashboard/page.js           # Dashboard with table
│   └── layout.js                       # Root layout
├── lib/
│   ├── mongodb.js                      # MongoDB connection
│   └── auth.js                         # JWT utilities
├── models/
│   ├── Admin.js                        # Admin schema
│   └── Submission.js                   # Submission schema
└── pages/
    └── Contact.jsx                     # Updated with API integration
```

---

## 🔒 Security Features

✅ **Password Hashing**: bcrypt with 12 rounds  
✅ **JWT Authentication**: 7-day expiry  
✅ **Protected Routes**: Middleware checks token  
✅ **Secure Cookies**: HttpOnly, Secure in production  
✅ **Input Validation**: Required fields checked  
✅ **Error Handling**: Proper error messages  

---

## 📊 Admin Dashboard Features

- **View all submissions** (student + client)
- **Filter by type** (student/client)
- **Sort by date**
- **Search functionality**
- **Responsive table**
- **Professional UI** with Ant Design
- **Logout functionality**

---

## 🧪 Testing

### Test Form Submission
1. Go to `http://localhost:3000/contact`
2. Fill out student or client form
3. Submit
4. Check MongoDB Atlas - data should be saved

### Test Admin Login
1. Go to `http://localhost:3000/admin/login`
2. Enter admin credentials
3. Should redirect to dashboard
4. View submitted forms in table

---

## 🚀 Production Deployment

### Before deploying:

1. **Disable signup route** (or add additional protection)
2. **Set strong JWT_SECRET** in production env
3. **Enable HTTPS** for secure cookies
4. **Add rate limiting** for login attempts
5. **Set up MongoDB Atlas IP whitelist**
6. **Enable CORS** if needed

### Environment Variables (Vercel/Production)
```
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

---

## 🎉 You're All Set!

Your recruitment app now has:
- ✅ Working contact forms (student + client)
- ✅ MongoDB data storage
- ✅ Secure admin authentication
- ✅ Professional admin dashboard
- ✅ Production-ready backend

**Next Steps:**
1. Install dependencies: `npm install`
2. Add MongoDB URI to `.env.local`
3. Create first admin user
4. Test the system
5. Deploy to production!
