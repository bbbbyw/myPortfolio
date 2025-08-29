# EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

### 2. Add Email Service
- Go to "Email Services" in your dashboard
- Click "Add New Service"
- Choose "Gmail" (or your preferred email provider)
- Connect your email account

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```html
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

### 4. Get Your IDs
After creating the service and template, you'll get:
- **Service ID**: Something like `service_abc123`
- **Template ID**: Something like `template_xyz789`
- **Public Key**: Something like `user_def456`

### 5. Update the Code
Replace these placeholders in `src/components/Contact.tsx`:

```typescript
'YOUR_SERVICE_ID'    // Replace with your actual Service ID
'YOUR_TEMPLATE_ID'   // Replace with your actual Template ID  
'YOUR_PUBLIC_KEY'    // Replace with your actual Public Key
```

## ✅ That's It!
Your contact form will now send real emails to your inbox!

## 📧 Free Tier Limits
- 200 emails per month (free)
- Perfect for portfolio websites

## 🔧 Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected 