import { themeConfig } from '@/configs/theme.config';
import LoginContent from '../components/login.content';
import LoginForm from '../components/login.form';

export default function LoginContainer() {
  const theme = 'dark';
  return (
    <div className={`grid lg:grid-cols-2 min-h-screen `}>
      <div className="hidden lg:block bg-transparent">
        <LoginContent />
      </div>
      <div className={`flex items-center justify-center p-6 bg-[${themeConfig[theme].background}]`}>
        <LoginForm />
      </div>
    </div>
  );
}
