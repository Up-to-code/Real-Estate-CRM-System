# Real Estate CRM System

A modern, responsive real estate CRM system built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Recent Improvements - Enhanced Sidebar

The sidebar has been significantly improved with the following new features:

### ✨ New Features

1. **Responsive Mobile Design**
   - Mobile-first approach with collapsible sidebar
   - Touch-friendly navigation
   - Overlay backdrop for mobile menu
   - Smooth transitions and animations

2. **User Profile Integration**
   - User avatar and profile information
   - Dropdown menu with profile actions
   - Quick access to user settings and logout

3. **Quick Actions Section**
   - Grid of frequently used actions
   - Color-coded icons for better visual hierarchy
   - Hover effects and animations
   - Direct links to common tasks

4. **Enhanced Navigation**
   - Collapsible menu groups with smooth animations
   - Better visual hierarchy with descriptions
   - Improved tooltips with detailed information
   - Badge support for notifications and status

5. **Improved Accessibility**
   - ARIA labels and controls
   - Keyboard navigation support
   - Screen reader friendly
   - Focus management

6. **Better Visual Design**
   - Gradient backgrounds and shadows
   - Smooth animations and transitions
   - Loading skeletons for better UX
   - Consistent spacing and typography

### 🎨 Design Improvements

- **Modern UI**: Clean, professional design with subtle gradients
- **RTL Support**: Full right-to-left language support for Arabic
- **Dark Mode**: Seamless dark/light theme switching
- **Animations**: Smooth transitions and micro-interactions
- **Icons**: Comprehensive icon set with consistent styling

### 📱 Mobile Experience

- **Responsive Layout**: Adapts to all screen sizes
- **Touch Optimized**: Large touch targets and gestures
- **Performance**: Optimized for mobile devices
- **Offline Ready**: Progressive web app features

### 🔧 Technical Features

- **TypeScript**: Full type safety
- **Next.js 14**: Latest features and optimizations
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Modern icon library
- **Framer Motion**: Smooth animations

## 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Main dashboard
│   │   └── layout.tsx            # Dashboard layout
│   └── layout.tsx                # Root layout
├── components/
│   ├── shared/
│   │   ├── sidebar.tsx           # Enhanced sidebar
│   │   ├── topbar.tsx            # Top navigation
│   │   └── ...
│   └── ui/                       # UI components
├── lib/
│   └── utils.ts                  # Utility functions
└── types/
    └── index.ts                  # TypeScript types
```

## 🎯 Key Components

### Sidebar (`components/shared/sidebar.tsx`)
- **Responsive Design**: Mobile-first approach
- **User Profile**: Integrated user management
- **Quick Actions**: Fast access to common tasks
- **Navigation Groups**: Organized menu structure
- **Animations**: Smooth transitions and effects

### Layout (`app/(dashboard)/layout.tsx`)
- **Mobile State Management**: Handles sidebar visibility
- **Responsive Grid**: Adapts to screen size
- **Theme Support**: Dark/light mode integration

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Optimized bundle size
- **Lazy Loading**: Components loaded on demand

## 🎨 Customization

The sidebar is highly customizable through the `sidebarData` object:

```typescript
const sidebarData: SidebarData = {
  brand: { name: "Your Brand", shortName: "YB" },
  user: { name: "User Name", role: "Role" },
  quickActions: [...],
  groups: [...],
  footer: { copyright: "...", status: "...", version: "..." }
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

## Project links

[Source](https://github.com/Up-to-code/Real-Estate-CRM-System) · [Issues](https://github.com/Up-to-code/Real-Estate-CRM-System/issues) · [Public project directory](https://github.com/qentrah/.github/blob/main/profile/PROJECTS.md)
