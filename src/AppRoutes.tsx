
import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
    {/* <Route path="auth" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Route>
    {isAuth && (
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="example" element={<Example />} />
        <Route path="settings/*">
          <Route index element={<Settings />} />
          <Route path="example" element={<Example />} />
        </Route>
      </Route>
    )}
    <Route path="*" /> */}
  </Routes>
  );
}
