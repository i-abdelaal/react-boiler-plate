import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
