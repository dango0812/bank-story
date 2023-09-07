// header
import Header from 'src/layouts/nav/header';

type Props = {
    children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}