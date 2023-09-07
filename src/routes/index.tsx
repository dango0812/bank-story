// react-router-dom
import { useRoutes } from 'react-router-dom';
// layouts
import Layout from 'src/layouts';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: (
                <Layout>
                    Home
                </Layout>
            ),
        },
    ]);
}
